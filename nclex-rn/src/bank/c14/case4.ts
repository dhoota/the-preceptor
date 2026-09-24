import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c14-4";

/** Case 4. Vascular surgery unit. Older man from long-term care the night before a planned aortic repair. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "The Night Before a Planned Repair",
  intro:
    "A 78-year-old man is admitted to the vascular surgery unit from his long-term care facility at 1500. He is scheduled for an endovascular repair of a 6.2 cm abdominal aortic aneurysm tomorrow morning. He makes his own health care decisions.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Abdominal aortic aneurysm 6.2 cm across on CT 3 weeks ago.",
        "Hypertension. COPD. Quit smoking 4 years ago.",
        "Enlarged prostate. Gets up to void 3 or 4 times a night.",
        "Uses a walker. Fell at his facility 2 months ago with no injury.",
        "Allergy: penicillin, causes hives.",
        "Medications: metoprolol succinate 50 mg daily, amlodipine 5 mg daily, tamsulosin 0.4 mg at bedtime, tiotropium inhaler daily.",
        "His daughter is his health care agent if he cannot decide for himself.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Nothing by mouth after midnight.",
        "Type and crossmatch 4 units of packed red blood cells.",
        "Vital signs every 4 hours.",
        "Activity as tolerated with assistance.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1500"],
        rows: [
          ["Temperature", "36.7°C (98.1°F)"],
          ["Heart rate", "68/minute"],
          ["Respiratory rate", "18/minute"],
          ["BP", "136/78 mmHg"],
          ["SpO2", "94% on room air"],
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
        topic: "Fall risk cues on admission of an older adult",
        cjmm: "recognize",
        process: "nursing-process",
        difficulty: 2,
        stem: "The nurse completes the admission assessment at 1530. Click to highlight the findings in the note below that raise the client's risk for a fall on the unit.",
        rationale:
          "A walker shows impaired mobility. A fall in the last 2 months is a strong predictor of another fall. Getting up 3 or 4 times a night means walking in low light in an unfamiliar room. Tamsulosin can cause orthostatic hypotension, and he takes it at bedtime before those trips. Orientation, adequate senses, baseline wheezes and intact skin do not raise fall risk.",
        sources: [SRC.falls, SRC.potter],
      }),
      kind: "highlight",
      passage:
        "[[Uses a walker to move around]]. [[Oriented to person, place and time]]. [[Fell 2 months ago at his facility]]. [[A few expiratory wheezes, baseline per facility]]. [[Hearing and vision adequate with glasses]]. [[Gets up 3 or 4 times a night to void]]. [[Skin intact over the heels and sacrum]]. [[Takes tamsulosin at bedtime]].",
      spans: [
        { text: "Uses a walker to move around", why: "Needing a walker shows impaired gait and balance." },
        { text: "Oriented to person, place and time", why: "Full orientation does not add to fall risk." },
        { text: "Fell 2 months ago at his facility", why: "A recent fall is one of the strongest predictors of another fall." },
        { text: "A few expiratory wheezes, baseline per facility", why: "Stable baseline wheezes do not raise fall risk." },
        { text: "Hearing and vision adequate with glasses", why: "Corrected senses help him move safely." },
        { text: "Gets up 3 or 4 times a night to void", why: "Night trips to the bathroom in a new room raise fall risk." },
        { text: "Skin intact over the heels and sacrum", why: "Intact skin relates to pressure injury risk, not fall risk." },
        { text: "Takes tamsulosin at bedtime", why: "Tamsulosin can cause dizziness when he stands up at night." },
      ],
      correct: [0, 2, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Signs that an aortic aneurysm is leaking",
        cjmm: "analyze",
        difficulty: 4,
        stem: "At 2200 the client reports new, constant lower back pain that spreads to his left groin. He rates it 8 of 10. His skin is pale and cool. For each finding, specify whether it suggests the aneurysm is leaking or does not suggest a leak.",
        tabs: [
          {
            title: "Vital Signs",
            table: {
              head: ["Measure", "1500", "1900", "2200"],
              rows: [
                ["Heart rate (/minute)", "68", "72", "104"],
                ["BP (mmHg)", "136/78", "132/76", "102/64"],
                ["Respiratory rate (/minute)", "18", "18", "24"],
                ["SpO2 (%)", "94", "94", "93"],
              ],
            },
          },
        ],
        rationale:
          "New back or flank pain in a client with a large aneurysm suggests expansion or a leak. A heart rate rising from 72 to 104/minute and a BP falling from 132/76 to 102/64 mmHg point to blood loss. Pale, cool skin shows vasoconstriction from shock. A pulsatile mass and a bruit are expected with a known aneurysm. Pedal pulses of 2+ show distal flow for now.",
        sources: [SRC.aaa, SRC.aortic],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Suggests a leak", "Does not suggest a leak"],
      rows: [
        { text: "Pulsatile mass above the umbilicus", correct: [1], why: "A pulsatile mass is expected with a known 6.2 cm aneurysm." },
        { text: "New back pain spreading to the groin", correct: [0], why: "New back or groin pain can mean blood is tracking behind the abdomen." },
        { text: "Heart rate 104/minute, up from 72/minute", correct: [0], why: "A rising heart rate is an early response to blood loss." },
        { text: "Bruit heard over the abdominal mass", correct: [1], why: "Turbulent flow through the aneurysm causes a bruit. It does not mean a leak." },
        { text: "BP 102/64 mmHg, down from 132/76 mmHg", correct: [0], why: "A falling BP with a rising heart rate points to losing volume." },
        { text: "Pale, cool skin", correct: [0], why: "Vessels in the skin constrict to protect vital organs in shock." },
        { text: "Pedal pulses 2+ in both feet", correct: [1], why: "Normal distal pulses do not suggest a leak." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "First concern with a suspected aneurysm leak",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse considers what the findings at 2200 mean for care tonight. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Back pain spreading to the groin, with a rising heart rate and a falling BP, suggests a leak from a 6.2 cm aneurysm. A rupture can cause death quickly, so hemorrhage and shock come first. Pain matters but follows circulation. Kidney stones do not cause a falling BP from blood loss. The SpO2 of 93% is close to his baseline of 94%.",
        sources: [SRC.aaa, SRC.aortic],
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The nurse should first address {0} because the findings suggest {1}.",
      blanks: [
        {
          options: [
            { text: "acute pain", why: "Pain relief matters but comes after a threat to circulation." },
            { text: "hemorrhage and shock", why: "Blood loss from the aorta threatens life within a short time." },
            { text: "impaired gas exchange", why: "The SpO2 of 93% is close to his baseline of 94%." },
            { text: "risk for falls", why: "Fall risk remains, but it is not the most urgent threat now." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a kidney stone", why: "Stone pain can spread to the groin, but it does not cause this fall in BP." },
            { text: "a COPD flare", why: "The SpO2 is near baseline and the new problem is pain with falling BP." },
            { text: "a back muscle strain", why: "A strain does not raise the heart rate and lower the BP." },
            { text: "a leaking aneurysm", why: "New back pain with signs of blood loss fits a leak from the aneurysm." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Fluids and blood before emergency aortic repair",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 4,
        stem: "The surgeon plans emergency repair tonight. The client has one 20-gauge IV catheter in his left hand. Which actions should the nurse anticipate? Select all that apply.",
        rationale:
          "A leaking aneurysm needs repair now, and the nurse prepares for blood loss. A second large-bore IV allows fast transfusion. Crossmatched blood must be ready. Holding food and fluids now, before the midnight start time, prepares for anesthesia. Fluids are given only to a lower BP target, called permissive hypotension, to limit bleeding until the aorta is controlled. A 2 L bolus can raise the BP and worsen the leak.",
        sources: [SRC.aaa, SRC.aortic],
      }),
      kind: "sata",
      options: [
        { text: "Give a 2 L bolus of 0.9% sodium chloride", why: "A large bolus can raise the BP and worsen the bleeding before the aorta is controlled." },
        { text: "Insert a second large-bore IV catheter", why: "Two large-bore lines allow rapid transfusion." },
        { text: "Give IV metoprolol for the heart rate", why: "The fast heart rate is compensating for blood loss. Slowing it lowers cardiac output." },
        { text: "Confirm crossmatched blood is available", why: "Blood must be ready for transfusion during repair." },
        { text: "Palpate the abdomen to track mass size", why: "Pressing on a leaking aneurysm can worsen the bleeding and gives no useful data." },
        { text: "Hold all food and fluids by mouth now", why: "An empty stomach lowers aspiration risk during anesthesia. The midnight order is moved up." },
        { text: "Give fluids only to a prescribed lower BP target", why: "Permissive hypotension limits bleeding until the aorta is controlled." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Responding to fear of death before emergency surgery",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "As the nurse prepares him for transfer, the client says, \"I knew this thing would burst. Am I going to die tonight?\" His daughter is on her way. Which response by the nurse is best?",
        rationale:
          "The client faces a real threat and asks a direct question. Naming his fear and staying with him offers honest support. It does not promise an outcome. False reassurance closes the conversation and may not be true. Sending him to the surgeon leaves him alone with his fear now. A why question asks him to defend his feelings.",
        sources: [SRC.varcarolis],
      }),
      kind: "mc",
      options: [
        { text: "\"This is frightening. I will stay with you while we get ready.\"", why: "It acknowledges his fear honestly and offers presence without false promises." },
        { text: "\"Try not to think that way. I'm sure everything will turn out fine.\"", why: "This is false reassurance. The nurse cannot know the outcome." },
        { text: "\"You should ask the surgeon about your chances.\"", why: "This deflects his question and leaves him alone with his fear." },
        { text: "\"Why do you think it was going to burst?\"", why: "A why question puts him on the defensive and does not meet his need now." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Checking readiness for emergency surgery",
        cjmm: "evaluate",
        process: "nursing-process",
        difficulty: 3,
        stem: "Before the client leaves for the operating room, the nurse checks the preoperative checklist to evaluate whether preparation is complete. Which two findings show that preparation is not yet complete? Select two.",
        rationale:
          "Dentures can loosen and block the airway during intubation, so they come out before surgery. The client has a penicillin allergy, and an allergy band alerts every team member at a glance. The signed consent, identification band, second IV and ready blood show those steps are complete. The client makes his own decisions, so his signature is valid.",
        sources: [SRC.potter, SRC.brunner, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Consent for the Incapable Adult", year: 2025, url: "https://cnps.ca/article/consent-for-the-incapable-adult/" }],
        canada: "Canadian law calls the person who decides for an incapable adult a substitute decision maker. Who may act, and in what order, varies by province. A capable client signs his own consent.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Identification band on the right wrist", why: "The identification step is complete and needs no action." },
        { text: "Consent for repair signed by the client", why: "He makes his own decisions, so his signature is valid." },
        { text: "Upper denture still in place", why: "Dentures can dislodge and block the airway during intubation." },
        { text: "Crossmatched blood ready in the blood bank", why: "Blood is available, so this step is complete." },
        { text: "No allergy band on either wrist", why: "His penicillin allergy must be flagged so no one gives a drug he reacts to." },
        { text: "Second large-bore IV catheter in place", why: "IV access for rapid transfusion is complete." },
      ],
      correct: [2, 4],
    },
  ],
};
