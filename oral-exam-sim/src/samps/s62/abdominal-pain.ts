// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  phacPid: { id: "phac-pid", citation: "Public Health Agency of Canada. STI-associated syndromes guide: pelvic inflammatory disease. Canadian guidelines on sexually transmitted infections. Page modified 2026.", url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/sti-associated-syndromes/pelvic-inflammatory-disease.html" },
  cpsUti: { id: "cps-uti-2014", citation: "Robinson JL, Finlay JC, Lang ME, Bortolussi R, Canadian Paediatric Society Infectious Diseases and Immunization Committee and Community Paediatrics Committee. Urinary tract infections in infants and children: diagnosis and management. Paediatr Child Health. 2014." },
  cwcCar: { id: "cwc-radiology", citation: "Canadian Association of Radiologists. Radiology: recommendations. Choosing Wisely Canada. Last updated 2026.", url: "https://choosingwiselycanada.org/recommendation/radiology/" },
  ohle: { id: "ohle-aas-2020", citation: "Ohle R, Yan JW, Yadav K, et al. Diagnosing acute aortic syndrome: a Canadian clinical practice guideline. CMAJ. 2020." },
  escAorta: { id: "esc-aorta-2024", citation: "Mazzolai L, Teixido-Tura G, Lanzi S, et al. 2024 ESC Guidelines for the management of peripheral arterial and aortic diseases. Eur Heart J. 2024.", url: "https://doi.org/10.1093/eurheartj/ehae179" },
  brandl: { id: "brandl-immunosuppressed-diverticulitis", citation: "Brandl A, Kratzer T, Kafka-Ritsch R, et al. Diverticulitis in immunosuppressed patients: a fatal outcome requiring a new approach? Can J Surg. 2016." },
  wses: { id: "wses-diverticulitis-2020", citation: "Sartelli M, Weber DG, Kluger Y, et al. 2020 update of the WSES guidelines for the management of acute colonic diverticulitis in the emergency setting. World J Emerg Surg. 2020.", url: "https://doi.org/10.1186/s13017-020-00313-4" },
  tcPe: { id: "tc-pe-dx", citation: "Thrombosis Canada. Clinical guide. Pulmonary embolism (PE): diagnosis. 2025.", url: "https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf" },
} satisfies Record<string, Source>;

