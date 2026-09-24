import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c19-1";

/** Case 1. Emergency department at night. Disclosure of partner violence with a recent neck compression. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "A Facial Bruise Late at Night",
  intro:
    "A 32-year-old woman comes to the emergency department at 2230 with a swollen left cheek. She says she walked into a kitchen cabinet. Her partner drove her in and stays in the lobby. The nurse brings her alone to a private room for assessment.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Lives with her partner and their 4-year-old son.",
        "Emergency department visit 5 months ago for a left wrist sprain after a reported fall.",
        "Emergency department visit 2 months ago for a rib contusion after a reported fall down stairs.",
        "No chronic illness. Takes no daily medications.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "2240"],
        rows: [
          ["Temperature", "36.8°C (98.2°F)"],
          ["Heart rate", "104/minute"],
          ["Respiratory rate", "20/minute"],
          ["BP", "128/82 mmHg"],
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
        need: "PSY",
        topic: "Cues of partner abuse in an injured adult",
        cjmm: "recognize",
        process: "caring",
        difficulty: 2,
        stem: "The nurse documents the 2245 assessment below. Click to highlight the findings that suggest the client may be experiencing intimate partner violence.",
        rationale:
          "Injury to the face is a common site in partner violence. Bruises of different colors show injuries at different times. Two earlier visits for falls, then a third injury, form a pattern of repeated trauma. Asking whether the partner can hear and fearing his anger show fear of the partner. Normal pupils, orientation, tetanus status and no substance use do not point to abuse.",
        sources: [SRC.halter, SRC.who],
      }),
      kind: "highlight",
      passage:
        "[[Left cheek swollen with a purple bruise]]. [[Yellow and green bruises on both upper arms]]. [[Pupils equal and reactive]]. [[Asks twice whether her partner can hear the conversation]]. [[States that he gets upset if she takes too long]]. [[Third injury visit in 5 months]]. [[Tetanus immunization is current]]. [[Oriented to person, place and time]]. [[Denies alcohol or drug use]].",
      spans: [
        { text: "Left cheek swollen with a purple bruise", why: "The face is a frequent target in partner violence and needs follow-up." },
        { text: "Yellow and green bruises on both upper arms", why: "Older bruises on both arms suggest grabbing at an earlier time." },
        { text: "Pupils equal and reactive", why: "Normal pupils are an expected finding after a facial blow." },
        { text: "Asks twice whether her partner can hear the conversation", why: "Worry about being overheard suggests fear of the partner." },
        { text: "States that he gets upset if she takes too long", why: "Fear of the partner's reaction to her time away suggests control." },
        { text: "Third injury visit in 5 months", why: "Repeated visits for injury form a pattern that suggests abuse." },
        { text: "Tetanus immunization is current", why: "Current immunization is expected and does not suggest abuse." },
        { text: "Oriented to person, place and time", why: "Normal orientation does not suggest abuse." },
        { text: "Denies alcohol or drug use", why: "No substance use is reported, so this adds no cue here." },
      ],
      correct: [0, 1, 3, 4, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Red flags after a non-fatal neck compression",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse asks directly and in private whether anyone has hurt her. She says her partner hit her tonight. Eight days ago he squeezed her neck with both hands. For each finding, specify whether it raises concern for a hidden neck or brain injury.",
        tabs: [
          {
            title: "Nurses' Notes",
            text: [
              "2300. Client reports her partner squeezed her neck with both hands 8 days ago.",
              "She says she \"saw spots\" and wet herself during the squeezing.",
              "Voice hoarse since that night. Swallowing is painful.",
              "No visible neck bruising today.",
            ].join("\n"),
          },
        ],
        rationale:
          "Visual changes and loss of bladder control during neck compression point to reduced blood flow to the brain. Hoarseness and painful swallowing point to injury of the larynx or soft tissue. Any of these after strangulation calls for imaging of the neck vessels. Arterial injury can present late, so 8 days does not remove the concern. Absent bruising does not rule out injury. A heart rate of 104/minute and an SpO2 of 98% are not markers of neck injury.",
        sources: [SRC.strangle, SRC.glass],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Raises concern", "Does not raise concern"],
      rows: [
        { text: "Saw spots while her neck was squeezed", correct: [0], why: "Visual changes during compression suggest the brain lacked oxygen." },
        { text: "Wet herself during the squeezing", correct: [0], why: "Incontinence during compression suggests an anoxic brain injury." },
        { text: "Hoarse voice since that night", correct: [0], why: "A changed voice can mean laryngeal injury or swelling." },
        { text: "Painful swallowing", correct: [0], why: "Painful swallowing can mean soft tissue injury in the neck." },
        { text: "Heart rate 104/minute", correct: [1], why: "A fast pulse fits pain and fear and is not a neck injury marker." },
        { text: "SpO2 98% on room air", correct: [1], why: "Normal oxygen saturation does not point to neck or brain injury." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PSY",
        topic: "Lethality risk in partner violence",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The client says she wants to go home tonight because her son is with a neighbor. She adds that her partner told her last week he would kill her if she ever left. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Prior strangulation by a partner is one of the strongest warning signs of later homicide. A threat to kill if she leaves adds to that danger. The most urgent problem is a lethal assault, which needs a danger assessment and safety plan. A wrist sprain 5 months ago shows a pattern but is not the strongest marker. A heart rate of 104/minute reflects stress. Nothing in the case suggests substance use or self-neglect.",
        sources: [SRC.glass, SRC.danger],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The client is at highest risk for {0} as evidenced by {1}.",
      blanks: [
        {
          options: [
            { text: "a lethal assault by her partner", why: "Past strangulation and a threat to kill raise the risk of homicide." },
            { text: "substance use disorder", why: "She denies alcohol and drug use, and nothing suggests misuse." },
            { text: "self-neglect at home", why: "She lives with her son and nothing suggests she fails to meet her own needs." },
            { text: "a panic attack tonight", why: "She is fearful, but a panic attack is less dangerous than a lethal assault." },
          ],
          correct: 0,
        },
        {
          options: [
            { text: "her heart rate of 104/minute", why: "A fast pulse fits stress and pain. It does not predict lethal violence." },
            { text: "the neck squeezing 8 days ago", why: "Strangulation is a strong predictor of later homicide by a partner." },
            { text: "her wrist sprain 5 months ago", why: "An old sprain is part of the pattern but carries less risk than strangulation." },
            { text: "her hoarse voice tonight", why: "Hoarseness points to neck injury, not to the risk of another attack." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Care plan after a disclosure of partner abuse",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The client agrees to stay for a neck scan. She has not decided whether to go home afterward. Which actions should the nurse include in the plan of care? Select all that apply.",
        rationale:
          "Care after disclosure is centered on the client and her choices. Her own words in quotes and a body diagram make a clear record. Photos need her consent. An advocate can help with a safety plan and shelter options. Telling her to leave tonight takes the decision from her, and leaving can be the most dangerous time. Checking the story with the partner or updating him breaks confidentiality and can raise her danger.",
        sources: [SRC.who, SRC.danger, SRC.halter, { body: "Public Health Agency of Canada", work: "Provincial and Territorial Child Protection Legislation and Policy 2018", year: 2019, url: "https://www.canada.ca/en/public-health/services/publications/health-risks-safety/provincial-territorial-child-protection-legislation-policy-2018.html" }],
        canada: "In Canada, a child who is exposed to partner violence at home can be a child in need of protection. Whether that exposure must be reported to child protection services varies by province.",
      }),
      kind: "sata",
      options: [
        { text: "Tell her she must leave him tonight", why: "The decision is hers. Separation can be a time of high danger, so pressure can harm." },
        { text: "Quote her statements in the record", why: "Her own words give an accurate record that may later support her." },
        { text: "Ask the partner to confirm the history", why: "Asking the partner breaks confidentiality and can put her at greater risk." },
        { text: "Mark the injuries on a body diagram", why: "A diagram records the site and size of each injury clearly." },
        { text: "Photograph injuries with her consent", why: "Photos with consent add objective evidence of the injuries." },
        { text: "Give the partner an update in the lobby", why: "Sharing information with the partner breaks her confidentiality." },
        { text: "Offer to contact a violence advocate", why: "An advocate supports safety planning and shelter options." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Protecting a client from a partner in the department",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "At 2330 the partner comes to the nurses' station. He demands to know which room she is in and when she will be done. Which action should the nurse take?",
        rationale:
          "The client has disclosed violence and a threat to kill. Her presence and location stay confidential. The nurse gives no information and calls security to protect her and staff. Taking him to her room exposes her to danger. Saying she is in a scan or will leave soon discloses her care and tells him when to find her.",
        sources: [SRC.who, SRC.halter],
      }),
      kind: "mc",
      options: [
        { text: "Walk him to her room with a guard nearby", why: "Bringing him to her exposes her to the person she fears." },
        { text: "Say she is having a scan and will return soon", why: "This discloses her care and tells him when she will be free." },
        { text: "Share no details and call security", why: "Giving no details keeps her location safe while security responds." },
        { text: "Ask him to wait in the lobby until discharge", why: "This tells him when she will leave and where to meet her." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "MOC",
        topic: "Documenting a disclosure of partner abuse",
        cjmm: "evaluate",
        process: "communication",
        difficulty: 3,
        stem: "The nurse reviews the entries a newly hired nurse wrote in the client's record before the scan. Which two entries need correction? Select two.",
        rationale:
          "The record should be objective and use the client's own words. The word alleges suggests doubt about her account and can weaken it later. Calling her upset an overreaction is a judgment, not a finding. A direct quote, measured injuries, consent for photos and the advocate referral are all objective and correct.",
        sources: [SRC.who, SRC.halter],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"Client states, 'He squeezed my neck with both hands.'\"", why: "A direct quote records her account in her own words." },
        { text: "\"Client alleges her partner hit her tonight.\"", why: "The word alleges implies doubt. Her statement should be quoted instead." },
        { text: "\"Bruise 4 cm by 3 cm on the left cheek.\"", why: "A measured description of the injury is objective." },
        { text: "\"Client overreacting to a family argument.\"", why: "This is a personal judgment, not an objective finding." },
        { text: "\"Photographs taken with verbal consent.\"", why: "Recording consent for photos is accurate and complete." },
        { text: "\"Advocate contact number given and accepted.\"", why: "Recording the referral shows the support that was offered." },
      ],
      correct: [1, 3],
    },
  ],
};
