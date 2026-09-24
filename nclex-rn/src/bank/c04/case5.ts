import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c04-5";

/** Case 5. Home health. Older adult with a chronic lung condition after discharge. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "A Home Visit After a Hospital Stay",
  intro:
    "A 71-year-old man with chronic obstructive pulmonary disease went home 3 days ago after a hospital stay for a flare. A home health nurse makes the first visit at 1000. He lives alone in a one-story house and uses oxygen at 2 L/minute from a concentrator.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Chronic obstructive pulmonary disease for 12 years. Hypertension.",
        "Smokes 10 cigarettes a day, down from 20 a day before admission.",
        "Medications: tiotropium inhaler once daily, albuterol inhaler as needed, prednisone 40 mg by mouth daily for 2 more days, amlodipine 5 mg by mouth daily.",
        "Weight today 58 kg. Weight 6 months ago was 63 kg.",
        "His daughter visits on weekends.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1000"],
        rows: [
          ["Temperature", "36.7°C (98.1°F)"],
          ["Heart rate", "92/minute"],
          ["Respiratory rate", "22/minute"],
          ["BP", "138/82 mmHg"],
          ["SpO2", "91% on 2 L/minute by nasal cannula"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "SIPC",
        topic: "Home oxygen fire and fall hazards",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse walks through the house with the client and records the safety check below. Click to highlight the findings that require follow-up.",
        rationale:
          "Oxygen makes materials burn faster and hotter. Fresh butts beside the recliner show he still smokes indoors, where no smoking is safe with oxygen in use. Oil-based products such as petroleum jelly ignite easily. Oxygen equipment belongs at least five feet from heat sources, so a space heater 3 feet away is too close. Tubing across the floor is a trip hazard. The alarm, sign, grab bar and night light are protective.",
        sources: [SRC.oxygen, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Ashtray with fresh cigarette butts beside his recliner]]. [[Smoke alarm sounds when tested]]. [[Oxygen tubing runs across the kitchen floor]]. [[No Smoking sign posted on the front door]]. [[Petroleum jelly on the bedside table for dry lips]]. [[Grab bar installed beside the toilet]]. [[Concentrator sits 3 feet from a space heater]]. [[Night light in the hallway]].",
      spans: [
        { text: "Ashtray with fresh cigarette butts beside his recliner", why: "Smoking where oxygen is used is the leading cause of home oxygen fires." },
        { text: "Smoke alarm sounds when tested", why: "A working smoke alarm is a protective finding." },
        { text: "Oxygen tubing runs across the kitchen floor", why: "Loose tubing across a walkway is a trip and fall hazard." },
        { text: "No Smoking sign posted on the front door", why: "A posted sign is a recommended safety step." },
        { text: "Petroleum jelly on the bedside table for dry lips", why: "Oil-based products ignite easily in oxygen-rich air." },
        { text: "Grab bar installed beside the toilet", why: "A grab bar lowers fall risk in the bathroom." },
        { text: "Concentrator sits 3 feet from a space heater", why: "Oxygen equipment should be at least five feet from heat sources." },
        { text: "Night light in the hallway", why: "A night light lowers the risk of falls at night." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "HPM",
        topic: "Readiness to quit smoking",
        cjmm: "analyze",
        process: "teaching",
        difficulty: 3,
        stem: "The client says, \"I cut down to 10 cigarettes a day since my hospital stay. I have picked a quit date 2 weeks from now, and my daughter bought me nicotine patches.\" Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Preparation means a person plans to act within the next month and has taken small steps. He has cut down, set a date 2 weeks away and has patches ready. The nurse helps him build a concrete plan for that date. Raising awareness of harms fits precontemplation. Relapse prevention fits maintenance, which follows 6 months of sustained change.",
        sources: [SRC.stages, SRC.uspstf],
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The client is in the {0} stage of change, so the nurse should {1}.",
      blanks: [
        {
          options: [
            { text: "precontemplation", why: "In precontemplation a person has no intention to change soon." },
            { text: "contemplation", why: "In contemplation a person thinks about change but has not set a date or taken steps." },
            { text: "preparation", why: "He plans to quit within a month and has already cut down." },
            { text: "maintenance", why: "Maintenance follows at least 6 months without smoking." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "help him plan for his quit date", why: "Concrete planning supports a person in the preparation stage." },
            { text: "raise his awareness of smoking harms", why: "Awareness raising suits a person who is not yet thinking of change." },
            { text: "wait until he raises the subject", why: "Waiting misses the moment when he is ready to act." },
            { text: "focus on preventing a relapse", why: "Relapse prevention suits a person who has already quit." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Setting the first priority on a home visit",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse reviews the safety check, the history and the vital signs. Several problems need attention before the visit ends. Drag the options to complete the sentence.",
        rationale:
          "Smoking where oxygen is in use can start a fire that spreads fast in oxygen-rich air. That threat is immediate and life-threatening, so it comes first. The tubing on the floor is a fall risk to fix during the same visit. The weight loss from 63 kg to 58 kg over 6 months needs a nutrition plan but is not an immediate danger. His SpO2 of 91% needs no urgent change.",
        sources: [SRC.oxygen, SRC.gold],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "The nurse should first address {0} because it poses {1}.",
      targets: ["Problem", "Reason"],
      tokens: [
        { text: "tubing across the kitchen floor", why: "A trip hazard matters but is less urgent than a fire risk." },
        { text: "an immediate risk of fire and burns", why: "Oxygen-rich air lets a fire start easily and spread fast." },
        { text: "a weight loss of 5 kg", why: "Weight loss over 6 months needs a plan but is not an immediate threat." },
        { text: "smoking in the room with oxygen", why: "Smoking with oxygen in use is the leading cause of home oxygen fires." },
        { text: "a risk of tripping and falling", why: "A fall risk is real but less immediate than a fire risk." },
        { text: "a gradual loss of muscle mass", why: "Muscle loss develops slowly and is not an immediate threat." },
      ],
      correct: [3, 1],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Eating with breathlessness",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The client says he gets too breathless to finish a meal. The nurse plans care to address his weight loss. Which measures should the nurse include in the plan? Select all that apply.",
        rationale:
          "Rest before meals and oxygen during meals lower breathlessness while eating. Five or six small meals avoid a full stomach pressing on the diaphragm. High-calorie, high-protein snacks restore weight and muscle. Large meals and fluids with meals cause early fullness. Limiting protein speeds muscle loss.",
        sources: [SRC.brunner, SRC.gold],
      }),
      kind: "sata",
      options: [
        { text: "Offer three large meals each day", why: "Large meals fill the stomach and push up on the diaphragm." },
        { text: "Rest for 30 minutes before meals", why: "Resting first saves energy for eating." },
        { text: "Keep the oxygen on while eating", why: "Oxygen during meals eases breathlessness from the effort of eating." },
        { text: "Drink most fluids with meals", why: "Fluids with meals cause early fullness. They are better taken between meals." },
        { text: "Plan five or six small meals a day", why: "Small meals are easier to finish and cause less fullness." },
        { text: "Limit protein to ease breathing", why: "Protein is needed to rebuild the muscle he has lost." },
        { text: "Choose high-calorie, high-protein snacks", why: "Energy-dense snacks help restore weight without large volumes." },
      ],
      correct: [1, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Advance care planning at home",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "Before the nurse leaves, the client says, \"If my lungs get worse, I do not want a breathing tube. My daughter does not know that.\" Which action should the nurse take?",
        rationale:
          "An adult with decision-making capacity may refuse treatment. Federal law requires home health agencies to give written information on advance directives. The nurse helps him record his wishes and encourages him to share them with his daughter and provider. The nurse does not disclose his wishes without his consent. Waiting for a crisis risks care he does not want.",
        sources: [SRC.psda, SRC.brunner, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Consent for the Incapable Adult", year: 2025, url: "https://cnps.ca/article/consent-for-the-incapable-adult/" }],
        canada: "The US federal advance directive law does not apply in Canada. Advance directives are governed by provincial and territorial law, and the document names vary by province.",
      }),
      kind: "mc",
      options: [
        { text: "Give him information on preparing an advance directive", why: "This supports his right to direct his own care and helps him record his wishes." },
        { text: "Tell his daughter about his wishes at her next visit", why: "Sharing his wishes without consent breaches his privacy. He decides who is told." },
        { text: "Explain that his daughter must agree with his decision", why: "A capable adult makes his own treatment decisions." },
        { text: "Suggest he wait until his lungs worsen to decide", why: "Decisions made in a crisis may not reflect his wishes." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Nicotine patch use",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "Two weeks later the client starts the nicotine patch on his quit day. The nurse evaluates his understanding of patch use. For each statement, specify whether it shows understanding or needs further teaching.",
        rationale:
          "A new patch goes on clean, dry, hairless skin every 24 hours at a new site. It may come off at bedtime if dreams are vivid. Used patches are folded sticky sides together because they still hold enough nicotine to poison a child or pet. Only one patch is worn at a time. The patch starts on the quit day, and smoking adds nicotine and a fire risk near oxygen.",
        refs: ["Apply one new patch every 24 hours to a different skin site."],
        sources: [SRC.patch, SRC.uspstf],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows understanding", "Needs further teaching"],
      rows: [
        { text: "\"I put a new patch on clean, dry, hairless skin each morning.\"", correct: [0], why: "A new patch every 24 hours on clean, dry, hairless skin matches the directions." },
        { text: "\"I put it on the same spot every day so I remember.\"", correct: [1], why: "Each new patch goes on a different skin site to limit irritation." },
        { text: "\"If I have vivid dreams, I can take it off at bedtime.\"", correct: [0], why: "The directions allow removal at bedtime for vivid dreams." },
        { text: "\"I can wear two patches on days with strong cravings.\"", correct: [1], why: "Only one patch is worn at a time to avoid nicotine overdose." },
        { text: "\"I fold used patches sticky sides together before I throw them out.\"", correct: [0], why: "Folding protects children and pets from the nicotine left in used patches." },
        { text: "\"A cigarette now and then is fine while I wear the patch.\"", correct: [1], why: "The patch starts on the quit day. Smoking adds nicotine and a fire risk with oxygen." },
      ],
    },
  ],
};
