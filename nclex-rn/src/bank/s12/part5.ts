import type { Item } from "@/engine/types";
import { CDC_TDV, DONG, GIGER, HALTER, HINKLE, MCEWEN, PANG, POTTER, TOWNSEND, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s12-41", {
      topic: "Feelings in a limb that was removed",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 66-year-old client had a left below-knee amputation 3 days ago. He tells the nurse, \"My left foot itches, but it isn't there. Am I losing my mind?\" Which response by the nurse is best?",
      rationale:
        "Feeling the missing part of a limb is common after amputation. The nerves that served the limb still send signals to the brain. The client needs to hear that the sensation is real and expected, not a sign of mental illness. Telling him the itch is not real dismisses his experience. Distraction alone skips the explanation he asked for. A mental health consult suggests something is wrong with his mind.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "\"Try to focus on something else when it happens.\"", why: "Distraction skips the explanation he asked for and leaves his fear in place." },
      { text: "\"The foot is gone, so the itch can't be real.\"", why: "The sensation is real. Denying it dismisses his experience." },
      { text: "\"Phantom feelings like that are common and real.\"", why: "This explains an expected sensation and eases his fear about his mind." },
      { text: "\"I will ask for a mental health consult for you.\"", why: "A consult implies mental illness when the sensation is an expected nerve response." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s12-42", {
      topic: "Suspected neglect of an older adult at home",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A home health nurse visits an 88-year-old client with dementia who lives with her son, her only caregiver. The client has a stage 3 sacral pressure injury, soiled clothing and dry mucous membranes. The kitchen holds little food. The son says he works long hours. Which actions should the nurse take? Select all that apply.",
      rationale:
        "A stage 3 pressure injury, soiled clothing, signs of dehydration and little food suggest neglect of a dependent adult. The nurse reports the concern to adult protective services. A report is based on reasonable suspicion, and the agency determines intent. Objective notes on the wound and the home support the report. Asking about the son's workload shows whether he is overwhelmed and needs help. Confronting him can raise risk to the client.",
      canada:
        "Canada has no national adult protective services. Adult protection laws, the agency that takes a report and any duty to report vary by province. Newfoundland and Labrador, for example, requires anyone to report to a social worker or police.",
      sources: [DONG,
        { body: "James K. Department of Justice Canada", work: "Legal Definitions of Elder Abuse and Neglect", year: 2009, url: "https://www.justice.gc.ca/eng/rp-pr/cj-jp/fv-vf/elder-aines/def/p211.html" },
        { body: "Government of Newfoundland and Labrador", work: "Newly Proclaimed Act Ensures Adults are Protected from Abuse or Neglect", year: 2014, url: "https://www.releases.gov.nl.ca/releases/2014/health/0630n07.aspx" },
      ],
    }),
    kind: "sata",
    options: [
      { text: "Confront the son about the neglect", why: "Confrontation can make the caregiver defensive and raise risk to the client." },
      { text: "Report the concern to adult protective services", why: "Suspected neglect of a dependent adult is reported so the agency can investigate." },
      { text: "Wait for proof of intent before reporting", why: "A report is based on reasonable suspicion. The agency determines intent." },
      { text: "Document the wound and the home conditions", why: "Objective notes on the injury and the setting support the report and care." },
      { text: "Ask the son about his caregiving load", why: "An overwhelmed caregiver may need respite and services to meet her needs." },
      { text: "Agree on a plan with the son instead of reporting", why: "A private plan does not replace a report of suspected neglect." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s12-43", {
      topic: "Anger aimed at the nurse after a major loss",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 23-year-old client with a new spinal cord injury shouts at the nurse that his lunch tray is late and cold. Yesterday he learned that he will not walk again. Which response by the nurse is most therapeutic?",
      rationale:
        "The client learned yesterday that he will not walk again. His anger about the tray is likely displaced grief about that loss. The nurse names the feeling and links it to the hard news without being defensive. This invites him to talk about what he is facing. Explaining who delivers trays defends the nurse. Leaving until he calms down withdraws support. A new tray solves the surface problem only.",
      sources: [HALTER, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "\"Lunch trays come from dietary, not from nursing.\"", why: "This defends the nurse and ignores the feeling behind the anger." },
      { text: "\"You seem angry. These have been hard days.\"", why: "Naming the feeling and the recent news invites him to talk about his loss." },
      { text: "\"I will come back when you have calmed down.\"", why: "Leaving withdraws support at a time when he is grieving a major loss." },
      { text: "\"I will get you a hot tray right away.\"", why: "A new tray fixes the surface complaint but misses the grief underneath." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s12-44", {
      topic: "Controlling behavior in a teen relationship",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 16-year-old student comes to the school nurse with a headache. The nurse notes finger-shaped bruises on both upper arms. The student says her boyfriend checks her phone every hour and gets angry if she talks to other boys. Her grades have not changed. Complete the sentence by dragging the options.",
      rationale:
        "Finger-shaped bruises on both upper arms suggest she was gripped hard. A partner who checks her phone every hour and reacts with anger shows controlling behavior. Together they point to teen dating violence. A headache alone does not suggest migraine as the main risk. The stem gives no fear of social settings to suggest social anxiety. Unchanged grades and a headache visit do not support the risk.",
      sources: [CDC_TDV, HALTER],
    }),
    kind: "dnd",
    scoring: "triad",
    template: "The student is at highest risk for {0} as evidenced by {1} and {2}.",
    targets: ["Condition", "Finding", "Finding"],
    tokens: [
      { text: "migraine headache", why: "One headache is not enough to point to migraine, and it is not the main risk." },
      { text: "a visit to the nurse for a headache", why: "The headache brought her in but does not show dating violence." },
      { text: "teen dating violence", why: "Grip bruises and a controlling partner point to dating violence." },
      { text: "social anxiety disorder", why: "The stem gives no fear of social settings." },
      { text: "a school record of unchanged grades", why: "Steady grades do not support any of the listed risks." },
      { text: "finger-shaped bruises on both arms", why: "Grip-pattern bruises suggest she was held forcefully." },
      { text: "a partner who checks her phone hourly", why: "Monitoring her phone and contacts is a sign of controlling behavior." },
    ],
    correct: [2, 5, 6],
  },
  {
    ...meta("rn-s12-45", {
      topic: "Loud mourning in the emergency department",
      cjmm: "action",
      process: "culture",
      difficulty: 3,
      stem: "A 60-year-old client dies in the emergency department after a car crash. Family members arrive and begin to wail loudly and pray aloud at the bedside. A visitor for another client complains about the noise. What should the nurse do?",
      rationale:
        "Open, loud expression of grief is a normal mourning practice in many cultures. The nurse supports it rather than trying to stop it. A private space lets the family grieve as their customs direct and protects other clients. Asking them to be quiet, calling security or explaining that they upset others treats their grief as a problem.",
      sources: [GIGER],
    }),
    kind: "mc",
    options: [
      { text: "Ask the family to grieve more quietly", why: "This treats a normal cultural expression of grief as a problem." },
      { text: "Call security to limit the number of family", why: "Security is not needed for grieving family members who pose no threat." },
      { text: "Explain that loud grieving upsets other clients", why: "This shames the family at the moment of their loss." },
      { text: "Offer the family a private space to grieve", why: "Privacy lets the family mourn in their own way and protects others." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s12-46", {
      topic: "Signs that crisis work is succeeding",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 38-year-old client began crisis counseling two weeks ago after her home was destroyed in a flood. At today's visit the nurse evaluates her progress. Which two findings show that crisis intervention has been effective? Select two.",
      rationale:
        "The goal of crisis intervention is a return to the level of function the client had before the crisis. Finding housing with a cousin shows active problem solving and use of support. Returning to her job shows she is resuming her usual roles. Being unable to decide, avoiding all talk of the flood, relying on the nurse for calls and feeling numb most of the day show the crisis is not resolved.",
      sources: [HALTER],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Still cannot decide where to live", why: "Being unable to make decisions shows the crisis is still in place." },
      { text: "Has moved in with a cousin for now", why: "Using a support person to solve the housing problem shows restored coping." },
      { text: "Avoids any talk about the flood", why: "Avoidance suggests the event is not yet processed." },
      { text: "Asks the nurse to make her calls", why: "Relying on the nurse for tasks shows dependence, not restored function." },
      { text: "Is back at her job three days a week", why: "Resuming her work role shows a return toward her prior function." },
      { text: "Feels numb for most of each day", why: "Ongoing numbness suggests the crisis is unresolved and needs review." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s12-47", {
      topic: "Body effects of long-term stress",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 47-year-old client has worked double shifts for a year while caring for a spouse with cancer. Last year her BP was 122/78 mmHg and her fasting glucose was 92 mg/dL (5.1 mmol/L). Which findings at today's visit suggest effects of chronic stress? Select all that apply.",
      rationale:
        "Chronic stress keeps cortisol and sympathetic activity high. Over time this raises BP from 122/78 to 148/94 mmHg and fasting glucose from 92 to 118 mg/dL. Cortisol also dampens immunity, which fits four colds in a year. Tension headaches most days are a common stress effect. A resting heart rate of 72/minute, a stable weight and a hemoglobin of 14.2 g/dL do not point to stress.",
      canada:
        "Canadian labs report glucose in mmol/L only, so the rise is from 5.1 to 6.5 mmol/L. Diabetes Canada calls a fasting glucose of 6.1 to 6.9 mmol/L impaired fasting glucose.",
      sources: [MCEWEN,
        { body: "Diabetes Canada Clinical Practice Guidelines Expert Committee, Punthakee Z, Goldenberg R, Katz P", work: "Definition, Classification and Diagnosis of Diabetes, Prediabetes and Metabolic Syndrome. Canadian Journal of Diabetes 42(Suppl 1)", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-3" },
      ],
    }),
    kind: "sata",
    options: [
      { text: "Resting heart rate 72/minute", why: "A resting heart rate of 72/minute is normal and does not suggest stress." },
      { text: "BP up to 148/94 mmHg", why: "Sustained sympathetic activity raises BP over time." },
      { text: "Weight stable over the year", why: "A stable weight does not point to a stress effect." },
      { text: "Four colds this year", why: "Long-term cortisol exposure dampens immune defense." },
      { text: "Fasting glucose up to 118 mg/dL (6.5 mmol/L)", why: "Cortisol raises blood glucose, so a rise from 92 mg/dL fits chronic stress." },
      { text: "Hemoglobin 14.2 g/dL (142 g/L)", why: "This hemoglobin is normal and does not reflect stress." },
      { text: "Tension headaches most days", why: "Frequent tension headaches are a common physical effect of stress." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s12-48", {
      topic: "Naming a therapeutic technique",
      cjmm: "analyze",
      process: "communication",
      difficulty: 2,
      stem: "A client who lost her job says, \"I feel like I've failed my family.\" The nurse replies, \"You feel you've let them down.\" Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The nurse mirrors the feeling the client expressed in slightly different words. This is reflecting feelings. It shows the nurse heard her and invites her to explore the feeling further. The reply offers no reassurance, does not correct a false belief and asks no question. It does not push the client to accept a view or change the subject.",
      sources: [POTTER, HALTER],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The nurse's reply is an example of {0}, which helps the client {1}.",
    blanks: [
      {
        options: [
          { text: "giving reassurance", why: "The reply does not tell the client things will be fine." },
          { text: "presenting reality", why: "Presenting reality corrects a false perception. The reply does not do this." },
          { text: "reflecting feelings", why: "The nurse mirrors the client's feeling back to her." },
          { text: "seeking clarification", why: "The reply is a statement, not a request to explain." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "accept the nurse's view", why: "Reflection returns the client's own feeling and imposes no view." },
          { text: "explore her own feelings", why: "Hearing her feeling reflected invites her to say more about it." },
          { text: "move on to a new topic", why: "Reflection keeps the focus on her feeling rather than changing the subject." },
          { text: "solve the problem at once", why: "Reflection opens discussion. It does not push for a quick solution." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s12-49", {
      topic: "Visual hallucinations with vision loss",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "An 83-year-old client with advanced macular degeneration says she sees small people in costumes standing in the corner of her room. She says, \"I know they aren't real, but they are so clear.\" She is fully oriented, hears no voices, manages her own medications and has no psychiatric history. How should the nurse interpret these findings?",
      rationale:
        "Vivid visual images in a person with major vision loss who knows they are not real fit Charles Bonnet syndrome. The brain creates images when visual input falls. She has intact insight, hears no voices and has no psychiatric history, which argues against psychosis. She is oriented, so delirium is unlikely. She manages her own medications, which does not fit the decline of Lewy body dementia.",
      sources: [PANG],
    }),
    kind: "mc",
    options: [
      { text: "Early signs of Lewy body dementia", why: "Lewy body dementia brings cognitive decline. She manages her own medications." },
      { text: "Delirium from an acute illness", why: "She is fully oriented and gives no sign of an acute change in attention." },
      { text: "Charles Bonnet syndrome", why: "Clear images with intact insight in severe vision loss define this syndrome." },
      { text: "A late-onset psychotic disorder", why: "She knows the images are not real and hears no voices, which argues against psychosis." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s12-50", {
      topic: "Relapse prevention after residential treatment",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 4,
      stem: "A 34-year-old client is finishing a 28-day residential program for alcohol use disorder. The client reviews a relapse prevention plan with the nurse. Which statements by the client show understanding? Select all that apply.",
      rationale:
        "Relapse prevention rests on known triggers, ongoing support and a plan for a lapse. Going to a meeting soon after discharge keeps support in place. Listing high-risk people and places lets the client avoid or plan for them. Calling a sponsor after a slip stops a lapse from becoming a full relapse. Controlled drinking, hiding feelings and dropping meetings once strong are common paths back to heavy use.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "sata",
    options: [
      { text: "\"I can have one beer at my brother's party.\"", why: "Any drinking in early recovery raises the risk of full relapse." },
      { text: "\"I will go to a meeting the day I get home.\"", why: "Early contact with a support group keeps recovery support in place." },
      { text: "\"I will keep my feelings to myself for now.\"", why: "Bottled-up feelings are a common trigger. Sharing them protects recovery." },
      { text: "\"I made a list of people who make me drink.\"", why: "Knowing high-risk people and places helps the client avoid or plan for them." },
      { text: "\"I can stop meetings once I feel strong.\"", why: "Stopping support when feeling well is a common path to relapse." },
      { text: "\"If I slip, I will call my sponsor that day.\"", why: "Quick contact after a lapse keeps it from becoming a full relapse." },
    ],
    correct: [1, 3, 5],
  },
];
