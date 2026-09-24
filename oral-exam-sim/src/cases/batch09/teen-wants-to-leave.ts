// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const teenWantsToLeave: OralCase = {
  id: "teen-wants-to-leave",
  title: "A fifteen year old who wants to go home",
  blueprint: "ethics",
  alsoCovers: ["peds", "tox", "psych"],
  priorityTopic: "suicide-risk",
  keyFeatures: [{ topic: "suicide-risk", n: 3 }, { topic: "tox", n: 4 }, { topic: "abuse-domestic", n: 6 }],
  summary: "A 15 year old brought in by her mother at dawn refuses treatment and asks to leave.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital in Ontario when the following patient arrives at 05:00. " +
    "There is a pediatric unit but no child psychiatrist. The nearest is at a children's hospital through CritiCall Ontario. " +
    "A 15 year old girl is brought in by her mother, who found an empty acetaminophen bottle in her room.",
  card: {
    vitals: {
      temperature: "36.7°C",
      pulse: "96/minute",
      resp: "16/minute",
      bp: "112/68 mmHg",
      o2sat: "99% on room air",
      weight: "55 kg (121 lb)",
    },
    medications: "Not recorded",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "ingestion",
      label: "Ingestion history",
      result:
        "Her mother found an empty bottle of extra strength acetaminophen in her room at 04:00. She says she took the whole bottle at about 02:00. " +
        "The bottle held 100 tablets of 500 mg, and her mother thinks about 60 were left last week. That is up to 30 g. Weight 55 kg, so up to about 545 mg/kg. " +
        "She denies other pills or alcohol. She has vomited once.",
    },
    {
      id: "nurse",
      label: "Triage and the nurse's report",
      result:
        "Triage at 05:00: capillary glucose 5.4 mmol/L. CTAS 2. " +
        "The nurse says: 'She will not let me put in an IV. She says it is her body and she wants to go home. Mom is beside herself.'",
    },
    {
      id: "apap",
      label: "Acetaminophen level",
      result: "Drawn at 06:00, four hours after the reported ingestion time. Acetaminophen 1650 µmol/L. This is far above the treatment line.",
    },
    {
      id: "labs",
      label: "Other blood work",
      result:
        "ALT 28 U/L. INR 1.0. Creatinine 58 µmol/L. Glucose 5.6 mmol/L. Salicylate undetectable. Ethanol undetectable. Venous pH 7.39. Serum beta hCG negative.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus rhythm at 94. QRS 82 ms. QTc 418 ms.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Tearful and guarded. Healed linear scars on the left forearm. Two fingertip shaped bruises on the right upper arm, yellow green in colour. Abdomen soft. No jaundice.",
    },
    {
      id: "patient-words",
      label: "What she says about treatment",
      result:
        "She can repeat that the medicine protects the liver and that without it the liver can fail. " +
        "Then she says: 'It does not matter. I want to be dead anyway. And nothing will happen to my liver, I feel fine.'",
    },
    {
      id: "mental-state",
      label: "Mental state",
      result:
        "Low mood for four months. Poor sleep. Stopped playing hockey. Says she still wants to die and would try again. " +
        "No psychotic features. Oriented and not intoxicated.",
    },
    {
      id: "private-interview",
      label: "Private psychosocial interview",
      result:
        "Alone with you, she says her mother's boyfriend moved in six months ago. Last week he grabbed her arm and slapped her during an argument. " +
        "She has not told her mother. She begs you not to tell anyone because it will make things worse at home.",
    },
    {
      id: "mother",
      label: "Collateral from her mother",
      result:
        "Her mother has sole custody. The father lives in another province and has little contact. " +
        "She wants her daughter treated and says she will consent to anything. She says her boyfriend is on his way to pick them up.",
    },
    {
      id: "poison-centre",
      label: "Poison centre advice",
      result:
        "Start acetylcysteine now by the two bag regimen. Recheck acetaminophen, ALT and INR near the end of the infusion and continue if either is abnormal.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "At the bedside",
      text: "She is sitting on the stretcher in her coat with her arms crossed. Her mother is pleading with her. The nurse is waiting with an IV tray.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Medical assessment",
      prompt: "The nurse tells you she is refusing an IV. Before we get to the refusal, what is your medical assessment and treatment plan?",
      seconds: 75,
      modelAnswer: [
        "Confirm the product, tablet strength, number taken, time of ingestion and weight. Up to about 545 mg/kg is a potentially hepatotoxic overdose.",
        "Four hour level of 1650 µmol/L is well above the treatment line but below double the line, so standard dosing applies.",
        "The reported dose is massive, over 500 mg/kg. Ask the poison centre about higher dose acetylcysteine if repeat levels stay high.",
        "Acetylcysteine now, by a two bag regimen such as 200 mg/kg over 4 hours then 100 mg/kg over 16 hours.",
        "Check for co ingestants, ECG, ALT, INR, creatinine, glucose and pregnancy test.",
        "Call the poison centre.",
        "Treatment within 8 hours of ingestion almost eliminates liver injury. The clock is running.",
      ],
      rubric: ["tn-m1", "tn-h1"],
      next: "q-refuses",
    },
    {
      kind: "question",
      id: "q-refuses",
      phase: "The refusal",
      prompt: "She stands up and says: 'I am 15. You cannot make me. I am leaving.' What do you do?",
      seconds: 90,
      modelAnswer: [
        "Stay calm and stay with her. Assign constant observation.",
        "In Ontario there is no fixed age of consent. Capacity, not age, decides who consents.",
        "Tell her you want to understand her and explain what the treatment is and why the timing matters.",
        "She is at high risk of self harm and may not leave. If she tries, you can hold her under the Mental Health Act.",
        "Assess her capacity for this specific decision.",
        "Ask about intent, low mood, prior self harm and whether she would try again.",
        "See her alone for a psychosocial history: home, school, relationships, substances and safety.",
      ],
      rubric: ["tn-d1", "tn-a1", "tn-h2", "tn-h3"],
      choices: [
        {
          id: "c-calm-assess",
          label: "I sat with her, arranged constant observation, told her she could not leave while unsafe and began a capacity assessment for the treatment.",
          next: "q-capacity",
          quality: "strong",
          feedback:
            "This is the answer. Safety comes first with a suicidal adolescent. " +
            "Age alone does not settle consent in Ontario, so the next step is a decision specific capacity assessment.",
        },
        {
          id: "c-age",
          label: "I told her that at 15 she has no say and her mother will decide.",
          next: "s-age",
          quality: "partial",
          feedback:
            "The Health Care Consent Act sets no minimum age. A capable 15 year old decides for herself. " +
            "Telling her she has no say is legally wrong and damages trust. The examiner wanted a capacity assessment.",
        },
        {
          id: "c-let-go",
          label: "I respected her wish to leave because a mature minor can refuse treatment.",
          next: "s-let-go",
          quality: "unsafe",
          feedback:
            "She has just attempted suicide and says she would try again. She cannot safely leave. " +
            "Being a mature minor depends on capacity, which has not been assessed. The examiner wanted safety first, then capacity.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-age",
      phase: "At the bedside",
      text: "She shouts that nobody listens to her and heads for the door. Security stops her at the exit. You sit with her and start again.",
      next: "q-capacity",
    },
    {
      kind: "say",
      id: "s-let-go",
      phase: "At the exit",
      text:
        "The charge nurse and a security guard stop her at the ambulance bay. The charge nurse asks you to come back and assess her. You return and sit with her.",
      next: "q-capacity",
    },
    {
      kind: "question",
      id: "q-capacity",
      phase: "Capacity",
      prompt: "She can repeat what the medicine does. She then says she wants to be dead anyway and that nothing will happen to her liver. Is she capable of refusing acetylcysteine?",
      seconds: 90,
      modelAnswer: [
        "The test is understanding and appreciation under the Health Care Consent Act.",
        "She understands the information. She does not appreciate that the consequences apply to her.",
        "Her depression and suicidal intent are driving the refusal.",
        "She is incapable for this treatment decision.",
        "Her mother, who has custody, becomes the substitute decision maker. The abuse allegation is against her partner, not her.",
        "Tell her of the finding, that her mother will decide, and that she can apply to the Consent and Capacity Board.",
        "Confirm with her mother who has custody and who else lives in the home.",
      ],
      rubric: ["tn-a2", "tn-p1", "tn-h4"],
      choices: [
        {
          id: "c-incapable",
          label: "I found her incapable because depression stops her appreciating the risk to her own liver. Her mother consented as substitute decision maker and I told her of the finding and her right to challenge it.",
          next: "q-form1",
          quality: "strong",
          feedback:
            "Correct. Understanding is present but appreciation is not. A suicidal wish that denies the consequences shows an inability to appreciate. " +
            "Informing her of the finding and her options respects her even when you override her refusal.",
        },
        {
          id: "c-minor",
          label: "I did not assess capacity because she is a minor and I got consent from her mother.",
          next: "s-minor",
          quality: "partial",
          feedback:
            "The outcome is the same but the reasoning is wrong for Ontario. A capable minor's refusal would stand. " +
            "The examiner wanted the understanding and appreciation test applied and documented.",
        },
        {
          id: "c-capable",
          label: "I found her capable because she could explain what the medicine does, and respected her refusal.",
          next: "s-capable",
          quality: "unsafe",
          feedback:
            "Repeating facts is understanding, not appreciation. She denies that the risk applies to her because she wants to die. " +
            "Accepting the refusal would allow a preventable death. The examiner wanted her found incapable for this decision.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-minor",
      phase: "Later",
      text:
        "The pediatrician asks what capacity assessment was done, because the chart records only the mother's consent. You go back and document the understanding and appreciation test.",
      next: "q-form1",
    },
    {
      kind: "say",
      id: "s-capable",
      phase: "On the phone",
      text:
        "The poison centre specialist asks when acetylcysteine started. You explain the refusal. She points out that a patient who denies any risk to herself while suicidal does not appreciate the consequences. You reassess and find her incapable.",
      next: "q-form1",
    },
    {
      kind: "question",
      id: "q-form1",
      phase: "Keeping her safe",
      prompt: "She keeps trying to leave. What legal authority do you use, and what does it allow?",
      seconds: 75,
      modelAnswer: [
        "Mental Health Act Form 1 for psychiatric assessment. She has attempted bodily harm to herself and has an apparent mental disorder likely to result in serious bodily harm to herself.",
        "Form 1 allows detention in a psychiatric facility for up to 72 hours for assessment. If this hospital is not one, it authorizes transfer to one.",
        "Give her a Form 42 explaining the reason and her right to a lawyer.",
        "Form 1 does not authorize medical treatment. Consent for acetylcysteine comes from her mother as substitute decision maker.",
        "Use the least restraint needed. Verbal de escalation first.",
      ],
      rubric: ["tn-p2", "tn-m2"],
      choices: [
        {
          id: "c-form1-correct",
          label: "I completed a Form 1, gave her a Form 42, and relied on her mother's consent for the acetylcysteine.",
          next: "s-disclosure",
          quality: "strong",
          feedback:
            "Correct. You used the right authority for each purpose. " +
            "The Form 1 holds her for assessment. Treatment of the overdose rests on substitute consent.",
        },
        {
          id: "c-form1-treat",
          label: "I completed a Form 1 and told the nurse it allows us to give the acetylcysteine.",
          next: "s-form1-treat",
          quality: "partial",
          feedback:
            "The Form 1 is right, but it authorizes detention for assessment only. It does not authorize treatment. " +
            "The examiner wanted consent from the substitute decision maker and a Form 42 given to her.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-form1-treat",
      phase: "The nurse",
      text: "The nurse asks who consented to the acetylcysteine. You clarify that her mother consented as substitute decision maker and document it. You also give her a Form 42.",
      next: "s-disclosure",
    },
    {
      kind: "say",
      id: "s-disclosure",
      phase: "Seven in the morning",
      text:
        "The acetylcysteine is running. You speak with her alone. She tells you her mother's boyfriend slapped her and grabbed her arm last week. " +
        "You see two fingertip bruises on her upper arm. She says: 'Please do not tell anyone. He is on his way here right now.'",
      next: "q-report",
    },
    {
      kind: "question",
      id: "q-report",
      phase: "The disclosure",
      prompt: "What are your obligations and what do you tell her?",
      seconds: 90,
      modelAnswer: [
        "Under the Child, Youth and Family Services Act, anyone with reasonable grounds to suspect a child under 16 is in need of protection must report.",
        "Report directly and promptly to the children's aid society. The duty is personal and cannot be delegated.",
        "Tell her honestly you cannot keep this secret and why, and that the goal is her safety.",
        "Do not interview her in detail. Document her words and the bruises.",
        "The report overrides confidentiality. You are protected when you report in good faith.",
      ],
      rubric: ["tn-p3", "tn-c1"],
      choices: [
        {
          id: "c-report",
          label: "I told her kindly that I must report this to keep her safe, then called the children's aid society myself and documented her words and the bruises.",
          next: "s-boyfriend",
          quality: "strong",
          feedback:
            "That is the key action. The duty to report is mandatory for a child under 16 and cannot be passed to someone else. " +
            "Being honest with her about the report protects the relationship you still need.",
        },
        {
          id: "c-social-work",
          label: "I asked the social worker to make the report in the morning.",
          next: "s-social-work",
          quality: "partial",
          feedback:
            "Social work is a good support, but your duty to report is personal and must be done promptly. " +
            "The boyfriend is arriving now. The examiner wanted you to call the children's aid society yourself.",
        },
        {
          id: "c-confidential",
          label: "I agreed to keep it confidential because she asked me to and she is my patient.",
          next: "s-confidential",
          quality: "unsafe",
          feedback:
            "Confidentiality does not override the duty to report suspected abuse of a child under 16. " +
            "Failing to report is an offence and leaves her at risk. The examiner wanted a direct and prompt report.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-social-work",
      phase: "Minutes later",
      text: "The social worker tells you she will help, but that you heard the disclosure and must make the report yourself. You call the children's aid society together.",
      next: "s-boyfriend",
    },
    {
      kind: "say",
      id: "s-confidential",
      phase: "Minutes later",
      text:
        "The nurse who saw the bruises asks if you have called the children's aid society. She reminds you that she also has a duty to report. You make the call.",
      next: "s-boyfriend",
    },
    {
      kind: "say",
      id: "s-boyfriend",
      phase: "At the nursing station",
      text:
        "The mother's boyfriend arrives. He is loud and says: 'I am her stepfather. I am taking her home. She is fine.' He asks the clerk what she has told the doctor.",
      next: "q-safety",
    },
    {
      kind: "question",
      id: "q-safety",
      phase: "The boyfriend",
      prompt: "How do you handle him?",
      seconds: 60,
      modelAnswer: [
        "He has no legal authority. He is not her parent or substitute decision maker.",
        "Share no health information with him.",
        "She is held under a Form 1 and cannot leave.",
        "Stay calm, set limits, and involve security.",
        "Tell the children's aid society worker he is on site. Keep him away from her.",
      ],
      rubric: ["tn-d2", "tn-l1"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "What is your disposition plan and handover?",
      seconds: 75,
      modelAnswer: [
        "Admit to pediatrics for acetylcysteine with constant observation.",
        "Repeat acetaminophen level, ALT and INR near the end of the infusion and continue if abnormal.",
        "Child and adolescent psychiatry consult, in person or by telepsychiatry.",
        "Children's aid society worker involved in discharge planning and safety at home.",
        "Handover includes the Form 1 expiry time, the capacity finding, the substitute decision maker and the report.",
      ],
      rubric: ["tn-d3", "tn-c2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She is admitted to pediatrics with a sitter. A children's aid society worker meets her that afternoon. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "tn-m1",
      competency: "management",
      criterion: "management",
      text: "Starts acetylcysteine promptly by a two bag regimen such as 200 mg/kg over 4 hours then 100 mg/kg over 16 hours.",
      points: 2,
      teaching: "Acetylcysteine started within 8 hours of ingestion almost eliminates liver injury. Delay is the main cause of harm.",
      source: "apap",
    },
    {
      id: "tn-d1",
      competency: "disposition",
      criterion: "management",
      text: "Keeps her safe with constant observation and does not let her leave.",
      points: 3,
      critical: true,
      teaching: "An adolescent after a suicide attempt who wants to leave is at high risk. Safety comes before the consent discussion.",
      source: "mha",
    },
    {
      id: "tn-a1",
      competency: "assessment",
      criterion: "physical",
      text: "States that Ontario has no fixed age of consent and that capacity decides.",
      points: 2,
      teaching: "The Health Care Consent Act sets no minimum age. A capable minor gives or refuses consent for herself.",
      source: "hcca",
    },
    {
      id: "tn-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Applies the understanding and appreciation test and finds her incapable because she cannot appreciate the consequences.",
      points: 3,
      critical: true,
      teaching: "A patient who can recite facts but denies they apply to her lacks appreciation. Depression and suicidal intent can remove appreciation.",
      source: "cps",
    },
    {
      id: "tn-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Obtains consent from her mother as substitute decision maker and tells her of the finding and her right to apply to the Consent and Capacity Board.",
      points: 2,
      teaching: "The CPSO policy requires you to tell a patient found incapable that a substitute decision maker will decide and that she can apply to the Board for a review. The mother stays the substitute unless the society takes the patient into care, but check that the mother is acting in her daughter's best interests.",
      source: "cpso",
    },
    {
      id: "tn-p2",
      competency: "professionalism",
      criterion: "management",
      text: "Completes a Form 1 on the correct grounds and gives her a Form 42.",
      points: 2,
      teaching: "Form 1 allows up to 72 hours for psychiatric assessment. Form 42 tells her why and that she can speak to a lawyer.",
      source: "mha",
    },
    {
      id: "tn-m2",
      competency: "management",
      criterion: "management",
      text: "Knows that a Form 1 does not authorize medical treatment and uses the least restraint needed.",
      points: 1,
      teaching: "Detention and treatment need separate authority. Overdose treatment rests on consent from the patient or her substitute decision maker.",
      source: "mha",
    },
    {
      id: "tn-p3",
      competency: "professionalism",
      criterion: "management",
      text: "Reports suspected abuse of a child under 16 directly and promptly to the children's aid society.",
      points: 3,
      critical: true,
      teaching: "The duty to report is personal, ongoing and overrides confidentiality. It cannot be delegated to social work or nursing.",
      source: "cyfsa",
    },
    {
      id: "tn-c1",
      competency: "communication",
      criterion: "process",
      text: "Tells her honestly that the disclosure must be reported and why, without detailed interviewing.",
      points: 2,
      teaching: "Never promise secrecy you cannot keep. Leave the investigative interview to child protection workers.",
      source: "cyfsa",
    },
    {
      id: "tn-d2",
      competency: "disposition",
      criterion: "process",
      text: "Shares no information with the boyfriend and keeps him away from her with security support.",
      points: 1,
      teaching: "He is not her legal parent or her substitute decision maker. He has no right to her information and no authority to take her.",
      source: "hcca",
    },
    {
      id: "tn-l1",
      competency: "leadership",
      criterion: "process",
      text: "Informs the children's aid society worker that the alleged abuser is on site and coordinates with security.",
      points: 1,
      teaching: "Child protection workers need current safety information to plan. Tell them what is happening now.",
      source: "cyfsa",
    },
    {
      id: "tn-d3",
      competency: "disposition",
      criterion: "management",
      text: "Admits to pediatrics with constant observation, repeat liver tests and psychiatry consult.",
      points: 2,
      teaching: "Recheck the level, ALT and INR near the end of the infusion. Continue acetylcysteine if either is abnormal.",
      source: "apap",
    },
    {
      id: "tn-c2",
      competency: "communication",
      criterion: "process",
      text: "Hands over the Form 1 timing, the capacity finding, the substitute decision maker and the report.",
      points: 1,
      teaching: "Legal status gets lost at handover. State the time the Form 1 expires and who consents.",
      source: "cps",
    },
    {
      id: "tn-h1",
      competency: "assessment",
      criterion: "history",
      text: "Establishes the ingestion: product, tablet strength, number taken, time of ingestion, co ingestants and weight.",
      points: 2,
      teaching: "The dose in mg/kg and the time of ingestion decide whether the nomogram applies and how urgent acetylcysteine is. A staggered or unknown time changes the approach.",
      source: "apap",
    },
    {
      id: "tn-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about suicidal intent, low mood, prior self harm and whether she would try again.",
      points: 2,
      teaching: "Ongoing intent after an attempt is the strongest marker of short term risk. It also supplies the grounds for a Form 1.",
      source: "mha",
    },
    {
      id: "tn-h3",
      competency: "communication",
      criterion: "history",
      text: "Interviews her alone about home, school, relationships, substances and safety.",
      points: 2,
      teaching: "Adolescents disclose more when seen without a parent. A confidential psychosocial interview often reveals the reason for the attempt.",
      source: "cps",
    },
    {
      id: "tn-h4",
      competency: "assessment",
      criterion: "history",
      text: "Gets collateral from her mother on custody, who can consent for her and who else lives in the home.",
      points: 1,
      teaching: "Custody decides who is the substitute decision maker. Knowing who lives in the home is part of the safety assessment.",
      source: "hcca",
    },
  ],
  sources: [
    {
      id: "hcca",
      citation: "Ontario. Health Care Consent Act, 1996. SO 1996, c 2, Sched A.",
    },
    {
      id: "mha",
      citation: "Ontario. Mental Health Act. RSO 1990, c M.7.",
    },
    {
      id: "cyfsa",
      citation: "Ontario. Child, Youth and Family Services Act, 2017. SO 2017, c 14, Sched 1. Section 125, duty to report.",
    },
    {
      id: "cps",
      citation: "Coughlin KW. Medical decision making in paediatrics. Infancy to adolescence. Canadian Paediatric Society position statement. Paediatrics and Child Health. 2018.",
    },
    {
      id: "cpso",
      citation: "College of Physicians and Surgeons of Ontario. Consent to Treatment. Policy. Updated 2025.",
      url: "https://www.cpso.on.ca/physicians/policies-guidance/policies/consent-to-treatment",
    },
    {
      id: "apap",
      citation: "Chiew AL, et al. Updated guidelines for the management of paracetamol poisoning in Australia and New Zealand. Medical Journal of Australia. 2020.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
