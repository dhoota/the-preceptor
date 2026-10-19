// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;
const T = "abuse-domestic";

const S: Record<string, Source> = {
  sheets: {
    id: "sheets-sentinel",
    citation: "Sheets LK, Leach ME, Koszewski IJ, Lessmeier AM, Nugent M, Simpson P. Sentinel injuries in infants evaluated for child physical abuse. Pediatrics. 2013.",
    url: "https://pubmed.ncbi.nlm.nih.gov/23478861/",
  },
  acr: {
    id: "acr-abuse",
    citation: "American College of Radiology Expert Panel on Pediatric Imaging. ACR Appropriateness Criteria: suspected physical abuse, child. Revised 2025.",
    url: "https://acsearch.acr.org/docs/69443/Narrative/",
  },
  cpsThi: {
    id: "cps-thi",
    citation: "Shouldice M, Ward MGK, Nolan K, Cory E. Canadian Paediatric Society, Child and Youth Maltreatment Section. Medical assessment of suspected traumatic head injury due to child maltreatment. Paediatr Child Health. 2025.",
    url: "https://pubmed.ncbi.nlm.nih.gov/40904407/",
  },
  cpsBruise: {
    id: "cps-bruising",
    citation: "Ward MG, Ornstein A, Niec A, Murray CL. Canadian Paediatric Society, Child and Youth Maltreatment Section. The medical assessment of bruising in suspected child maltreatment cases: a clinical perspective. Paediatr Child Health. 2013.",
    url: "https://pubmed.ncbi.nlm.nih.gov/24426797/",
  },
};

export const ABUSE_DOMESTIC_S67: Samp[] = [
  {
    id: "abuse-domestic-39",
    topic: T,
    title: "Blood in the mouth after a bottle",
    stem: "A 3-month-old boy is brought to the emergency department at 22:00 by his mother because there was blood in his mouth after his evening bottle. His father gave the bottle and told her the teat caught the baby's lip. He was born at term, received vitamin K at birth and has had routine care. He feeds well and cannot yet roll over. He has no teeth. He is alert, consolable and feeding. The upper lip frenulum is torn, with a small amount of fresh blood. The anterior fontanelle is soft. The rest of the skin examination and the neurologic examination are normal.",
    vitals: { temperature: "36.9°C rectal", pulse: "142/minute", resp: "36/minute", o2sat: "99% on room air", weight: "6.1 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of the injury to his upper lip frenulum?",
        options: [
          "Accidental injury from the bottle teat",
          "Inflicted injury to the mouth",
          "Normal tearing during feeding",
          "Teething gum injury",
          "Vitamin K deficiency bleeding",
        ],
        correct: 1,
        explanation: "A torn frenulum in a 3-month-old who cannot roll, explained only by a bottle teat, is a sentinel injury: a minor injury in an infant who cannot cruise, or with an implausible explanation. In a case-control study, 27.5% of definitely abused infants had an earlier sentinel injury, intraoral injury was one of the types, and such injuries were rare in infants found not to be abused. Calling it accidental misses the chance to prevent worse harm. He has no teeth, so teething cannot explain it. He received vitamin K at birth, and the bleeding comes from a tear rather than oozing from intact gums.",
        keyFeature: { topic: T, n: 2 },
        source: "sheets-sentinel",
      },
      {
        id: "q2",
        kind: "single",
        update: "He remains alert, and his neurologic examination is still normal. His mother asks whether he needs any tests.",
        prompt: "Which of the following imaging plans is most appropriate for him now?",
        options: [
          "CT head and a skeletal survey",
          "Head ultrasound and a babygram",
          "Skeletal survey alone",
          "Two-view chest X-ray alone",
          "No imaging while he looks well",
        ],
        correct: 0,
        explanation: "Abusive fractures and head injuries in infants are often not clinically apparent, so a normal examination does not rule them out. For a child 24 months or younger with concern for physical abuse, the ACR Appropriateness Criteria rate both a skeletal survey and CT of the head without contrast as usually appropriate initial imaging. A skeletal survey alone would miss an occult intracranial injury. ACR rates head ultrasound as usually not appropriate, and a babygram or chest film alone does not image the whole skeleton in enough detail. Deferring imaging because he looks well repeats the error that lets sentinel injuries go unrecognized.",
        keyFeature: { topic: T, n: 3 },
        source: "acr-abuse",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following blood tests are most appropriate to screen him for occult injuries and for a bleeding disorder?",
        options: [
          "AST and ALT levels",
          "Blood culture and CRP",
          "CBC, INR, PTT and fibrinogen",
          "Ferritin and iron studies",
          "Lipase level",
          "Serum lactate level",
          "Thyroid function tests",
          "Troponin level",
        ],
        select: 3,
        correct: [0, 2, 4],
        explanation: "The Canadian Paediatric Society advises AST, ALT and lipase to screen for occult abdominal injury, with abdominal CT if any is raised or the abdomen is abnormal. Because his presenting problem is bleeding, coagulation testing with a CBC and smear, INR, PTT and fibrinogen, and factor studies as advised, looks for a medical cause of the bleeding. These results also protect the family if a bleeding disorder is found. A blood culture, lactate, troponin, thyroid tests and iron studies do not screen for inflicted injury and are not indicated by his findings.",
        keyFeature: { topic: T, n: 3 },
        source: "cps-thi",
      },
      {
        id: "q4",
        kind: "single",
        update: "A nurse points out a blue-grey patch over his lower back, 4 cm across, uniform in colour, flat and not tender. His mother says it has been there since birth.",
        prompt: "Which of the following is the most likely explanation for the patch on his lower back?",
        options: [
          "Bruise from a forceful grip",
          "Congenital dermal melanocytosis",
          "Early infantile hemangioma",
          "Hematoma from a sacral injury",
          "Old bruise in a healing phase",
        ],
        correct: 1,
        explanation: "A flat, uniform, nontender blue-grey patch over the lower back that has been present since birth is a slate-grey nevus, or congenital dermal melanocytosis. The Canadian Paediatric Society advises confirming that a lesion is a true bruise before interpreting it, and lists slate-grey nevi and hemangiomas among the mimics. It should be documented so that it is not later mistaken for an injury. A grip bruise or an old bruise would not have been present since birth, and a bruise is usually tender. A hematoma is raised. A hemangioma is usually red or raised and grows over the first months.",
        keyFeature: { topic: T, n: 2 },
        source: "cps-bruising",
      },
    ],
    sources: [S.sheets, S.acr, S.cpsThi, S.cpsBruise],
    ...META,
  },
];
