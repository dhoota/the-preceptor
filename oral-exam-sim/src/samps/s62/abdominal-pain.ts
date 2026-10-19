// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  cfasOhss: { id: "cfas-ohss-2026", citation: "Buckett W, Sylvestre C, Liu K, et al. Management of moderate and severe ovarian hyperstimulation syndrome: a Canadian Fertility and Andrology Society clinical practice guideline. Reprod Biomed Online. 2026.", url: "https://cfas.ca/_Library/Clinical_Practice_Guidance_Documents_/OHSS_RBMO_CFAS_CPG.pdf" },
  samuelPas: { id: "samuel-pas-2002", citation: "Samuel M. Pediatric appendicitis score. J Pediatr Surg. 2002.", url: "https://doi.org/10.1053/jpsu.2002.32893" },
  cwcCar: { id: "cwc-radiology", citation: "Canadian Association of Radiologists. Radiology: recommendations. Choosing Wisely Canada. Last updated 2026.", url: "https://choosingwiselycanada.org/recommendation/radiology/" },
  ohle: { id: "ohle-aas-2020", citation: "Ohle R, Yan JW, Yadav K, et al. Diagnosing acute aortic syndrome: a Canadian clinical practice guideline. CMAJ. 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7828987/" },
  accAorta: { id: "acc-aha-aorta-2022", citation: "Isselbacher EM, Preventza O, Hamilton Black J, et al. 2022 ACC/AHA guideline for the diagnosis and management of aortic disease. A report of the American Heart Association/American College of Cardiology Joint Committee on Clinical Practice Guidelines. Circulation. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9876736/" },
  brandl: { id: "brandl-immunosuppressed-diverticulitis", citation: "Brandl A, Kratzer T, Kafka-Ritsch R, et al. Diverticulitis in immunosuppressed patients: a fatal outcome requiring a new approach? Can J Surg. 2016.", url: "https://doi.org/10.1503/cjs.012915" },
  wses: { id: "wses-diverticulitis-2020", citation: "Sartelli M, Weber DG, Kluger Y, et al. 2020 update of the WSES guidelines for the management of acute colonic diverticulitis in the emergency setting. World J Emerg Surg. 2020.", url: "https://doi.org/10.1186/s13017-020-00313-4" },
  cipro: { id: "pms-ciprofloxacin-pm-2022", citation: "Pharmascience Inc. pms-CIPROFLOXACIN (ciprofloxacin tablets) product monograph. Health Canada Drug Product Database. Revised 2022.", url: "https://pdf.hres.ca/dpd_pm/00067730.PDF" },
  tcPe: { id: "tc-pe-dx", citation: "Thrombosis Canada. Clinical guide. Pulmonary embolism (PE): diagnosis. 2025.", url: "https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf" },
} satisfies Record<string, Source>;

