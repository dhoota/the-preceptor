import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c11-5";

/** Case 5. Community mental health home visit, then inpatient care. Young man hearing voices. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "Home Visit After a Call From Mom",
  intro:
    "A community mental health nurse makes a home visit at 1030 to a 24-year-old man with schizophrenia. He lives with his mother in an apartment. She called the clinic yesterday because he stays awake at night talking to someone she cannot see.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Schizophrenia diagnosed at age 20. Two earlier hospital admissions.",
        "Haloperidol 5 mg by mouth twice daily. Mother says he stopped it 3 weeks ago.",
        "Has taken oral risperidone in the past with no allergic reaction.",
        "Uses cannabis on weekends.",
        "Ongoing dispute with the man in the next apartment about noise.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "SIPC",
        topic: "Cues of danger to others during psychosis",
        cjmm: "recognize",
        difficulty: 3,
        stem: "The nurse talks with the young man in the living room while his mother waits nearby. The nurse's visit note is below. Click to highlight the findings that suggest a risk of violence toward others.",
        rationale:
          "Voices that order him to punish an identified neighbor are command hallucinations with a target. A kitchen knife in his jacket gives him the means. Clenched fists and pacing when he speaks of the neighbor show rising agitation. Stopping haloperidol 3 weeks ago removed the treatment that controls the voices. Clean clothes, orientation, a flat voice and his denial of self-harm thoughts do not point to violence.",
        sources: [SRC.halter],
      }),
      kind: "highlight",
      passage:
        "[[Wears a clean shirt and jeans]]. [[Says the voices order him to punish the man next door]]. [[Knows the date and where he is]]. [[Keeps a kitchen knife in his jacket pocket]]. [[Speaks in a flat, quiet voice]]. [[Clenches his fists and paces when he mentions the neighbor]]. [[Denies thoughts of harming himself]]. [[Has not taken haloperidol for 3 weeks]].",
      spans: [
        { text: "Wears a clean shirt and jeans", why: "Good grooming does not point to a risk of violence." },
        { text: "Says the voices order him to punish the man next door", why: "Command voices that identify a target raise the risk of violence." },
        { text: "Knows the date and where he is", why: "Orientation is expected in schizophrenia and is not a risk cue." },
        { text: "Keeps a kitchen knife in his jacket pocket", why: "A weapon on his person gives him the means to act." },
        { text: "Speaks in a flat, quiet voice", why: "Flat affect is a negative symptom, not a sign of violence." },
        { text: "Clenches his fists and paces when he mentions the neighbor", why: "Clenched fists and pacing show rising agitation toward the target." },
        { text: "Denies thoughts of harming himself", why: "Denial of self-harm does not suggest danger to others." },
        { text: "Has not taken haloperidol for 3 weeks", why: "Stopping treatment lets psychotic symptoms return and grow." },
      ],
      correct: [1, 3, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PPT",
        topic: "Drug effects versus illness symptoms",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The mother lists what she saw while he took haloperidol and what she has seen since he stopped. She says his legs were so restless he could not sit, his arms were stiff and he shuffled, and once his neck twisted to one side. Now he hears voices, thinks the neighbor spies on him and has no interest in friends. For each finding, specify whether it is an adverse effect of haloperidol or a symptom of schizophrenia.",
        rationale:
          "Restlessness that stops him sitting is akathisia. Stiff arms with a shuffling walk are drug-induced parkinsonism. A sudden twisting of the neck is an acute dystonic reaction. All three are extrapyramidal effects of haloperidol. Hearing voices and believing the neighbor spies on him are positive symptoms. Loss of interest in friends is a negative symptom.",
        sources: [SRC.halter],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Adverse effect of haloperidol", "Symptom of schizophrenia"],
      rows: [
        { text: "Legs so restless he could not sit", correct: [0], why: "Inner restlessness with an urge to move is akathisia." },
        { text: "Hears voices others cannot hear", correct: [1], why: "Auditory hallucinations are a positive symptom." },
        { text: "Stiff arms and a shuffling walk", correct: [0], why: "Rigidity and a shuffling gait are drug-induced parkinsonism." },
        { text: "Believes the neighbor spies on him", correct: [1], why: "A persecutory delusion is a positive symptom." },
        { text: "Neck twisted to one side", correct: [0], why: "A sudden muscle spasm of the neck is an acute dystonic reaction." },
        { text: "No interest in seeing friends", correct: [1], why: "Social withdrawal is a negative symptom." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "SIPC",
        topic: "Ranking threats during a psychotic relapse",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The young man says he will \"do what the voices want\" tonight. He denies any wish to hurt himself. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Command voices that target the neighbor, a stated plan for tonight and a knife on his person point to violence toward the neighbor. He denies self-harm, so suicide is not the leading threat. He is clean and dressed, which argues against self-neglect. He has not taken haloperidol for 3 weeks, so a drug reaction is not present now.",
        sources: [SRC.halter],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The young man is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "a suicide attempt", why: "He denies thoughts of harming himself." },
            { text: "self-neglect", why: "He is clean and dressed, which argues against self-neglect." },
            { text: "violence toward others", why: "Command voices, an identified target and a weapon point to harm to the neighbor." },
            { text: "an adverse drug reaction", why: "He has not taken haloperidol for 3 weeks." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a flat, quiet voice", why: "Flat affect is a negative symptom and does not predict violence." },
            { text: "command voices about the neighbor", why: "Voices that order harm to an identified person raise the risk of violence." },
            { text: "orientation to date and place", why: "Orientation is expected and does not point to any risk." },
            { text: "weekend cannabis use", why: "Cannabis use matters, but it is not the direct evidence of this threat." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a clean shirt and jeans", why: "Good grooming argues against self-neglect and does not show risk." },
            { text: "no interest in friends", why: "Social withdrawal is a negative symptom and does not predict violence." },
            { text: "past stiffness on haloperidol", why: "A past adverse effect does not point to violence now." },
            { text: "a knife in his jacket", why: "Carrying a weapon gives him the means to act on the voices." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Duty to protect an identifiable person",
        cjmm: "generate",
        difficulty: 4,
        stem: "The nurse leaves the apartment with the mother and phones the clinic from the hallway. Which actions should the nurse include in the plan? Select all that apply.",
        rationale:
          "A specific threat against an identifiable person creates a duty to protect under many state laws. The nurse reports the threat at once to the primary health care provider, who follows state law and agency policy. An emergency psychiatric evaluation is arranged today. The chart records his exact words. The nurse does not promise secrecy, does not try to take the knife and does not delay care to a routine visit.",
        sources: [SRC.dutyWarn, SRC.halter, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A, s. 40(1)", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }],
        canada: "In Canada, rules on disclosing a threat vary by province. Ontario's Personal Health Information Protection Act permits disclosure when it is needed to eliminate or reduce a significant risk of serious bodily harm to a person or group.",
      }),
      kind: "sata",
      options: [
        { text: "Promise him his statements stay private", why: "Confidentiality does not cover a specific threat to an identifiable person." },
        { text: "Report the threat to the provider now", why: "The provider must know at once to act under state law and policy." },
        { text: "Take the knife from his jacket pocket", why: "Reaching for a weapon puts the nurse at risk of injury." },
        { text: "Chart his exact words about the neighbor", why: "Direct quotes give an accurate record of the threat." },
        { text: "Knock on the neighbor's door to warn him", why: "State law and policy set who warns and how. The nurse reports to the provider." },
        { text: "Book a routine visit next week", why: "A threat for tonight cannot wait a week." },
        { text: "Arrange an emergency psychiatric evaluation", why: "An urgent evaluation can start treatment and protect others today." },
      ],
      correct: [1, 3, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Site for a first long-acting antipsychotic injection",
        cjmm: "action",
        difficulty: 4,
        stem: "The young man is admitted to the inpatient unit. The primary health care provider prescribes paliperidone palmitate 234 mg IM today as the first of two starting doses. He has taken oral risperidone before with no reaction. Which site should the nurse use?",
        rationale:
          "Both starting doses of paliperidone palmitate go into the deltoid muscle. The deltoid gives the faster rise in blood level needed at the start. Monthly doses after the second starting dose may go into the deltoid or the gluteal muscle. The thigh is not a labeled site.",
        sources: [SRC.paliperidone, { body: "Janssen Inc.", work: "Invega Sustenna (paliperidone palmitate) Product Monograph", year: 2023, url: "https://www.jnjlabels.com/ca/content/labelling/INVEGA_SUSTENNA/invega_sustenna_cpm.pdf" }],
        canada: "The Canadian Invega Sustenna monograph states doses as paliperidone, so this first dose is written as 150 mg, followed by 100 mg on day 8. Both starting doses still go into the deltoid muscle.",
      }),
      kind: "mc",
      options: [
        { text: "Ventrogluteal muscle", why: "A gluteal site is only for monthly doses after the second starting dose." },
        { text: "Deltoid muscle", why: "Both starting doses are labeled for the deltoid to raise blood levels fast." },
        { text: "Vastus lateralis muscle", why: "The thigh is not a labeled site for this injection." },
        { text: "Dorsogluteal muscle", why: "A gluteal site is only for monthly doses after the second starting dose." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "MOC",
        topic: "Supervising delegated care in psychosis",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "On day 3 the nurse watches an assistive personnel care for the young man, who still hears voices at times. Which two actions by the assistive personnel require the nurse to intervene? Select two.",
        rationale:
          "Arguing that the voices are not real makes him defend his experience and harms trust. Whispering and laughing in his view can feed his belief that others plot against him. Short, clear sentences, a simple choice of drinks, a walk in the hall and reporting a missed meal are sound care. The nurse keeps responsibility for the care that is delegated.",
        sources: [SRC.delegation, SRC.halter, { body: "College of Nurses of Ontario", work: "Practice Guideline: Working With Unregulated Care Providers", year: 2025, url: "https://www.cno.org/globalassets/docs/prac/41014_workingucp.pdf" }],
        canada: "In Canada, assistive personnel are called unregulated care providers. Rules for teaching, assigning and supervising them come from each provincial nursing regulator and vary by province.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Speaks to him in short, clear sentences", why: "Simple, clear speech is easier to follow during psychosis." },
        { text: "Argues with him that the voices are not real", why: "Arguing about hallucinations harms trust and does not reduce them." },
        { text: "Offers him a choice of juice or milk", why: "A simple choice supports his sense of control." },
        { text: "Reports that he refused his lunch", why: "Reporting intake changes to the nurse is expected." },
        { text: "Whispers and laughs with a coworker near him", why: "Whispering in his view can feed persecutory beliefs." },
        { text: "Invites him for a walk in the hallway", why: "A calm walk offers safe contact and activity." },
      ],
      correct: [1, 4],
    },
  ],
};
