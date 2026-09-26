// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Preceptor", version: 1 } as const;

const S = {
  horowitz: { id: "horowitz-asq", citation: "Horowitz LM, Bridge JA, Teach SJ, and colleagues. Ask Suicide-Screening Questions (ASQ): a brief instrument for the pediatric emergency department. Arch Pediatr Adolesc Med. 2012.", url: "https://pubmed.ncbi.nlm.nih.gov/23027429/" },
  lanzillo: { id: "lanzillo-preteen", citation: "Lanzillo EC, Horowitz LM, Wharff EA, and colleagues. The importance of screening preteens for suicide risk in the emergency department. Hosp Pediatr. 2019.", url: "https://pubmed.ncbi.nlm.nih.gov/30858170/" },
  cpsYouth: { id: "cps-youth", citation: "Korczak DJ, Canadian Paediatric Society Mental Health and Developmental Disabilities Committee. Suicidal ideation and behaviour. Paediatr Child Health. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/26175563/" },
  stanley12: { id: "stanley-2012", citation: "Stanley B, Brown GK. Safety planning intervention: a brief intervention to mitigate suicide risk. Cogn Behav Pract. 2012." },
  stanley18: { id: "stanley-2018", citation: "Stanley B, Brown GK, Brenner LA, and colleagues. Comparison of the safety planning intervention with follow-up vs usual care of suicidal patients treated in the emergency department. JAMA Psychiatry. 2018.", url: "https://pubmed.ncbi.nlm.nih.gov/29998307/" },
  yip: { id: "yip-means", citation: "Yip PSF, Caine E, Yousuf S, and colleagues. Means restriction for suicide prevention. Lancet. 2012.", url: "https://pubmed.ncbi.nlm.nih.gov/22726520/" },
  posner: { id: "posner-cssrs", citation: "Posner K, Brown GK, Stanley B, and colleagues. The Columbia-Suicide Severity Rating Scale: initial validity and internal consistency findings from three multisite studies with adolescents and adults. Am J Psychiatry. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/22193671/" },
  safet: { id: "safe-t", citation: "Substance Abuse and Mental Health Services Administration. Suicide Assessment Five-step Evaluation and Triage (SAFE-T) pocket card for clinicians. 2009.", url: "https://store.samhsa.gov/product/SAFE-T-Pocket-Card-Suicide-Assessment-Five-Step-Evaluation-and-Triage-for-Clinicians/sma09-4432" },
  chung: { id: "chung-discharge", citation: "Chung DT, Ryan CJ, Hadzi-Pavlovic D, and colleagues. Suicide rates after discharge from psychiatric facilities: a systematic review and meta-analysis. JAMA Psychiatry. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/28564699/" },
  grigoriadis: { id: "grigoriadis-perinatal", citation: "Grigoriadis S, Wilton AS, Kurdyak PA, and colleagues. Perinatal suicide in Ontario, Canada: a 15-year population-based study. CMAJ. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/28847780/" },
  canmat: { id: "canmat-2023", citation: "Lam RW, Kennedy SH, Adams C, and colleagues. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Can J Psychiatry. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/38711351/" },
  miller: { id: "ed-safe", citation: "Miller IW, Camargo CA, Arias SA, and colleagues. Suicide prevention in an emergency department population: the ED-SAFE study. JAMA Psychiatry. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/28456130/" },
  motto: { id: "motto-contact", citation: "Motto JA, Bostrom AG. A randomized controlled trial of postcrisis suicide prevention. Psychiatr Serv. 2001.", url: "https://pubmed.ncbi.nlm.nih.gov/11376235/" },
  appelbaum: { id: "appelbaum-capacity", citation: "Appelbaum PS. Assessment of patients' competence to consent to treatment. N Engl J Med. 2007.", url: "https://pubmed.ncbi.nlm.nih.gov/17978292/" },
  bolton: { id: "bolton-bmj", citation: "Bolton JM, Gunnell D, Turecki G. Suicide risk assessment and intervention in people with mental illness. BMJ. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/26552947/" },
  hawton: { id: "hawton-adolescents", citation: "Hawton K, Saunders KEA, O'Connor RC. Self-harm and suicide in adolescents. Lancet. 2012.", url: "https://pubmed.ncbi.nlm.nih.gov/22726518/" },
  owens: { id: "owens-repetition", citation: "Owens D, Horrocks J, House A. Fatal and non-fatal repetition of self-harm: systematic review. Br J Psychiatry. 2002.", url: "https://pubmed.ncbi.nlm.nih.gov/12204922/" },
  russell: { id: "russell-chosen-name", citation: "Russell ST, Pollitt AM, Li G, Grossman AH. Chosen name use is linked to reduced depressive symptoms, suicidal ideation, and suicidal behavior among transgender youth. J Adolesc Health. 2018.", url: "https://pubmed.ncbi.nlm.nih.gov/29609917/" },
  bohnert: { id: "bohnert-opioids", citation: "Bohnert ASB, Ilgen MA. Understanding links among opioid use, overdose, and suicide. N Engl J Med. 2019.", url: "https://pubmed.ncbi.nlm.nih.gov/30601750/" },
  acep: { id: "acep-psych", citation: "American College of Emergency Physicians Clinical Policies Subcommittee on the Adult Psychiatric Patient, Nazarian DJ, Broder JS, and colleagues. Clinical policy: critical issues in the diagnosis and management of the adult psychiatric patient in the emergency department. Ann Emerg Med. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/28335913/" },
  vac: { id: "vac-assistance", citation: "Veterans Affairs Canada. Talk to a mental health professional: VAC Assistance Service. 2026.", url: "https://www.veterans.gc.ca/en/contact-us/talk-mental-health-professional" },
  witt: { id: "witt-cochrane", citation: "Witt KG, Hetrick SE, Rajaram G, and colleagues. Psychosocial interventions for self-harm in adults. Cochrane Database Syst Rev. 2021.", url: "https://doi.org/10.1002/14651858.CD013668.pub2" },
  donovan: { id: "donovan-ed-safety", citation: "Donovan AL, Aaronson EL, Black L, and colleagues. Keeping patients at risk for self-harm safe in the emergency department: a protocolized approach. Jt Comm J Qual Patient Saf. 2021.", url: "https://pubmed.ncbi.nlm.nih.gov/32962905/" },
  tenenbein: { id: "tenenbein-screen", citation: "Tenenbein M. Do you really need that emergency drug screen? Clin Toxicol. 2009.", url: "https://pubmed.ncbi.nlm.nih.gov/19514875/" },
  ccsmh: { id: "ccsmh", citation: "Canadian Coalition for Seniors' Mental Health. National guidelines for seniors' mental health: the assessment of suicide risk and prevention of suicide. 2006.", url: "https://ccsmh.ca/wp-content/uploads/2016/03/NatlGuideline_Suicide.pdf" },
  beck: { id: "beck-intent", citation: "Beck AT, Schuyler D, Herman I. Development of suicidal intent scales. In: Beck AT, Resnik HLP, Lettieri DJ, editors. The Prediction of Suicide. Charles Press. 1974." },
  onMha: { id: "on-mha", citation: "Mental Health Act, R.S.O. 1990, c. M.7 (Ontario), sections 15 to 17 and Forms 1, 2 and 42. Current to 2026.", url: "https://www.ontario.ca/laws/statute/90m07" },
  bcMha: { id: "bc-mha", citation: "Mental Health Act, R.S.B.C. 1996, c. 288 (British Columbia), sections 22 and 28. Current to 2026.", url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96288_01" },
  abMha: { id: "ab-mha", citation: "Mental Health Act, R.S.A. 2000, c. M-13 (Alberta), sections 2 to 7. Current to 2025.", url: "https://kings-printer.alberta.ca/documents/Acts/M13.pdf" },
  qcP38: { id: "qc-p38", citation: "Act respecting the protection of persons whose mental state presents a danger to themselves or to others, CQLR c. P-38.001 (Quebec), section 7. Current to 2026.", url: "https://www.legisquebec.gouv.qc.ca/en/pdf/cs/P-38.001.pdf" },
  bccsu: { id: "bccsu-oud", citation: "British Columbia Centre on Substance Use and BC Ministry of Health. A guideline for the clinical management of opioid use disorder. 2023 update.", url: "https://www.bccsu.ca/opioid-use-disorder/" },
  karliner: { id: "karliner-interpreters", citation: "Karliner LS, Jacobs EA, Chen AH, Mutha S. Do professional interpreters improve clinical care for patients with limited English proficiency? A systematic review of the literature. Health Serv Res. 2007.", url: "https://pubmed.ncbi.nlm.nih.gov/17362215/" },
  kirmayer: { id: "kirmayer-refugees", citation: "Kirmayer LJ, Narasiah L, Munoz M, and colleagues. Common mental health problems in immigrants and refugees: general approach in primary care. CMAJ. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/20603342/" },
  john: { id: "john-cyberbullying", citation: "John A, Glendenning AC, Marchant A, and colleagues. Self-harm, suicidal behaviours, and cyberbullying in children and young people: systematic review. J Med Internet Res. 2018.", url: "https://pubmed.ncbi.nlm.nih.gov/29674305/" },
  cybertip: { id: "cybertip", citation: "Canadian Centre for Child Protection. Cybertip.ca: sextortion guidance for youth and parents. 2026.", url: "https://www.cybertip.ca/en/online-harms/sextortion/" },
  fralick: { id: "fralick-concussion", citation: "Fralick M, Sy E, Hassan A, and colleagues. Association of concussion with the risk of suicide: a systematic review and meta-analysis. JAMA Neurol. 2019.", url: "https://pubmed.ncbi.nlm.nih.gov/30419085/" },
  gournellis: { id: "gournellis-psychotic-depression", citation: "Gournellis R, Tournikioti K, Touloumi G, and colleagues. Psychotic (delusional) depression and completed suicide: a systematic review and meta-analysis. Ann Gen Psychiatry. 2018.", url: "https://pubmed.ncbi.nlm.nih.gov/30258483/" },
  borges: { id: "borges-acute-alcohol", citation: "Borges G, Bagge CL, Cherpitel CJ, and colleagues. A meta-analysis of acute use of alcohol and the risk of suicide attempt. Psychol Med. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/27928972/" },
  line988: { id: "988", citation: "Public Health Agency of Canada. 9-8-8 Suicide Crisis Helpline: call or text, 24 hours a day. 2026.", url: "https://988.ca" },
  marionneau: { id: "marionneau-gambling", citation: "Marionneau V, Nikkinen J. Gambling-related suicides and suicidality: a systematic review of qualitative evidence. Front Psychiatry. 2022.", url: "https://doi.org/10.3389/fpsyt.2022.980303" },
  yakovenko: { id: "yakovenko-oud", citation: "Yakovenko I, Mukaneza Y, Germe K, and colleagues. Management of opioid use disorder: 2024 update to the national clinical practice guideline. CMAJ. 2024.", url: "https://doi.org/10.1503/cmaj.241173" },
} satisfies Record<string, Source>;

export const SUICIDE_RISK_S52: Samp[] = [
  /* 16 Positive screen at triage in a community hospital ------------------ */
  {
    id: "suicide-risk-16",
    topic: "suicide-risk",
    title: "Rolled ankle at basketball practice",
    stem:
      "You are working in a community hospital emergency department. A 14-year-old girl presents with her father after rolling her right ankle at basketball practice 2 hours ago. She can bear weight with a limp. The department screens every patient aged 10 and over with a 4-question suicide screen at triage. She answered yes to wishing she were dead in the past few weeks. She answered no to feeling her family would be better off without her, to thoughts of killing herself in the past week and to any past attempt. She answered no when asked if she is thinking of killing herself right now. She has no medical history and takes no medications. There is mild swelling below the lateral malleolus with no bony tenderness.",
    vitals: { temperature: "36.8°C oral", pulse: "88/minute", resp: "16/minute", bp: "108/66 mmHg", o2sat: "99% on room air", weight: "48 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in response to her screening result?",
        options: ["Brief suicide safety assessment today", "Discharge with a crisis line number", "Referral to her family doctor next week", "Repeat the screen at her follow-up visit", "Search of belongings and constant observation"],
        correct: 0,
        explanation:
          "A yes to any of the four questions is a positive screen, so she needs a brief suicide safety assessment by a clinician before she leaves. That assessment decides whether a full mental health evaluation is needed. She answered no to the acuity question about thoughts of killing herself right now, so this is a non-acute positive that does not call for immediate constant observation and a search. A crisis number alone, a deferred referral or a repeat screen later all leave a positive screen unassessed at the one visit where it was found.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "horowitz-asq",
      },
      {
        id: "q2",
        kind: "single",
        update: "You speak with her alone. She has felt low since her friend group excluded her in the fall, and she has been sleeping poorly.",
        prompt: "Which of the following additional findings would most increase your concern about her level of risk?",
        options: ["Looking up ways to die online", "Lower grades this term", "Poor sleep for 3 weeks", "Recent breakup with a boyfriend", "Weekend arguments with her father"],
        correct: 0,
        explanation:
          "Searching for ways to die shows that she is thinking about a method, which marks a move from passive wishes toward active ideation and planning. Structured inquiry such as the Columbia scale grades ideation by method, intent and plan because each step places a patient in a higher risk band than a passive wish. Falling grades, poor sleep, a breakup and family conflict are real stressors that deserve attention in her plan. None of them shows movement toward acting on the thoughts in the way method searching does.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "posner-cssrs",
      },
      {
        id: "q3",
        kind: "single",
        update: "She has passive wishes only, with no plan, intent or preparatory acts. She is close to her father, who will be home with her, and she agrees to see the school counsellor.",
        prompt: "Which of the following is the most appropriate disposition for her from the emergency department?",
        options: ["Admission to a paediatric bed for observation", "Discharge with a safety plan and follow-up", "Overnight stay pending psychiatry review", "Transfer to a paediatric mental health unit", "Voluntary admission to adolescent psychiatry"],
        correct: 1,
        explanation:
          "Passive wishes with no plan, intent or preparatory acts, an engaged adolescent and a supportive parent at home place her at low acute risk. She can go home with a written safety plan, a named follow-up and her father informed. Admission to a paediatric or psychiatric bed and transfer to a mental health unit are for adolescents at higher acute risk or without a safe home. Keeping her overnight for psychiatry adds nothing a low risk assessment has not already answered.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "cps-youth",
      },
      {
        id: "q4",
        kind: "menu",
        select: 2,
        update: "Her father keeps his zopiclone and a large bottle of acetaminophen in an unlocked kitchen cupboard.",
        prompt: "Which of the following home safety measures should you advise her father to take before she goes home?",
        options: ["Ask her to sign a no-harm contract", "Check her phone messages each night", "Dispose of unneeded medications", "Hide medications in a bedroom drawer", "Keep her home from school for a week", "Lock up medications kept at home", "Remove the lock from her bedroom door"],
        correct: [2, 5],
        explanation:
          "Adolescent overdoses usually use medications found at home, so parents should dispose of what is not needed and lock up the rest. Reducing access to lethal means lowers deaths because many crises are brief and the method at hand matters. Hidden medications are easily found by a teenager who lives in the house. A no-harm contract offers no proven protection. Nightly phone checks, a removed door lock and a week off school strain trust and add isolation without reducing access to means.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "yip-means",
      },
    ],
    sources: [S.horowitz, S.posner, S.cpsYouth, S.yip],
    ...META,
  },
  /* 17 Found in a running car ---------------------------------------------- */
  {
    id: "suicide-risk-17",
    topic: "suicide-risk",
    title: "An engine running in the garage",
    stem:
      "A 46-year-old man is brought to an Ontario emergency department by ambulance at 03:00. A neighbour heard an engine running in his closed garage and found him drowsy in the driver's seat. He says he had a few beers and fell asleep listening to the radio. His wife moved out 6 weeks ago. He has hypertension and takes ramipril. He is now awake and oriented, with a headache and nausea. Carboxyhemoglobin is 22%. The ECG shows sinus rhythm with no ischemic changes. He is receiving oxygen by non-rebreather mask.",
    vitals: { temperature: "36.6°C oral", pulse: "102/minute", resp: "18/minute", bp: "138/84 mmHg", o2sat: "99% on 15 L/minute by non-rebreather mask" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "The paramedics return from a second call nearby and describe the garage scene in more detail.",
        prompt: "Which of the following scene findings most strongly suggests this exposure was intentional?",
        options: ["Alcohol on his breath", "Empty beer cans on the car floor", "Engine running with the car in park", "Garage door closed at night", "Note to his daughter on the seat"],
        correct: 4,
        explanation:
          "A note addressed to a family member is a preparatory act and the strongest scene evidence of suicidal intent. Alcohol on his breath and beer cans fit his account of falling asleep, although alcohol also raises risk by lowering inhibition. An engine left running in park inside a closed garage at night can occur in a true accident. His own account must be tested against collateral like this, because patients often minimize an attempt that has been interrupted.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "beck-intent",
      },
      {
        id: "q2",
        kind: "single",
        update: "He looks at the note and says it was a stupid moment. He has slept poorly for a month and says he is worthless. He asks to leave now.",
        prompt: "Which of the following is the most appropriate action under the Ontario Mental Health Act?",
        options: ["Ask his wife to consent to his admission", "Ask police to hold him under section 17", "Complete a Form 1 before he leaves", "Discharge him as he now denies intent", "Seek a Form 2 from a justice of the peace"],
        correct: 2,
        explanation:
          "He has attempted to harm himself and has features of a major depressive episode that make serious bodily harm likely, which meets the serious harm test. The physician who examined him can sign a Form 1 now. Section 17 is a police power for behaviour they observe in the community, and a Form 2 is how a member of the public obtains an examination for someone not yet seen by a physician. His wife cannot consent to the admission of a capable adult. A retraction after an interrupted attempt does not settle his risk.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "on-mha",
      },
      {
        id: "q3",
        kind: "menu",
        select: 3,
        update: "His wife arrives. His business closed in March, he drinks about 8 beers a night and his brother died by suicide. He attends church weekly, still lives in the family home and has his 2 children every weekend.",
        prompt: "Which of the following factors in his history raise his risk of suicide?",
        options: ["Brother's death by suicide", "Business loss this year", "Daily heavy alcohol use", "Regular church attendance", "Stable housing in his own home", "Weekend visits with his children"],
        correct: [0, 1, 2],
        explanation:
          "A family history of suicide, a recent financial loss and heavy daily drinking each add to his risk, on top of male sex, separation and depressive symptoms. Alcohol also increases impulsivity and the lethality of an attempt. Religious involvement, stable housing and regular contact with his children act as protective factors. They should be named in his formulation and used in his plan, but they do not outweigh an interrupted attempt with a note.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "safe-t",
      },
    ],
    sources: [S.beck, S.onMha, S.safet],
    ...META,
  },
  /* 18 Refusing dialysis --------------------------------------------------- */
  {
    id: "suicide-risk-18",
    topic: "suicide-risk",
    alsoTopics: ["pulmonary-edema"],
    title: "Missed sessions at the dialysis unit",
    stem:
      "A 78-year-old woman is brought to the emergency department by her daughter. She has end stage kidney disease and has had hemodialysis 3 times a week for 3 years. She missed her last 2 sessions and says she is done with dialysis. Her husband died 4 months ago and she now lives alone. She has type 2 diabetes and takes insulin glargine. She is alert and oriented. She has pitting edema to the knees and fine crackles at both lung bases. Potassium is 6.3 mmol/L. The ECG shows peaked T waves with a normal QRS duration.",
    vitals: { temperature: "36.5°C oral", pulse: "64/minute", resp: "20/minute", bp: "168/90 mmHg", o2sat: "94% on room air", weight: "61 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following additional findings would most suggest that depression is driving her refusal of dialysis?",
        options: ["Fatigue after each dialysis session", "Needle anxiety at each session", "Preference to die in her own bed", "Stable wish expressed over a year", "Worthlessness since her husband died"],
        correct: 4,
        explanation:
          "Pervasive worthlessness that began after bereavement is a core feature of a depressive episode, and it can turn a treatment refusal into hidden suicidality. Older adults often express suicidal wishes as stopping treatment rather than as an overt attempt. Fatigue after dialysis is common and has many physical causes. Needle anxiety is a practical barrier that can be addressed. A preference for a home death and a wish held steadily over a year point toward a considered, values based decision.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "ccsmh",
      },
      {
        id: "q2",
        kind: "single",
        update: "She says she has felt worthless since the funeral and would rather not wake up. You need to judge her capacity to refuse dialysis.",
        prompt: "Which of the following questions best tests her appreciation of the consequences of refusal?",
        options: ["Can you tell me today's date and place?", "What happens to people who stop dialysis?", "What will happen to you if you stop?", "Who would decide for you if you could not?", "Would your husband have wanted this?"],
        correct: 2,
        explanation:
          "Appreciation is the ability to apply the facts to one's own situation, so the question must ask what will happen to her. Depression most often impairs this ability, for example when a patient knows that stopping dialysis kills people but believes it does not matter in her case. Asking what happens to people in general tests understanding, not appreciation. Orientation is not capacity. Naming a substitute decision maker and invoking her husband's wishes do not test any of the four abilities.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "appelbaum-capacity",
      },
      {
        id: "q3",
        kind: "single",
        update: "She understands the facts but says her death would not matter to anyone. She agrees to medical treatment of her potassium but still declines dialysis.",
        prompt: "Which of the following is the most appropriate response to her refusal of dialysis at this time?",
        options: ["Arrange home hospice and stop dialysis", "Dialysis on her daughter's consent", "Dialysis tonight without her consent", "Discharge with nephrology follow-up this week", "Psychiatric assessment of her capacity"],
        correct: 4,
        explanation:
          "Her statement that her death would not matter, after a bereavement with depressive features, raises real doubt about her appreciation. A psychiatric assessment of capacity and of treatable depression is needed before her refusal is accepted as final. Arranging hospice or discharging her now treats a possibly depressive refusal as a settled choice. Her daughter can consent only if she is found incapable. Dialysis without consent is not justified while she is conscious and refusing, with no finding of incapacity.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "ccsmh",
      },
    ],
    sources: [S.ccsmh, S.appelbaum],
    ...META,
  },
  /* 19 British Columbia medical certificate -------------------------------- */
  {
    id: "suicide-risk-19",
    topic: "suicide-risk",
    title: "Nine days after leaving the ward",
    stem:
      "A 31-year-old man is brought to a British Columbia emergency department by his sister. He has schizophrenia and was discharged from the psychiatric unit 9 days ago after an admission for suicidal thoughts. He stopped his olanzapine 5 days ago. He has not slept for 2 nights and believes his food is being poisoned. Yesterday he told his sister it would be easier to be dead. He uses cannabis on weekends. He has been unemployed for 2 years, has gained weight on olanzapine and has a mother with schizophrenia. He is guarded and pacing, and says he will leave if he is kept waiting. There are no signs of intoxication or withdrawal.",
    vitals: { temperature: "36.9°C oral", pulse: "108/minute", resp: "18/minute", bp: "132/78 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history most increases his short term risk of suicide?",
        options: ["Cannabis use on weekends", "Discharge from hospital 9 days ago", "Family history of schizophrenia", "Unemployment for 2 years", "Weight gain on olanzapine"],
        correct: 1,
        explanation:
          "The weeks after discharge from a psychiatric unit carry the highest suicide rate, especially for patients who were admitted with suicidal thoughts, as he was. He has also stopped his antipsychotic and has active paranoid ideas. Weekend cannabis use and unemployment add to long term risk but are weaker and less time bound. A family history of schizophrenia is a risk for the illness, not for suicide. Weight gain can drive nonadherence but is not itself a strong risk factor.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "chung-discharge",
      },
      {
        id: "q2",
        kind: "single",
        update: "He stands to leave. You decide to complete a medical certificate for involuntary admission under the British Columbia Mental Health Act.",
        prompt: "Which of the following must the medical certificate state as your opinion?",
        options: ["Assessed by a psychiatrist within 24 hours", "Incapable of consenting to treatment", "Not suitable for voluntary admission", "Recent attempt to cause bodily harm", "Risk of harm that is imminent"],
        correct: 2,
        explanation:
          "The British Columbia certificate states that the person has a mental disorder, requires treatment in or through a designated facility, requires care, supervision and control to prevent substantial deterioration or for protection, and cannot suitably be admitted as a voluntary patient. The act does not require imminent harm or a recent attempt, and substantial deterioration alone can qualify. Any physician or nurse practitioner who examined him can complete it. Incapacity to consent is not one of the criteria.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "bc-mha",
      },
      {
        id: "q3",
        kind: "single",
        update: "You complete the certificate at 14:00 and he is admitted to the designated psychiatric unit at 16:00.",
        prompt: "Which of the following is required for his detention to continue beyond 48 hours after admission?",
        options: ["Consent from his sister as near relative", "Order from a Provincial Court judge", "Review panel hearing within 48 hours", "Second certificate by another physician", "Second certificate from the same physician"],
        correct: 3,
        explanation:
          "One medical certificate allows admission and detention for up to 48 hours. Detention continues past that only if a second certificate is completed within 48 hours of admission, and when the first came from a physician the second must come from a different physician. A near relative's consent cannot authorize involuntary detention. A judge's warrant is a route for bringing someone in, not for continuing detention. A review panel hearing is a right he can apply for, not a precondition.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "bc-mha",
      },
    ],
    sources: [S.chung, S.bcMha],
    ...META,
  },
  /* 20 Rural Alberta admission certificate --------------------------------- */
  {
    id: "suicide-risk-20",
    topic: "suicide-risk",
    alsoTopics: ["lacerations"],
    title: "A snowstorm and a three-hour transfer",
    stem:
      "You are working in a rural Alberta hospital with no psychiatric unit. The nearest designated facility is 3 hours away by road. A 52-year-old woman is brought in by her husband at 21:00 with deep cuts to her left forearm that she made with a kitchen knife. She had been drinking wine. She has had low mood since the farm was put up for sale in the summer. She cut her forearm once before, 2 years ago. The wounds are repaired with intact tendons, nerves and circulation. She is now sober and says she wants to go home.",
    vitals: { temperature: "36.7°C oral", pulse: "92/minute", resp: "16/minute", bp: "124/76 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features, if present, would most indicate high suicidal intent in this attempt?",
        options: ["Called her husband soon afterward", "Cut herself after drinking wine", "Has cut her forearm once before", "Timed for when she expected to be alone", "Used a knife from the kitchen"],
        correct: 3,
        explanation:
          "Choosing a time when no one was expected makes rescue unlikely, which is one of the strongest markers of intent on structured intent scales. Calling for help soon afterward points the other way. Acting after drinking suggests impulsivity rather than planning, although alcohol raises lethality. A prior episode of self-harm raises her long term risk but says little about intent in this act. A kitchen knife reflects what was at hand rather than planning.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "beck-intent",
      },
      {
        id: "q2",
        kind: "single",
        update: "She says there is no point in going on and she will finish it at home. You decide to issue an admission certificate under the Alberta Mental Health Act.",
        prompt: "Which of the following criteria must you be satisfied of before issuing the Alberta admission certificate?",
        options: ["Assessment by two physicians", "Harm that is imminent within 24 hours", "Lack of capacity to consent to treatment", "Potential to benefit from treatment", "Prior psychiatric admission"],
        correct: 3,
        explanation:
          "The Alberta certificate requires a mental disorder, the potential to benefit from treatment for it, a likelihood within a reasonable time of harm to others or negative effects such as substantial deterioration, and unsuitability for admission other than as a formal patient. The act asks for harm within a reasonable time, not imminent harm. One qualified health professional issues each certificate. Two certificates are needed for detention as a formal patient, not for the first. Capacity and past admissions are not criteria.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "ab-mha",
      },
      {
        id: "q3",
        kind: "single",
        update: "You examine her at 22:00 and issue the certificate at 22:30. A snowstorm closes the highway, and transport cannot leave until the next afternoon.",
        prompt: "Which of the following time limits applies to conveying her under this single certificate?",
        options: ["Convey her within 24 hours of examination", "Convey her within 72 hours of issue", "Detain her here for up to 1 month", "Issue a new certificate every 24 hours", "Transfer her within 7 days of issue"],
        correct: 1,
        explanation:
          "One Alberta admission certificate authorizes apprehension and conveyance to a facility, and that authority expires 72 hours after the certificate is issued. The 24 hour period of detention for examination starts when she arrives at the facility, not during the delay. The certificate itself must be issued within 24 hours of the examination, which it was. Detention for 1 month needs two certificates. A 7 day window belongs to other provinces' forms, and reissuing every 24 hours is not required.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "ab-mha",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her husband tells you there are 3 hunting rifles in a locked cabinet in the farmhouse. He asks what he should do before she returns home.",
        prompt: "Which of the following is the most effective advice about the firearms in the home?",
        options: ["Hide the ammunition in the barn", "Keep the rifles in the locked cabinet", "Move the rifles off the farm for now", "Remove the bolts and keep the rifles", "Sell the rifles once she is home"],
        correct: 2,
        explanation:
          "Storing firearms away from the home, with a relative, a retailer or the police, removes the most lethal means from the period of highest risk. Firearm suicides are rarely survived, and many suicidal crises are brief, so distance and delay save lives. Hidden ammunition and a locked cabinet can be found or opened by someone who lives on the farm. Removing bolts reduces but does not remove access. Waiting to sell them until she is home leaves them in place during the riskiest weeks.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "yip-means",
      },
    ],
    sources: [S.beck, S.abMha, S.yip],
    ...META,
  },
  /* 21 Quebec preventive confinement --------------------------------------- */
  {
    id: "suicide-risk-21",
    topic: "suicide-risk",
    title: "Brought in by his roommate",
    stem:
      "A 27-year-old man is brought to a Montreal emergency department by his roommate at 23:00. His partner ended their relationship this afternoon. He told his roommate he would kill himself tonight with the roommate's prescription tablets. He has been unemployed since the spring. He is sober, with a breath alcohol of zero. He is tearful and angry, says life is pointless and states that he will do it as soon as he gets home. He refuses to stay and walks toward the exit. He has no medical history.",
    vitals: { temperature: "36.8°C oral", pulse: "110/minute", resp: "18/minute", bp: "142/86 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following standards must his mental state meet for a physician to confine him preventively in Quebec?",
        options: ["Grave and immediate danger", "Harm within a reasonable time", "Inability to care for himself", "Likely serious bodily harm", "Substantial mental deterioration"],
        correct: 0,
        explanation:
          "Quebec law lets a physician confine a person preventively only when the person's mental state presents a grave and immediate danger to themselves or others. His stated intent to die tonight with a named means, while leaving, meets that standard. Harm within a reasonable time is the Alberta wording. Likely serious bodily harm is the Ontario serious harm test. Substantial deterioration appears in the British Columbia and Ontario criteria. Inability to care for oneself does not meet the Quebec test.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "qc-p38",
      },
      {
        id: "q2",
        kind: "single",
        update: "You decide he presents a grave and immediate danger to himself. A psychiatrist will not be available until morning.",
        prompt: "Which of the following best describes your authority to keep him in hospital without a court order?",
        options: ["Confinement for 21 days by one physician", "Detention only after a psychiatric exam", "Holding him with his mother's consent", "Preventive confinement up to 72 hours", "Provisional confinement without a court"],
        correct: 3,
        explanation:
          "A physician in a Quebec institution may place a person under preventive confinement for up to 72 hours without consent, without a court order and before any psychiatric examination. Beyond 72 hours, continued confinement needs a court order. Provisional confinement for psychiatric examination is court ordered, not a physician's decision. No prior psychiatric exam is needed, which is why the rule exists. A parent cannot consent to the confinement of an adult, and no physician alone can authorize 21 days.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "qc-p38",
      },
      {
        id: "q3",
        kind: "single",
        update: "His roommate says he has taken overdoses twice before after breakups, and he binge drinks on weekends.",
        prompt: "Which of the following factors in his history is the strongest predictor of future death by suicide?",
        options: ["Male sex and young age", "Previous suicide attempts", "Recent romantic breakup", "Unemployment since spring", "Weekend binge drinking"],
        correct: 1,
        explanation:
          "A previous attempt is the strongest single clinical predictor of later suicide, and people who have self-harmed have a risk of death by suicide many times that of the general population in the years that follow. He has two. Young male sex, unemployment and binge drinking each add to risk but more weakly. A breakup is a common trigger for an acute crisis. It matters for timing, but it predicts later death less well than a history of attempts.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "owens-repetition",
      },
    ],
    sources: [S.qcP38, S.owens],
    ...META,
  },
  /* 22 Low risk student, safety plan and follow-up ------------------------- */
  {
    id: "suicide-risk-22",
    topic: "suicide-risk",
    title: "Debts he could no longer hide",
    stem: "A 24-year-old man presents to the emergency department at 21:00 with his partner. Over 8 months he has lost 18 000 dollars on online sports betting, much of it on credit cards, and he told her about it for the first time today. Since then he has thought he would be better off not waking up. He has no plan or intent, has never harmed himself and has no psychiatric history. He drinks two beers on weekends and uses no other drugs. He works full time as an electrician's apprentice and says his partner and parents support him. He has no access to firearms. He feels relieved that he has told her and wants help to stop gambling. His partner will stay with him tonight.",
    vitals: { temperature: "36.8°C oral", pulse: "84/minute", resp: "16/minute", bp: "126/78 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to build his outpatient plan before he goes home?",
        options: [
          "Ask him to sign a no-suicide contract",
          "Give him a printed list of clinics",
          "Keep him until the clinic opens Monday",
          "Let his partner decide the plan for him",
          "Write a safety plan with him and his partner",
        ],
        correct: 4,
        explanation: "His risk is low: passive thoughts without a plan, intent or past self-harm, no psychiatric illness, no firearms, supportive family and a partner staying with him, and he wants help. A safety plan written with him lists his warning signs, coping steps, people who can help, professional and crisis contacts and ways to make his surroundings safer, and his partner can support it. No-suicide contracts are ineffective, and collaborative safety plans are recommended in their place. A printed list of clinics gives him no plan for a crisis. Holding him until Monday is not needed at this level of risk. A plan imposed by his partner leaves out his own engagement.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "stanley-2018",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following should be part of his crisis and follow-up arrangements?",
        options: [
          "9-8-8 crisis line in his plan",
          "Call from the team within 72 hours",
          "Follow-up only if he feels worse",
          "Psychiatric admission tonight",
          "Signed no-suicide contract",
          "Zopiclone 30 tablets for sleep",
        ],
        select: 2,
        correct: [0, 1],
        explanation: "In a large emergency department study, a safety plan that listed crisis contacts, combined with telephone follow-up that began within 72 hours of discharge and continued weekly, was associated with fewer suicidal behaviours over 6 months, 3.03% against 5.29% with usual care. The months after an emergency visit are a high-risk period, so waiting until he feels worse misses them. A no-suicide contract is ineffective. A 30-tablet supply of a sedative adds a means of overdose. Admission is not needed for a man at low risk with support at home.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "stanley-2018",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most important addition to his outpatient plan given what led to this visit?",
        options: [
          "Advice to gamble less often",
          "Antidepressant started today",
          "Couples therapy alone",
          "Debt consolidation loan alone",
          "Specialized gambling treatment service",
        ],
        correct: 4,
        explanation: "In a systematic review of qualitative studies, the two main processes linking gambling to suicidal behaviour were debt and shame, which can also stop people from seeking help, so treatment of the gambling itself is central to his plan. Advice to gamble less does not treat a loss of control that has already cost 18 000 dollars. A debt consolidation loan may ease one pressure but leaves the gambling untreated. Couples therapy alone does not treat the gambling disorder. He has no diagnosis of depression to justify starting an antidepressant tonight.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "marionneau-gambling",
      },
    ],
    sources: [S.stanley18, S.marionneau],
    ...META,
    version: 2,
  },
  /* 23 Lithium counselling at discharge --------------------------------- */
  {
    id: "suicide-risk-23",
    topic: "suicide-risk",
    title: "A late-night text to her brother",
    stem:
      "A 36-year-old woman with bipolar I disorder is brought to the emergency department by her brother. She has been stable for 6 years on lithium 900 mg at bedtime, with a level in range 2 months ago. For 3 weeks she has had low mood, poor sleep and little energy since her father was diagnosed with cancer. Last night she texted her brother that she was tired of fighting her illness. She has passive thoughts of death but no plan, intent or past attempts, and no psychotic or manic symptoms. Four days ago a walk-in clinic started naproxen 500 mg twice daily for wrist tendinitis. She takes no other medications. The on-call psychiatrist agrees with discharge to her brother's home, and her own psychiatrist will see her in 3 days.",
    vitals: { temperature: "36.8°C oral", pulse: "76/minute", resp: "14/minute", bp: "118/74 mmHg", o2sat: "99% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "She asks whether she should stop lithium, since it has not kept her mood up.",
        prompt: "Which of the following is the most accurate advice to give her about her lithium?",
        options: [
          "Halve the lithium dose until mood lifts",
          "Keep lithium at her current dose",
          "Replace lithium with sertraline alone",
          "Stop lithium until she sees psychiatry",
          "Taper lithium off over 2 weeks",
        ],
        correct: 1,
        explanation:
          "Lithium is the gold standard maintenance treatment in bipolar disorder. It prevents both manic and depressive episodes and appears to have an anti-suicidal effect, which matters now that she has thoughts of death. She should keep taking it, and any change is for her psychiatrist in 3 days. Halving the dose, tapering it or stopping it until the psychiatry visit gives up that protection during a risky period. Antidepressant monotherapy is not recommended in bipolar I depression, because trials do not support it and it can switch mood, so sertraline alone is not a safe replacement.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "canmat-bd",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about her lithium now that she takes naproxen?",
        options: [
          "Lithium level at her usual 3-month check",
          "Recheck lithium and creatinine this week",
          "Stop lithium while she takes naproxen",
          "Switch naproxen to ibuprofen",
          "No lithium check for a short course",
        ],
        correct: 1,
        explanation:
          "The Canadian lithium product monograph reports that indomethacin raises steady-state lithium levels by 30 to 59% and that other NSAIDs may have a similar effect, so it advises more frequent lithium levels when they are combined. The CANMAT and ISBD guideline advises a lithium level and kidney function check 5 to 7 days after an NSAID is started, in its advice for older adults. She started naproxen 4 days ago, so a check this week fits, and it is still needed if the naproxen is stopped. Waiting for her routine 3-month level misses the change. A short course still starts the interaction, so it still needs the check. Stopping lithium gives up its protective effect. Ibuprofen is also an NSAID, so switching to it does not avoid the interaction.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "carbolith-pm",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate analgesic for her wrist while she takes lithium?",
        options: [
          "acetaminophen 1 g PO every 6 hours",
          "celecoxib 200 mg PO daily",
          "ibuprofen 400 mg PO every 6 hours",
          "ketorolac 10 mg PO every 6 hours",
          "naproxen 250 mg PO twice daily",
        ],
        correct: 0,
        explanation:
          "Acetaminophen is not among the drugs that the CANMAT and ISBD guideline lists as affecting lithium monitoring, so it treats her tendinitis pain without adding to the interaction. Celecoxib, ibuprofen and ketorolac are all NSAIDs, and a lower dose of naproxen is still an NSAID. Each would call for the same lithium and kidney monitoring, and NSAIDs also add to the long-term kidney risk of lithium.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "canmat-bd",
      },
    ],
    sources: [
      {
        id: "canmat-bd",
        citation: "Yatham LN, Kennedy SH, Parikh SV, et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord. 2018.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5947163/",
      },
      {
        id: "carbolith-pm",
        citation: "Bausch Health Canada. Carbolith (lithium carbonate capsules) product monograph. Revised 2019.",
        url: "https://pdf.hres.ca/dpd_pm/00051552.PDF",
      },
    ],
    ...META,
    version: 2,
  },
  /* 24 Three weeks after a cesarean birth ---------------------------------- */
  {
    id: "suicide-risk-24",
    topic: "suicide-risk",
    title: "Pain at the incision three weeks after birth",
    stem:
      "A 31-year-old woman presents to the emergency department with 3 days of pain at her cesarean incision. She delivered her first baby 3 weeks ago. The wound is clean and dry with no erythema, discharge or fluctuance. She is tearful and says she has not slept more than 2 hours at a time since the birth. Her partner, who is holding the baby, says she has stopped eating and keeps saying she is a bad mother. She has no psychiatric history. She takes no medications.",
    vitals: { temperature: "36.9°C oral", pulse: "92/minute", resp: "16/minute", bp: "118/74 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: ["Ask directly about thoughts of self-harm", "Book a public health nurse home visit", "Prescribe zopiclone for sleep at night", "Reassure her the baby blues will pass", "Suggest her partner take the night feeds"],
        correct: 0,
        explanation:
          "Guilt, poor appetite and insomnia 3 weeks after birth go beyond the baby blues, which usually settle within 2 weeks. The incision pain is a common entry point for a depressed mother who does not name her mood. She must be asked directly about thoughts of self-harm and of harming the baby. Reassurance, a home visit, night feeds by her partner and a hypnotic may all have a place later, but none comes before a direct suicide inquiry.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "grigoriadis-perinatal",
      },
      {
        id: "q2",
        kind: "single",
        update: "She says she often thinks the baby would be better off without her and that she would not mind not waking up.",
        prompt: "Which of the following findings about perinatal suicide in Ontario should shape your assessment of her?",
        options: ["Breastfeeding protects against suicide", "Most had recent mental health care", "Rates are highest in large cities", "Risk ends after the sixth week postpartum", "Violent methods are used more often"],
        correct: 4,
        explanation:
          "In an Ontario population study, women who died by suicide in pregnancy or the first postpartum year used violent methods more often than other women who died by suicide. That lethality is a reason to treat her ideation seriously. Most of these deaths came late in the first year, so risk does not end at 6 weeks. Only about 4 in 10 had mental health contact in the month before death. Rates were highest in rural and remote regions. The study offers no evidence that breastfeeding protects against suicide.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "grigoriadis-perinatal",
      },
      {
        id: "q3",
        kind: "single",
        update: "She has no plan, intent or psychotic symptoms and no thoughts of harming the baby. Her mother is moving in to help. The perinatal mental health clinic can see her in 2 days.",
        prompt: "Which of the following is the most appropriate disposition for her from the emergency department?",
        options: ["Admission to the postpartum ward", "Crisis team visit only if she calls", "Discharge with clinic visit in 2 days", "Discharge with family physician in 6 weeks", "Separate her from the baby at home"],
        correct: 2,
        explanation:
          "Passive ideation with no plan, intent or psychosis, a mother living with her and a perinatal clinic visit in 2 days support discharge with a safety plan. The clinic can start treatment and follow her closely. Waiting 6 weeks for her family physician leaves her untreated through a risky period. A crisis visit only if she calls depends on her reaching out while unwell. Admission is not needed at this level of risk, and separation from the baby is not indicated without thoughts of harming the infant.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "grigoriadis-perinatal",
      },
    ],
    sources: [S.grigoriadis],
    ...META,
  },
  /* 25 Fentanyl overdose called an accident -------------------------------- */
  {
    id: "suicide-risk-25",
    topic: "suicide-risk",
    alsoTopics: ["tox"],
    title: "Revived in a bus shelter",
    stem:
      "A 29-year-old man is brought to a Winnipeg emergency department by ambulance. A passerby found him unresponsive in a bus shelter. Paramedics gave naloxone 0.4 mg IM twice with a good response. He says he used fentanyl as usual and it must have been a strong batch. He has opioid use disorder and had 2 weeks without use after a detox stay that ended 5 days ago. His mother died in the summer. He is now alert, irritable and yawning, with 5 mm pupils.",
    vitals: { temperature: "36.4°C oral", pulse: "96/minute", resp: "16/minute", bp: "128/80 mmHg", o2sat: "97% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "You speak with him alone about the hour before he used.",
        prompt: "Which of the following findings would most suggest that this overdose was intentional?",
        options: ["Bought fentanyl from a new dealer", "Had 2 overdoses this year", "Injected alone at the shelter", "Says he did not care if he woke up", "Used more after 2 weeks sober"],
        correct: 3,
        explanation:
          "Not caring whether he woke up shows passive intent, and many overdoses called accidental sit on a continuum between accidental and suicidal. It is a reason to complete a full suicide assessment. A new supplier and using after lost tolerance explain an accidental overdose. Using alone raises the risk of death but not of intent. Prior overdoses raise future risk of both overdose and suicide, but they do not show intent in this event.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "bohnert-opioids",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes the relationship between opioid overdose and suicide in patients like him?",
        options: ["Accidental overdose needs no risk review", "Fentanyl overdoses are unintentional", "Intent in overdose is often ambivalent", "Only a note shows suicidal intent", "Risk falls once he stops using"],
        correct: 2,
        explanation:
          "Many people who overdose on opioids describe mixed or passive intent, so the line between accidental and intentional overdose is blurred. Every overdose deserves a direct question about intent. Fentanyl does not make an overdose accidental by default. Most suicides leave no note. Stopping use does not end risk, because depression, loss and the period after detox or treatment all carry their own risk.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "bohnert-opioids",
      },
      {
        id: "q3",
        kind: "menu",
        select: 3,
        update: "He denies current suicidal intent after a full assessment and has a friend who will stay with him. He asks for help with his opioid use.",
        prompt: "Which of the following should be part of his discharge plan?",
        options: ["Buprenorphine offered in the department", "Discharge only once a urine screen is clear", "Follow-up with a named clinician this week", "Night-time benzodiazepine for sleep", "Police report about his drug supply", "Referral to detox without medication", "Take-home naloxone kit", "Tapering supply of oral morphine"],
        correct: [0, 2, 6],
        explanation:
          "Opioid agonist treatment with buprenorphine, which can be started in the department once he is in withdrawal, is a preferred first-line treatment for opioid use disorder in the 2024 national guideline. A take-home naloxone kit and a named follow-up this week cover the high risk days after discharge. The guideline advises against withdrawal management as a standalone treatment, and detox without medication leaves him with lost tolerance, which is how this overdose happened. A benzodiazepine adds respiratory depression. A short morphine taper is withdrawal management by another name, not maintenance treatment. A urine screen and a police report do not change his care.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "yakovenko-oud",
      },
    ],
    sources: [S.bohnert, S.yakovenko],
    ...META,
  },
  /* 26 Self-harm in a transgender adolescent ------------------------------ */
  {
    id: "suicide-risk-26",
    topic: "suicide-risk",
    alsoTopics: ["lacerations"],
    title: "Staying with a friend's family",
    stem:
      "A 17-year-old transgender girl presents to the emergency department with her friend's mother after making superficial cuts to both thighs with a razor blade last night. She says she cuts to feel something when she goes numb, not to die. She has cut herself on and off for 2 years. Last week her parents told her she could not live at home unless she stopped presenting as a girl, and she has stayed with her friend's family since. Her parents do not use her chosen name. She is sober. The cuts are superficial and need no closure.",
    vitals: { temperature: "36.6°C oral", pulse: "86/minute", resp: "14/minute", bp: "114/68 mmHg", o2sat: "99% on room air", weight: "57 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following statements about her self-harm is most accurate for your risk assessment?",
        options: ["Later suicide risk rises after self-harm", "Most teen self-harm is attention seeking", "Superficial wounds show low future risk", "Two years of cutting lowers present risk", "Wanting to feel something rules out intent"],
        correct: 0,
        explanation:
          "Self-harm in adolescence, whatever the stated motive, is one of the strongest predictors of later suicide, so it calls for a full suicide assessment. Wanting to escape numbness does not rule out suicidal thoughts, which can coexist or emerge later. The depth of the wounds does not reliably track intent or future risk. A long history of cutting points to ongoing distress, not tolerance. Calling self-harm attention seeking discourages disclosure and misses real risk.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "hawton-adolescents",
      },
      {
        id: "q2",
        kind: "single",
        update: "She says her friend's family calls her by her chosen name, and her teachers started doing so this term.",
        prompt: "Which of the following is most associated with lower suicidal ideation in transgender youth like her?",
        options: ["Avoiding talk about gender identity", "Chosen name use across settings", "Delaying transition until age 18", "Limiting her time online", "Moving to a new school"],
        correct: 1,
        explanation:
          "In a study of transgender youth, use of their chosen name in more settings, such as home, school and work, was linked to fewer depressive symptoms, less suicidal ideation and less suicidal behaviour. Her friend's family and teachers already offer this, which is a protective factor to name in her plan. Avoiding discussion of identity signals rejection. Delaying transition, limiting time online and changing schools have no such evidence and may cut her off from support.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "russell-chosen-name",
      },
      {
        id: "q3",
        kind: "single",
        update: "She has no current suicidal thoughts. She feels safe at her friend's home, and her friend's mother agrees to supervise and to keep razors and medications secured.",
        prompt: "Which of the following is the most appropriate disposition for her from the emergency department?",
        options: ["Discharge to her parents' home tonight", "Discharge with youth mental health follow-up", "Observation overnight in the department", "Transfer to adolescent inpatient psychiatry", "Wait for a gender clinic assessment"],
        correct: 1,
        explanation:
          "She has no current suicidal thoughts, a safe place to stay, a supervising adult and secured means, so she can go home with a safety plan and prompt youth mental health follow-up. Sending her to her parents' home tonight returns her to the rejection that triggered this crisis. Overnight observation and inpatient transfer are for higher acute risk. A gender clinic appointment may help but should not delay discharge or replace mental health care.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "cps-youth",
      },
    ],
    sources: [S.hawton, S.russell, S.cpsYouth],
    ...META,
  },
  /* 27 A ten-year-old after recess ----------------------------------------- */
  {
    id: "suicide-risk-27",
    topic: "suicide-risk",
    title: "What he said at recess",
    stem:
      "A 10-year-old boy is brought to the emergency department by his mother. This afternoon he told his teacher he wanted to kill himself after classmates mocked him at recess. He has attention deficit hyperactivity disorder and takes methylphenidate. He has been teased for months and has refused to go to school twice this month. He has no past self-harm. His mother thinks the school is overreacting. He is quiet and cooperative and is playing a game on her phone.",
    vitals: { temperature: "36.7°C oral", pulse: "92/minute", resp: "18/minute", bp: "102/64 mmHg", o2sat: "99% on room air", weight: "33 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to his statement to the teacher?",
        options: ["Assess him directly and privately", "Children under 12 cannot form intent", "Screening tools are not valid before 12", "Statements at this age seek attention", "Wait for a school psychology report"],
        correct: 0,
        explanation:
          "Preteens can and do have suicidal thoughts, and many screen positive when asked directly in the emergency department. He needs a direct, age appropriate assessment, part of it without his mother present. Children his age can form intent and understand death. Brief screening questions are validated from age 10. Dismissing the statement as attention seeking, or waiting for a school report, leaves a stated wish to die unassessed.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "lanzillo-preteen",
      },
      {
        id: "q2",
        kind: "single",
        update: "Alone, he says he wishes he were dead when the other boys tease him. He has no plan and has never hurt himself. He loves hockey and wants to go home.",
        prompt: "Which of the following is required before he is discharged home with his mother?",
        options: ["Assessment by a child psychiatrist tonight", "Negative urine drug screen", "Report to child protection services", "Safety plan made with him and his mother", "Written promise not to hurt himself"],
        correct: 3,
        explanation:
          "A low risk child can go home once a safety plan is made with him and his mother, covering warning signs, who he can tell, supervision and securing medications, including his methylphenidate. A child psychiatrist is not needed tonight for passive wishes with no plan. A urine drug screen does not change the plan. There is no disclosure of abuse or neglect that calls for a child protection report. A written promise gives false reassurance.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "cps-youth",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate follow-up for him after discharge?",
        options: ["Family doctor review in 3 months", "Mental health follow-up within 7 days", "Return only if he talks of suicide", "School counsellor instead of health care", "Weekly emergency visits until seen"],
        correct: 1,
        explanation:
          "Suicidal statements in a child warrant prompt follow-up with a mental health clinician, arranged before he leaves, with his school involved when his mother agrees. The weeks after an emergency visit are a period of raised risk. A family doctor visit in 3 months is too late. Waiting until he talks of suicide again relies on a child to disclose. A school counsellor can support him but does not replace clinical follow-up. Weekly emergency visits are not a treatment plan.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "cps-youth",
      },
    ],
    sources: [S.lanzillo, S.cpsYouth],
    ...META,
  },
  /* 28 Unknown tablets, medical workup ------------------------------------- */
  {
    id: "suicide-risk-28",
    topic: "suicide-risk",
    alsoTopics: ["tox"],
    title: "Empty bottles beside the bed",
    stem:
      "A 45-year-old woman is brought to the emergency department by her son, who found her crying beside several empty pill bottles 1 hour ago. She says she took a handful of tablets to sleep and will not say which ones. The bottles were left at home. She takes sertraline and has chronic back pain. She is alert and oriented, with normal speech. Pupils are 4 mm and reactive. The ECG shows sinus rhythm with a QRS of 88 ms and a QTc of 440 ms. Capillary glucose is 6.1 mmol/L.",
    vitals: { temperature: "36.9°C oral", pulse: "94/minute", resp: "16/minute", bp: "126/78 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Blood tests and an acetaminophen level are sent. She asks twice how long she has to stay and keeps looking toward the exit.",
        prompt: "Which of the following is the most appropriate level of supervision while her first results are pending?",
        options: ["Constant observation by staff", "Her son stays with her in the room", "Hourly checks by nursing staff", "Locked room with a video camera", "Physical restraint until assessed"],
        correct: 0,
        explanation:
          "She was found crying beside empty bottles, has taken an unknown number of tablets and will not name them, and she is already looking to leave, so she is treated as at high risk of further self-harm and of leaving before she is assessed. Constant observation by a trained staff member, with a search of her belongings and clothing for more tablets, keeps help within reach. Hourly checks leave long gaps in which she could take more pills or walk out. Her son is not trained to intervene and may step away. A camera records events but places no one close enough to act. Restraint is not the least restrictive option for an alert patient who has not tried to leave or harm anyone.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "donovan-ed-safety",
      },
      {
        id: "q2",
        kind: "single",
        update: "While the first results are pending, she stands up and says she is going home because she only wanted to sleep.",
        prompt: "Which of the following is the most appropriate immediate response to her wish to leave?",
        options: ["Ask her to sign against medical advice", "Assess her capacity to refuse care", "Call police to return her if she leaves", "Discharge with advice to return if unwell", "Sedate her until the results return"],
        correct: 1,
        explanation:
          "She may have taken a dangerous amount of an unknown drug with suicidal intent, so her capacity to refuse care must be assessed now. That means checking whether she understands and appreciates the risk of delayed toxicity. If she lacks capacity, staff may act to prevent serious harm while provincial mental health law is applied if its criteria are met. A form signed against advice means nothing if she is incapable. Discharge ignores an unknown ingestion. Sedation is not the least restrictive first step, and calling police after she leaves is too late.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "appelbaum-capacity",
      },
      {
        id: "q3",
        kind: "single",
        update: "She agrees to stay. Her son brings the bottles, and she took about 20 sertraline 50 mg tablets 5 hours ago. Acetaminophen and salicylate are undetectable, she remains alert and a repeat ECG is unchanged.",
        prompt: "Which of the following further investigations is needed before her psychiatric assessment?",
        options: ["Comprehensive urine drug screen", "CT head without contrast", "Serum ethanol level", "Thyroid function tests", "No further laboratory testing"],
        correct: 4,
        explanation:
          "An alert patient with normal vital signs, a known ingestion and reassuring results needs no routine laboratory tests before psychiatric assessment. Tests should follow the history and examination. A urine screen does not change care when the drug is known. She has no head injury or focal findings to justify CT. An ethanol level adds nothing when she is not clinically intoxicated. Thyroid tests belong to outpatient care of depression, not to medical clearance.",
        keyFeature: { topic: "tox", n: 7 },
        source: "acep-psych",
      },
    ],
    sources: [S.donovan, S.appelbaum, S.acep],
    ...META,
  },
  /* 29 Headaches in a newcomer --------------------------------------------- */
  {
    id: "suicide-risk-29",
    topic: "suicide-risk",
    alsoTopics: ["headache"],
    title: "Headaches since arriving in Canada",
    stem:
      "A 38-year-old man presents to the emergency department with daily headaches and poor sleep for 3 months. He arrived in Canada as a government-assisted refugee from Afghanistan 8 months ago. He speaks Dari and little English. His 14-year-old son has come to interpret. The headaches are bilateral and pressing, worst on waking, with no fever, weakness, visual change or change with position. He takes acetaminophen most days. Neurological examination and fundi are normal.",
    vitals: { temperature: "36.8°C oral", pulse: "82/minute", resp: "14/minute", bp: "128/80 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to conduct his interview?",
        options: ["Certified Dari interpreter by phone", "English with simple words and gestures", "His son interpreting in the room", "Staff cleaner who speaks Dari", "Translation app on your phone"],
        correct: 0,
        explanation:
          "Professional interpreters improve comprehension, disclosure and outcomes compared with ad hoc interpreters. Headaches and poor sleep in a refugee can be the way depression, trauma or suicidal thoughts first present. A child should not be asked to interpret questions about suicide, war trauma or his father's mood, and the father is unlikely to disclose in front of him. An untrained staff member breaches confidentiality and makes errors. Simple English and an app miss the nuance a risk assessment needs.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "karliner-interpreters",
      },
      {
        id: "q2",
        kind: "menu",
        select: 2,
        update: "Through the interpreter, he describes nightmares and flashbacks of the war and says his family would be better off without him. He attends his mosque weekly, lives with his wife and children, takes English classes and has worked in a warehouse since spring.",
        prompt: "Which of the following findings in his history raise his risk of suicide?",
        options: ["Attends his mosque weekly", "Belief his family is better off without him", "English language classes", "Headaches worst on waking", "Lives with his wife and children", "Nightmares and flashbacks of the war", "Warehouse job since spring"],
        correct: [1, 5],
        explanation:
          "Feeling that his family would be better off without him is a statement of perceived burden and hopelessness, and it needs direct questions about plan and intent. Nightmares and flashbacks suggest posttraumatic stress disorder, which is common in refugees and raises suicide risk. His faith community, his family at home, language classes and work are protective factors to build into his plan. Morning headaches are a symptom to follow up, not a suicide risk factor.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "kirmayer-refugees",
      },
      {
        id: "q3",
        kind: "single",
        update: "He has no plan or intent and agrees to a safety plan with his wife. He does not yet have a family physician.",
        prompt: "Which of the following is the most appropriate follow-up arrangement for him?",
        options: ["Family physician when he finds one", "Group therapy in English", "Psychiatry wait list of 6 months", "Refugee clinic with an interpreter", "Return to the ED if he feels worse"],
        correct: 3,
        explanation:
          "A refugee health clinic with professional interpreters can treat his mood and trauma symptoms and give him ongoing primary care. That matters because he has no family physician and limited English. Waiting to find a family physician or for a 6 month psychiatry list leaves him untreated. Group therapy in English is not accessible to him yet. Advice to return if worse relies on him to seek help while unwell.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "kirmayer-refugees",
      },
    ],
    sources: [S.karliner, S.kirmayer],
    ...META,
  },
  /* 30 Chest tightness after an arrest ------------------------------------- */
  {
    id: "suicide-risk-30",
    topic: "suicide-risk",
    alsoTopics: ["chest-pain"],
    title: "Palpitations two days after an arrest",
    stem:
      "A 48-year-old man presents to the emergency department with 2 hours of chest tightness and palpitations. Two days ago he was arrested and charged with defrauding his employer, and his name appeared in the local news. His wife left the home after the arrest. He has not slept since. He has no cardiac history and does not smoke. He is restless and sweaty. The ECG shows sinus tachycardia with no ischemic changes. Two high sensitivity troponin values taken 2 hours apart are normal.",
    vitals: { temperature: "36.8°C oral", pulse: "112/minute", resp: "18/minute", bp: "146/88 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: ["Ask about thoughts of suicide", "Discharge with a panic disorder handout", "Exercise stress test as an outpatient", "Lorazepam prescription for 1 week", "Referral to cardiology clinic"],
        correct: 0,
        explanation:
          "New criminal charges with public exposure, a separation and sleeplessness are acute stressors that raise suicide risk, and physical symptoms may be how his distress presents. With a myocardial infarction ruled out, he must be asked directly about suicidal thoughts before any plan is made. A panic handout, a benzodiazepine supply, a stress test and a cardiology referral all treat the symptom and miss the risk. A benzodiazepine also adds a means.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "safe-t",
      },
      {
        id: "q2",
        kind: "single",
        update: "He has thought it would be easier to be dead but has no plan or intent. He has no past attempts and no psychiatric history. His brother arrives and offers to stay with him.",
        prompt: "Which of the following is the most appropriate next step in his emergency department management?",
        options: ["Admission to psychiatry overnight", "Hold for psychiatry review tomorrow", "Medical admission for telemetry", "Psychiatry assessment in the ED today", "Return home with his brother and a plan"],
        correct: 3,
        explanation:
          "His thoughts of death without a plan, intent or past attempt fit the SAFE-T low risk row, but his risk factors do not. SAFE-T counts triggering events that bring humiliation or shame as a risk factor, as it does global insomnia. It places an acute precipitating event in its high risk row, and one supportive brother does not amount to strong protective factors. His level is therefore uncertain and needs a full psychiatry assessment in the department today. Admission or a hold until tomorrow commits him to a setting before that assessment, and sending him home now skips it. His cardiac workup is negative, so telemetry adds nothing.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "safe-t",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following follow-up arrangements would best support his safety if he is discharged?",
        options: ["Crisis team call within 24 hours", "Family doctor visit in 1 month", "Letter to his lawyer about stress", "Mail-out mental health pamphlets", "Psychiatry referral with no date"],
        correct: 0,
        explanation:
          "Early, active contact after discharge reduces suicidal behaviour. In a multicentre emergency department study, secondary screening, a safety plan and a series of follow-up phone calls lowered later suicide attempts. A call within a day reaches him in the first high risk days after his arrest. A family doctor visit in a month and an undated referral leave a gap. Pamphlets are passive. A letter to his lawyer does not provide care.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "ed-safe",
      },
    ],
    sources: [S.safet, S.miller],
    ...META,
    version: 2,
  },
  /* 31 Hand injury in a young veteran ------------------------------------ */
  {
    id: "suicide-risk-31",
    topic: "suicide-risk",
    title: "A wall in the kitchen",
    stem:
      "A 27-year-old man presents to the emergency department at 02:00 with his partner. He punched a wall during an argument 3 hours ago and has a swollen right hand. A radiograph shows a fifth metacarpal neck fracture. He served 6 years in the Canadian Armed Forces and was released 3 years ago after a deployment injury. He has post-traumatic stress disorder and stopped attending therapy 2 months ago. He drinks 8 beers most nights. His partner says he has been sleeping in his truck. He is calm, avoids eye contact and says he is fine.",
    vitals: { temperature: "36.7°C oral", pulse: "92/minute", resp: "16/minute", bp: "134/82 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "His partner adds that last week he gave his service medals to his younger brother and asked him to look after his dog.",
        prompt: "Which of the following findings most suggests that he has started preparing for suicide?",
        options: ["Drinking 8 beers most nights", "Fracture from punching a wall", "Giving away his service medals", "Sleeping in his truck", "Stopping his therapy sessions"],
        correct: 2,
        explanation:
          "Giving away prized possessions and arranging care for a pet are preparatory acts, which structured suicide assessment treats as suicidal behaviour even when the patient denies intent. Here they sit behind a visit for a hand injury and a statement that he is fine. Nightly heavy drinking, a fracture from punching a wall, sleeping in his truck and stopping therapy are markers of distress, impulsivity and disengagement that raise his risk. None of them shows that he has begun to prepare an act.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "posner-cssrs",
      },
      {
        id: "q2",
        kind: "single",
        update: "Asked directly, he says he plans to drive his truck into the river next week on the anniversary of a friend's death. He agrees to stay in hospital.",
        prompt: "Which of the following is the most appropriate disposition for him from the emergency department?",
        options: ["Discharge to his partner with a safety plan", "Discharge with an urgent clinic visit tomorrow", "Hand clinic follow-up and a crisis line number", "Overnight observation, then discharge", "Psychiatric admission for assessment"],
        correct: 4,
        explanation:
          "A specific method, a chosen date and preparatory acts, together with post-traumatic stress disorder, heavy drinking and disengagement from care, place him at high risk. High risk calls for admission with suicide precautions, and he agrees to stay. A safety plan with his partner and an urgent clinic visit suit low or moderate risk. Hand follow-up with a crisis number treats the fracture and leaves the plan in place. A night of observation delays the same discharge without treating the risk that drives it.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "safe-t",
      },
      {
        id: "q3",
        kind: "single",
        update: "His partner is frightened. She asks where she can get counselling for herself while he is in hospital and after he comes home.",
        prompt: "Which of the following services should you give her for counselling support at any hour?",
        options: ["Hope for Wellness Help Line", "Kids Help Phone text line", "Legion service officer", "VAC Assistance Service", "Walk-in clinic physician"],
        correct: 3,
        explanation:
          "The Veterans Affairs Canada (VAC) Assistance Service connects veterans, their families and caregivers with a mental health professional at no cost, 24 hours a day. She can use it as his partner, and neither of them needs to be receiving other VAC services. Kids Help Phone serves young people. The Hope for Wellness Help Line serves Indigenous peoples, and nothing in the history places them in that group. A Legion service officer helps veterans with benefit claims rather than counselling. A walk-in clinic keeps set hours and offers no ongoing counselling.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "vac-assistance",
      },
    ],
    sources: [S.posner, S.safet, S.vac],
    ...META,
    version: 2,
  },
  /* 32 Threats over intimate images ---------------------------------------- */
  {
    id: "suicide-risk-32",
    topic: "suicide-risk",
    alsoTopics: ["abuse-domestic"],
    title: "Messages from an unknown account",
    stem:
      "A 16-year-old boy is brought to the emergency department by his mother at 01:00. She found him crying in his room and saw messages on his phone from an unknown account. The sender is threatening to send intimate images of him to his friends unless he pays more money. He has already paid $200. He has not slept and told his mother he would rather die than have the images shared. He has no psychiatric history and no past self-harm. He is withdrawn and avoids eye contact.",
    vitals: { temperature: "36.7°C oral", pulse: "104/minute", resp: "18/minute", bp: "122/74 mmHg", o2sat: "99% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following statements about his situation is most accurate for your risk assessment?",
        options: ["Boys rarely act on suicidal statements", "His statement is likely a figure of speech", "Online victimization raises suicide risk", "Paying the demand ends the risk", "Risk falls once his phone is removed"],
        correct: 2,
        explanation:
          "Young people who are victimized online have higher rates of self-harm and suicidal behaviour than their peers. Shame and the fear of exposure can drive an acute crisis within hours. His statement that he would rather die must be assessed directly and privately, not dismissed as a figure of speech. Adolescent boys make fewer attempts than girls but use more lethal means. Paying rarely stops the demands. Taking his phone does not remove the threat or his distress.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "john-cyberbullying",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice to him and his mother about the messages?",
        options: ["Confiscate his phone for a month", "Delete every message he received", "Pay the sender to delete the images", "Reply to warn the sender off", "Stop contact and report the threats"],
        correct: 4,
        explanation:
          "He should stop all contact with the sender, keep screenshots of the messages and report the threats to Cybertip.ca or the police. Paying almost never ends the demands and often leads to more. Deleting the messages destroys the evidence needed for a report. Replying keeps him in contact with the offender. Taking his phone away as a punishment adds shame and may stop him telling an adult the next time something goes wrong.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "cybertip",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        update: "He feels relieved that his mother knows. He has no plan or intent. His mother will stay with him and lock up the medications at home.",
        prompt: "Which of the following should be part of his discharge plan?",
        options: ["Ask him to sign a safety contract", "Crisis text and phone contacts", "Keep him home from school for 2 weeks", "Mental health follow-up this week", "Punish him for sending the images", "Tell his friends about the threats"],
        correct: [1, 3],
        explanation:
          "Crisis contacts he can reach by text or phone at any hour, such as Kids Help Phone and 9-8-8, and mental health follow-up within the week cover the risky days ahead. A signed safety contract offers no protection. Two weeks away from school isolates him and delays a return to normal routines. Punishment deepens the shame that drives his risk. Telling his friends is his choice, made with support, and it is not a safety measure.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "cps-youth",
      },
    ],
    sources: [S.john, S.cybertip, S.cpsYouth],
    ...META,
  },
  /* 33 Laid off and ready to go home --------------------------------------- */
  {
    id: "suicide-risk-33",
    topic: "suicide-risk",
    title: "What he said after the layoff",
    stem:
      "A 36-year-old man is brought to an Ontario emergency department by a friend at 20:00. He was laid off from his warehouse job today. Afterward he told the friend, a coworker, that he might as well be dead, and the friend drove him in. He has not been drinking. On assessment he is calm and embarrassed. He says he has no wish to die, no plan and no past attempts. He has no psychiatric history, sleeps well and coaches his daughter's soccer team. He shares custody of his daughter and has savings. There are no firearms in his home. He wants to go home and says he will look for work tomorrow.",
    vitals: { temperature: "36.6°C oral", pulse: "76/minute", resp: "14/minute", bp: "126/80 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes his current level of suicide risk?",
        options: ["High acute risk", "Low acute risk", "Moderate acute risk", "Very high acute risk", "No suicide risk"],
        correct: 1,
        explanation:
          "A single passive remark made on the day of a job loss, now retracted, with no plan, intent, past attempts or psychiatric history and strong protective factors, fits low acute risk. His job loss is a modifiable stressor. Moderate or high risk would need features such as a plan, intent, recent attempts or several major risk factors with weak protection. No one is at no risk, and a sudden job loss still calls for a plan and follow-up.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "safe-t",
      },
      {
        id: "q2",
        kind: "single",
        update: "The psychiatry resident cannot see him until morning. He asks to leave now.",
        prompt: "Which of the following is the most appropriate response to his request to leave?",
        options: ["Ask security to keep him until morning", "Complete a Form 1 to await psychiatry", "Discharge with a safety plan and follow-up", "Keep him as an informal patient overnight", "Require him to sign out against advice"],
        correct: 2,
        explanation:
          "He is capable, at low risk and does not meet the Form 1 serious harm test, which needs threatened or attempted self-harm and an apparent mental disorder likely to cause serious bodily harm. He can go home now with a safety plan and follow-up, which is the right time for discharge. Keeping him through security or a Form 1 would be unlawful detention. An informal admission needs his agreement and is not needed. Asking him to sign out against advice misstates a discharge that is appropriate.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "on-mha",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following should be documented in his chart to support this discharge?",
        options: ["His signature on a no-harm contract", "Risk level, rationale and follow-up plan", "Score on a suicide risk scale", "Statement that he denied all ideation", "Verbatim transcript of the interview"],
        correct: 1,
        explanation:
          "The note should record the risk level, the reasons for it, including risk and protective factors, and the plan with its follow-up. That shows the decision was reasoned at the time. A no-harm contract has no clinical or legal weight. A scale score alone does not justify a disposition. Recording only that he denied ideation leaves out the remark that brought him in. A verbatim transcript is neither expected nor useful.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "safe-t",
      },
    ],
    sources: [S.safet, S.onMha],
    ...META,
  },
  /* 34 Second overdose this year ------------------------------------------- */
  {
    id: "suicide-risk-34",
    topic: "suicide-risk",
    alsoTopics: ["tox"],
    title: "Back again after four months",
    stem:
      "A 52-year-old woman is ready for discharge from the emergency department 26 hours after an intentional overdose of her citalopram. It is her second overdose this year. After the first, 4 months ago, she was referred to a mental health clinic and did not attend. She has major depression and lives with her adult son. She is now medically cleared, with a normal ECG and QTc. The psychiatry consultant finds no current intent, restarts her treatment and agrees with outpatient care.",
    vitals: { temperature: "36.6°C oral", pulse: "72/minute", resp: "14/minute", bp: "118/76 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best estimates the proportion of people who repeat non-fatal self-harm within 1 year?",
        options: ["1% within 1 year", "4% within 1 year", "8% within 1 year", "16% within 1 year", "40% within 1 year"],
        correct: 3,
        explanation:
          "A systematic review of follow-up studies found a median of about 16% of people repeat non-fatal self-harm within a year. Between 0.5% and 2% die by suicide in that year, a rate far above that of the general population. She has already repeated once, which places her among those at highest risk. Figures of 1% to 8% understate repetition. A figure of 40% overstates the median across studies.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "owens-repetition",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following post-discharge measures has been shown to reduce suicide deaths in patients who do not engage with care?",
        options: ["Discharge summary sent to her doctor", "Information leaflet on depression", "Periodic caring letters for 5 years", "Referral letter for her to book", "Signed no-suicide contract"],
        correct: 2,
        explanation:
          "In a randomized trial of people who had been admitted for depression or a suicidal state and then declined ongoing care, short caring letters sent at intervals over 5 years lowered suicide rates, most clearly in the first 2 years. She is exactly the kind of patient who drops out of care. A discharge summary and a leaflet are passive. A referral she must book herself already failed once. A no-suicide contract has no protective effect.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "motto-contact",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following outpatient treatments has evidence that it may reduce repeat self-harm?",
        options: ["Case management alone", "Clonazepam as needed for anxiety", "Cognitive behavioural therapy", "Family physician care alone", "Psychodynamic psychotherapy"],
        correct: 2,
        explanation:
          "In a 2021 Cochrane review of 76 trials in adults after self-harm, individual psychotherapy based on cognitive behavioural therapy may reduce repetition at 6 and 12 months, although the certainty of the evidence was low. She has repeated once and did not attend her last referral, so a referral to a specific therapy with some evidence is worth making and supporting. The same review found no clear difference in repetition with case management, management by a general practitioner or psychodynamic psychotherapy. Clonazepam has no such evidence and adds a sedative she could take in overdose.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "witt-cochrane",
      },
    ],
    sources: [S.owens, S.motto, S.witt],
    ...META,
  },
  /* 35 Convinced his body is rotting --------------------------------------- */
  {
    id: "suicide-risk-35",
    topic: "suicide-risk",
    title: "Certain they are bankrupt",
    stem:
      "A 70-year-old man is brought to the emergency department by his wife. For 6 weeks he has barely eaten, slept 3 hours a night and paced the house, and he has lost 6 kg. He is convinced they are bankrupt and that his body is rotting, although their finances are secure. Yesterday he told her he deserves to die for ruining the family. He has hypertension and takes hydrochlorothiazide. Sodium is 131 mmol/L and creatinine 118 umol/L. He answers slowly and denies thoughts of suicide. There is no delirium on testing.",
    vitals: { temperature: "36.8°C oral", pulse: "96/minute", resp: "16/minute", bp: "108/64 mmHg", o2sat: "97% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his presentation most raises his risk of suicide?",
        options: ["Hypertension on a diuretic", "Low sodium of 131 mmol/L", "Psychotic guilt about the family", "Recent weight loss of 6 kg", "Slow answers to questions"],
        correct: 2,
        explanation:
          "A delusional belief that he deserves to die for ruining his family is psychotic depression, which carries a higher suicide risk than depression without psychosis. It needs urgent psychiatric care. Weight loss and slowed answers show how severe his depression is, but they point less directly to suicide. A mild low sodium and his treated hypertension are medical issues to correct, not suicide risk factors.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "gournellis-psychotic-depression",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best guides how you interpret his denial of suicidal thoughts?",
        options: ["Denial means low risk tonight", "Only a psychiatrist can judge it", "Repeat the question tomorrow", "Scores should guide the decision", "Wife's report outweighs his denial"],
        correct: 4,
        explanation:
          "Older adults often deny suicidal thoughts, and psychotic guilt can make a patient hide them. His statement to his wife yesterday that he deserves to die is direct evidence and outweighs today's denial. Denial does not make his risk low. The emergency physician can and must weigh collateral now rather than defer to a psychiatrist or wait for tomorrow. Risk scores cannot resolve a conflict between the patient and a reliable informant.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "ccsmh",
      },
      {
        id: "q3",
        kind: "single",
        update: "He refuses admission and stands to leave. You assess his capacity to refuse admission and treatment.",
        prompt: "Which of the following findings best shows that he lacks capacity to refuse treatment?",
        options: ["Angry about waiting to be seen", "Cannot recall the date", "Disagrees with his wife's view", "Sees no point treating a rotting body", "Wants a second opinion first"],
        correct: 3,
        explanation:
          "His delusion that his body is rotting stops him from applying the facts about treatment to himself, which is a failure of appreciation. That is the ability most often lost in psychotic depression. Anger, disagreement with family and a wish for a second opinion are compatible with capacity. Not knowing the date is a cognitive finding that does not settle capacity for this decision, and delirium has already been excluded.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "appelbaum-capacity",
      },
    ],
    sources: [S.gournellis, S.ccsmh, S.appelbaum],
    ...META,
  },
  /* 36 Sober at three in the morning --------------------------------------- */
  {
    id: "suicide-risk-36",
    topic: "suicide-risk",
    title: "A text sent after midnight",
    stem:
      "A 23-year-old man was brought to the emergency department by police at 22:00 after he texted a friend that he was going to end things. He had been drinking. It is now 03:00. On reassessment he is sober, with a breath alcohol of zero. He regrets the text and says it came after an argument with his girlfriend. He has no plan, no intent and no past attempts. He lives alone. His sister is his main support and cannot be reached until 07:00. He wants to go home now by taxi.",
    vitals: { temperature: "36.6°C oral", pulse: "84/minute", resp: "14/minute", bp: "124/76 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for the timing of his discharge?",
        options: ["Admission for psychiatry review", "Discharge now by taxi to his home", "Hold for 24 hours of observation", "Morning discharge to his sister", "Police drive him home tonight"],
        correct: 3,
        explanation:
          "He is at low risk once sober, but sending him home alone at 03:00, hours after a crisis fuelled by alcohol, removes the support his plan depends on. Waiting a few hours until his sister can collect him, with his agreement, is discharge at the right time. Leaving now by taxi or with police returns him to an empty home. Admission and a 24 hour hold exceed what his risk requires.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "stanley-2012",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes the role of alcohol in his suicide risk?",
        options: ["Acute use raises attempt risk", "It lowers risk by sedating him", "It makes his text meaningless", "Only chronic use affects risk", "Risk ends once he is sober"],
        correct: 0,
        explanation:
          "Acute alcohol use lowers inhibition and raises the odds of a suicide attempt several fold, most of all at heavy doses, so drinking during a crisis raises his risk. That is why the assessment is repeated once he is sober. Sedation does not protect him. A text sent while drunk still signals distress and must be assessed. Chronic heavy use adds long term risk as well, but it is not the only way alcohol matters. His risk returns if he drinks in the next crisis.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "borges-acute-alcohol",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following numbers should be written in his plan for suicide crisis support by call or text?",
        options: ["2-1-1", "3-1-1", "8-1-1", "9-1-1", "9-8-8"],
        correct: 4,
        explanation:
          "9-8-8 is Canada's national suicide crisis helpline, reached by call or text at any hour. It belongs in every safety plan alongside personal contacts. 9-1-1 is for an emergency in progress, such as an attempt. 8-1-1 is a provincial health advice line, and although Quebec adds a psychosocial line to it, it is not the national suicide crisis line. 2-1-1 connects people to community and social services. 3-1-1 is a municipal services line.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "988",
      },
    ],
    sources: [S.stanley12, S.borges, S.line988],
    ...META,
  },
  /* 37 Headaches after a hockey concussion --------------------------------- */
  {
    id: "suicide-risk-37",
    topic: "suicide-risk",
    alsoTopics: ["headache"],
    title: "Released by his team",
    stem:
      "A 19-year-old man presents to the emergency department with a headache. He had a concussion in a junior hockey game 7 weeks ago and has not returned to play. He has daily headaches, poor concentration and irritability. His team released him last week. Since then he has stopped going out and sleeps 12 hours a day. He takes ibuprofen most days. Neurological examination is normal. He asks for something stronger for the headache.",
    vitals: { temperature: "36.7°C oral", pulse: "70/minute", resp: "14/minute", bp: "122/72 mmHg", o2sat: "99% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important next step in his assessment?",
        options: ["CT head for persistent symptoms", "Hydromorphone for headache relief", "Neurology referral for headache", "Screen for mood and suicidal thoughts", "Triptan trial for migraine"],
        correct: 3,
        explanation:
          "Withdrawal, oversleeping and irritability after losing his place on the team suggest depression layered on persistent concussion symptoms, and he must be asked directly about suicidal thoughts. A normal neurological examination 7 weeks after injury does not call for CT. Hydromorphone adds dependence, rebound headache and a means of overdose. A triptan or neurology referral may help the headache later but would miss the more urgent risk.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "fralick-concussion",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about concussion and suicide is most accurate?",
        options: ["Headache is the main driver of risk", "Later suicide risk is about double", "Risk is limited to military personnel", "Risk rises only after severe injury", "Young athletes are at lowest risk"],
        correct: 1,
        explanation:
          "A meta-analysis found that concussion or mild traumatic brain injury was associated with about twice the risk of later suicide, along with higher rates of attempts and ideation. The excess risk appeared in studies with and without military personnel, so it applies to civilians like him. It is not limited to severe injury. Headache is one symptom, not the recognized driver. Young athletes who lose their sport and identity are not a low risk group.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "fralick-concussion",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        update: "He has felt life is not worth living since being released, with no plan or intent. He lives with his parents, who will support him.",
        prompt: "Which of the following should be part of his discharge plan?",
        options: ["Ask him to sign a no-harm contract", "Concussion clinic follow-up", "Full contact hockey next week", "Mental health follow-up this week", "Opioid for headache at home", "Urine drug screen before discharge"],
        correct: [1, 3],
        explanation:
          "Follow-up with a concussion clinic addresses his ongoing symptoms and return to activity, and mental health follow-up within the week addresses his mood and suicidal thoughts. Both keep him connected to care. A no-harm contract offers no protection. Returning to full contact while symptomatic risks further injury. An opioid supply adds a lethal means and worsens headache over time. A urine drug screen would not change his plan.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "fralick-concussion",
      },
    ],
    sources: [S.fralick],
    ...META,
  },
  /* 38 Fall from a balcony ------------------------------------------------- */
  {
    id: "suicide-risk-38",
    topic: "suicide-risk",
    alsoTopics: ["multiple-trauma"],
    title: "Hanging laundry on the third floor",
    stem:
      "A 34-year-old woman is brought to the emergency department by ambulance after a fall from her third floor balcony. She says she slipped while hanging laundry. She is alert, with a GCS of 15. She has pain in both heels and her lower back. Primary survey is otherwise normal. FAST is negative. Radiographs show fractures of both calcanei and a stable L1 compression fracture. Her husband moved out 3 weeks ago. She has no medical history.",
    vitals: { temperature: "36.4°C oral", pulse: "104/minute", resp: "20/minute", bp: "132/80 mmHg", o2sat: "98% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings would most suggest that her fall was intentional?",
        options: ["A railing at chest height", "Bilateral heel fractures", "Blood alcohol of 25 mmol/L", "Laundry basket on the ground", "Wet balcony floor after rain"],
        correct: 0,
        explanation:
          "A railing at chest height is hard to fall over by accident, so going over it suggests she climbed. That makes her account of slipping unlikely. Fractures of both heels and a lumbar fracture reflect a feet first landing and occur in accidental and intentional falls alike. Alcohol raises the risk of both accidents and suicidal acts. A laundry basket and a wet floor fit her account of slipping.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "bolton-bmj",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate time to ask her about suicidal intent?",
        options: ["After discharge from the trauma ward", "After her fractures are fixed", "As soon as she can talk privately", "Only if she raises low mood", "When psychiatry sees her next week"],
        correct: 2,
        explanation:
          "Suicidal intent should be asked about as soon as she is alert and can talk privately, in the emergency department and alongside her trauma care. Her answer shapes supervision on the ward, what she has access to and who is told. Waiting for surgery, for psychiatry next week or for discharge leaves an unrecognized attempt unmanaged. Waiting for her to raise low mood relies on disclosure she has already avoided once.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "safe-t",
      },
      {
        id: "q3",
        kind: "single",
        update: "She admits she climbed over the railing to end her life. After fixation she is on the orthopaedic ward and asks to go home once she can walk with a frame.",
        prompt: "Which of the following must happen before she is discharged from hospital?",
        options: ["A signed no-harm contract", "Pain controlled on oral opioids", "Physiotherapy clearance alone", "Psychiatric assessment on the ward", "Social work housing referral"],
        correct: 3,
        explanation:
          "A high lethality attempt needs a psychiatric assessment before discharge, whichever service admits her for the fractures. Suicide risk after a serious attempt does not fall because the physical injuries heal. Physiotherapy clearance and pain control address mobility, not safety. An opioid supply at discharge is also a means that needs planning. A housing referral may help her later. A no-harm contract has no protective value.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "safe-t",
      },
    ],
    sources: [S.bolton, S.safet],
    ...META,
  },
];