export const ABDOMINAL_PAIN_S62: Samp[] = [
  /* 48 Ovarian hyperstimulation syndrome treated as a bladder infection ----- */
  {
    id: "abdominal-pain-48",
    topic: "abdominal-pain",
    alsoTopics: ["analgesia-sedation", "shock"],
    title: "Bloating and dark urine after a clinic visit",
    stem:
      "A 29-year-old woman presents to the emergency department with 3 days of lower abdominal pain, bloating and nausea. Yesterday a walk-in clinic diagnosed a bladder infection because she was passing small amounts of dark urine and a dipstick showed trace leukocytes, and prescribed nitrofurantoin. She has no dysuria, fever or vaginal discharge. She has polycystic ovary syndrome. Five days ago a fertility clinic retrieved 27 eggs after a course of gonadotropin injections. All the embryos were frozen and none were transferred. She has gained 3 kg since the retrieval and rates her pain 7 out of 10. Her abdomen is distended, with shifting dullness and mild diffuse lower abdominal tenderness. There is no guarding or rebound.",
    vitals: { temperature: "37.1°C oral", pulse: "106/minute", resp: "20/minute", bp: "104/66 mmHg", o2sat: "98% on room air", weight: "61 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her symptoms?",
        options: ["Ovarian hyperstimulation syndrome", "Pelvic infection after retrieval", "Resistant bladder infection", "Ruptured hemorrhagic cyst", "Torsion of an enlarged ovary"],
        correct: 0,
        explanation:
          "Bloating, weight gain, ascites and scanty dark urine 5 days after the retrieval of 27 eggs, in a woman with polycystic ovaries who received gonadotropins, fit early ovarian hyperstimulation syndrome. Her small urine volumes reflect fluid leaving the circulation, not a bladder infection, and she has no dysuria. The syndrome is not usually associated with fever, and her normal temperature also makes a pelvic infection after the retrieval less likely. Torsion and a ruptured cyst stay on the differential, but neither explains ascites with steady weight gain.",
        keyFeature: { topic: "abdominal-pain", n: 8 },
        source: "cfas-ohss-2026",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following investigations are most appropriate for her now?",
        options: ["Abdominal and pelvic ultrasound", "Abdominal radiograph", "Blood cultures", "CBC with hematocrit", "CT abdomen with IV contrast", "Electrolytes and creatinine", "Repeat urine culture", "Serum lipase level"],
        select: 3,
        correct: [0, 3, 5],
        explanation:
          "The Canadian Fertility and Andrology Society lists a CBC with hematocrit, electrolytes with urea and creatinine, liver tests, albumin, hCG and abdominal and pelvic ultrasound as the first investigations when this syndrome is suspected. The hematocrit measures hemoconcentration, the electrolytes and creatinine show the sodium, potassium and kidney changes that grade severity, and ultrasound shows ovarian size and ascites. She has no fever, so blood cultures are not needed. A plain radiograph, CT, lipase and a repeat urine culture are not among the recommended tests, and CT adds radiation without changing the grading.",
        keyFeature: { topic: "abdominal-pain", n: 5 },
        source: "cfas-ohss-2026",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate analgesic plan for her pain?",
        options: ["acetaminophen and oral morphine", "celecoxib and acetaminophen", "ibuprofen and acetaminophen", "ketorolac IV and acetaminophen", "naproxen and acetaminophen"],
        correct: 0,
        explanation:
          "Nonsteroidal anti-inflammatory drugs should be avoided in ovarian hyperstimulation syndrome because they may compromise kidney function, and her scanty urine already suggests poor kidney perfusion. The Canadian guideline offers acetaminophen with or without an opioid, or oral opioids, and parenteral opioids if pain stays uncontrolled. Every other option pairs acetaminophen with an NSAID. Giving the NSAID as IV ketorolac or as a selective agent such as celecoxib does not remove the kidney risk.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "cfas-ohss-2026",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her hematocrit is 0.49 L/L, sodium 131 mmol/L, potassium 4.8 mmol/L and creatinine 104 umol/L. Ultrasound shows enlarged multicystic ovaries with moderate ascites. She has vomited three times and passed 120 mL of urine in 6 hours.",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: ["Cabergoline 0.5 mg PO daily", "Fluid restriction to 1 L a day", "Oral fluids to thirst at home", "Paracentesis without IV fluid", "Titrated IV crystalloid"],
        correct: 4,
        explanation:
          "She cannot keep oral fluids down and is passing 20 mL of urine an hour, so oral rehydration has failed. The Canadian guideline then starts IV crystalloid, titrated to a urine output of 20 to 30 mL an hour and to reversal of hemoconcentration, and admits her with LMWH thromboprophylaxis. Salt or water restriction is not recommended because it does not improve weight, edema or intravascular volume. Paracentesis can ease symptoms, but restoring intravascular volume comes first. Starting cabergoline for established disease is generally not recommended.",
        keyFeature: { topic: "shock", n: 3 },
        source: "cfas-ohss-2026",
      },
    ],
    sources: [S.cfasOhss],
    ...META,
  },

  /* 49 Preschool appendicitis after a dipstick urine diagnosis --------------- */
  {
    id: "abdominal-pain-49",
    topic: "abdominal-pain",
    title: "Preschooler who will not walk after two days of antibiotics",
    stem:
      "A 4-year-old girl is brought to the emergency department by her mother with 3 days of abdominal pain, fever and vomiting. Two days ago a walk-in clinic diagnosed a urinary tract infection from a urine dipstick that showed leukocytes, and prescribed cephalexin. She is worse today, will not walk and has vomited four times. She has had no diarrhea. She lies still on the stretcher and cries when it is bumped. Her abdomen is tender in the right lower quadrant with guarding.",
    vitals: { temperature: "38.7°C tympanic", pulse: "148/minute", resp: "28/minute", bp: "100/62 mmHg", o2sat: "98% on room air", weight: "16 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings today most strongly suggests a cause other than a urinary infection?",
        options: ["Fever of 38.7°C at triage", "Leukocytes on the urine dipstick", "Pain when the stretcher is bumped", "Pulse of 148/minute", "Vomiting four times today"],
        correct: 2,
        explanation:
          "Crying when the stretcher is bumped is pain on jarring, a sign of peritoneal irritation that a bladder or kidney infection does not cause. Cough, percussion or hopping tenderness in the right lower quadrant was the strongest single predictor of appendicitis in the study that built the Pediatric Appendicitis Score. Fever, vomiting and a fast pulse occur with a urinary infection as well as with appendicitis, so they do not separate the two. The leukocytes on her dipstick were the basis of the first diagnosis and cannot argue against it.",
        keyFeature: { topic: "abdominal-pain", n: 8 },
        source: "samuel-pas-2002",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first imaging test for her suspected appendicitis?",
        options: ["Abdominal radiograph", "Abdominal ultrasound", "CT abdomen with IV contrast", "MRI abdomen and pelvis", "Renal and bladder ultrasound"],
        correct: 1,
        explanation:
          "Ultrasound is the preferred first test for suspected appendicitis in children because it avoids ionizing radiation and, in experienced hands, has a sensitivity and specificity of about 94%. CT should not be done until ultrasound has been considered, and it is kept for an inconclusive ultrasound. MRI in a 4-year-old usually needs sedation. A renal and bladder ultrasound does not examine the appendix. A plain radiograph does not show the appendix itself.",
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
    sources: [S.samuelPas, S.cwcCar],
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
        source: "acc-aha-aorta-2022",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: ["Cardiac surgery for ascending repair", "General surgery for bowel resection", "ICU for blood pressure control alone", "Repeat CT angiography in 6 hours", "Vascular surgery for endovascular repair"],
        correct: 4,
        explanation:
          "Type B dissection complicated by malperfusion needs intervention, and an endovascular approach that covers the entry tear and restores true lumen flow is preferred over open repair. The bowel is assessed once flow is restored, so resection alone would leave the cause untreated. IV beta blockade to a heart rate of 60 to 80/minute and a systolic pressure below 120 mmHg is needed, but it is not enough once malperfusion is present. Ascending aortic surgery is for type A dissection. Waiting 6 hours for a repeat CT allows the jejunum to infarct.",
        keyFeature: { topic: "abdominal-pain", n: 4 },
        source: "acc-aha-aorta-2022",
      },
    ],
    sources: [S.ohle, S.accAorta],
    ...META,
  },

  /* 51 Diverticulitis in a patient on long-term prednisone ------------------ */
  {
    id: "abdominal-pain-51",
    topic: "abdominal-pain",
    alsoTopics: ["infectious-diseases"],
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
        update: "CT abdomen with IV contrast shows sigmoid diverticulitis with wall thickening and fat stranding. There is no abscess, extraluminal gas or free fluid.",
        prompt: "Which of the following is the most appropriate treatment plan for her?",
        options: ["Emergency sigmoid resection", "Home on oral antibiotics", "Home without antibiotics", "Hospital admission with antibiotics", "Observation without antibiotics"],
        correct: 3,
        explanation:
          "Her CT shows uncomplicated diverticulitis, but she has taken prednisone 20 mg daily for 8 months, has diabetes and has needed IV opioids. WSES advises antibiotics against gram-negative bacilli and anaerobes in high-risk patients such as the immunocompromised, and regards immunocompromised patients as being at high risk of failing non-operative treatment, so she needs admission and close review. Care at home is suggested only for uncomplicated disease without significant comorbidities, and withholding antibiotics applies to immunocompetent patients. Nothing on her CT calls for emergency resection now.",
        keyFeature: { topic: "infectious-diseases", n: 3 },
        source: "wses-diverticulitis-2020",
      },
      {
        id: "q3",
        kind: "single",
        update: "She is admitted. She is drinking fluids without vomiting and has no drug allergies.",
        prompt: "Which of the following antibiotic regimens is most appropriate for her?",
        options: ["amoxicillin-clavulanate PO", "cefuroxime axetil PO", "ciprofloxacin and metronidazole PO", "metronidazole monotherapy PO", "trimethoprim-sulfamethoxazole PO"],
        correct: 0,
        explanation:
          "Amoxicillin-clavulanate covers gram-negative bacilli and anaerobes by mouth, and WSES prefers oral antibiotics whenever possible. Ciprofloxacin with metronidazole also covers both groups, but the Canadian ciprofloxacin monograph warns that the risk of tendinitis and tendon rupture is further increased in patients over 60 and in those taking corticosteroids, and she is both 69 and on prednisone. Cefuroxime and trimethoprim-sulfamethoxazole on their own leave out anaerobes, and metronidazole on its own leaves out gram-negative bacilli.",
        keyFeature: { topic: "infectious-diseases", n: 8 },
        source: "pms-ciprofloxacin-pm-2022",
      },
      {
        id: "q4",
        kind: "single",
        update: "She improves and is ready for discharge on the fourth day.",
        prompt: "Which of the following is the most appropriate plan for her after this episode?",
        options: ["Daily antibiotic to prevent recurrence", "Family physician review only", "High-fibre diet alone", "Repeat CT in 6 weeks", "Surgical review for elective resection"],
        correct: 4,
        explanation:
          "After an episode treated without surgery, WSES suggests planning an elective sigmoid resection in high-risk patients such as the immunocompromised. Immunocompromised patients who fail non-operative treatment often need urgent surgery, which carries a much higher mortality, and in one series patients on long-term corticosteroids needed emergency surgery more often than other immunosuppressed groups. Family physician review, diet advice or daily antibiotics alone do not address that risk. A repeat CT adds radiation without changing the decision.",
        keyFeature: { topic: "infectious-diseases", n: 3 },
        source: "wses-diverticulitis-2020",
      },
    ],
    sources: [S.brandl, S.wses, S.cipro],
    ...META,
  },

  /* 52 Pulmonary embolism presenting as right upper quadrant pain ------------ */
  {
    id: "abdominal-pain-52",
    topic: "abdominal-pain",
    alsoTopics: ["dvt-pe"],
    title: "Sharp pain under the right ribs",
    stem:
      "A 27-year-old woman presents to the emergency department with 3 days of sharp right upper abdominal pain that is worse when she takes a deep breath. Two days ago a walk-in clinic diagnosed pyelonephritis from a dipstick showing trace leukocytes and trace blood, and prescribed ciprofloxacin. The pain is no better, and this morning she coughed up a streak of blood. Apart from that she has no cough or sputum, and she has had no fever, vomiting, dysuria, vaginal discharge or pelvic pain. Three years ago she had a leg DVT while taking a combined oral contraceptive. She stopped the contraceptive and completed 3 months of anticoagulation. She has mild right upper quadrant tenderness without guarding and no costovertebral angle tenderness. The legs are not swollen. A right upper quadrant ultrasound today is normal.",
    vitals: { temperature: "37.3°C oral", pulse: "116/minute", resp: "24/minute", bp: "118/74 mmHg", o2sat: "94% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most suggests that the cause of her pain lies outside the abdomen?",
        options: ["Absent costovertebral tenderness", "Mild right upper quadrant tenderness", "Normal right upper quadrant ultrasound", "Oxygen saturation of 94%", "Trace blood on dipstick"],
        correct: 3,
        explanation:
          "A saturation of 94% on room air in a 27-year-old without lung disease is not explained by a gallbladder or kidney problem, and with pleuritic pain and a pulse of 116/minute it points to the chest. Hypoxemia, tachycardia and pleuritic pain are recognized features of pulmonary embolism. A normal ultrasound and absent costovertebral tenderness argue against biliary and renal disease but do not by themselves show where the cause lies. Mild upper quadrant tenderness and trace blood on a dipstick are nonspecific.",
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
          "A previous DVT raises her risk of venous thromboembolism, and pleuritic pain with tachycardia, hypoxemia and a streak of hemoptysis fits pulmonary embolism irritating the pleura over the liver. A normal ultrasound makes cholecystitis unlikely. She has no fever, dysuria or costovertebral angle tenderness for pyelonephritis, and no fever, sputum or productive cough for pneumonia. Fitz-Hugh-Curtis perihepatitis follows pelvic infection, and she has no vaginal discharge or pelvic pain.",
        keyFeature: { topic: "abdominal-pain", n: 3 },
        source: "tc-pe-dx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following imaging tests is most appropriate to confirm the cause of her pain?",
        options: ["CT abdomen with IV contrast", "CT angiography of the chest", "HIDA scan of the gallbladder", "MR cholangiopancreatography", "Noncontrast CT of the kidneys"],
        correct: 1,
        explanation:
          "Her Wells score is 7.0: 1.5 for a previous DVT, 1.5 for a pulse over 100/minute, 1 for hemoptysis and 3 because embolism is the most likely diagnosis. That is a high pretest probability, so she needs imaging. The Thrombosis Canada guide names CT pulmonary angiography and ventilation-perfusion scanning as the imaging tests, and of these options only CT angiography of the chest shows the pulmonary arteries. An abdominal CT, a HIDA scan, MR cholangiography and a renal CT all look below the diaphragm, where her ultrasound has already found nothing.",
        keyFeature: { topic: "abdominal-pain", n: 5 },
        source: "tc-pe-dx",
      },
      {
        id: "q4",
        kind: "single",
        update: "CT angiography shows emboli in the segmental arteries of the right lower lobe. Anticoagulation is started. She asks what to do with the ciprofloxacin.",
        prompt: "Which of the following is the most appropriate advice about her ciprofloxacin?",
        options: ["Change to nitrofurantoin", "Complete the 7-day course", "Continue until culture results", "Stop taking it today", "Switch to IV ceftriaxone"],
        correct: 3,
        explanation:
          "Her pain has another cause, and she has no fever, dysuria or costovertebral angle tenderness, so nothing supports the pyelonephritis that trace dipstick findings suggested. The Canadian ciprofloxacin monograph says that prescribing it without a proven or strongly suspected bacterial infection is unlikely to help and risks drug-resistant bacteria, and it warns of disabling and potentially persistent adverse reactions. Finishing the course, waiting for a culture or changing to another antibiotic all keep treating an infection she does not have.",
        keyFeature: { topic: "abdominal-pain", n: 8 },
        source: "pms-ciprofloxacin-pm-2022",
      },
    ],
    sources: [S.tcPe, S.cipro],
    ...META,
  },
];
