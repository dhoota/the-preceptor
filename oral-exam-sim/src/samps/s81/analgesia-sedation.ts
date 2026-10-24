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
  cpsPain: {
    id: "cps-pain-best-practices-2022",
    citation:
      "Trottier ED, Ali S, Doré-Bergeron MJ, Chauvin-Kimoff L, Canadian Paediatric Society Acute Care Committee. Best practices in pain assessment and management for children. Paediatr Child Health. 2022.",
    url: "https://cps.ca/en/documents/position/pain-assessment-and-management",
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
  malviya: {
    id: "malviya-r-flacc",
    citation:
      "Malviya S, Voepel-Lewis T, Burke C, Merkel S, Tait AR. The revised FLACC observational pain tool. Improved reliability and validity for pain assessment in children with cognitive impairment. Paediatr Anaesth. 2006.",
    url: "https://pubmed.ncbi.nlm.nih.gov/16490089/",
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
        options: ["Cool hands and feet", "Dry mouth and cracked lips", "Grimacing and moaning when turned", "Mottled skin over both knees", "Picking at the bedsheets"],
        correct: 2,
        explanation:
          "He cannot rate his pain, so his behaviour has to speak for him, and a grimace with moaning that comes on when he is moved is the pattern an observational tool such as PAINAD scores as pain, through its facial expression and negative vocalization items. It also points to his spine and pelvic metastases after 14 hours without his regular morphine. Cool hands and feet and mottled knees reflect the falling circulation of the last days of life, not pain. A dry mouth follows mouth breathing and poor intake. Picking at the bedsheets is a sign of delirium, which may coexist but does not by itself show that he hurts.",
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
        options: ["Another SC dose of the same size", "Haloperidol 1 mg SC now", "Midazolam 2.5 mg SC now", "Transdermal fentanyl 25 mcg/hour", "Wait 4 hours for the next dose"],
        correct: 0,
        explanation:
          "Severe pain in a patient already on opioids is treated as a pain emergency. The guideline repeats the SC dose after 20 minutes until the pain breaks, so a second 10 mg SC dose is due now. His breathing at 20/minute and his response to voice show no sign of opioid excess. Waiting 4 hours leaves him in pain when the first dose has clearly not been enough. A fentanyl patch takes many hours to work and is not a first choice for acute or rapidly changing pain. Haloperidol and midazolam would sedate him while the pain continues.",
        keyFeature: { topic: "analgesia-sedation", n: 3 },
        source: "fraser-opioid-principles",
      },
      {
        id: "q4",
        kind: "single",
        update: "After a second dose he settles. An hour later he is asleep with a relaxed face and rouses to voice. His pupils are 3 mm and his resp. is 12/minute and regular. His wife asks whether the morphine will stop his breathing.",
        prompt: "Which of the following is the most appropriate plan for his opioid from now on?",
        options: ["Continue regular doses and observe", "Give naloxone 0.4 mg IV now", "Halve the regular SC dose", "Hold opioids until fully awake", "Switch to midazolam alone"],
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

  /* 49 Fall from a pony, head CT and a forearm fracture -------------------- */
  {
    id: "analgesia-sedation-49",
    topic: "analgesia-sedation",
    title: "Girl who fell from a pony",
    stem:
      "You are working in a community hospital emergency department. A 6-year-old girl is brought to the emergency department by her father 1 hour after she fell from a pony and landed on her head and left arm. She cried at once and has vomited four times since. She is healthy, takes no medications and has no allergies. She is screaming and holding her left forearm, which is visibly angulated. The skin is intact, and her hand is pink and warm with normal sensation. Her GCS is 15. There is a 4 cm boggy swelling over the right parietal scalp. The team has decided that she needs CT of the head, but she will not lie still. She has no IV. The resident orders intranasal midazolam so that the scan can be done.",
    vitals: { temperature: "36.8°C tympanic", pulse: "132/minute", resp: "26/minute", bp: "104/66 mmHg", o2sat: "99% on room air", weight: "20 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate medication to give her first?",
        options: ["acetaminophen 300 mg PO", "fentanyl 30 mcg IN", "ibuprofen 200 mg PO", "lorazepam 1 mg SL", "midazolam 8 mg IN"],
        correct: 1,
        explanation:
          "Her screaming and guarding of an angulated forearm show severe fracture pain, and her distress is the reason she cannot lie still. The Canadian Paediatric Society names intranasal fentanyl the first-line opioid for moderate to severe pain in children, at 1 to 2 mcg/kg per dose to a maximum of 100 mcg, so 1.5 mcg/kg at 20 kg is 30 mcg. It needs no IV and acts quickly. Midazolam and lorazepam ease anxiety but do nothing for the broken arm, and sedation before a head CT also clouds her neurologic checks. Oral acetaminophen and ibuprofen are good co-analgesics, but after four vomits they may not stay down and alone they are too weak for a displaced fracture.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "cps-pain-best-practices-2022",
      },
      {
        id: "q2",
        kind: "single",
        update: "Fifteen minutes after her first medication and a padded splint, she lies quietly on her father's lap and lets the nurse touch her arm. She says it hurts a little. Her GCS is 15.",
        prompt: "Which of the following is the most appropriate plan for her head CT now?",
        options: ["CT after intranasal midazolam", "CT after IV ketamine sedation", "CT under general anesthesia", "CT with her father beside her", "Delay CT until she falls asleep"],
        correct: 3,
        explanation:
          "Once her pain is treated she is calm, cooperative and lying still, so the scan can go ahead now with her father beside her for comfort. The Canadian Paediatric Society places sedation as an adjunct only when distress persists after pain control, parental presence and distraction. Midazolam, ketamine or general anesthesia would add airway risk and dull her neurologic examination after a head injury, for no benefit now that she is settled. Waiting for her to fall asleep delays an imaging decision the team has already made, and a sleeping child is harder to assess.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "cps-procedural-distress-2019",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her CT is normal. X-ray shows displaced fractures of the left radius and ulna that need closed reduction. You plan ketamine sedation. It is 03:00 and you are the only physician in the hospital.",
        prompt: "Which of the following is the minimum team needed for her sedation and fracture reduction?",
        options: ["You alone with continuous monitoring", "You and a nurse dedicated to monitoring", "You and a nurse who also holds traction", "You and her father holding her arm", "You with a nurse checking every 5 minutes"],
        correct: 1,
        explanation:
          "The Canadian Paediatric Society requires at least two health care providers for procedural sedation, one of them skilled in sedation, airway management and resuscitation. One provider must be dedicated to watching the patient continuously and responding to changes. When the physician giving the sedation also performs the reduction, monitoring and the giving of drugs on direction pass to a second qualified provider such as a nurse. Machines alone do not meet this standard, and a nurse who checks in every 5 minutes or is busy holding traction is not continuously watching her airway. Her father can comfort her but is not a trained monitor.",
        keyFeature: { topic: "analgesia-sedation", n: 6 },
        source: "cps-procedural-sedation-2021",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following findings, had it been in her history, would most favour anesthesia consultation before her sedation?",
        options: ["Allergy to amoxicillin", "Ear tubes placed at age 2", "Eczema on both elbows", "Uneventful sedation last year", "Wheeze needing prednisolone last week"],
        correct: 4,
        explanation:
          "Sedation by a non-anesthesiologist suits children in ASA class I and II. The Canadian Paediatric Society advises considering anesthesia consultation when a child has an active chronic condition, such as a recent asthma exacerbation, or an acute illness, because these children have more bronchospasm, laryngospasm and desaturation. Wheeze treated with prednisolone a week ago is that kind of recent exacerbation. A penicillin allergy does not affect ketamine. Old ear tubes and mild eczema leave her healthy. A previous uneventful sedation is reassuring, not a reason for referral.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "cps-procedural-sedation-2021",
      },
    ],
    sources: [S.cpsPain, S.cpsDistress, S.cpsSedation],
    ...META,
  },

  /* 50 Nonverbal child with a femur fracture after a transfer --------------- */
  {
    id: "analgesia-sedation-50",
    topic: "analgesia-sedation",
    title: "Arching after a wheelchair transfer",
    stem:
      "A 9-year-old girl with spastic quadriplegic cerebral palsy is brought to the emergency department by her mother because she has been arching her back and grinding her teeth since a caregiver lifted her from her wheelchair 3 hours ago. She is nonverbal, does not point to pictures and does not use a communication device. She has epilepsy controlled with levetiracetam, takes baclofen for spasticity and is fed by gastrostomy tube. Her mother says that when she hurts she goes very still, frowns and grinds her teeth rather than crying. The right thigh is swollen and she frowns and stiffens when it is touched. X-ray shows a displaced fracture of the right femoral shaft. Her foot is warm and pink. Two attempts at IV access have failed.",
    vitals: { temperature: "37.0°C axillary", pulse: "128/minute", resp: "24/minute", bp: "110/70 mmHg", o2sat: "98% on room air", weight: "26 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate tool to measure her pain?",
        options: ["Critical-Care Pain Observation Tool", "Faces Pain Scale Revised", "Numeric rating scale", "Revised FLACC scale", "Visual analogue scale"],
        correct: 3,
        explanation:
          "She cannot give a self-report, so an observational scale is needed. The Canadian Paediatric Society recommends the revised FLACC for children aged 4 to 19 years with cognitive impairment or who are nonverbal, and it fits a 9-year-old with cerebral palsy. The Faces scale, the numeric scale and the visual analogue scale all need the child to understand and report her own pain, which she cannot do. The Critical-Care Pain Observation Tool was built for adults in intensive care, especially those on a ventilator.",
        keyFeature: { topic: "analgesia-sedation", n: 1 },
        source: "cps-pain-best-practices-2022",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate use of her mother's description of her pain behaviours?",
        options: ["Ask her to point to a face", "Base the score on heart rate", "Include them as cues on the scale", "Score only the standard items", "Treat only when she cries out"],
        correct: 2,
        explanation:
          "Children with cerebral palsy often show pain in their own ways, such as going still or grinding the teeth rather than crying. The revised FLACC was built to add descriptors and the behaviours that parents identify as their child's pain cues, and that change improved its reliability and validity in children with cognitive impairment. Scoring only the standard items would miss her stillness and underrate her pain. Waiting for her to cry out ignores what her mother has told you. Heart rate is a poor guide on its own. Pointing to a face is a self-report task she cannot perform.",
        keyFeature: { topic: "analgesia-sedation", n: 1 },
        source: "malviya-r-flacc",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her revised FLACC score is 8 out of 10. A further IV attempt is planned once her pain is treated.",
        prompt: "Which of the following is the most appropriate analgesic to give her now?",
        options: ["codeine 26 mg by gastrostomy tube", "fentanyl 40 mcg IN", "fentanyl 150 mcg IN", "midazolam 5 mg IN", "morphine 2.6 mg IM"],
        correct: 1,
        explanation:
          "A displaced femoral shaft fracture with a score of 8 is severe pain, and she has no IV. The Canadian Paediatric Society advises intranasal fentanyl at 1 to 2 mcg/kg per dose, up to 100 mcg, and calls it the first-line opioid for moderate to severe pain in Canadian paediatric emergency departments. At 26 kg, 1.5 mcg/kg is 39 mcg, so 40 mcg. A dose of 150 mcg is above both the weight-based range and the 100 mcg cap. Codeine is not to be used in anyone under 18 years, as Health Canada directs. An IM injection adds a painful needle when the nasal route is quicker and gentler. Midazolam does nothing for fracture pain.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "cps-pain-best-practices-2022",
      },
      {
        id: "q4",
        kind: "single",
        update: "Fifteen minutes later her score is 6. She frowns and stiffens when the thigh is moved, and her breathing is regular at 24/minute. The nurse suggests something to settle her for the splint.",
        prompt: "Which of the following is the most appropriate medication to give her now?",
        options: ["fentanyl 26 mcg IN", "fentanyl 80 mcg IN", "lorazepam 1 mg SL", "midazolam 5 mg IN", "nitrous oxide 50% by mask"],
        correct: 0,
        explanation:
          "A score of 6 with frowning and stiffening on movement means her pain is still poorly controlled, so the next step is more analgesia, not sedation. The Canadian Paediatric Society allows a second intranasal fentanyl dose, at 1 to 2 mcg/kg, to a total of 100 mcg. At 26 kg, 1 mcg/kg is 26 mcg, bringing her total to 66 mcg. A second dose of 80 mcg would take the total to 120 mcg, above that cap. Lorazepam and midazolam would quiet her while the fracture still hurts. Nitrous oxide needs a cooperative child who can hold the mask, which she cannot do.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "cps-pain-best-practices-2022",
      },
    ],
    sources: [S.cpsPain, S.malviya],
    ...META,
  },
];
