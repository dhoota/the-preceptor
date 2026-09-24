// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const sexualAssaultCare: OralCase = {
  id: "sexual-assault-care",
  title: "A request for the morning after pill",
  blueprint: "obgyn",
  alsoCovers: ["ethics", "comm"],
  priorityTopic: "abuse-domestic",
  keyFeatures: [
    { topic: "abuse-domestic", n: 3 },
    { topic: "abuse-domestic", n: 4 },
    { topic: "abuse-domestic", n: 5 },
    { topic: "abuse-domestic", n: 6 },
    { topic: "infectious-diseases", n: 10 },
    { topic: "suicide-risk", n: 1 },
  ],
  summary: "A young woman asks for emergency contraception and says she does not want to talk about what happened.",
  durationMinutes: 14,
  stem:
    "You are working an evening shift at a 350 bed hospital in Ontario. The hospital hosts a Sexual Assault and Domestic Violence Treatment Centre. The on call sexual assault nurse examiner can be in within 45 minutes. " +
    "Kiara Beaudoin is 22 years old. She arrives with a friend at 23:00. " +
    "Triage vitals: heart rate 96, blood pressure 124/78, respiratory rate 16, SpO2 99 percent on room air, temperature 36.8. She weighs 82 kg. CTAS 3. " +
    "The triage nurse says: 'She says she was at a party last night and woke up this morning in an apartment she did not know. She thinks she had sex but does not remember. " +
    "She only wants the morning after pill. She does not want the police. Her voice sounds hoarse.'",
  findings: [
    {
      id: "history",
      label: "History, with her permission",
      result:
        "She had two drinks at a party at about 21:00 last night. Her memory stops soon after. She woke at 09:00 in an unfamiliar apartment, undressed from the waist down, with vaginal soreness. " +
        "She remembers a man's hands around her neck and then 'blacking out'. She does not know if a condom was used. She has not showered and is wearing the same underwear.",
    },
    {
      id: "neck",
      label: "Head and neck exam",
      result:
        "Hoarse voice. Pain on swallowing. Scattered petechiae on the face above the jawline and in both conjunctivae. Faint linear red marks on both sides of the neck. No stridor. No subcutaneous emphysema.",
    },
    {
      id: "neuro",
      label: "Neurological exam",
      result: "Alert and oriented. Cranial nerves normal. No limb weakness. No Horner syndrome. Normal gait.",
    },
    {
      id: "body",
      label: "General exam",
      result: "Three oval bruises on the inner left thigh, each about 1.5 cm. Abrasions on both knees. She declines a pelvic exam by you and asks to wait for the nurse examiner.",
    },
    {
      id: "gyn",
      label: "Gynecologic history",
      result: "Last menstrual period started 13 days ago. Regular 28 day cycles. No contraception. No known pregnancies.",
    },
    {
      id: "hcg",
      label: "Urine pregnancy test",
      result: "Negative.",
    },
    {
      id: "vaccines",
      label: "Immunizations",
      result: "She believes she had the school hepatitis B vaccine series. Last tetanus booster at age 14.",
    },
    {
      id: "baseline",
      label: "Baseline blood work",
      result: "HIV antigen antibody negative. HBsAg negative. Anti HBs 64 IU/L. HCV antibody negative. Syphilis negative. Creatinine 68 µmol/L. ALT 18 U/L.",
    },
    {
      id: "cta",
      label: "CT angiography of the head and neck",
      result: "No arterial dissection. Mild soft tissue swelling anterior to the larynx. No fracture of the hyoid or larynx. Airway patent.",
    },
    {
      id: "mood",
      label: "Mental health screen",
      result: "She feels numb and ashamed. She denies suicidal thoughts. She is living with two roommates and feels safe there. Her friend can stay with her tonight.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "Triage",
      text: "She is waiting in a hallway chair with her friend. She is looking at the floor and holding her scarf tightly around her neck.",
      next: "q-approach",
    },
    {
      kind: "question",
      id: "q-approach",
      phase: "First contact",
      prompt: "How do you approach her, and what are your first priorities?",
      seconds: 75,
      modelAnswer: [
        "Move her to a private room. Ask whether she wants her friend present.",
        "Trauma informed approach. Introduce yourself, explain each step, ask permission and tell her she can stop at any time.",
        "Medical safety first. Screen for injuries, especially strangulation, head injury and intoxication.",
        "Offer the sexual assault nurse examiner and explain the services available without pressure.",
        "Ask her not to void or wash if possible, and if she must void, collect the urine because drug facilitated assault is possible.",
        "Only ask what is needed for care. She does not have to give a detailed account.",
      ],
      rubric: ["sa-p1", "sa-a1", "sa-c1"],
      choices: [
        {
          id: "c-trauma",
          label: "I moved her to a private room, explained her options, offered the nurse examiner, and screened for injuries including strangulation before anything else.",
          next: "q-strangulation",
          quality: "strong",
          feedback:
            "Strong. A private, patient directed approach restores some control to her. " +
            "Screening for injury is the first medical priority. Her hoarse voice and scarf hint at strangulation.",
        },
        {
          id: "c-details",
          label: "I took a detailed account of the assault first so I could document exactly what happened.",
          next: "s-details",
          quality: "partial",
          feedback:
            "A detailed forensic narrative is not your role and can retraumatize her. It may also create inconsistent statements. " +
            "Take the medical history you need for care. The nurse examiner documents the forensic history with her consent.",
        },
        {
          id: "c-police",
          label: "I called the police because a sexual assault is a crime and she may not be thinking clearly.",
          next: "s-police-call",
          quality: "unsafe",
          feedback:
            "There is no duty to report the sexual assault of a capable adult in Ontario. Calling police against her wishes breaches her confidentiality. " +
            "The examiner wanted a private, consent based approach and an injury screen.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-details",
      phase: "Twenty minutes later",
      text: "She becomes tearful and says she does not want to talk about it any more. She asks to leave. Her friend asks you to just help her. You pause, apologize and focus on her medical needs.",
      next: "q-strangulation",
    },
    {
      kind: "say",
      id: "s-police-call",
      phase: "Thirty minutes later",
      text: "She sees a police officer at the nursing station and stands up to leave. Her friend persuades her to stay. You apologize and tell her the police will not be involved unless she chooses.",
      next: "q-strangulation",
    },
    {
      kind: "question",
      id: "q-strangulation",
      phase: "Injury assessment",
      prompt: "She tells you a man had his hands around her neck and she blacked out. Her voice is hoarse and there are petechiae on her face. What is your concern and what do you do?",
      seconds: 75,
      modelAnswer: [
        "Non fatal strangulation with loss of consciousness is a high risk injury.",
        "Risks include carotid or vertebral dissection, stroke, laryngeal injury and delayed airway edema.",
        "External marks may be absent. Petechiae, voice change and loss of consciousness are red flags.",
        "CT angiography of the head and neck vessels.",
        "Examine the airway and neurological status. Observe for evolving swelling.",
        "Strangulation is also a strong predictor of future lethal violence. Screen for ongoing risk.",
      ],
      rubric: ["sa-a2", "sa-m1"],
      choices: [
        {
          id: "c-cta",
          label: "I ordered CT angiography of the head and neck, examined her airway and neurological status, and observed her.",
          next: "q-ec",
          quality: "strong",
          feedback:
            "Correct. Loss of consciousness, petechiae and voice change after strangulation call for vascular imaging. " +
            "Dissection can present hours to days later with a stroke.",
        },
        {
          id: "c-reassure",
          label: "Her neck marks are faint and her airway is fine, so I reassured her that no tests were needed.",
          next: "s-reassure",
          quality: "unsafe",
          feedback:
            "Many strangulation victims have few visible marks. Loss of consciousness means significant compression of the neck vessels. " +
            "The examiner wanted CT angiography of the head and neck and airway assessment.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-reassure",
      phase: "An hour later",
      text: "The nurse examiner arrives and asks whether imaging has been done, given the loss of consciousness. You review the history and order CT angiography of the head and neck.",
      next: "q-ec",
    },
    {
      kind: "question",
      id: "q-ec",
      phase: "Pregnancy prevention",
      prompt: "It is now about 26 hours since the assault. She is mid cycle and weighs 82 kg. What emergency contraception do you offer?",
      seconds: 60,
      modelAnswer: [
        "Offer emergency contraception now. Mid cycle exposure carries the highest pregnancy risk.",
        "A copper IUD inserted within 7 days is the most effective method. Offer referral if she wants it.",
        "Ulipristal acetate 30 mg PO once, effective up to 120 hours. Preferred oral option here.",
        "Levonorgestrel 1.5 mg is less effective after 72 hours. The Canadian label warns it is less effective above 75 kg and may not work above 80 kg. She weighs 82 kg.",
        "Delay starting hormonal contraception for 5 days after ulipristal.",
      ],
      rubric: ["sa-m2"],
      choices: [
        {
          id: "c-upa",
          label: "I offered a copper IUD referral as the most effective option and gave ulipristal 30 mg PO when she chose a pill.",
          next: "q-prophylaxis",
          quality: "strong",
          feedback:
            "Good. Ulipristal is more effective than levonorgestrel and keeps its effect up to 5 days. " +
            "Her weight also favours ulipristal or a copper IUD. Offering the IUD first respects her choice with full information.",
        },
        {
          id: "c-lng",
          label: "I gave levonorgestrel 1.5 mg because it is what we stock.",
          next: "s-lng",
          quality: "partial",
          feedback:
            "Levonorgestrel is better than nothing, but it is less effective than ulipristal, especially mid cycle and with weight over about 75 kg. " +
            "A copper IUD is the most effective option. The examiner wanted these offered.",
        },
        {
          id: "c-none",
          label: "Her pregnancy test is negative, so I told her she does not need emergency contraception.",
          next: "s-none",
          quality: "unsafe",
          feedback:
            "A pregnancy test cannot detect a pregnancy from an exposure 1 day ago. " +
            "She is mid cycle and at real risk. She needs emergency contraception now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-lng",
      phase: "Later",
      text: "The nurse examiner points out that the centre stocks ulipristal and suggests it given her weight and timing. You offer it and she accepts.",
      next: "q-prophylaxis",
    },
    {
      kind: "say",
      id: "s-none",
      phase: "Later",
      text: "The nurse examiner asks whether emergency contraception has been given. She explains to the patient that the test is negative because it is too early. You offer ulipristal 30 mg.",
      next: "q-prophylaxis",
    },
    {
      kind: "question",
      id: "q-prophylaxis",
      phase: "Infection prevention",
      prompt: "The assailant is unknown. What infection prophylaxis and baseline testing do you offer?",
      seconds: 90,
      modelAnswer: [
        "Gonorrhea: ceftriaxone 500 mg IM once.",
        "Chlamydia: doxycycline 100 mg PO twice daily for 7 days, or azithromycin 1 g PO once if adherence is a concern.",
        "Trichomonas: metronidazole 2 g PO once, which can be given later if nausea is a problem.",
        "HIV PEP within 72 hours for 28 days: tenofovir disoproxil fumarate 300 mg with emtricitabine 200 mg plus dolutegravir 50 mg once daily, or bictegravir, emtricitabine and tenofovir alafenamide as one daily tablet. Give a starter pack.",
        "Baseline HIV, hepatitis B serology, hepatitis C, syphilis, creatinine and pregnancy test.",
        "Hepatitis B: she has immunity with anti HBs over 10 IU/L. Tetanus booster for clean abrasions only if more than 10 years since the last dose. Hers was 8 years ago, so none is needed.",
      ],
      rubric: ["sa-m3", "sa-m4"],
      next: "q-evidence",
    },
    {
      kind: "question",
      id: "q-evidence",
      phase: "Evidence and options",
      prompt: "She asks what the evidence kit is and whether doing it means she has to go to the police. What do you tell her?",
      seconds: 60,
      modelAnswer: [
        "In Ontario there is no mandatory police report for a sexual assault of a capable adult.",
        "The kit can be collected up to about 12 days after an assault, with the best yield in the first few days.",
        "It is done by the nurse examiner only with her consent. She can decline any part at any time.",
        "She can have the kit collected and stored at the centre while she decides whether to involve police. Storage time varies by centre, often 6 to 12 months.",
        "Urine can be tested for drugs if drug facilitated assault is suspected.",
        "Medical care does not depend on her decision about the kit or police.",
      ],
      rubric: ["sa-p2", "sa-c2"],
      next: "s-officer",
    },
    {
      kind: "say",
      id: "s-officer",
      phase: "The police arrive",
      text:
        "Her friend's mother phoned the police. A constable arrives at the nursing station. He asks you for her name, what she told you and a copy of her chart. The patient is in the room with the nurse examiner and has not decided about reporting.",
      next: "q-police",
    },
    {
      kind: "question",
      id: "q-police",
      phase: "Confidentiality",
      prompt: "What do you say to the officer?",
      seconds: 60,
      modelAnswer: [
        "Be polite and brief. Do not confirm that she is a patient without her consent.",
        "Personal health information is protected under the Personal Health Information Protection Act.",
        "Records are released only with her consent, a warrant or a court order. A narrow PHIPA exception for significant risk of serious bodily harm does not apply to this request.",
        "Offer to let her know he is here and ask whether she wants to speak with him.",
        "Document the interaction.",
      ],
      rubric: ["sa-p3", "sa-c3"],
      choices: [
        {
          id: "c-protect",
          label: "I told the officer I cannot share any health information without her consent, offered to ask her if she wants to speak with him, and documented the conversation.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Correct. Without her consent, a warrant or a court order, her health information stays confidential. " +
            "Offering her the choice keeps her in control.",
        },
        {
          id: "c-share",
          label: "I gave the officer a summary of what she told me because it is a serious crime.",
          next: "s-share",
          quality: "unsafe",
          feedback:
            "This is a breach of confidentiality. The seriousness of the crime alone does not create a duty or a right to disclose for a capable adult. " +
            "It could also harm her trust and her willingness to seek care.",
        },
        {
          id: "c-copy",
          label: "I told him I would print the chart once the nurse examiner is done.",
          next: "s-share",
          quality: "unsafe",
          feedback:
            "Records go to police only with the patient's written consent, a warrant or a court order. " +
            "You should decline, offer to pass on a message and document the request.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-share",
      phase: "A few minutes later",
      text: "The nurse examiner overhears and asks you to stop. She reminds you that the patient has not consented. You apologize to the officer and tell him you cannot share information. You plan to disclose the error to the patient.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Discharge",
      prompt: "The CT angiogram is normal. What is your discharge and follow up plan?",
      seconds: 75,
      modelAnswer: [
        "Safety: a safe place to stay tonight with her friend. Screen for suicidal thoughts.",
        "Return at once for new neck pain, voice change, trouble breathing or swallowing, weakness, vision change or severe headache.",
        "Follow up at the treatment centre in 1 to 2 weeks for PEP review, side effects and repeat testing.",
        "Repeat pregnancy test in 3 weeks if no normal period.",
        "Repeat HIV and syphilis testing at about 6 weeks and 3 months.",
        "Counselling and crisis line numbers. Written information because memory may be poor.",
      ],
      rubric: ["sa-d1", "sa-a3"],
      next: "q-document",
    },
    {
      kind: "question",
      id: "q-document",
      phase: "Documentation",
      prompt: "How do you document this visit?",
      seconds: 60,
      modelAnswer: [
        "Objective and factual. Use her own words in quotes for key statements.",
        "Describe injuries by size, shape, colour and location. Use a body diagram.",
        "Avoid legal conclusions such as whether a crime occurred or whether she consented.",
        "Record consents given and declined, and medications with doses.",
        "Record the police interaction and what was or was not shared.",
      ],
      rubric: ["sa-c4"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She chooses to have an evidence kit collected and stored while she decides about police. She leaves with her friend and her follow up appointment. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "sa-a1",
      competency: "assessment",
      criterion: "approach",
      text: "Screens for injuries first, including strangulation, head injury and intoxication.",
      points: 2,
      teaching: "Medical stability comes before forensic care. Ask directly about strangulation because patients may not volunteer it.",
      source: "ontario-network",
    },
    {
      id: "sa-a2",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Recognizes non fatal strangulation with loss of consciousness, petechiae and voice change as high risk.",
      points: 2,
      teaching: "Strangulation can cause arterial dissection and delayed airway swelling even with minimal external marks.",
      source: "strangulation",
    },
    {
      id: "sa-a3",
      competency: "assessment",
      criterion: "approach",
      text: "Screens for suicidal thoughts and ongoing safety before discharge.",
      points: 1,
      teaching: "Sexual assault raises the risk of depression, PTSD and suicide. Ask directly and plan where she will stay.",
      source: "ontario-network",
    },
    {
      id: "sa-m1",
      competency: "management",
      criterion: "data",
      text: "Orders CT angiography of the head and neck after strangulation with loss of consciousness.",
      points: 3,
      critical: true,
      teaching: "Loss of consciousness means the neck vessels were compressed. CT angiography screens for carotid and vertebral injury.",
      source: "strangulation",
    },
    {
      id: "sa-m2",
      competency: "management",
      criterion: "plan",
      text: "Offers a copper IUD and ulipristal 30 mg PO as emergency contraception within 120 hours.",
      points: 3,
      critical: true,
      teaching: "A copper IUD within 7 days is most effective. Ulipristal outperforms levonorgestrel, especially later and at higher weight.",
      source: "sogc-ec",
    },
    {
      id: "sa-m3",
      competency: "management",
      criterion: "plan",
      text: "Offers gonorrhea, chlamydia and trichomonas prophylaxis, for example ceftriaxone 500 mg IM and doxycycline 100 mg twice daily for 7 days.",
      points: 2,
      teaching: "Canadian guidance now recommends ceftriaxone 500 mg IM for gonorrhea. Add chlamydia coverage if it has not been excluded.",
      source: "phac-gc",
    },
    {
      id: "sa-m4",
      competency: "management",
      criterion: "plan",
      text: "Offers HIV post exposure prophylaxis within 72 hours with a three drug regimen for 28 days and baseline testing.",
      points: 2,
      teaching: "PEP works best when started early and no later than 72 hours. Give a starter pack and arrange follow up.",
      source: "hiv-pep",
    },
    {
      id: "sa-c1",
      competency: "communication",
      criterion: "plan",
      text: "Uses a trauma informed approach: privacy, explanation, permission and control over each step.",
      points: 2,
      teaching: "Giving the patient choices at every step counters the loss of control that defines an assault.",
      source: "ontario-network",
    },
    {
      id: "sa-c2",
      competency: "communication",
      criterion: "plan",
      text: "Explains the evidence kit clearly, including the time window of about 12 days and the option of storage without a police report.",
      points: 2,
      teaching: "Patients can have evidence collected and stored while they decide. Care does not depend on reporting.",
      source: "ontario-network",
    },
    {
      id: "sa-c3",
      competency: "communication",
      criterion: "plan",
      text: "Responds to the police officer politely, offers to pass on a message and documents the request.",
      points: 1,
      teaching: "You can be helpful without disclosing. Ask the patient if she wants to meet the officer.",
      source: "phipa",
    },
    {
      id: "sa-c4",
      competency: "communication",
      criterion: "plan",
      text: "Documents objectively with her words in quotes, a body diagram and no legal conclusions.",
      points: 1,
      teaching: "Clinical notes may be used in court. Describe what you saw and heard. Do not state whether an assault occurred.",
      source: "ontario-network",
    },
    {
      id: "sa-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Offers the sexual assault nurse examiner and treatment centre services without pressure.",
      points: 1,
      teaching: "Specialized centres provide medical, forensic and counselling care. Offer them as options.",
      source: "ontario-network",
    },
    {
      id: "sa-p2",
      competency: "professionalism",
      criterion: "plan",
      text: "States that there is no mandatory reporting of sexual assault of a capable adult in Ontario.",
      points: 2,
      teaching: "Reporting duties exist for a child in need of protection, not for a capable adult. The decision to report is hers.",
      source: "ontario-network",
    },
    {
      id: "sa-p3",
      competency: "professionalism",
      criterion: "plan",
      text: "Refuses to disclose health information to police without consent, a warrant or a court order.",
      points: 3,
      critical: true,
      teaching: "Ontario privacy law protects her health information. Disclosure without authority is a breach of trust and of law.",
      source: "phipa",
    },
    {
      id: "sa-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Arranges follow up at the treatment centre with repeat testing, PEP review, return precautions and crisis resources.",
      points: 2,
      teaching: "Follow up covers PEP adherence, repeat HIV and syphilis testing, pregnancy testing and mental health support.",
      source: "hiv-pep",
    },
  ],
  sources: [
    {
      id: "ontario-network",
      citation: "Ontario Network of Sexual Assault and Domestic Violence Treatment Centres. Guidance on care and evidence collection after sexual assault.",
      url: "https://www.sadvtreatmentcentres.ca/",
    },
    {
      id: "phac-gc",
      citation: "Public Health Agency of Canada. Gonorrhea guide: Treatment and follow up. Interim guidance issued 2023.",
      url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/gonorrhea/treatment-follow-up.html",
    },
    {
      id: "hiv-pep",
      citation: "Tan DHS, et al. Canadian guideline on HIV pre and postexposure prophylaxis: 2025 update. CMAJ. 2025.",
      url: "https://doi.org/10.1503/cmaj.250511",
    },
    {
      id: "sogc-ec",
      citation: "Society of Obstetricians and Gynaecologists of Canada. Clinical practice guideline on emergency contraception.",
    },
    {
      id: "strangulation",
      citation: "Training Institute on Strangulation Prevention. Recommendations for the medical and radiographic evaluation of acute adult non fatal strangulation.",
    },
    {
      id: "phipa",
      citation: "Ontario. Personal Health Information Protection Act, 2004.",
      url: "https://www.ontario.ca/laws/statute/04p03",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
