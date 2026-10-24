// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  fraser: {
    id: "fraser-opioid-principles",
    citation:
      "Fraser Health Hospice Palliative Care Program. Symptom guidelines. Principles of opioid management. Approved 2006, with appendices approved 2015.",
    url: "https://www.fraserhealth.ca/-/media/Project/FraserHealth/FraserHealth/Health-Professionals/Professionals-Resources/Hospice-palliative-care/HPC_SymptomGuidelines_Opioid.pdf",
  },
  painad: {
    id: "warden-painad",
    citation:
      "Warden V, Hurley AC, Volicer L. Development and psychometric evaluation of the Pain Assessment in Advanced Dementia (PAINAD) scale. J Am Med Dir Assoc. 2003.",
    url: "https://pubmed.ncbi.nlm.nih.gov/12807591/",
  },
  cpsDistress: {
    id: "cps-procedural-distress-2019",
    citation:
      "Trottier ED, Doré-Bergeron MJ, Chauvin-Kimoff L, Baerg K, Ali S, Canadian Paediatric Society Acute Care Committee. Managing pain and distress in children undergoing brief diagnostic and therapeutic procedures. Paediatr Child Health. 2019.",
    url: "https://cps.ca/en/documents/position/managing-pain-and-distress",
  },
  cpsSedation: {
    id: "cps-procedural-sedation-2021",
    citation:
      "Krmpotic K, Rieder MJ, Rosen D, Canadian Paediatric Society Acute Care Committee and Drug Therapy Committee. Recommendations for procedural sedation in infants, children, and adolescents. Paediatr Child Health. 2021.",
    url: "https://cps.ca/en/documents/position/recommendations-for-procedural-sedation-in-infants-children-and-adolescents",
  },
  sogc: {
    id: "sogc-pregnant-trauma-2015",
    citation:
      "Jain V, Chari R, Maslovitz S, Farine D, Society of Obstetricians and Gynaecologists of Canada Maternal Fetal Medicine Committee. Guidelines for the management of a pregnant trauma patient. J Obstet Gynaecol Can. 2015.",
    url: "https://pubmed.ncbi.nlm.nih.gov/26334607/",
  },
  wakai: {
    id: "wakai-intra-articular-lidocaine",
    citation:
      "Wakai A, O'Sullivan R, McCabe A. Intra-articular lignocaine versus intravenous analgesia with or without sedation for manual reduction of acute anterior shoulder dislocation in adults. Cochrane Database Syst Rev. 2011.",
    url: "https://pubmed.ncbi.nlm.nih.gov/21491392/",
  },
  tqip: {
    id: "acs-tqip-acute-pain-2020",
    citation:
      "American College of Surgeons Trauma Quality Programs. Best practices guidelines for acute pain management in trauma patients. 2020.",
    url: "https://www.facs.org/media/exob3dwk/acute_pain_guidelines.pdf",
  },
  kindel: {
    id: "kindel-glp1-perioperative",
    citation:
      "Kindel TL, Wang AY, Wadhwa A, and colleagues. Multi-society clinical practice guidance for the safe use of glucagon-like peptide-1 receptor agonists in the perioperative period. Surg Endosc. 2025.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11666732/",
  },
  white: {
    id: "white-ankle-intra-articular",
    citation:
      "White BJ, Walsh M, Egol KA, Tejwani NC. Intra-articular block compared with conscious sedation for closed reduction of ankle fracture-dislocations. A prospective randomized trial. J Bone Joint Surg Am. 2008.",
    url: "https://pubmed.ncbi.nlm.nih.gov/18381308/",
  },
} satisfies Record<string, Source>;

