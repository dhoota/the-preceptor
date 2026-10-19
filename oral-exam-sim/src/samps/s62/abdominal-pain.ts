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

  /* 50 Type B dissection with mesenteric malperfusion, dipstick positive ------ */
  {
    id: "abdominal-pain-50",
    topic: "abdominal-pain",
    alsoTopics: ["chest-pain"],
    title: "Sudden flank pain in the garden",
    stem:
      "A 61-year-old woman presents to the emergency department with left flank and abdominal pain that began suddenly 3 hours ago while she was gardening. The pain was at its worst from the start and she rates it 9 out of 10. She has nausea but no vomiting, fever, dysuria or frequency. She has hypertension treated with amlodipine but often misses doses, and she smokes. A triage urine dipstick shows 1+ leukocytes and 2+ blood. She is sweaty and restless. The abdomen is soft with mild left-sided tenderness and no guarding. The right femoral pulse is strong and the left is weak.",
    vitals: { temperature: "37.2°C oral", pulse: "104/minute", resp: "22/minute", bp: "182/98 mmHg", o2sat: "97% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly argues against a urinary tract infection as the cause of her pain?",
        options: ["Blood on the dipstick", "Leukocytes on the dipstick", "Mild left-sided tenderness", "Nausea without vomiting", "Weak left femoral pulse"],
        correct: 4,
        explanation:
          "A pulse deficit is a high-risk examination finding for acute aortic syndrome, and no urinary infection causes one. With pain that was maximal at onset and poorly controlled hypertension, it should end any thought of a bladder or kidney infection. Leukocytes and blood on a dipstick are nonspecific, and blood can come from a stone or a threatened kidney. Mild tenderness and nausea fit many causes and do not separate them.",
        keyFeature: { topic: "abdominal-pain", n: 8 },
        source: "ohle-aas-2020",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following diagnoses is most important to exclude first in her?",
        options: ["Acute aortic dissection", "Acute pyelonephritis", "Diverticulitis", "Left ureteric stone", "Ovarian torsion"],
        correct: 0,
        explanation:
          "Sudden, maximal pain in a 61-year-old smoker with poorly controlled hypertension and a pulse deficit places her at high risk of acute aortic syndrome, which is lethal if missed. A ureteric stone is common at her age and could explain the blood on the dipstick, but it does not cause a pulse deficit and is not immediately life-threatening. She has no fever or dysuria to suggest pyelonephritis. Diverticulitis builds over days, and ovarian torsion is uncommon after menopause and does not affect the femoral pulse.",
        keyFeature: { topic: "abdominal-pain", n: 1 },
        source: "ohle-aas-2020",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following imaging tests is most appropriate for her now?",
        options: ["Bedside renal ultrasound", "CT angiography of the aorta", "Noncontrast CT of the kidneys", "Plain abdominal radiograph", "Transvaginal ultrasound"],
        correct: 1,
        explanation:
          "Patients at high probability of acute aortic syndrome should have expedited CT imaging of the aorta with contrast. A noncontrast renal colic CT does not show the intimal flap or the perfusion of branch arteries. A bedside renal ultrasound may show hydronephrosis but cannot exclude dissection. A plain radiograph and a transvaginal ultrasound do not image the aorta and would only delay the diagnosis.",
        keyFeature: { topic: "abdominal-pain", n: 5 },
        source: "ohle-aas-2020",
      },
      {
        id: "q4",
        kind: "single",
        update: "CT angiography shows a type B aortic dissection from the left subclavian artery to both iliac arteries. The superior mesenteric artery arises from the false lumen, and a segment of jejunum enhances poorly. Both kidneys enhance normally and there is no rupture. Lactate is 4.6 mmol/L. Despite IV hydromorphone her pain remains severe and her abdomen is still soft.",
        prompt: "Which of the following best explains her ongoing severe pain with a soft abdomen?",
        options: ["Extension into the ascending aorta", "Left renal infarction", "Mesenteric malperfusion", "Opioid-resistant renal colic", "Retroperitoneal rupture"],
        correct: 2,
        explanation:
          "Severe pain that persists despite opioids while the abdomen stays soft, with a raised lactate and poorly enhancing jejunum supplied from the false lumen, means the dissection is starving the bowel of blood. Malperfusion makes this a complicated type B dissection. The CT shows that the ascending aorta is not involved, both kidneys enhance normally and there is no rupture. No stone was seen to explain renal colic, and the blood on her dipstick does not outweigh the CT findings.",
        keyFeature: { topic: "abdominal-pain", n: 2 },
        source: "esc-aorta-2024",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: ["Cardiac surgery for ascending repair", "General surgery for bowel resection", "ICU for blood pressure control alone", "Repeat CT angiography in 6 hours", "Vascular surgery for endovascular repair"],
        correct: 4,
        explanation:
          "Type B dissection complicated by malperfusion needs urgent repair, and thoracic endovascular repair to cover the entry tear and restore true lumen flow is the recommended first approach. The bowel is assessed once flow is restored, so resection alone would leave the cause untreated. Blood pressure and heart rate control are needed but are not enough once malperfusion is present. Ascending aortic surgery is for type A dissection. Waiting 6 hours for a repeat CT allows the jejunum to infarct.",
        keyFeature: { topic: "abdominal-pain", n: 4 },
        source: "esc-aorta-2024",
      },
    ],
    sources: [S.ohle, S.escAorta],
    ...META,
  },

  /* 51 Perforated diverticulitis masked by prednisone ------------------------ */
  {
    id: "abdominal-pain-51",
    topic: "abdominal-pain",
    title: "Severe pain but a soft abdomen",
    stem:
      "A 69-year-old woman presents to the emergency department with 2 days of left lower abdominal pain that is now constant and severe. She has needed two doses of hydromorphone since she arrived. She has polymyalgia rheumatica treated with prednisone 20 mg daily for 8 months, type 2 diabetes and known sigmoid diverticulosis. She has had no vomiting or rectal bleeding. Her abdomen is soft and mildly tender in the left lower quadrant, without guarding or rebound. Bowel sounds are reduced. Her white cell count is 10.8 x 10^9/L.",
    vitals: { temperature: "37.4°C oral", pulse: "106/minute", resp: "20/minute", bp: "128/70 mmHg", o2sat: "97% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her presentation most strongly warrants further investigation?",
        options: ["Known sigmoid diverticulosis", "Severe pain with a soft abdomen", "Temperature of 37.4°C", "Type 2 diabetes", "White count of 10.8 x 10^9/L"],
        correct: 1,
        explanation:
          "Pain severe enough to need repeated opioids in a patient whose abdomen feels soft is a mismatch that should prompt an active search for serious disease, especially in a patient on long-term prednisone. Immunosuppression can mask the symptoms of complicated diverticulitis and is linked to more perforation and higher mortality. Her near-normal temperature and white count are not reassuring for the same reason. Diverticulosis and diabetes are background risks, not the finding that shows she is sick.",
        keyFeature: { topic: "abdominal-pain", n: 2 },
        source: "brandl-immunosuppressed-diverticulitis",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about the softness of her abdomen is most accurate?",
        options: ["It excludes a perforation", "It favours constipation", "It is expected with diabetes", "It may reflect prednisone use", "It rules out complicated disease"],
        correct: 3,
        explanation:
          "Long-term corticosteroids can blunt the inflammatory response, so peritoneal signs such as guarding and rebound may be absent even when the colon has perforated. In immunosuppressed patients with diverticulitis, perforation was common and in-hospital mortality was 20%, compared with 4.7% in immunocompetent patients. A soft abdomen therefore cannot exclude perforation or complicated disease in her. Diabetes does not explain it, and constipation does not cause pain this severe.",
        keyFeature: { topic: "abdominal-pain", n: 6 },
        source: "brandl-immunosuppressed-diverticulitis",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step to evaluate her pain?",
        options: ["Abdominal ultrasound", "CT abdomen with IV contrast", "Observe and reassess tomorrow", "Upright chest radiograph", "Urgent colonoscopy"],
        correct: 1,
        explanation:
          "Contrast-enhanced CT is the imaging of first choice for suspected acute colonic diverticulitis, and the diagnosis should not rest on clinical examination alone, which is even less reliable in a patient on steroids. CT shows extraluminal gas, abscess and the extent of disease. An upright chest radiograph may show free air but cannot grade the disease, and an ambiguous ultrasound needs CT anyway. Observation delays the diagnosis in a patient at high risk of perforation. Colonoscopy has no role in acute assessment.",
        keyFeature: { topic: "abdominal-pain", n: 2 },
        source: "wses-diverticulitis-2020",
      },
      {
        id: "q4",
        kind: "single",
        update: "CT shows perforated sigmoid diverticulitis with a 4 cm pelvic abscess and free air throughout the abdomen. Her BP is now 104/62 mmHg.",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: ["Admit to medicine on oral antibiotics", "Observation with bowel rest", "Percutaneous drainage only", "Repeat CT in 48 hours", "Surgical consultation now"],
        correct: 4,
        explanation:
          "Diffuse free air from a perforated sigmoid in a patient on long-term steroids needs a surgeon now, along with IV antibiotics and resuscitation. Immunocompromised patients are at high risk of failing non-operative treatment, and in one published series they needed emergency surgery more often. Percutaneous drainage can treat a contained abscess but not generalized free air. Oral antibiotics on a medical ward, bowel rest alone or a repeat CT in 2 days all delay source control as her blood pressure falls.",
        keyFeature: { topic: "abdominal-pain", n: 4 },
        source: "wses-diverticulitis-2020",
      },
    ],
    sources: [S.brandl, S.wses],
    ...META,
  },

  /* 52 Pulmonary embolism presenting as right upper quadrant pain ------------ */
  {
    id: "abdominal-pain-52",
    topic: "abdominal-pain",
    alsoTopics: ["dvt-pe"],
    title: "Sharp pain under the right ribs",
    stem:
      "A 31-year-old woman presents to the emergency department with 3 days of sharp right upper abdominal pain that is worse when she takes a deep breath. Two days ago a walk-in clinic diagnosed pyelonephritis from a dipstick showing trace leukocytes and trace blood, and prescribed ciprofloxacin. The pain is no better. She has had no fever, vomiting or dysuria. She takes a combined oral contraceptive and had surgical fixation of an ankle fracture 3 weeks ago. She has mild right upper quadrant tenderness without guarding and no costovertebral angle tenderness. The legs are not swollen. A right upper quadrant ultrasound today is normal.",
    vitals: { temperature: "37.1°C oral", pulse: "112/minute", resp: "22/minute", bp: "124/78 mmHg", o2sat: "93% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most suggests that the cause of her pain lies outside the abdomen?",
        options: ["Absent costovertebral tenderness", "Mild right upper quadrant tenderness", "Normal right upper quadrant ultrasound", "Oxygen saturation of 93%", "Trace blood on dipstick"],
        correct: 3,
        explanation:
          "A saturation of 93% on room air in a healthy 31-year-old is not explained by a gallbladder or kidney problem, and with pleuritic pain and a pulse of 112/minute it points to the chest. Hypoxemia, tachycardia and pleuritic pain are recognized features of pulmonary embolism. A normal ultrasound and absent costovertebral tenderness argue against biliary and renal disease but do not by themselves show where the cause lies. Mild upper quadrant tenderness and trace blood on a dipstick are nonspecific.",
        keyFeature: { topic: "abdominal-pain", n: 3 },
        source: "tc-pe-dx",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her pain?",
        options: ["Acute cholecystitis", "Acute pyelonephritis", "Fitz-Hugh-Curtis syndrome", "Pulmonary embolism", "Right lower lobe pneumonia"],
        correct: 3,
        explanation:
          "Surgery 3 weeks ago and a combined oral contraceptive are provoking factors for venous thromboembolism, and pleuritic pain with tachycardia and hypoxemia fits pulmonary embolism irritating the pleura over the liver. A normal ultrasound makes cholecystitis unlikely. She has no fever, dysuria or flank tenderness for pyelonephritis, and no fever or cough for pneumonia. Fitz-Hugh-Curtis perihepatitis follows pelvic infection, and she has no pelvic symptoms.",
        keyFeature: { topic: "abdominal-pain", n: 3 },
        source: "tc-pe-dx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her investigation?",
        options: ["CT abdomen with IV contrast", "D-dimer, image only if positive", "HIDA scan of the gallbladder", "Imaging for pulmonary embolism now", "Repeat urine culture"],
        correct: 3,
        explanation:
          "Her Wells score is 6.0: 1.5 for a pulse over 100/minute, 1.5 for surgery in the past 4 weeks and 3 because pulmonary embolism is the most likely diagnosis. A score above 4.5 means embolism is likely, and patients with a likely pretest probability go straight to imaging with CT pulmonary angiography or a ventilation-perfusion scan. A negative D-dimer rules out embolism only when the pretest probability is unlikely. Abdominal CT, a HIDA scan and another urine culture keep looking below the diaphragm.",
        keyFeature: { topic: "abdominal-pain", n: 5 },
        source: "tc-pe-dx",
      },
    ],
    sources: [S.tcPe],
    ...META,
  },
];
