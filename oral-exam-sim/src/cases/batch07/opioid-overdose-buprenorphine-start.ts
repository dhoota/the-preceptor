// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const opioidOverdoseBuprenorphineStart: OralCase = {
  id: "opioid-overdose-buprenorphine-start",
  title: "Found unresponsive behind a shelter",
  blueprint: "tox",
  alsoCovers: ["psych", "resus"],
  priorityTopic: "tox",
  keyFeatures: [{ topic: "tox", n: 2 }, { topic: "tox", n: 3 }, { topic: "tox", n: 8 }, { topic: "loc", n: 2 }],
  summary: "A 29 year old man is brought in after shelter staff found him unresponsive in a laneway.",
  durationMinutes: 14,
  stem:
    "You are working in a busy urban emergency department in Ontario. The hospital runs a Rapid Access Addiction Medicine clinic on weekday mornings and has an addiction medicine physician on call by phone. A social worker is on shift until midnight. " +
    "Jordan Whitehorse is 29 years old and weighs about 68 kg. Shelter staff found him unresponsive behind the shelter at 19:40 and gave naloxone 4 mg intranasally. " +
    "Paramedics found him breathing 4 times a minute, gave bag mask ventilation and naloxone 0.4 mg IM. " +
    "Arrival vitals at 20:05: heart rate 96, blood pressure 118/70, respiratory rate 6, SpO2 84 percent on room air, temperature 35.9, capillary glucose 6.2 mmol/L. GCS 7. CTAS 1. " +
    "The paramedic says: 'He woke a bit after the first dose, then drifted off again. Shelter staff say he usually smokes fentanyl.'",
  findings: [
    {
      id: "exam",
      label: "Primary survey",
      result:
        "Snoring respirations. Pupils 1 to 2 mm. No signs of head trauma. Chest clear. Old healed track marks on both forearms. A 3 cm clean ulcer on the left shin. No needle in pockets.",
    },
    {
      id: "after-naloxone",
      label: "After ventilation and titrated naloxone",
      result: "Respiratory rate 14. SpO2 96 percent on 2 L. Pupils 4 mm. GCS 12. He opens his eyes to voice and mumbles, then drifts off. He protects his airway.",
    },
    {
      id: "vbg",
      label: "Venous blood gas",
      result: "On arrival: pH 7.22, pCO2 68 mmHg. After ventilation and naloxone: pH 7.34, pCO2 47 mmHg.",
    },
    {
      id: "labs",
      label: "Blood work",
      result: "CBC normal. Creatinine 74 µmol/L. CK 310 U/L. Ethanol undetectable. Acetaminophen undetectable. Salicylate undetectable.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus rhythm at 88. QTc 430 ms.",
    },
    {
      id: "history",
      label: "History once awake",
      result:
        "Smokes fentanyl daily for 3 years, about 1 g a day. Last use at about 19:30. He has overdosed twice this year. He tried methadone 2 years ago but stopped when he lost housing. " +
        "He has never tried buprenorphine. He wants to stop using but fears withdrawal. No alcohol. Occasional 'benzos' that come mixed in his supply.",
    },
    {
      id: "cows",
      label: "Clinical Opiate Withdrawal Scale at 21:10",
      result: "COWS 13. Heart rate 108. Sweating, yawning, runny nose, goosebumps, restless, stomach cramps.",
    },
    {
      id: "cows-2",
      label: "COWS 40 minutes after the first buprenorphine dose",
      result: "COWS 20. Vomiting, severe restlessness and cramping.",
    },
    {
      id: "social",
      label: "Social history",
      result: "Staying at the shelter. Has a health card. No phone. Has a case worker at the shelter. No current prescriber. Not on any medications.",
    },
    {
      id: "hep",
      label: "Screening tests offered",
      result: "He agrees to HIV and hepatitis C testing. Results pending.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the resuscitation room",
      text: "He is snoring and blue around the lips. The nurse has naloxone drawn up and asks how much to give.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First minutes",
      prompt: "What do you do first, and how do you dose naloxone?",
      seconds: 60,
      modelAnswer: [
        "Oxygenate and ventilate first with bag mask and an airway adjunct.",
        "Naloxone IV in small doses, 0.04 to 0.1 mg every 2 to 3 minutes, titrated to breathing, not to full wakefulness.",
        "Goal is a respiratory rate of at least 10 and good oxygen saturation.",
        "Larger doses cause precipitated withdrawal with vomiting, agitation and aspiration risk.",
        "Check glucose. Look for trauma and other causes.",
      ],
      rubric: ["op-r1", "op-r2"],
      choices: [
        {
          id: "c-titrate",
          label: "I bagged him with oxygen and gave naloxone 0.1 mg IV every 2 to 3 minutes until he was breathing adequately.",
          next: "s-breathing",
          quality: "strong",
          feedback:
            "Strong. Ventilation fixes the immediate problem. Small titrated doses restore breathing without throwing him into severe withdrawal. " +
            "The target is breathing, not full consciousness.",
        },
        {
          id: "c-bolus",
          label: "I gave naloxone 2 mg IV to wake him up fully.",
          next: "s-bolus",
          quality: "partial",
          feedback:
            "A 2 mg bolus usually reverses the overdose, but in a person dependent on fentanyl it causes abrupt, severe withdrawal. " +
            "Vomiting while drowsy risks aspiration and many patients leave. Titrate small doses to breathing.",
        },
        {
          id: "c-nrb",
          label: "I put him on a non rebreather mask and waited for the paramedic naloxone to take effect.",
          next: "s-nrb",
          quality: "unsafe",
          feedback:
            "Oxygen does not fix hypoventilation. His pCO2 is rising and he may become apneic. " +
            "He needs bag mask ventilation now and titrated naloxone.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-bolus",
      phase: "Two minutes later",
      text: "He sits bolt upright, vomits and swings at the nurse. He pulls out his IV. Security is called. After 20 minutes he settles enough to talk, but he is sweating and shaking. He then becomes drowsy again.",
      next: "s-breathing",
    },
    {
      kind: "say",
      id: "s-nrb",
      phase: "Three minutes later",
      text: "His respiratory rate falls to 2 and SpO2 to 72 percent. The respiratory therapist starts bag mask ventilation. You give naloxone 0.1 mg IV twice and he starts breathing.",
      next: "s-breathing",
    },
    {
      kind: "say",
      id: "s-breathing",
      phase: "Twenty minutes after arrival",
      text: "His respiratory rate is 14 and SpO2 96 percent on 2 L. His pupils are 4 mm. But he remains drowsy, GCS 12, and drifts off when not stimulated. The nurse asks if she should give more naloxone.",
      next: "q-sedation",
    },
    {
      kind: "question",
      id: "q-sedation",
      phase: "Persistent sedation",
      prompt: "He is breathing well but still drowsy. What are you thinking and what do you do?",
      seconds: 75,
      modelAnswer: [
        "The opioid effect is reversed. Persistent sedation suggests a co exposure.",
        "Benzodiazepine adulterants such as bromazolam are common in the Canadian unregulated supply. Xylazine and medetomidine are also seen.",
        "Other causes: alcohol, head injury, hypoglycemia, hypoxic injury, other drugs.",
        "Do not chase full wakefulness with more naloxone. It will not reverse these and will worsen withdrawal.",
        "Do not give flumazenil. It can cause seizures in benzodiazepine dependent patients.",
        "Supportive care, airway monitoring, pressure area care. Reassess for other causes.",
      ],
      rubric: ["op-a1", "op-m1"],
      choices: [
        {
          id: "c-support",
          label: "I recognized a likely benzodiazepine or sedative co exposure, gave no more naloxone or flumazenil, and monitored him with supportive care.",
          next: "s-escalate",
          quality: "strong",
          feedback:
            "Correct. Naloxone has done its job once breathing is adequate. " +
            "Sedative adulterants are now common in fentanyl in Canada. They cause prolonged sedation that naloxone does not reverse.",
        },
        {
          id: "c-flumazenil",
          label: "I gave flumazenil 0.2 mg IV to reverse any benzodiazepine.",
          next: "s-flumazenil",
          quality: "unsafe",
          feedback:
            "Flumazenil can cause seizures in people who use benzodiazepines regularly, and his exposure is unknown. " +
            "He is breathing and protecting his airway. Supportive care is safer.",
        },
        {
          id: "c-more-naloxone",
          label: "I kept giving naloxone until he was fully awake.",
          next: "s-more-naloxone",
          quality: "partial",
          feedback:
            "His breathing is already adequate. More naloxone does not reverse sedatives and pushes him into withdrawal. " +
            "Accept a drowsy patient who is breathing well and monitor.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-flumazenil",
      phase: "Five minutes later",
      text: "He has a 1 minute generalized seizure. It stops on its own. He is postictal but breathing. You decide on supportive care and monitoring.",
      next: "s-escalate",
    },
    {
      kind: "say",
      id: "s-more-naloxone",
      phase: "Fifteen minutes later",
      text: "After another 0.8 mg he is still drowsy but now retching and sweating. The nurse is worried about aspiration. You stop the naloxone and sit him upright.",
      next: "s-escalate",
    },
    {
      kind: "say",
      id: "s-escalate",
      phase: "21:10",
      text:
        "He is now awake, sweating, yawning and restless. His COWS score is 13. He pulls off his monitor leads and says: 'I feel awful. I am leaving. I need to get something to feel normal.'",
      next: "q-leaving",
    },
    {
      kind: "question",
      id: "q-leaving",
      phase: "Wants to leave",
      prompt: "How do you respond?",
      seconds: 75,
      modelAnswer: [
        "Stay calm. Acknowledge how bad withdrawal feels.",
        "Offer treatment now: buprenorphine can relieve his withdrawal within an hour. He is in the ideal window to start.",
        "Assess capacity. He is awake, oriented and can weigh risks. He is not certifiable under the Mental Health Act for this alone.",
        "Explain the risk: his tolerance is unchanged but the sedative in his supply may still be on board. Using now could be fatal.",
        "If he still leaves: take home naloxone kit, do not use alone, use a supervised consumption site or the National Overdose Response Service.",
        "Invite him back at any time.",
      ],
      rubric: ["op-c1", "op-p1", "op-d1"],
      choices: [
        {
          id: "c-offer",
          label: "I acknowledged his withdrawal, offered buprenorphine right now and explained the risk of using tonight, while making sure he would have a naloxone kit if he left.",
          next: "q-bup",
          quality: "strong",
          feedback:
            "Good. Withdrawal after naloxone is the perfect moment to start buprenorphine. " +
            "Offering real relief is the best way to keep him in care. A capable adult can leave, so harm reduction is your safety net.",
        },
        {
          id: "c-form1",
          label: "I told him he cannot leave and completed a Form 1.",
          next: "s-form1",
          quality: "partial",
          feedback:
            "He is awake and capable. Opioid use disorder with withdrawal does not by itself meet Form 1 criteria. " +
            "Detaining him damages trust. The examiner wanted an offer of buprenorphine and harm reduction.",
        },
        {
          id: "c-discharge",
          label: "He is awake and wants to go, so I discharged him.",
          next: "s-discharge",
          quality: "unsafe",
          feedback:
            "Letting him leave without an offer of treatment or a naloxone kit misses a life saving opportunity. " +
            "People discharged after an overdose have a high risk of dying in the next year. Offer buprenorphine and harm reduction.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-form1",
      phase: "Ten minutes later",
      text: "He becomes angry and security is called. The social worker sits with him and asks if he has heard of buprenorphine. He says he would try it if it stops the withdrawal. You rescind the form.",
      next: "q-bup",
    },
    {
      kind: "say",
      id: "s-discharge",
      phase: "At the door",
      text: "The nurse catches him at the exit to give him a naloxone kit. She asks if he would stay if the doctor could stop his withdrawal. He agrees to come back for 30 minutes.",
      next: "q-bup",
    },
    {
      kind: "question",
      id: "q-bup",
      phase: "Buprenorphine start",
      prompt: "He agrees to start buprenorphine. His COWS is 13. How do you start it in the ED?",
      seconds: 90,
      modelAnswer: [
        "He is in moderate withdrawal with a COWS of 13, which is enough to start.",
        "Buprenorphine naloxone 8 mg SL now. Some use 4 mg if withdrawal is milder.",
        "Reassess every 30 to 60 minutes. Give further 8 mg doses to control withdrawal.",
        "A day 1 total of 16 to 32 mg is supported for people using fentanyl, sometimes called high dose or macro dosing.",
        "Explain that it dissolves under the tongue over several minutes. Do not swallow.",
        "Adjuncts for symptoms: ondansetron, loperamide, acetaminophen or ibuprofen.",
      ],
      rubric: ["op-m2"],
      choices: [
        {
          id: "c-macro",
          label: "I gave buprenorphine naloxone 8 mg SL and planned repeat 8 mg doses every 30 to 60 minutes up to 24 to 32 mg for the day.",
          next: "s-precipitated",
          quality: "strong",
          feedback:
            "Correct. Higher early doses reach receptor saturation quickly and are well tolerated in people using fentanyl. " +
            "A patient already in withdrawal after naloxone is an ideal candidate.",
        },
        {
          id: "c-tiny",
          label: "I gave a 2 mg test dose and planned to reassess in 2 hours.",
          next: "s-tiny",
          quality: "partial",
          feedback:
            "A 2 mg dose in someone using fentanyl may partly displace the fentanyl without giving enough agonist effect, so he feels worse. " +
            "Waiting 2 hours in withdrawal invites him to leave. Use 4 to 8 mg and reassess within an hour.",
        },
        {
          id: "c-hydromorphone",
          label: "I gave hydromorphone 2 mg IV to treat his withdrawal and planned discharge.",
          next: "s-hydromorphone",
          quality: "unsafe",
          feedback:
            "A full agonist after an overdose with a possible sedative co exposure risks another respiratory arrest. It also does not start treatment. " +
            "The examiner wanted buprenorphine.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-tiny",
      phase: "Forty minutes later",
      text: "He is more restless and vomiting. He says the medication made him feel worse. The addiction medicine physician on call advises giving 8 mg now and repeating as needed. You give 8 mg SL.",
      next: "s-precipitated",
    },
    {
      kind: "say",
      id: "s-hydromorphone",
      phase: "Twenty minutes later",
      text: "His respiratory rate falls to 8 and he is drowsy again. The nurse stimulates him and he recovers. Once he is alert and back in withdrawal, you give buprenorphine naloxone 8 mg SL.",
      next: "s-precipitated",
    },
    {
      kind: "say",
      id: "s-precipitated",
      phase: "Forty minutes after the first dose",
      text: "His COWS rises to 20. He is vomiting and says: 'This is worse. You made it worse. Give me something strong or I am leaving.'",
      next: "q-precipitated",
    },
    {
      kind: "question",
      id: "q-precipitated",
      phase: "Worse withdrawal",
      prompt: "What is happening and what do you do?",
      seconds: 75,
      modelAnswer: [
        "Likely buprenorphine precipitated withdrawal. Buprenorphine displaces fentanyl from the receptors. Fentanyl stored in fat keeps releasing, which raises this risk.",
        "Treat through it with more buprenorphine. Give 8 to 16 mg SL now and repeat until symptoms settle.",
        "Adjuncts: ondansetron 4 to 8 mg, clonidine 0.1 mg if blood pressure allows, loperamide, and a non opioid analgesic.",
        "Avoid full agonists and do not give naloxone.",
        "Reassure him that this usually settles within an hour with more buprenorphine.",
      ],
      rubric: ["op-m3", "op-c2"],
      choices: [
        {
          id: "c-more-bup",
          label: "I explained what was happening, gave another 16 mg SL with ondansetron and clonidine, and reassessed in 30 minutes.",
          next: "q-discharge",
          quality: "strong",
          feedback:
            "Correct. More buprenorphine is the treatment for buprenorphine precipitated withdrawal. " +
            "Honest explanation and quick relief keep him engaged.",
        },
        {
          id: "c-stop",
          label: "I stopped the buprenorphine and treated his symptoms with ondansetron and clonidine only.",
          next: "s-stop",
          quality: "partial",
          feedback:
            "Adjuncts help, but stopping buprenorphine leaves his receptors partly blocked and his withdrawal untreated. " +
            "Give more buprenorphine to saturate the receptors.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-stop",
      phase: "Thirty minutes later",
      text: "His COWS is 19 and he is at the door. The addiction medicine physician on the phone suggests giving 16 mg now. He agrees to one more try. Forty minutes later his COWS is 5.",
      next: "q-discharge",
    },
    {
      kind: "question",
      id: "q-discharge",
      phase: "Discharge",
      prompt: "It is 23:30. His COWS is 4 and he feels better after about 24 mg in total. How do you discharge him safely?",
      seconds: 90,
      modelAnswer: [
        "Observe until he is alert with normal vitals, at least 1 hour after the last naloxone dose.",
        "Prescription for buprenorphine naloxone 24 mg SL daily until his addiction clinic visit, dispensed daily at a pharmacy or with take home doses per local practice.",
        "Direct referral to the Rapid Access Addiction Medicine clinic tomorrow morning. Tell the shelter case worker if he agrees.",
        "Take home naloxone kit and training. Do not use alone. Supervised consumption site or the National Overdose Response Service.",
        "Wound care for the shin ulcer. HIV and hepatitis C results follow up. Offer hepatitis vaccines.",
        "Clear written instructions because he has no phone.",
      ],
      rubric: ["op-d2", "op-m4"],
      next: "q-stigma",
    },
    {
      kind: "question",
      id: "q-stigma",
      phase: "Team",
      prompt: "As he leaves, a nurse says: 'He will just be back next week. Why do we bother?' How do you respond?",
      seconds: 60,
      modelAnswer: [
        "Respond privately and respectfully.",
        "Opioid use disorder is a chronic, treatable medical condition.",
        "Buprenorphine reduces overdose death and keeps people in treatment.",
        "Every ED visit is a chance to start treatment. Relapse is part of the illness, not a failure.",
        "Acknowledge the frustration and moral distress of repeated visits. Offer education and team support.",
      ],
      rubric: ["op-p2"],
      next: "q-systems",
    },
    {
      kind: "question",
      id: "q-systems",
      phase: "Systems",
      prompt: "What would make ED buprenorphine starts easier in your department?",
      seconds: 60,
      modelAnswer: [
        "An ED buprenorphine order set with dosing and COWS triggers.",
        "Take home naloxone kits in the ED.",
        "A direct referral pathway to the Rapid Access Addiction Medicine clinic.",
        "Bridging prescriptions and a relationship with a nearby pharmacy.",
        "Staff education to reduce stigma. Peer support workers where possible.",
      ],
      rubric: ["op-l1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He leaves with his prescription, a naloxone kit and a referral. He is seen at the addiction clinic the next morning. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "op-a1",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Recognizes persistent sedation after adequate breathing as a likely sedative co exposure such as a benzodiazepine adulterant.",
      points: 2,
      teaching: "Benzodiazepine and other sedative adulterants are common in the Canadian fentanyl supply. Naloxone does not reverse them.",
      source: "crism",
    },
    {
      id: "op-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Ventilates with bag mask and oxygen before and during naloxone.",
      points: 2,
      teaching: "Hypoventilation is the problem. Bag mask ventilation treats it immediately while naloxone takes effect.",
      source: "hawk",
    },
    {
      id: "op-r2",
      competency: "resuscitation",
      criterion: "plan",
      text: "Titrates naloxone in small IV doses, 0.04 to 0.1 mg, to adequate breathing rather than full wakefulness.",
      points: 3,
      critical: true,
      teaching: "Large boluses cause severe withdrawal, vomiting and aspiration, and drive patients to leave. Target a respiratory rate of at least 10.",
      source: "hawk",
    },
    {
      id: "op-m1",
      competency: "management",
      criterion: "plan",
      text: "Avoids flumazenil and further naloxone for persistent sedation, and gives supportive care.",
      points: 2,
      teaching: "Flumazenil can provoke seizures. More naloxone only worsens withdrawal when breathing is already adequate.",
      source: "crism",
    },
    {
      id: "op-m2",
      competency: "management",
      criterion: "data",
      text: "Starts buprenorphine naloxone 8 mg SL at COWS of about 8 or more and repeats doses toward 16 to 32 mg on day 1.",
      points: 3,
      critical: true,
      teaching: "ED studies show first day doses of 16 to 32 mg are well tolerated in people using fentanyl. ED starts improve engagement in treatment.",
      source: "herring",
    },
    {
      id: "op-m3",
      competency: "management",
      criterion: "plan",
      text: "Treats precipitated withdrawal with more buprenorphine plus symptom adjuncts, and avoids full agonists.",
      points: 2,
      teaching: "The fix for buprenorphine precipitated withdrawal is more buprenorphine, not less.",
      source: "crism",
    },
    {
      id: "op-m4",
      competency: "management",
      criterion: "plan",
      text: "Provides a bridging buprenorphine prescription and a take home naloxone kit.",
      points: 2,
      teaching: "A prescription to the next appointment prevents a gap in treatment. Naloxone kits save lives in the community.",
      source: "hawk",
    },
    {
      id: "op-c1",
      competency: "communication",
      criterion: "plan",
      text: "Responds to his wish to leave with empathy and a clear offer of treatment.",
      points: 2,
      teaching: "Acknowledging withdrawal and offering relief is more effective than confrontation.",
      source: "hawk",
    },
    {
      id: "op-c2",
      competency: "communication",
      criterion: "plan",
      text: "Explains precipitated withdrawal honestly and reassures him that more buprenorphine will help.",
      points: 1,
      teaching: "Patients who understand what is happening are more likely to stay through a difficult start.",
      source: "crism",
    },
    {
      id: "op-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Assesses capacity and respects the right of a capable adult to leave, with harm reduction advice.",
      points: 2,
      teaching: "Opioid use disorder with withdrawal is not a Form 1 criterion on its own. Respect autonomy and reduce harm.",
      source: "crism",
    },
    {
      id: "op-p2",
      competency: "professionalism",
      criterion: "plan",
      text: "Addresses a colleague's stigmatizing comment respectfully and reframes addiction as a treatable illness.",
      points: 1,
      teaching: "Stigma drives people away from care. Leaders model respectful language and share the evidence.",
      source: "crism",
    },
    {
      id: "op-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Gives overdose risk counselling: do not use alone, use supervised sites or the National Overdose Response Service.",
      points: 1,
      teaching: "The risk of death is highest in the weeks after an overdose. Harm reduction advice is part of every discharge.",
      source: "hawk",
    },
    {
      id: "op-d2",
      competency: "disposition",
      criterion: "plan",
      text: "Observes until safe using early discharge criteria and arranges next day addiction clinic follow up.",
      points: 3,
      critical: true,
      teaching: "Most patients can go home 1 hour after naloxone if they walk normally, have normal vital signs and GCS 15. Link them to care.",
      source: "christenson",
    },
    {
      id: "op-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Proposes system supports such as an ED buprenorphine order set, naloxone kits and a referral pathway.",
      points: 1,
      teaching: "ED buprenorphine programs work best with order sets, a pathway to follow up and staff education.",
      source: "hawk",
    },
  ],
  sources: [
    {
      id: "crism",
      citation:
        "Yakovenko I, Bruneau J, et al. Canadian Research Initiative in Substance Matters. Management of opioid use disorder: 2024 update to the national clinical practice guideline. CMAJ. 2024.",
      url: "https://doi.org/10.1503/cmaj.241173",
    },
    {
      id: "hawk",
      citation: "Hawk K, et al. Consensus Recommendations on the Treatment of Opioid Use Disorder in the Emergency Department. Annals of Emergency Medicine. 2021.",
      url: "https://doi.org/10.1016/j.annemergmed.2021.04.023",
    },
    {
      id: "christenson",
      citation: "Christenson J, et al. Early discharge of patients with presumed opioid overdose: development of a clinical prediction rule. Academic Emergency Medicine. 2000.",
      url: "https://doi.org/10.1111/j.1553-2712.2000.tb01260.x",
    },
    {
      id: "herring",
      citation: "Herring AA, et al. High-Dose Buprenorphine Induction in the Emergency Department for Treatment of Opioid Use Disorder. JAMA Network Open. 2021.",
      url: "https://doi.org/10.1001/jamanetworkopen.2021.17128",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
