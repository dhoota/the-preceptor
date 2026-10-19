// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  cfasOhss: { id: "cfas-ohss-2026", citation: "Buckett W, Sylvestre C, Liu K, et al. Management of moderate and severe ovarian hyperstimulation syndrome: a Canadian Fertility and Andrology Society clinical practice guideline. Reprod Biomed Online. 2026.", url: "https://cfas.ca/_Library/Clinical_Practice_Guidance_Documents_/OHSS_RBMO_CFAS_CPG.pdf" },
  luchs: { id: "luchs-hematuria-2002", citation: "Luchs JS, Katz DS, Lane MJ, et al. Utility of hematuria testing in patients with suspected renal colic: correlation with unenhanced helical CT results. Urology. 2002.", url: "https://doi.org/10.1016/s0090-4295(02)01558-3" },
  nice: { id: "nice-ng118-2019", citation: "National Institute for Health and Care Excellence. Renal and ureteric stones: assessment and management. NICE guideline NG118. 2019.", url: "https://www.nice.org.uk/guidance/ng118/chapter/Recommendations" },
  ohle: { id: "ohle-aas-2020", citation: "Ohle R, Yan JW, Yadav K, et al. Diagnosing acute aortic syndrome: a Canadian clinical practice guideline. CMAJ. 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7828987/" },
  accAorta: { id: "acc-aha-aorta-2022", citation: "Isselbacher EM, Preventza O, Hamilton Black J, et al. 2022 ACC/AHA guideline for the diagnosis and management of aortic disease. A report of the American Heart Association/American College of Cardiology Joint Committee on Clinical Practice Guidelines. Circulation. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9876736/" },
  brandl: { id: "brandl-immunosuppressed-diverticulitis", citation: "Brandl A, Kratzer T, Kafka-Ritsch R, et al. Diverticulitis in immunosuppressed patients: a fatal outcome requiring a new approach? Can J Surg. 2016.", url: "https://doi.org/10.1503/cjs.012915" },
  wses: { id: "wses-diverticulitis-2020", citation: "Sartelli M, Weber DG, Kluger Y, et al. 2020 update of the WSES guidelines for the management of acute colonic diverticulitis in the emergency setting. World J Emerg Surg. 2020.", url: "https://doi.org/10.1186/s13017-020-00313-4" },
  cipro: { id: "pms-ciprofloxacin-pm-2022", citation: "Pharmascience Inc. pms-CIPROFLOXACIN (ciprofloxacin tablets) product monograph. Health Canada Drug Product Database. Revised 2022.", url: "https://pdf.hres.ca/dpd_pm/00067730.PDF" },
  apapIv: { id: "acetaminophen-injection-pm-2023", citation: "B. Braun of Canada. Acetaminophen Injection product monograph. Health Canada Drug Product Database. 2023.", url: "https://pdf.hres.ca/dpd_pm/00069718.PDF" },
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
        options: ["Ovarian hyperstimulation syndrome", "Pelvic infection after the retrieval", "Resistant bladder infection", "Ruptured hemorrhagic cyst", "Torsion of an enlarged ovary"],
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

  /* 49 Suspected ureteric stone in an adolescent ---------------------------- */
  {
    id: "abdominal-pain-49",
    topic: "abdominal-pain",
    alsoTopics: ["analgesia-sedation"],
    title: "Teenager who cannot lie still",
    stem:
      "A 15-year-old girl is brought to the emergency department by her father with 4 hours of severe left flank pain that comes in waves and spreads to the left groin. She has vomited twice. She has no fever, dysuria or vaginal discharge, and her last menstrual period ended 1 week ago. She has no medical problems and takes no medications. She is restless and keeps changing position. The abdomen is soft, with mild left flank tenderness and no guarding or rebound. Urinalysis shows no blood, leukocytes or nitrites. Urine beta hCG is negative.",
    vitals: { temperature: "36.9°C oral", pulse: "112/minute", resp: "20/minute", bp: "124/76 mmHg", o2sat: "99% on room air", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following statements about her urinalysis is most accurate?",
        options: ["It excludes a kidney stone", "It favours appendicitis", "It leaves a stone likely", "It makes imaging unnecessary", "It suggests a muscle strain"],
        correct: 2,
        explanation:
          "Colicky flank pain spreading to the groin, with vomiting and restlessness, is typical of a ureteric stone, and a urinalysis without blood does not change that. In a large series checked against CT, blood on urinalysis had a sensitivity of 84% for a stone, so about 1 in 6 patients with a stone had none, and the negative predictive value was only 65%. A clear urine therefore neither excludes a stone nor makes imaging unnecessary. Nothing in the urinalysis points to appendicitis or a muscle strain.",
        keyFeature: { topic: "abdominal-pain", n: 6 },
        source: "luchs-hematuria-2002",
      },
      {
        id: "q2",
        kind: "single",
        update: "She receives ketorolac 15 mg IV. Thirty minutes later she still rates her pain 7 out of 10.",
        prompt: "Which of the following is the most appropriate next analgesic for her?",
        options: ["acetaminophen 500 mg IV", "acetaminophen 1000 mg IV", "ibuprofen 400 mg PO", "ketorolac 15 mg IV again", "morphine 5 mg IV"],
        correct: 1,
        explanation:
          "NICE offers IV acetaminophen when an NSAID is not giving enough relief in suspected renal colic, and keeps opioids for when both the NSAID and IV acetaminophen are contraindicated or not enough, so morphine comes after this step. The Canadian acetaminophen injection monograph doses by weight only below 50 kg. At 52 kg she takes the adolescent and adult dose of 1000 mg every 6 hours, or 650 mg every 4 hours, so 500 mg underdoses her. More ketorolac or added ibuprofen only gives a second NSAID dose on top of the one she has just had, rather than a drug that works differently.",
        keyFeature: { topic: "analgesia-sedation", n: 3 },
        source: "acetaminophen-injection-pm-2023",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ultrasound shows normal kidneys with no hydronephrosis and no stone seen. Two hours later the colicky pain returns and she vomits again.",
        prompt: "Which of the following is the most appropriate next step to find the cause of her pain?",
        options: ["Abdominal radiograph", "CT abdomen with IV contrast", "Low-dose noncontrast CT", "Repeat ultrasound in 1 week", "Urgent ureteroscopy"],
        correct: 2,
        explanation:
          "When renal colic is still uncertain after ultrasound in a young person, NICE advises considering a low-dose noncontrast CT. The committee chose the low-dose study, and ultrasound before it, because of serious concern about radiation exposure in children and young people. NICE recommends the low-dose noncontrast study, and a standard CT with IV contrast gives a larger dose. In the adult evidence NICE reviewed, a plain radiograph was less accurate than CT. A week of waiting leaves her returning pain unexplained, and ureteroscopy treats a stone that has not been confirmed.",
        keyFeature: { topic: "abdominal-pain", n: 7 },
        source: "nice-ng118-2019",
      },
    ],
    sources: [S.luchs, S.nice, S.apapIv],
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
        update: "CT angiography shows a type B aortic dissection from the left subclavian artery to both iliac arteries. The superior mesenteric artery arises from the false lumen, and a segment of jejunum enhances poorly. Both kidneys enhance normally, with no ureteric stone or hydronephrosis, and there is no rupture. Lactate is 4.6 mmol/L. Despite IV hydromorphone her pain remains severe and her abdomen is still soft.",
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
      "A 69-year-old woman presents to the emergency department with 2 days of left lower abdominal pain that is now constant and severe. She has needed two doses of IV hydromorphone since she arrived. She has polymyalgia rheumatica treated with prednisone 20 mg daily for 8 months, type 2 diabetes and known sigmoid diverticulosis. She has had no vomiting or rectal bleeding. Her abdomen is soft and mildly tender in the left lower quadrant, without guarding or rebound. Bowel sounds are reduced. Her white cell count is 10.8 x 10^9/L.",
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
        options: ["Emergency sigmoid resection", "Home on oral antibiotics", "Home without antibiotics", "Hospital admission with antibiotics", "Observation in hospital without antibiotics"],
        correct: 3,
        explanation:
          "Her CT shows uncomplicated diverticulitis, but she has taken prednisone 20 mg daily for 8 months, has diabetes and has needed IV opioids. WSES advises antibiotics against gram-negative bacilli and anaerobes in high-risk patients such as the immunocompromised, and regards immunocompromised patients as being at high risk of failing non-operative treatment, so she needs admission and close review. Care at home is suggested only for uncomplicated disease without significant comorbidities, and withholding antibiotics applies to immunocompetent patients. Nothing on her CT calls for emergency resection now.",
        keyFeature: { topic: "infectious-diseases", n: 3 },
        source: "wses-diverticulitis-2020",
      },
      {
        id: "q3",
        kind: "single",
        update: "Several days later her pain has settled and she is eating.",
        prompt: "Which of the following is the most appropriate plan for her after this episode?",
        options: ["Daily antibiotic to prevent recurrence", "Family physician review only", "High-fibre diet alone", "Repeat CT in 6 weeks", "Surgical review for elective resection"],
        correct: 4,
        explanation:
          "After an episode treated without surgery, WSES suggests planning an elective sigmoid resection in high-risk patients such as the immunocompromised. Immunocompromised patients who fail non-operative treatment often need urgent surgery, which carries a much higher mortality, and in one series patients on long-term corticosteroids needed emergency surgery more often than other immunosuppressed groups. Family physician review, diet advice or daily antibiotics alone do not address that risk. A repeat CT adds radiation without changing the decision.",
        keyFeature: { topic: "infectious-diseases", n: 3 },
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
      "A 27-year-old woman presents to the emergency department with 3 days of sharp right upper abdominal pain that is worse when she takes a deep breath. Two days ago, thinking it was a kidney infection, she started ciprofloxacin left over from an earlier bladder infection. The pain is no better, and this morning she coughed up a streak of blood. Apart from that she has no cough or sputum, and she has had no fever, vomiting, dysuria, vaginal discharge or pelvic pain. Three years ago she had a leg DVT while taking a combined oral contraceptive. She stopped the contraceptive and completed 3 months of anticoagulation. She has no other medical problems. She has mild right upper quadrant tenderness without guarding and no costovertebral angle tenderness. The legs are not swollen. A right upper quadrant ultrasound today is normal.",
    vitals: { temperature: "37.3°C oral", pulse: "116/minute", resp: "24/minute", bp: "118/74 mmHg", o2sat: "94% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most suggests that the cause of her pain lies outside the abdomen?",
        options: ["Absent costovertebral tenderness", "Mild right upper quadrant tenderness", "Normal right upper quadrant ultrasound", "Oxygen saturation of 94%", "Temperature of 37.3°C"],
        correct: 3,
        explanation:
          "A saturation of 94% on room air in a 27-year-old with no other medical problems is not explained by a gallbladder or kidney problem, and with pleuritic pain and a pulse of 116/minute it points to the chest. Hypoxemia, tachycardia and pleuritic pain are recognized features of pulmonary embolism. A normal ultrasound and absent costovertebral tenderness argue against biliary and renal disease but do not by themselves show where the cause lies. Mild upper quadrant tenderness is nonspecific, and a normal temperature argues against infection without pointing to a site.",
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
        update: "Imaging confirms a cause outside the urinary tract, and treatment is started. She asks what to do with the ciprofloxacin.",
        prompt: "Which of the following is the most appropriate advice about her ciprofloxacin?",
        options: ["Change to nitrofurantoin", "Complete the 7-day course", "Continue until culture results", "Stop taking it today", "Switch to IV ceftriaxone"],
        correct: 3,
        explanation:
          "Her pain has another cause, and she has no fever, dysuria or costovertebral angle tenderness, so nothing supports the kidney infection she treated herself for. The Canadian ciprofloxacin monograph says that prescribing it without a proven or strongly suspected bacterial infection is unlikely to help and risks drug-resistant bacteria, and it warns of disabling and potentially persistent adverse reactions. Finishing the course, waiting for a culture or changing to another antibiotic all keep treating an infection she does not have.",
        keyFeature: { topic: "abdominal-pain", n: 8 },
        source: "pms-ciprofloxacin-pm-2022",
      },
    ],
    sources: [S.tcPe, S.cipro],
    ...META,
  },
];