export const ABDOMINAL_PAIN_S62: Samp[] = [
  /* 48 Pelvic inflammatory disease treated as a bladder infection ------------ */
  {
    id: "abdominal-pain-48",
    topic: "abdominal-pain",
    alsoTopics: ["infectious-diseases"],
    title: "Young woman no better on her antibiotic",
    stem:
      "A 22-year-old woman presents to the emergency department with 4 days of lower abdominal pain. Two days ago a walk-in clinic diagnosed a bladder infection from a urine dipstick positive for leukocytes and blood, and prescribed nitrofurantoin. Her pain has worsened, she now has a fever and she feels nauseated. She has some burning when she passes urine but no frequency. Her last menstrual period ended 6 days ago. She has had a new male partner for 2 months and they use condoms inconsistently. She has no medical history. She has tenderness across the lower abdomen, worse on the right, without guarding.",
    vitals: { temperature: "38.6°C oral", pulse: "108/minute", resp: "18/minute", bp: "118/72 mmHg", o2sat: "99% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her assessment?",
        options: ["Change to oral ciprofloxacin", "CT abdomen with contrast", "Pelvic examination", "Renal ultrasound", "Repeat urine culture"],
        correct: 2,
        explanation:
          "Fever and worsening lower abdominal pain in a sexually active young woman with a new partner and inconsistent condom use call for pelvic inflammatory disease to be looked for, and its minimum clinical criteria are lower abdominal, cervical motion and adnexal tenderness, which only a pelvic examination can show. Changing the antibiotic or repeating the urine culture keeps treating a bladder infection that has not explained her course. A renal ultrasound looks for obstruction, and a CT before an examination and pregnancy test skips the steps that point to the diagnosis.",
        keyFeature: { topic: "abdominal-pain", n: 8 },
        source: "phac-pid",
      },
      {
        id: "q2",
        kind: "menu",
        update: "Pelvic examination shows mucopurulent cervical discharge, cervical motion tenderness and right adnexal tenderness with fullness.",
        prompt: "Which of the following investigations are most appropriate for her now?",
        options: ["Abdominal radiograph", "Cystoscopy referral", "NAAT for gonorrhea and chlamydia", "Pelvic ultrasound", "Renal ultrasound", "Repeat urine culture", "Serum lipase level", "Urine pregnancy test"],
        select: 3,
        correct: [2, 3, 7],
        explanation:
          "She meets the clinical criteria for pelvic inflammatory disease. A pregnancy test is needed to rule out ectopic pregnancy and guide treatment. Nucleic acid amplification testing for gonorrhea and chlamydia identifies the organisms, which matters for her and her partner. A pelvic ultrasound is advised when a tubo-ovarian abscess is suspected, as her adnexal fullness suggests. A repeat urine culture, renal ultrasound or cystoscopy keeps chasing the urinary diagnosis. An abdominal radiograph and lipase do not help with pelvic infection.",
        keyFeature: { topic: "abdominal-pain", n: 8 },
        source: "phac-pid",
      },
      {
        id: "q3",
        kind: "single",
        update: "The pregnancy test is negative. Transvaginal ultrasound shows a 5 cm complex right adnexal collection consistent with a tubo-ovarian abscess. She is still nauseated.",
        prompt: "Which of the following is the most appropriate management plan for her?",
        options: ["Admit under gynecology for IV therapy", "Continue nitrofurantoin, add pain relief", "Outpatient ceftriaxone and doxycycline", "Outpatient treatment, review in 3 days", "Urology referral for cystoscopy"],
        correct: 0,
        explanation:
          "A tubo-ovarian abscess, high fever and nausea are each indications to hospitalize a patient with pelvic inflammatory disease, and her care needs gynecology involvement for parenteral antibiotics and possible drainage. Outpatient regimens, including ceftriaxone with doxycycline, are for milder disease in a patient who can take oral treatment and has no abscess. Nitrofurantoin does not treat pelvic infection. Cystoscopy chases a urinary diagnosis that the examination and ultrasound have replaced.",
        keyFeature: { topic: "abdominal-pain", n: 4 },
        source: "phac-pid",
      },
    ],
    sources: [S.phacPid],
    ...META,
  },

  /* 49 Toddler appendicitis after a bag urine diagnosis ---------------------- */
  {
    id: "abdominal-pain-49",
    topic: "abdominal-pain",
    title: "Toddler who will not walk after two days of antibiotics",
    stem:
      "A 3-year-old girl is brought to the emergency department by her mother with 3 days of abdominal pain, fever and vomiting. She is not yet toilet trained. Two days ago a walk-in clinic diagnosed a urinary tract infection from a bag urine specimen that showed leukocytes, and prescribed cephalexin. The bag urine culture has since grown mixed bacteria. She is worse today, will not walk and has vomited four times. She has had no diarrhea. She lies still on the stretcher and cries when it is bumped. Her abdomen is tender in the right lower quadrant with guarding.",
    vitals: { temperature: "38.7°C tympanic", pulse: "152/minute", resp: "30/minute", bp: "98/60 mmHg", o2sat: "98% on room air", weight: "14 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her first visit made the diagnosis of urinary tract infection unreliable?",
        options: ["Bag specimen for urine", "Cephalexin as first choice", "Fever above 38°C", "Lack of blood tests", "Vomiting at presentation"],
        correct: 0,
        explanation:
          "In a child who is not toilet trained, urine for culture should be collected by catheter or suprapubic aspiration, because a bag specimen may be used for urinalysis but not for culture. Her bag culture grew mixed bacteria, the typical result of skin contamination, so it never confirmed infection. Fever and vomiting fit a urinary infection as well as appendicitis, so they did not make the diagnosis unreliable. Cephalexin is a reasonable oral choice, and blood tests would not have confirmed a urinary source.",
        keyFeature: { topic: "abdominal-pain", n: 8 },
        source: "cps-uti-2014",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first imaging test for her suspected appendicitis?",
        options: ["Abdominal radiograph", "Abdominal ultrasound", "CT abdomen with IV contrast", "MRI abdomen and pelvis", "Renal and bladder ultrasound"],
        correct: 1,
        explanation:
          "Ultrasound is the preferred first test for suspected appendicitis in children because it avoids ionizing radiation and, in experienced hands, has a sensitivity and specificity of about 94%. CT should not be done until ultrasound has been considered, and it is kept for an inconclusive ultrasound. MRI in a 3-year-old usually needs sedation. A renal and bladder ultrasound does not examine the appendix. A plain radiograph does not show the appendix itself.",
        keyFeature: { topic: "abdominal-pain", n: 7 },
        source: "cwc-radiology",
      },
      {
        id: "q3",
        kind: "single",
        update: "The ultrasound does not see the appendix. There is a small amount of free fluid in the right lower quadrant. Her white cell count is 11.2 x 10^9/L.",
        prompt: "Which of the following statements about this ultrasound result is most accurate?",
        options: ["It excludes appendicitis", "It favours mesenteric adenitis", "It is inconclusive for appendicitis", "It points to a urinary source", "It rules out perforation"],
        correct: 2,
        explanation:
          "An ultrasound that does not see the appendix is inconclusive, not normal, and it cannot exclude appendicitis or perforation in a child with fever, vomiting and right lower quadrant guarding. An inconclusive ultrasound is the situation in which further imaging such as CT is considered. Mesenteric adenitis is diagnosed when enlarged nodes are seen with a normal appendix, which this study did not show. Free fluid does not point to the urinary tract.",
        keyFeature: { topic: "abdominal-pain", n: 6 },
        source: "cwc-radiology",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: ["Catheter urine and IV ceftriaxone", "Discharge, repeat ultrasound tomorrow", "Pediatric surgery assessment now", "Plain abdominal radiograph", "Stool culture and observation"],
        correct: 2,
        explanation:
          "She has fever, repeated vomiting, guarding and pain when the stretcher is bumped, and her ultrasound could not exclude appendicitis, so a pediatric surgeon should assess her now and decide between further imaging such as CT and the operating room. Sending her home for a repeat ultrasound risks perforation in the meantime. Treating the urine again repeats the original error. A plain radiograph and a stool culture do not answer the question of appendicitis.",
        keyFeature: { topic: "abdominal-pain", n: 4 },
        source: "cwc-radiology",
      },
    ],
    sources: [S.cpsUti, S.cwcCar],
    ...META,
  },
];
