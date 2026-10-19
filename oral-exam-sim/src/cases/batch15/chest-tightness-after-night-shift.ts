// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const chestTightnessAfterNightShift: OralCase = {
  id: "chest-tightness-after-night-shift",
  title: "Chest tightness after a night shift",
  blueprint: "psych",
  alsoCovers: ["comm", "ethics"],
  priorityTopic: "suicide-risk",
  keyFeatures: [
    { topic: "suicide-risk", n: 1 },
    { topic: "suicide-risk", n: 2 },
    { topic: "suicide-risk", n: 4 },
    { topic: "suicide-risk", n: 5 },
  ],
  summary: "A nurse comes in after a night shift with chest tightness and a racing heart. Her workup raises a different question.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A 44 year old woman walks in at 07:30, straight from a night shift, with chest tightness and a pounding heart that began in the parking lot.",
  card: {
    vitals: {
      temperature: "36.8°C oral",
      pulse: "104/minute",
      resp: "20/minute",
      bp: "138/86 mmHg",
      o2sat: "99% on room air",
      weight: "68 kg (150 lb)",
    },
    medications: "Sertraline 50 mg daily",
    allergies: "Codeine (vomiting)",
  },
  findings: [
    {
      id: "hpi",
      label: "History of the presenting illness",
      result:
        "At 07:00, walking to her car after a 12 hour night shift, she felt sudden chest tightness, a pounding heart, tingling fingers and a feeling she could not get enough air. It peaked within 10 minutes and is now easing. " +
        "This is her third episode in 2 weeks. No exertional pain, no fainting, no pleuritic pain, no leg swelling, no recent travel or surgery.",
    },
    {
      id: "mood",
      label: "Mood and recent events",
      result:
        "Her mother died 4 months ago after a long illness. The patient cared for her at home. Since then she sleeps 3 to 4 hours, has lost 5 kg, enjoys nothing and cries in her car before and after shifts. She feels guilty that she did not notice her mother's cancer sooner. " +
        "Her family physician diagnosed depression 10 days ago and started sertraline.",
    },
    {
      id: "si",
      label: "Thoughts of suicide, when asked directly",
      result:
        "For about 3 weeks she has thought her family would be better off without her and wished she would not wake up. Twice she has thought about her mother's leftover pills. " +
        "She has not counted, moved or researched them. No plan, no intent, no rehearsal, no note, no goodbye messages. 'I could never do that to my kids.' No past attempts or self harm. She feels hopeless some days, not every day.",
    },
    {
      id: "means",
      label: "Access to means",
      result:
        "A box in her kitchen cupboard holds her mother's hydromorphone 2 mg, about 60 tablets, and lorazepam 1 mg, about 30 tablets. She has not returned them to a pharmacy. There are no firearms in the home. At work she has access to controlled drugs.",
    },
    {
      id: "psych-history",
      label: "Past psychiatric history",
      result: "Postpartum depression 12 years ago, treated with sertraline and counselling, with full recovery. No mania, no psychosis, no psychiatric admissions.",
    },
    {
      id: "family-history",
      label: "Family history",
      result: "Her father died by suicide when she was 19. Her sister has anxiety and is well.",
    },
    {
      id: "substances",
      label: "Alcohol and drugs",
      result: "Two to three glasses of wine most nights since her mother died. Before that, one or two a week. No cannabis or other drugs. Breath alcohol is zero this morning.",
    },
    {
      id: "meds",
      label: "Medication details",
      result:
        "Sertraline 50 mg daily for 10 days. Since starting it she has felt jittery and restless with mild nausea. She wonders whether to stop it. No other medications. Codeine makes her vomit.",
    },
    {
      id: "social",
      label: "Social history and supports",
      result:
        "Married to a high school teacher. Two children aged 12 and 15. Close to her sister, who lives 10 minutes away. ICU nurse for 18 years, working four 12 hour nights this week. No money worries. Her daughter graduates in June and she wants to be there.",
    },
    {
      id: "collateral",
      label: "Her husband, with her permission",
      result:
        "He has seen her withdraw and drink more but did not know about the thoughts. He is shaken but supportive. He can stay home this week and will remove the pills today. No concerns about violence. At first he asks that she be admitted.",
    },
    {
      id: "mse",
      label: "Mental status examination",
      result:
        "Neatly dressed, tired, tearful at times. Good eye contact. Normal speech. Mood 'empty'. Affect constricted but reactive. Thought process linear. No delusions or hallucinations. Oriented. Good insight and judgment. Engages in planning.",
    },
    {
      id: "exam",
      label: "Physical examination",
      result:
        "Heart rate settles to 88/minute at rest. Heart sounds normal, no murmur. Chest clear. Calves soft and not tender. Thyroid not enlarged. No tremor. No marks of self harm on her forearms or wrists.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 102/minute. Normal axis. No ST or T wave change. QTc 438 ms.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "High sensitivity troponin I under 3 ng/L at 07:45 and 08:45. Hemoglobin 132 g/L. Sodium 138 mmol/L. Potassium 4.1 mmol/L. Glucose 5.6 mmol/L. TSH 1.8 mIU/L. Serum ethanol undetectable. Urine beta hCG negative.",
    },
    {
      id: "services",
      label: "Local services",
      result:
        "The hospital crisis nurse works 08:00 to 20:00 and can see her this morning. The urgent psychiatry clinic can see her within 72 hours. Psychiatry is on call by phone. Her family physician has a slot on Friday, 4 days from now.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "07:40",
      text: "She is on a monitor in a hallway stretcher, still in her scrubs. The ECG shows sinus tachycardia with no ischemic change. She apologizes for taking up a bed.",
      next: "q-approach",
    },
    {
      kind: "question",
      id: "q-approach",
      phase: "First assessment",
      prompt: "How do you approach her?",
      seconds: 80,
      modelAnswer: [
        "Exclude a medical cause first. ACS, PE, arrhythmia, thyroid disease, stimulants, alcohol withdrawal, early SSRI side effects.",
        "History of the episodes, cardiac and PE risk factors, ECG and troponin.",
        "Recurrent panic like episodes with a recent loss need a mood history.",
        "Ask about her mother's death, sleep, appetite, interest, guilt, alcohol.",
        "Ask directly about thoughts of suicide. Asking does not plant the idea.",
      ],
      rubric: ["ns-h1", "ns-h2", "ns-p1"],
      choices: [
        {
          id: "c-both",
          label: "I took a cardiac and PE history and sent troponins, then asked about her mood, the loss of her mother, her sleep and alcohol, and asked directly whether she had thought of ending her life.",
          next: "q-explore",
          quality: "strong",
          feedback:
            "Good. Medical causes come first, but recurrent panic like episodes after a bereavement are a cue to screen for depression and suicidal thinking. Asking directly is safe and is how hidden suicidality is found.",
        },
        {
          id: "c-cardiac-only",
          label: "I completed a cardiac workup. Both troponins were negative, so I diagnosed a panic attack and planned discharge with follow up with her family physician.",
          next: "s-cardiac-only",
          quality: "partial",
          feedback:
            "The medical workup was appropriate, but you stopped there. A panic diagnosis without a mood and suicide screen misses the main risk in this patient. Many people who die by suicide saw a physician in the weeks before.",
        },
        {
          id: "c-lorazepam",
          label: "I labelled it a panic attack, gave lorazepam 1 mg by mouth and planned to discharge her once she settled.",
          next: "s-lorazepam",
          quality: "unsafe",
          feedback:
            "Premature closure. You have not excluded a cardiac cause, and you have not asked about mood or suicide. A benzodiazepine on top of nightly alcohol, in a patient with sedatives and opioids at home, adds risk.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-cardiac-only",
      phase: "08:50",
      text: "As you write the discharge, the nurse tells you the patient was crying and said, 'Maybe it would be easier if I just did not wake up.' You go back to the bedside.",
      next: "q-explore",
    },
    {
      kind: "say",
      id: "s-lorazepam",
      phase: "08:30",
      text: "The nurse asks whether you want a second troponin before discharge. While she draws it, the patient tells her that her mother's pills are still in the kitchen. The nurse asks you to come back and talk with her.",
      next: "q-explore",
    },
    {
      kind: "question",
      id: "q-explore",
      phase: "Exploring the thoughts",
      prompt: "She tells you she has been thinking her family would be better off without her. How do you explore this?",
      seconds: 90,
      modelAnswer: [
        "Ask in plain words. Frequency, duration and how strong the thoughts are.",
        "Intent, plan, method, access to means, preparatory acts, rehearsal, notes.",
        "Past attempts or self harm.",
        "Hopelessness, guilt, insomnia, agitation, alcohol.",
        "Family history of suicide. Previous depression and its course.",
        "Protective factors. Children, partner, sister, future plans, help seeking.",
      ],
      rubric: ["ns-h3", "ns-h4", "ns-h5"],
      choices: [
        {
          id: "c-direct",
          label: "I asked how often the thoughts come, whether she has intent or a plan, which method she has thought of and whether she has access to it, any preparations or past attempts, her alcohol use, family history of suicide and what keeps her going.",
          next: "q-formulate",
          quality: "strong",
          feedback:
            "This is a complete suicide inquiry. You found passive ideation without intent or plan, but also her mother's opioids at home, rising alcohol use and a father who died by suicide. Those are the facts your risk formulation needs.",
        },
        {
          id: "c-leading",
          label: "I asked, 'You are not thinking of hurting yourself, are you?' She said no, so I moved on.",
          next: "s-leading",
          quality: "partial",
          feedback:
            "A leading question invites the answer no. Ask open, direct questions about thoughts, intent, plan and means. You missed the pills in her kitchen and her family history.",
        },
        {
          id: "c-avoid",
          label: "I did not ask about suicide in detail because I did not want to put the idea in her head. I suggested grief counselling.",
          next: "s-avoid",
          quality: "unsafe",
          feedback:
            "Asking about suicide does not increase risk. Avoiding the question leaves her alone with the thoughts and leaves you unable to judge risk. Direct questions are the standard of care.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-leading",
      phase: "A few minutes later",
      text: "The crisis nurse arrives and asks whether she has access to medications. The patient says her mother's hydromorphone and lorazepam are in the kitchen and that she has thought about them twice. You return and complete the inquiry.",
      next: "q-formulate",
    },
    {
      kind: "say",
      id: "s-avoid",
      phase: "Before discharge",
      text: "The charge nurse reads the chart and asks whether a suicide assessment was done. You sit down with the patient again. She tells you about the pills in her kitchen and her father's death.",
      next: "q-formulate",
    },
    {
      kind: "question",
      id: "q-formulate",
      phase: "Risk formulation",
      prompt: "Her troponins are negative and her mental status exam is documented. Summarize her risk and protective factors. How do you judge her risk?",
      seconds: 80,
      modelAnswer: [
        "Risk factors. Major depression, recent bereavement, father died by suicide, rising alcohol use, insomnia, access to opioids and benzodiazepines, health care worker with knowledge and access, first weeks of an antidepressant.",
        "Protective factors. No intent or plan, no past attempts, children and partner, close sister, future plans, help seeking, insight, no psychosis.",
        "Mental status. Depressed mood, reactive affect, linear thought, good insight and judgment.",
        "Formulation. Passive ideation with a method considered but no plan or intent, several serious risk factors, many of them modifiable, and strong supports. Not at imminent risk. Some would call this moderate rather than low risk. An outpatient plan is reasonable only if means are removed, a same day mental health assessment agrees and follow up is fast.",
        "Tools such as scales inform the judgment but do not replace it.",
      ],
      rubric: ["ns-p2", "ns-p3"],
      next: "s-husband",
    },
    {
      kind: "say",
      id: "s-husband",
      phase: "09:15",
      text: "With her permission you call her husband, and he arrives. He is frightened. He says, 'I had no idea. Please keep her here. Can't you just admit her until she is better?'",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "What is your disposition, and what do you say to her husband?",
      seconds: 90,
      modelAnswer: [
        "Collaborative outpatient plan, agreed with her. She is engaged and wants help.",
        "She does not meet criteria for an involuntary assessment. There is no threat or attempt and no likely serious bodily harm with a safe plan.",
        "Acknowledge his fear. With her consent explain why admission is not needed and may not help.",
        "Give him a role. Remove the pills, stay with her this week, know the warning signs and the crisis numbers.",
        "Crisis nurse assessment and a call to the on call psychiatrist before she leaves. Urgent psychiatry within 72 hours.",
        "Make clear she can come back at any time, and when she should.",
      ],
      rubric: ["ns-m1", "ns-pr1"],
      choices: [
        {
          id: "c-collab",
          label: "With her consent I explained to her husband why I judged it safe for her to go home with a plan. I involved him in removing the pills and the safety plan, had the crisis nurse assess her and reviewed the plan with the on call psychiatrist before discharge, and booked urgent psychiatry follow up.",
          next: "q-means",
          quality: "strong",
          feedback:
            "Right. She has no intent, plan or psychosis, and she is engaged, so a collaborative plan with fast follow up fits. Her father's suicide and her access to drugs make some clinicians grade her as moderate risk, which is why a same day mental health assessment before discharge is the safer standard. Admission does not reduce risk on its own, and her husband becomes part of the plan.",
        },
        {
          id: "c-admit",
          label: "Her husband insisted, so I asked psychiatry to admit her voluntarily.",
          next: "s-admit",
          quality: "partial",
          feedback:
            "Admission is not wrong if she wants it, but here the request comes from fear, not from her risk. The decision should rest on your assessment and her wishes. Explain the plan to him rather than handing over the decision.",
        },
        {
          id: "c-form1",
          label: "I completed a Form 1 because she had thought about taking her mother's pills.",
          next: "s-form1",
          quality: "unsafe",
          feedback:
            "A Form 1 under the Ontario Mental Health Act needs reasonable cause to believe she has threatened or attempted self harm, or cannot care for herself, and that a mental disorder will likely result in serious bodily harm. She has passive thoughts, no intent and is accepting help voluntarily. Detaining her takes away her trust and gives no benefit.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-admit",
      phase: "10:30",
      text: "The psychiatrist on call comes in and assesses her. She agrees an outpatient plan is safe and asks you to finish discharge planning with the family. The patient says she is relieved to go home to her children.",
      next: "q-means",
    },
    {
      kind: "say",
      id: "s-form1",
      phase: "Later that day",
      text: "The patient becomes tearful and says she will never tell anyone about her thoughts again. The psychiatrist finds she does not meet criteria and ends the detention. You apologize, explain your concern, and rebuild the plan with her.",
      next: "q-means",
    },
    {
      kind: "question",
      id: "q-means",
      phase: "Means",
      prompt: "What do you do about the medications at home and her access to drugs?",
      seconds: 70,
      modelAnswer: [
        "Lethal means counselling with her and her husband.",
        "Her husband takes the hydromorphone and lorazepam to a pharmacy for disposal today.",
        "Keep only small amounts of other medications, such as acetaminophen, at home. Lock up anything else.",
        "Cut back on alcohol. It lowers the threshold for acting on impulse.",
        "Time away from night shifts and from work access to controlled drugs while she recovers. Offer a note for work that gives no diagnosis.",
      ],
      rubric: ["ns-m2", "ns-m3"],
      choices: [
        {
          id: "c-dispose",
          label: "I asked her husband to take the hydromorphone and lorazepam to a pharmacy today, limited other medications in the house, talked about cutting back alcohol and gave her a note to stay off work this week.",
          next: "q-meds",
          quality: "strong",
          feedback:
            "Removing access to a lethal method is one of the best supported suicide prevention steps. Suicidal crises are often brief, and a delay or barrier can save a life. Alcohol and night shifts both add risk that you can reduce.",
        },
        {
          id: "c-lock",
          label: "I advised her to lock the medications in a cupboard.",
          next: "s-lock",
          quality: "partial",
          feedback:
            "Locking is better than nothing, but she has the key. Opioids and benzodiazepines that are no longer prescribed should leave the house. Involve her husband so it happens today.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-lock",
      phase: "Before discharge",
      text: "The crisis nurse asks who holds the key. The patient admits she would. Her husband offers to take the box to the pharmacy on the way home.",
      next: "q-meds",
    },
    {
      kind: "question",
      id: "q-meds",
      phase: "Her medication",
      prompt: "She asks whether she should stop the sertraline because it makes her jittery. What do you advise?",
      seconds: 70,
      modelAnswer: [
        "Continue it. Jitteriness and nausea are common early and usually settle within 1 to 2 weeks.",
        "Benefit takes several weeks. Do not stop suddenly.",
        "Suicide risk needs closer watching in the first 4 weeks of a new antidepressant. Report worse thoughts, agitation or restlessness early.",
        "Her family physician should review side effects within 2 weeks of starting. That visit is Friday.",
        "Avoid alcohol. No benzodiazepine prescription from the emergency department today.",
      ],
      rubric: ["ns-m4"],
      next: "q-plan",
    },
    {
      kind: "question",
      id: "q-plan",
      phase: "Safety plan",
      prompt: "Build the discharge plan with her. What goes into it?",
      seconds: 90,
      modelAnswer: [
        "Written safety plan made together. Her warning signs, such as crying in the car and thoughts of the pills.",
        "Coping steps she can do alone, and people and places that distract her.",
        "People she can ask for help. Her husband and her sister.",
        "Professional contacts. Crisis nurse, urgent psychiatry, family physician, the emergency department, and 9-8-8 by call or text at any hour.",
        "Making the home safe. Pills removed today.",
        "Follow up within 72 hours, a follow up call tomorrow, and grief support. Return if thoughts get stronger or she feels unsafe.",
      ],
      rubric: ["ns-m5", "ns-pr2"],
      next: "q-document",
    },
    {
      kind: "question",
      id: "q-document",
      phase: "Documentation and confidentiality",
      prompt: "She asks whether her employer will be told. How do you answer, and what do you document and send?",
      seconds: 70,
      modelAnswer: [
        "Her health information is confidential. Her employer will not be told without her consent.",
        "A work note can say she is unfit for work for a period without giving a diagnosis.",
        "Document the risk assessment, collateral, mental status, the reasons she does not meet involuntary criteria, means removal and the plan.",
        "Send a summary to her family physician and the psychiatry clinic. Record who was told what, with her consent.",
      ],
      rubric: ["ns-pr3", "ns-pr4"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She leaves at 11:00 with her husband and a written safety plan. The pills are handed in at a pharmacy that afternoon. The crisis nurse calls the next day. She sees psychiatry on day 3 and her family physician on Friday. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ns-h1",
      competency: "assessment",
      criterion: "history",
      text: "Takes a focused history of the episodes, including cardiac and pulmonary embolism risk factors.",
      points: 1,
      teaching: "Acute chest pain needs a structured history, an early ECG and high sensitivity troponin before a non cardiac label. Panic is a diagnosis of exclusion at the first visit.",
      source: "chest-pain",
    },
    {
      id: "ns-h2",
      competency: "assessment",
      criterion: "history",
      text: "Takes a mood history. Recent loss, sleep, appetite, interest, guilt and alcohol.",
      points: 2,
      teaching: "Insomnia, night shift work and alcohol use are linked to depression. A recent loss with these features calls for a direct suicide screen, which CANMAT advises as a routine part of emergency assessment.",
      source: "canmat",
    },
    {
      id: "ns-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks directly about suicidal thoughts, intent, plan, method, access to means, preparatory acts and past attempts.",
      points: 2,
      critical: true,
      teaching: "Direct questions are safe and are the only way to find out intent and access to means. A leading question invites a false no.",
      source: "mhcc",
    },
    {
      id: "ns-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about family history of suicide, past depression and alcohol use.",
      points: 2,
      teaching: "A parent who died by suicide is a known risk factor, but fixed historical factors predict poorly. Modifiable factors such as alcohol use, insomnia and access to means guide the plan.",
      source: "canmat",
    },
    {
      id: "ns-h5",
      competency: "communication",
      criterion: "history",
      text: "Asks about protective factors and reasons for living. Children, partner, sister, future plans.",
      points: 1,
      teaching: "Protective factors and supports are part of every suicide risk assessment. They also become the reasons for living in her safety plan.",
      source: "mhcc",
    },
    {
      id: "ns-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Excludes medical causes with an exam, ECG, serial troponin and basic labs including TSH and sodium.",
      points: 2,
      teaching: "An ECG within 10 minutes and serial high sensitivity troponin exclude myocardial injury. Thyroid disease, PE, alcohol withdrawal and early SSRI side effects are other causes to consider before closing on panic.",
      source: "chest-pain",
    },
    {
      id: "ns-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Performs and reports a mental status examination, including mood, affect, thought content, insight and judgment.",
      points: 2,
      teaching: "The mental status exam is the physical exam of psychiatry. CANMAT reserves inpatient care mainly for intent to act or psychotic symptoms, so absent psychosis, good insight and engagement support an outpatient plan.",
      source: "canmat",
    },
    {
      id: "ns-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Formulates risk by weighing risk and protective factors, using any scale only to inform clinical judgment.",
      points: 2,
      teaching: "Scales cannot predict who will die by suicide. A formulation that names modifiable factors, such as means and alcohol, guides the plan.",
      source: "mhcc",
    },
    {
      id: "ns-m1",
      competency: "disposition",
      criterion: "management",
      text: "Chooses a collaborative outpatient plan and recognizes that she does not meet criteria for an involuntary psychiatric assessment.",
      points: 2,
      critical: true,
      teaching: "A Form 1 in Ontario needs a threat, attempt or inability to care for oneself, plus a mental disorder likely to cause serious bodily harm. An engaged patient without intent is best served by a plan made with her.",
      source: "ontario-mha",
    },
    {
      id: "ns-m2",
      competency: "management",
      criterion: "management",
      text: "Arranges removal of the hydromorphone and lorazepam from the home today, with her husband's help.",
      points: 3,
      critical: true,
      teaching: "Lethal means counselling is a core step of the safety planning intervention. Suicidal crises are often short, and barriers buy time.",
      source: "stanley",
    },
    {
      id: "ns-m3",
      competency: "management",
      criterion: "management",
      text: "Addresses alcohol use and time away from night shifts and workplace drug access.",
      points: 1,
      teaching: "Alcohol use and sleep disorders are modifiable suicide risk factors in depression. Night shifts worsen insomnia and give her access to controlled drugs.",
      source: "canmat",
    },
    {
      id: "ns-m4",
      competency: "management",
      criterion: "management",
      text: "Counsels her to continue sertraline, explains early side effects, the delay to benefit and the need for closer monitoring in the first 4 weeks, and avoids a benzodiazepine prescription.",
      points: 2,
      teaching: "CANMAT advises asking about side effects within 2 weeks and watching suicide risk closely in the first 4 weeks of a new antidepressant. Stopping suddenly can cause discontinuation symptoms.",
      source: "canmat",
    },
    {
      id: "ns-m5",
      competency: "management",
      criterion: "management",
      text: "Builds a written safety plan with warning signs, coping steps, support people, professional contacts and 9-8-8.",
      points: 2,
      teaching: "CANMAT puts evidence based safety planning at the centre of suicide risk management. 9-8-8 gives rapid crisis help across Canada by phone or text.",
      source: "canmat",
    },
    {
      id: "ns-pr1",
      competency: "communication",
      criterion: "process",
      text: "With her consent, involves her husband, acknowledges his fear and explains the reasons for the plan.",
      points: 2,
      teaching: "Support people are a step in the safety plan. Explaining the reasons for discharge turns a frightened relative into a partner in the plan.",
      source: "stanley",
    },
    {
      id: "ns-pr2",
      competency: "disposition",
      criterion: "process",
      text: "Arranges timely follow up. Crisis nurse before discharge, psychiatry within 72 hours, a call the next day and her family physician this week.",
      points: 2,
      teaching: "The days after an emergency visit carry high risk. A safety plan with follow up calls after discharge was linked to about half the rate of suicidal behaviour over 6 months.",
      source: "stanley",
    },
    {
      id: "ns-pr3",
      competency: "professionalism",
      criterion: "process",
      text: "Protects her confidentiality with her employer and offers a work note without a diagnosis.",
      points: 1,
      teaching: "Her health information cannot be disclosed to her employer without her consent. A work note can state she is unfit for work without a diagnosis, and confidential care makes it safer for health care workers to come forward.",
      source: "phipa",
    },
    {
      id: "ns-pr4",
      competency: "leadership",
      criterion: "process",
      text: "Documents the risk assessment, the reasons for the disposition and the plan, and sends a summary to her family physician and psychiatry.",
      points: 2,
      teaching: "When you decide she does not meet Form 1 criteria, write down why. Clear documentation of the assessment and the reasoning shows a sound decision and keeps the next team informed.",
      source: "ontario-mha",
    },
  ],
  sources: [
    {
      id: "mhcc",
      citation:
        "Mental Health Commission of Canada and Canadian Patient Safety Institute. Suicide Risk Assessment Toolkit. A resource for healthcare workers and organizations. 2021.",
      url: "https://www.mentalhealthcommission.ca/wp-content/uploads/drupal/2021-01/mhcc_cpsi_suicide_risk_assessment_toolkit_eng.pdf",
    },
    {
      id: "stanley",
      citation:
        "Stanley B, Brown GK, Brenner LA, and colleagues. Comparison of the safety planning intervention with follow-up vs usual care of suicidal patients treated in the emergency department. JAMA Psychiatry. 2018.",
    },
    {
      id: "chest-pain",
      citation:
        "Gulati M, Levy PD, Mukherjee D, and colleagues. 2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR guideline for the evaluation and diagnosis of chest pain. Circulation. 2021.",
    },
    {
      id: "canmat",
      citation:
        "Lam RW, Kennedy SH, Adams C, and colleagues. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Can J Psychiatry. 2024.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/",
    },
    {
      id: "ontario-mha",
      citation: "Government of Ontario. Mental Health Act, R.S.O. 1990, c. M.7, section 15.",
    },
    {
      id: "phipa",
      citation: "Government of Ontario. Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A.",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