export const ANALGESIA_SEDATION_S81: Samp[] = [
  /* 48 Restless at home under palliative care ------------------------------ */
  {
    id: "analgesia-sedation-48",
    topic: "analgesia-sedation",
    title: "Restless evening under palliative care",
    stem:
      "You are working in a rural hospital emergency department. A 79-year-old man is brought to the emergency department by his wife at 22:00 because he has been restless and moaning since the afternoon. He has prostate cancer with bone metastases to the spine and pelvis and receives palliative care at home. His pain had been well controlled on morphine 20 mg PO every 4 hours, with a breakthrough dose about once a day. Since this morning he has been too drowsy to swallow, and his last morphine dose was 14 hours ago. He takes no other regular medications. His goals of care are comfort only, and his wife hopes to take him home. He opens his eyes to voice but cannot answer questions. A bladder scan shows 90 mL of urine, and his rectum holds a small amount of soft stool.",
    vitals: { temperature: "36.9°C tympanic", pulse: "104/minute", resp: "22/minute", bp: "128/76 mmHg", o2sat: "94% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings would most suggest that pain is contributing to his restlessness?",
        options: ["Cool hands and feet", "Dry mouth and cracked lips", "Grimacing when he is turned", "Mottled skin over both knees", "Picking at the bedsheets"],
        correct: 2,
        explanation:
          "He cannot rate his pain, so his behaviour has to speak for him, and a grimace that comes on each time he is moved, with the moaning his wife describes, is the pattern an observational tool such as PAINAD scores as pain through its facial expression and negative vocalization items. It also points to his spine and pelvic metastases after 14 hours without his regular morphine. Cool hands and feet and mottled knees reflect the falling circulation of the last days of life, not pain. A dry mouth follows mouth breathing and poor intake. Picking at the bedsheets is a sign of delirium, which may coexist but does not by itself show that he hurts.",
        keyFeature: { topic: "analgesia-sedation", n: 1 },
        source: "warden-painad",
      },
      {
        id: "q2",
        kind: "single",
        update: "His wife asks for something to settle him. The palliative kit from home holds morphine, midazolam and haloperidol for injection.",
        prompt: "Which of the following is the most appropriate first medication to give him now?",
        options: ["haloperidol 1 mg SC", "midazolam 2.5 mg SC", "morphine 2.5 mg SC", "morphine 10 mg SC", "morphine 20 mg SC"],
        correct: 3,
        explanation:
          "His restlessness follows 14 hours without his regular opioid in a man with painful bone metastases, so pain comes first. He cannot swallow, and the subcutaneous route suits a patient who cannot take medicine by mouth. For a patient already on an opioid who has severe pain, the Fraser Health guideline gives one half of the regular oral dose by the SC route, so 20 mg PO becomes 10 mg SC. Midazolam and haloperidol would quiet him without treating the pain that is driving his distress. Morphine 2.5 mg SC is a starting dose for someone who has never taken opioids, about a quarter of his usual equivalent. Giving his oral dose of 20 mg by the SC route doubles his usual exposure.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "fraser-opioid-principles",
      },
      {
        id: "q3",
        kind: "single",
        update: "Twenty minutes after his first SC dose he still grimaces and moans when he is moved. His resp. is 20/minute and he opens his eyes to voice.",
        prompt: "Which of the following is the most appropriate next step to control his pain?",
        options: ["Another SC dose of equal size", "Haloperidol 1 mg SC now", "Midazolam 2.5 mg SC now", "Transdermal fentanyl 25 mcg/hour", "Wait 4 hours for the next dose"],
        correct: 0,
        explanation:
          "Severe pain in a patient already on opioids is treated as a pain emergency. The guideline repeats the SC dose after 20 minutes until the pain breaks, so a second 10 mg SC dose is due now. His breathing at 20/minute and his response to voice show no sign of opioid excess. Waiting 4 hours leaves him in pain when the first dose has clearly not been enough. A fentanyl patch takes many hours to work and is not a first choice for acute or rapidly changing pain. Haloperidol and midazolam would sedate him while the pain continues.",
        keyFeature: { topic: "analgesia-sedation", n: 3 },
        source: "fraser-opioid-principles",
      },
      {
        id: "q4",
        kind: "single",
        update: "Later he settles. An hour later he is asleep with a relaxed face and rouses to voice. His pupils are 3 mm and his resp. is 12/minute and regular. His wife asks whether the morphine will stop his breathing.",
        prompt: "Which of the following is the most appropriate plan for his opioid from now on?",
        options: ["Continue regular doses and observe", "Give naloxone 0.4 mg IV now", "Halve the regular SC dose", "Hold opioids until he is fully awake", "Switch to midazolam alone"],
        correct: 0,
        explanation:
          "He is comfortable, rousable and breathing 12 times a minute, which is the goal for a man receiving comfort care. Respiratory depression is rare in patients who take opioids regularly, because tolerance to it develops quickly, and the guideline warns against withholding opioids for fear of it. His regular dose is 10 mg SC every 4 hours, with about 6 mg SC hourly as needed for breakthrough pain, which is 10% of the 60 mg SC daily total, while the team watches his breathing and level of sedation. Naloxone at 0.4 mg would bring back his pain and could precipitate withdrawal. When it is truly needed, the guideline dilutes it and gives it slowly. Halving or holding the dose invites the pain to return, and midazolam alone would sedate him without analgesia.",
        keyFeature: { topic: "analgesia-sedation", n: 6 },
        source: "fraser-opioid-principles",
      },
    ],
    sources: [S.painad, S.fraser],
    ...META,
  },

  /* 49 Dirt bike crash, head CT and a shin fracture ------------------------ */
  {
    id: "analgesia-sedation-49",
    topic: "analgesia-sedation",
    title: "Boy thrown from a dirt bike",
    stem:
      "You are working in a community hospital emergency department. An 11-year-old boy is brought to the emergency department by his father 1 hour after he was thrown from a dirt bike and struck his head and right leg. He did not lose consciousness, but he has vomited four times since and has a headache. He is healthy, takes no medications and has no allergies. He is crying out and gripping his right shin, which is angulated halfway down, with intact skin. His foot is warm, with normal pulses and sensation. His GCS is 15. The team has decided that he needs CT of the head, but he cannot keep still on the stretcher. He has no IV. The resident orders intranasal midazolam so that the scan can be done.",
    vitals: { temperature: "36.9°C tympanic", pulse: "118/minute", resp: "22/minute", bp: "112/70 mmHg", o2sat: "98% on room air", weight: "38 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate response to the resident's order before his scan?",
        options: ["Give midazolam, analgesia after the CT", "Give midazolam as ordered", "Restrain him gently for the scan", "Sedate with IV ketamine for the CT", "Treat his pain first, then reassess"],
        correct: 4,
        explanation:
          "He is crying out and gripping an angulated shin, so untreated fracture pain is why he cannot keep still. The Canadian Paediatric Society builds procedure care on pain control and comfort measures first, and uses sedation only as an adjunct when distress persists despite them. For moderate to severe fracture pain it adds intranasal fentanyl, which needs no IV, with a splint. Midazolam, given now or with analgesia delayed until after the scan, calms him without touching the pain, and sedation before a head CT also clouds his neurologic checks. Restraint leaves the pain untreated and adds distress. IV ketamine sedation brings airway risk and an IV for a scan he may manage once comfortable.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "cps-procedural-distress-2019",
      },
      {
        id: "q2",
        kind: "single",
        update: "Twenty minutes later he lies quietly with his father beside him and lets the nurse touch his leg. He says it hurts a little. His GCS is 15.",
        prompt: "Which of the following is the most appropriate plan for his head CT now?",
        options: ["CT after intranasal midazolam", "CT after IV ketamine sedation", "CT under general anesthesia", "CT with his father beside him", "Delay CT until he falls asleep"],
        correct: 3,
        explanation:
          "He is now calm, cooperative and lying still, so the scan can go ahead with his father beside him for comfort. The Canadian Paediatric Society places sedation as an adjunct only when distress persists after pain control, parental presence and distraction. Midazolam, ketamine or general anesthesia would add airway risk and dull his neurologic examination after a head injury, for no benefit now that he is settled. Waiting for him to fall asleep delays an imaging decision the team has already made, and a sleeping child is harder to assess.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "cps-procedural-distress-2019",
      },
      {
        id: "q3",
        kind: "single",
        update: "His CT is normal. X-ray shows displaced fractures of the right tibial and fibular shafts that need closed reduction. You plan ketamine sedation. It is 03:00 and you are the only physician in the hospital.",
        prompt: "Which of the following is the minimum team needed for his sedation and fracture reduction?",
        options: ["You alone with continuous monitoring", "You and a nurse dedicated to monitoring", "You and a nurse who also holds traction", "You and his father holding his leg", "You with a nurse checking every 5 minutes"],
        correct: 1,
        explanation:
          "The Canadian Paediatric Society requires at least two health care providers for procedural sedation, one of them skilled in sedation, airway management and resuscitation. One provider must be dedicated to watching the patient continuously and responding to changes. When the physician giving the sedation also performs the reduction, monitoring and the giving of drugs on direction pass to a second qualified provider such as a nurse. Machines alone do not meet this standard, and a nurse who checks in every 5 minutes or is busy holding traction is not continuously watching his airway. His father can comfort him but is not a trained monitor.",
        keyFeature: { topic: "analgesia-sedation", n: 6 },
        source: "cps-procedural-sedation-2021",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following findings, had it been in his history, would most favour anesthesia consultation before his sedation?",
        options: ["Allergy to amoxicillin", "Difficult intubation at past surgery", "Ear tubes placed at age 2", "Eczema on both elbows", "Uneventful ketamine sedation last year"],
        correct: 1,
        explanation:
          "Sedation by a non-anesthesiologist suits children in ASA class I and II. The Canadian Paediatric Society lists features of a potentially difficult airway, such as a history of difficult intubation, among the high-risk findings that should prompt anesthesia consultation, because a child who obstructs or stops breathing under sedation may need airway rescue. A penicillin allergy does not affect ketamine. Old ear tubes and mild eczema leave him a healthy child. A previous uneventful ketamine sedation is reassuring, not a reason for referral.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "cps-procedural-sedation-2021",
      },
    ],
    sources: [S.cpsDistress, S.cpsSedation],
    ...META,
  },

  /* 50 Aphasia after a stroke and a shoulder fracture ---------------------- */
  {
    id: "analgesia-sedation-50",
    topic: "analgesia-sedation",
    title: "Tripped on the rug at home",
    stem:
      "A 72-year-old woman is brought to the emergency department by her husband 2 hours after she tripped on a rug at home and fell onto her right shoulder. A left hemisphere stroke 2 years ago left her with expressive aphasia and mild right-sided weakness. She understands speech, follows commands and answers yes or no by nodding, but she cannot find words. She points and gestures with her left hand. She has atrial fibrillation treated with apixaban, taken this morning, and depression treated with sertraline. Her creatinine last month was normal. She holds her right arm against her chest and winces when it moves. The right hand is neurovascularly intact. X-ray shows a displaced fracture of the surgical neck of the right humerus. CT of the head is normal.",
    vitals: { temperature: "36.6°C oral", pulse: "92/minute irregular", resp: "18/minute", bp: "152/84 mmHg", o2sat: "96% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to measure the severity of her pain?",
        options: ["Ask her husband to rate it", "Heart rate and blood pressure trend", "PAINAD behavioural scale", "Picture scale she points to", "Spoken 0 to 10 rating"],
        correct: 3,
        explanation:
          "Self-report is the most valid measure of pain, and she can still give one. She understands, follows commands and points with her left hand, so a scale with pictures or numbers that she can point to lets her rate her own pain. The trauma pain guideline asks clinicians to account for cognition and the ability to communicate and to adapt the tool when needed. A spoken rating fails because she cannot produce words. PAINAD is meant for people with advanced dementia who cannot self-report. Her husband's estimate is a proxy, not her rating. Heart rate and blood pressure are not a measure of pain severity.",
        keyFeature: { topic: "analgesia-sedation", n: 1 },
        source: "acs-tqip-acute-pain-2020",
      },
      {
        id: "q2",
        kind: "single",
        update: "She rates her pain 8 out of 10. At the shift change a nurse watches her lying still and quiet, scores her PAINAD as 2 and records her pain as mild.",
        prompt: "Which of the following statements about the PAINAD score of 2 is most accurate?",
        options: ["It confirms that her pain is mild", "It correctly replaces her own rating", "It does not grade her pain severity", "It should guide her next opioid dose", "It shows that she needs no more analgesia"],
        correct: 2,
        explanation:
          "Behavioural scores are not equivalent to self-reported scores. The trauma pain guideline notes that behavioural tools show whether pain is present or absent but do not classify its severity, and a patient lying still with a fracture may simply be guarding. It also advises keeping the tool chosen at the first assessment and reassessing with it. She rated her pain 8 out of 10 herself, and that rating, repeated on the same picture scale, should guide her treatment. In a patient who can rate her own pain, reading the PAINAD of 2 as mild pain, as a reason to stop analgesia or as the basis for her next dose would undertreat her.",
        keyFeature: { topic: "analgesia-sedation", n: 1 },
        source: "acs-tqip-acute-pain-2020",
      },
      {
        id: "q3",
        kind: "single",
        update: "She is receiving scheduled acetaminophen and small doses of an IV opioid. The orthopedic resident offers an interscalene brachial plexus block for her shoulder pain.",
        prompt: "Which of the following statements about an interscalene block for her today is most accurate?",
        options: ["Acceptable if her INR is 1.5 or less", "Acceptable now under ultrasound guidance", "Acceptable once apixaban is held 24 hours", "Deferred until 72 hours off apixaban", "Preferred, with no effect on breathing"],
        correct: 3,
        explanation:
          "She took apixaban this morning. The trauma pain guideline applies the American Society of Regional Anesthesia and Pain Medicine rules for deep plexus blocks to brachial plexus blocks, and its table advises holding apixaban for 72 hours before such a block. A block today, or after only a 24-hour hold, falls inside that window, and ultrasound guidance does not change the bleeding rule. The INR threshold of 1.5 applies to warfarin and does not measure the effect of apixaban. The guideline also notes that an interscalene block invariably weakens the diaphragm on the same side, so it does affect breathing. Her pain is better served for now by acetaminophen, titrated opioid and immobilization in a sling.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "acs-tqip-acute-pain-2020",
      },
      {
        id: "q4",
        kind: "single",
        update: "At 02:00 she is awake in a sling. She rates her pain 7 out of 10 whenever she shifts in bed. Her last analgesic dose was 4 hours ago. The nurse asks for an order to help her sleep.",
        prompt: "Which of the following is the most appropriate medication order for her now?",
        options: ["Another analgesic dose now", "Lorazepam at bedtime", "Quetiapine at bedtime", "Trazodone at bedtime", "Zopiclone at bedtime"],
        correct: 0,
        explanation:
          "Her own rating of 7 out of 10 with movement shows that pain, not insomnia, is keeping her awake, so the right order is a further dose of her analgesic, after which sleep usually follows. The trauma pain guideline makes pain control the first priority and treats sedation as secondary, and it warns against combining opioids with other central nervous system depressants outside closely monitored settings. Lorazepam, zopiclone, quetiapine and trazodone would each sedate an older woman who is receiving an opioid, adding risk of falls, delirium and slowed breathing, while leaving the fracture pain untreated.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "acs-tqip-acute-pain-2020",
      },
    ],
    sources: [S.tqip],
    ...META,
  },

  /* 51 Shoulder dislocation at 30 weeks ------------------------------------- */
  {
    id: "analgesia-sedation-51",
    topic: "analgesia-sedation",
    title: "Fall on an icy step in pregnancy",
    stem:
      "A 33-year-old woman who is 30 weeks pregnant presents to the emergency department 1 hour after she slipped on an icy step and fell onto her outstretched right arm. She did not strike her abdomen. She has no abdominal pain, contractions, vaginal bleeding or fluid loss, and she feels the baby moving. Her pregnancy has been uncomplicated and she is Rh positive. She takes a prenatal vitamin and last ate 5 hours ago. She holds the right arm slightly abducted and externally rotated and rates her pain 9 out of 10. Axillary nerve and distal neurovascular function are normal. X-ray shows an anterior shoulder dislocation without fracture. The fetal heart rate is 140/minute. Two attempts at reduction by external rotation without medication have failed.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "18/minute", bp: "118/70 mmHg", o2sat: "99% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step to allow her shoulder reduction?",
        options: ["acetaminophen 1 g IV, then retry", "fentanyl 50 mcg IV, then retry", "hydromorphone 1 mg IV, then retry", "lidocaine 1% into the joint", "morphine 5 mg IV, then retry"],
        correct: 3,
        explanation:
          "Intra-articular lidocaine numbs the joint for the reduction without systemic analgesia or sedation. A Cochrane review of five trials found no difference in immediate reduction success between intra-articular lidocaine and IV analgesia with or without sedation, with fewer adverse effects and a shorter emergency department stay after the injection. Fentanyl, hydromorphone or morphine IV before another attempt is the IV analgesia approach in that comparison, with more adverse effects and no better success. Acetaminophen on its own is too weak to relax a dislocated shoulder for an immediate retry.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "wakai-intra-articular-lidocaine",
      },
      {
        id: "q2",
        kind: "menu",
        select: 2,
        update: "After two more attempts the shoulder is still dislocated. You plan procedural sedation.",
        prompt: "Which of the following are the most appropriate preparations for her procedural sedation?",
        options: [
          "Cricoid pressure throughout",
          "Fasting for 8 hours first",
          "Left uterine displacement",
          "Oxygen to keep O2 sat above 95%",
          "Phenylephrine infusion started first",
          "Supine flat positioning",
          "Trendelenburg positioning",
          "Urinary catheter insertion",
        ],
        correct: [2, 3],
        explanation:
          "After mid-pregnancy the uterus compresses the inferior vena cava when she lies supine, so the SOGC advises moving it off the vena cava by manual displacement or left lateral tilt to protect venous return and cardiac output. The SOGC also advises oxygen to keep maternal saturation above 95% for fetal oxygenation, which matters during sedation when breathing may slow. Lying supine and flat, or head down, worsens caval compression. A phenylephrine infusion is not started routinely, and the SOGC reserves vasopressors for hypotension that does not respond to fluid. Delaying for a longer fast leaves the shoulder dislocated, and cricoid pressure and a urinary catheter are not part of preparing a short sedation in a woman who is breathing on her own.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "sogc-pregnant-trauma-2015",
      },
      {
        id: "q3",
        kind: "single",
        update: "The resident plans to give midazolam alone, saying that an opioid could harm the fetus.",
        prompt: "Which of the following sedation regimens is most appropriate for her shoulder reduction?",
        options: ["diazepam IV alone, titrated", "haloperidol IV alone, titrated", "lorazepam IV alone, titrated", "midazolam IV alone, titrated", "midazolam with fentanyl IV, titrated"],
        correct: 4,
        explanation:
          "Reducing a dislocated shoulder is painful, and a benzodiazepine sedates without giving any analgesia, so she needs an opioid with it. The American College of Surgeons trauma pain guideline states that pregnancy does not preclude treating pain after injury, that untreated pain harms both mother and fetus, and it lists IV and intranasal fentanyl as generally considered safe for a short course in every trimester. Small titrated doses keep her breathing and blood pressure steady. Midazolam, diazepam or lorazepam alone would leave her in pain during the reduction. Haloperidol is an antipsychotic with no analgesic effect.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "acs-tqip-acute-pain-2020",
      },
      {
        id: "q4",
        kind: "single",
        update: "The shoulder is reduced. She is back to her baseline. She has completed 4 hours of fetal heart and contraction monitoring, which was normal, and is ready to go home with her partner.",
        prompt: "Which of the following symptoms should most prompt her to return to hospital after discharge?",
        options: ["Bruising at the IV site", "Mild nausea this evening", "Regular abdominal tightening", "Shoulder ache when she moves her arm", "Sleepiness for a few hours"],
        correct: 2,
        explanation:
          "She has had a fall at 30 weeks and a sedation, and her discharge advice must cover the pregnancy as well as the procedure. The SOGC names sustained contractions, uterine tenderness, vaginal bleeding and rupture of the membranes as adverse features that call for 24 hours of observation after trauma in pregnancy, so regular tightening of her abdomen should bring her straight back, as should bleeding or fluid loss. Mild nausea and some sleepiness for a few hours are expected after sedation and settle on their own. An ache in the reduced shoulder with movement is expected, and a small bruise at the IV site is minor.",
        keyFeature: { topic: "analgesia-sedation", n: 6 },
        source: "sogc-pregnant-trauma-2015",
      },
    ],
    sources: [S.wakai, S.sogc, S.tqip],
    ...META,
  },

  /* 52 Ankle fracture-dislocation in a patient on a weekly injection ------- */
  {
    id: "analgesia-sedation-52",
    topic: "analgesia-sedation",
    title: "Missed step on the way to the car",
    stem:
      "A 54-year-old woman presents to the emergency department 1 hour after she missed a step and twisted her left ankle. The ankle is grossly deformed, and the skin over the medial malleolus is tented and blanched. The foot is warm with a palpable dorsalis pedis pulse. X-ray shows a bimalleolar fracture with lateral dislocation of the talus. She has type 2 diabetes and obesity treated with metformin and weekly subcutaneous semaglutide, which was increased from 0.5 mg to 1 mg 10 days ago. She has had nausea and bloating since the increase. She also takes ramipril for hypertension. She last ate 7 hours ago. Her airway examination shows a Mallampati class II view and full neck movement. She rates her pain 9 out of 10.",
    vitals: { temperature: "36.7°C oral", pulse: "98/minute", resp: "18/minute", bp: "148/88 mmHg", o2sat: "97% on room air", weight: "100 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features most increases her risk of aspiration during procedural sedation?",
        options: ["Her age of 54 years", "Last meal 7 hours ago", "Mallampati class II airway view", "Ramipril for hypertension", "Semaglutide dose increase"],
        correct: 4,
        explanation:
          "Semaglutide slows gastric emptying, and the multi-society guidance names the dose escalation phase, a higher dose, a weekly formulation and gastrointestinal symptoms such as nausea as markers of higher risk of retained gastric contents. She has each of these: a weekly drug, a recent rise to a higher dose, and nausea with bloating since. So her stomach may hold food despite a 7-hour fast, which on its own would be reassuring. A Mallampati class II view predicts an easy airway, not aspiration. Ramipril and her age do not slow gastric emptying.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "kindel-glp1-perioperative",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most useful bedside test of her aspiration risk before any sedation?",
        options: ["Abdominal radiograph", "Capillary blood glucose", "Nasogastric tube aspirate", "Point-of-care gastric ultrasound", "Upright chest radiograph"],
        correct: 3,
        explanation:
          "The multi-society guidance says point-of-care gastric ultrasound could be used to assess aspiration risk when there is concern about retained gastric contents on the day of a procedure. It shows whether the antrum holds fluid or solid food and roughly how much. It can be done at the bedside in minutes by a trained operator. An abdominal or chest radiograph cannot reliably show gastric contents. Passing a nasogastric tube is uncomfortable, may provoke the vomiting it is meant to prevent and cannot retrieve solid food. A glucose level is worth checking in a patient with diabetes but says nothing about what is in her stomach.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "kindel-glp1-perioperative",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ultrasound shows a distended gastric antrum filled with solid food. The skin over the medial malleolus is still blanched.",
        prompt: "Which of the following is the most appropriate approach to reducing her ankle now?",
        options: ["Etomidate sedation and reduction", "Ketamine sedation and reduction", "Lidocaine into the ankle joint", "Propofol sedation and reduction", "Wait 8 hours, then sedate"],
        correct: 2,
        explanation:
          "Solid food in the stomach makes sedation risky, and the tented, blanched skin needs reduction now to protect the soft tissues. In a randomized trial of ankle fracture-dislocations, an intra-articular lidocaine block relieved pain as well as conscious sedation, allowed acceptable reductions and took less time on average. The authors studied it as a lower-risk alternative to sedation, which is what she needs. Etomidate, propofol and ketamine all blunt protective reflexes to some degree and carry a real risk of vomiting or aspiration with a full stomach. Waiting 8 hours risks skin necrosis over the malleolus and may not empty a stomach slowed by semaglutide.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "white-ankle-intra-articular",
      },
      {
        id: "q4",
        kind: "single",
        update: "During the first manipulation she rates her pain 6 out of 10 and asks for more medication. She is alert and her O2 sat is 97%.",
        prompt: "Which of the following is the most appropriate addition for her pain during the reduction?",
        options: ["fentanyl 50 mcg IV", "fentanyl 250 mcg IV", "ketamine 100 mg IV", "lorazepam 2 mg IV", "midazolam 2 mg IV"],
        correct: 0,
        explanation:
          "She is alert with residual pain, so a small dose of a short-acting opioid tops up the block without deep sedation. The American College of Surgeons trauma pain guideline lists IV fentanyl at 25 to 50 mcg every 30 to 60 minutes. A 250 mcg bolus risks apnea and loss of airway reflexes in a patient with food in her stomach. Ketamine 100 mg is 1 mg/kg at her actual weight, a dissociative dose rather than the guideline's analgesic bolus of 0.3 mg/kg, which should be based on ideal body weight in obesity. Midazolam and lorazepam add sedation and aspiration risk but no analgesia.",
        keyFeature: { topic: "analgesia-sedation", n: 3 },
        source: "acs-tqip-acute-pain-2020",
      },
    ],
    sources: [S.kindel, S.white, S.tqip],
    ...META,
  },
];
