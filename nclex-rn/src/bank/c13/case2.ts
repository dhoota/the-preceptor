import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c13-2";

const REF_OPENING = "The wafer opening is cut about 2 to 3 mm larger than the stoma so no skin is left exposed.";
const REF_EMPTY = "A pouch is emptied when it is one third to one half full so its weight does not pull the seal loose.";

/** Case 2. Surgical unit. Older man learning to live with a new colostomy. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Learning New Self-Care on the Surgical Unit",
  intro:
    "A 67-year-old man had a sigmoid colectomy with an end colostomy 4 days ago for a tumor of the sigmoid colon. He is on the surgical unit and is expected to go home in 2 days. He lives with his wife.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "End colostomy in the left lower abdomen.",
        "Type 2 diabetes. Takes metformin 1000 mg by mouth twice daily.",
        "Retired truck driver.",
        "His wife has arthritis in both hands.",
        "Alert and oriented. No history of depression.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: ["Regular diet as tolerated.", "Ostomy teaching each day with the client and his wife.", "Change the pouch as needed for leaks."].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Stoma, skin and coping cues",
        cjmm: "recognize",
        difficulty: 2,
        stem: "On day 4 the nurse changes the client's pouch while he watches. Click to highlight the findings in the note below that need follow-up.",
        rationale:
          "Red, moist, weeping skin at the stoma edge shows stool is reaching the skin. Two leaks overnight explain the damage and need a fix before discharge. Turning away and refusing to look show he has not begun to accept the stoma. A red, moist, slightly swollen stoma is expected in the first weeks. Soft brown stool and active bowel sounds show the colostomy is working.",
        sources: [SRC.wocn, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Stoma red and moist]]. [[Stoma slightly swollen, 35 mm across]]. [[Soft brown stool in the pouch]]. [[Skin at the stoma edge red, weeping and painful]]. [[Pouch leaked twice overnight]]. [[Bowel sounds active in all 4 quadrants]]. [[Turns his head away during the change]]. [[Says, \"I can't look at that thing\"]].",
      spans: [
        { text: "Stoma red and moist", why: "A red, moist stoma has a good blood supply." },
        { text: "Stoma slightly swollen, 35 mm across", why: "Swelling is expected early after surgery and shrinks over several weeks." },
        { text: "Soft brown stool in the pouch", why: "Stool output shows the colostomy is working." },
        { text: "Skin at the stoma edge red, weeping and painful", why: "Weeping skin shows stool is leaking onto it and causing irritant damage." },
        { text: "Pouch leaked twice overnight", why: "Repeated leaks damage the skin and must be solved before discharge." },
        { text: "Bowel sounds active in all 4 quadrants", why: "Active bowel sounds show the bowel has recovered from surgery." },
        { text: "Turns his head away during the change", why: "Avoiding the stoma is a cue that he has not begun to accept it." },
        { text: "Says, \"I can't look at that thing\"", why: "Refusing to look at the stoma is a cue of distress about his changed body." },
      ],
      correct: [3, 4, 6, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "BCC",
        topic: "Finding the cause of pouch leaks",
        cjmm: "analyze",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse reviews how the pouch has been applied and emptied since surgery. For each finding, specify whether it is likely contributing to the leaks or unlikely to be contributing.",
        rationale:
          "An opening much wider than the stoma leaves skin bare to stool. Lotion under the wafer stops it from sticking. A full pouch is heavy and pulls the seal loose. Water cleaning, a warm palm on the wafer and a change every 4 days all support a good seal.",
        refs: [REF_OPENING, REF_EMPTY],
        sources: [SRC.wocn, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Likely contributing", "Unlikely to be contributing"],
      rows: [
        { text: "Skin cleaned with warm water and patted dry", correct: [1], why: "Warm water cleans without leaving residue, so the wafer can stick." },
        { text: "Wafer opening cut 15 mm wider than the stoma", correct: [0], why: "The opening should be only 2 to 3 mm larger. A wide gap leaves skin bare to stool." },
        { text: "Pouch emptied only when it is full", correct: [0], why: "A full pouch is heavy. Its weight pulls the seal loose." },
        { text: "Wafer held in place with a warm palm for 1 minute", correct: [1], why: "Warmth and pressure help the adhesive bond to the skin." },
        { text: "Moisturizing lotion rubbed around the stoma first", correct: [0], why: "Lotion leaves an oily film that stops the wafer from sticking." },
        { text: "Pouch system changed every 4 days", correct: [1], why: "A change every few days is a usual wear time and does not cause leaks." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PSY",
        topic: "Main psychosocial concern with a new stoma",
        cjmm: "prioritize",
        process: "caring",
        difficulty: 3,
        stem: "Later the client says, \"My wife shouldn't have to see me like this. I don't want her near me.\" He has not touched the pouch. He slept 7 hours last night and asks when he can go home. Drag the words to fill in each blank.",
        rationale:
          "His words and his refusal to look at or touch the stoma show a negative view of his changed body. Body image distress is common after a stoma and blocks self-care learning, so it comes first. Sleeping 7 hours and asking about going home are positive signs. He voices no conflict about faith or meaning.",
        sources: [SRC.varcarolis, SRC.wocn],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "The priority psychosocial concern is {0}, as shown by {1}.",
      targets: ["Concern", "Evidence"],
      tokens: [
        { text: "disturbed body image", why: "He sees his body as something his wife should not see and avoids the stoma." },
        { text: "spiritual distress", why: "He voices no conflict about faith, meaning or purpose." },
        { text: "caregiver role strain", why: "His wife has not yet taken on a caregiving role. The distress is his own." },
        { text: "not touching the pouch", why: "Avoiding the pouch shows he has not accepted the stoma as part of his body." },
        { text: "asking when he can go home", why: "Interest in going home is a hopeful sign, not a sign of body image distress." },
        { text: "sleeping 7 hours last night", why: "Adequate sleep does not point to a psychosocial problem." },
      ],
      correct: [0, 3],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Referrals before going home with a colostomy",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse plans for the client's discharge in 2 days. Which referrals or arrangements should the nurse include in the plan? Select all that apply.",
        rationale:
          "A home health nurse checks the pouch seal and skin once he is home. The stoma shrinks over the first weeks, so a WOC nurse refits the system. A trained peer who lives with an ostomy can ease body image distress. He needs a reliable source of supplies. His wife has arthritis in both hands, and self-care keeps him independent.",
        sources: [SRC.wocn, SRC.brunner, { body: "Nurses Specialized in Wound, Ostomy and Continence Canada", work: "What is an NSWOC", year: 2026, url: "https://nswoc.ca/" }, { body: "Government of Ontario", work: "Assistive Devices Program: Enteral feeding and ostomy supplies", year: 2026, url: "https://www.ontario.ca/page/enteral-feeding-and-ostomy" }],
        canada:
          "In Canada the WOC nurse is a Nurse Specialized in Wound, Ostomy and Continence (NSWOC), certified by the Canadian Nurses Association. Public help with ostomy supply costs varies by province, such as the Ontario Assistive Devices Program grant.",
      }),
      kind: "sata",
      options: [
        { text: "Home health nursing visit in the first week", why: "Early home visits catch leaks and skin damage and reinforce teaching." },
        { text: "Follow-up with a WOC nurse for pouch refitting", why: "The stoma shrinks as swelling settles, so the wafer size changes." },
        { text: "Referral to a psychiatrist for depression", why: "He has no history of depression and sleeps well. His distress is an expected reaction that nursing support can address first." },
        { text: "Ask his wife to take over all pouch changes", why: "Her arthritis limits fine hand work, and self-care supports his own adjustment." },
        { text: "Offer a visit from a trained ostomy peer volunteer", why: "A peer who lives with a stoma can model acceptance and practical coping." },
        { text: "Delay teaching until he accepts the stoma", why: "He goes home in 2 days. Teaching continues while his feelings are supported." },
        { text: "Arrange a source of ostomy supplies for home", why: "Supplies must be in place before discharge so he can change the pouch." },
      ],
      correct: [0, 1, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "BCC",
        topic: "Steps of a colostomy pouch change",
        cjmm: "action",
        process: "teaching",
        difficulty: 2,
        stem: "On day 5 the client agrees to change the pouch himself while the nurse coaches him. Place the steps in the order the client should perform them.",
        rationale:
          "The old pouch comes off gently while the skin is pushed away to limit skin stripping. The skin is cleaned with warm water and dried so the wafer will stick. The stoma is measured, and the opening is cut just larger than the stoma. The wafer is pressed on and held with a warm hand. Lotion and alcohol both harm the seal or the skin.",
        refs: [REF_OPENING],
        sources: [SRC.wocn, SRC.brunner],
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["First", "Second", "Third", "Fourth", "Fifth"],
      tokens: [
        { text: "Measure the stoma with the guide", why: "Measuring comes after the skin is clean and before the wafer is cut." },
        { text: "Wipe the skin with an alcohol pad", why: "Alcohol stings damaged skin and dries it. Warm water is used instead." },
        { text: "Press the wafer on and hold it with a warm hand", why: "This is the last step. Warmth and pressure seal the adhesive." },
        { text: "Remove the old pouch, pushing the skin away", why: "Removal comes first. Pushing the skin away limits skin stripping." },
        { text: "Cut the wafer opening just larger than the stoma", why: "The opening is cut after measuring so it fits without exposing skin." },
        { text: "Rub lotion on the skin around the stoma", why: "Lotion leaves a film that stops the wafer from sticking." },
        { text: "Clean the skin with warm water and pat it dry", why: "Clean, dry skin comes before measuring so the wafer can stick." },
      ],
      correct: [3, 6, 0, 4, 2],
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Checking colostomy self-care learning",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "On the morning of discharge the nurse evaluates the client's learning about living with his colostomy. Which two statements by the client show understanding? Select two.",
        rationale:
          "Emptying the pouch when it is about one third full stops its weight from breaking the seal. A dark purple or black stoma means its blood supply is failing and needs prompt care. Lotion stops the wafer sticking. A larger opening exposes skin to stool. A lasting ban on fruits and vegetables is not needed. Cutting fluids risks dehydration.",
        refs: [REF_EMPTY],
        sources: [SRC.wocn, SRC.brunner],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I'll put lotion around the stoma to keep the skin soft.\"", why: "Lotion leaves an oily film that stops the wafer from sticking." },
        { text: "\"I'll empty the pouch once it's a third full.\"", why: "Emptying early stops the weight of stool from pulling the seal loose." },
        { text: "\"I'll cut the opening bigger so it doesn't rub.\"", why: "A larger opening leaves skin bare to stool and causes skin damage." },
        { text: "\"I'll give up all fruits and vegetables from now on.\"", why: "A lasting ban is not needed. Foods are added back one at a time as tolerated." },
        { text: "\"I'll call if the stoma turns dark purple or black.\"", why: "A dark stoma means poor blood flow and needs prompt care." },
        { text: "\"I'll drink less so my stool gets thicker.\"", why: "Cutting fluids risks dehydration and constipation. Fluid intake stays steady." },
      ],
      correct: [1, 4],
    },
  ],
};
