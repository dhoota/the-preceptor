// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { topic: "infectious-diseases", reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  ehra: { id: "ehra-cied-2020", citation: "Blomström-Lundqvist C, Traykov V, Erba PA, et al. European Heart Rhythm Association (EHRA) international consensus document on how to prevent, diagnose, and treat cardiac implantable electronic device infections. Europace. 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/31702000/" },
  ssc: { id: "ssc-2021", citation: "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2021. Crit Care Med. 2021.", url: "https://pubmed.ncbi.nlm.nih.gov/34605781/" },
  sepsis3: { id: "sepsis-3", citation: "Singer M, Deutschman CS, Seymour CW, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/26903338/" },
  idsaDiarrhea: { id: "idsa-diarrhea-2017", citation: "Shane AL, Mody RK, Crump JA, et al. 2017 Infectious Diseases Society of America clinical practice guidelines for the diagnosis and management of infectious diarrhea. Clin Infect Dis. 2017.", url: "https://academic.oup.com/cid/article/65/12/e45/4557073" },
  sickDay: { id: "diabetes-canada-sick-day", citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee. Appendix 8: sick-day medication list. Diabetes Canada 2018 Clinical Practice Guidelines. 2018.", url: "https://www.diabetes.ca/for-professionals/appendices/appendix-8" },
  coughlin: { id: "coughlin-drug-arterial", citation: "Coughlin PA, Mavor AI. Arterial consequences of recreational drug use. Eur J Vasc Endovasc Surg. 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16682239/" },
  guelbi: { id: "guelbi-ifap", citation: "Guelbi M, Hajri M, Hadrich Z, Atallah A, Mestiri H, Omrani S. Differentiating infected femoral pseudoaneurysms from inguinal abscesses: the hidden menace in intravenous drug users. A case report. Int J Surg Case Rep. 2025.", url: "https://pubmed.ncbi.nlm.nih.gov/40541023/" },
  idsaSsti: { id: "idsa-ssti-2014", citation: "Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the Infectious Diseases Society of America. Clin Infect Dis. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/24973422/" },
  phacSyphClin: { id: "phac-syphilis-clinical", citation: "Public Health Agency of Canada. Syphilis guide: risk factors and clinical manifestations. Canadian guidelines on sexually transmitted infections. 2023.", url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/syphilis/risk-factors-clinical-manifestation.html" },
  phacSyphTest: { id: "phac-syphilis-testing", citation: "Public Health Agency of Canada. Syphilis guide: screening and diagnostic testing. Canadian guidelines on sexually transmitted infections. 2024.", url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/syphilis/screening-diagnostic-testing.html" },
  phacSyphTx: { id: "phac-syphilis-treatment", citation: "Public Health Agency of Canada. Syphilis guide: treatment and follow-up. Canadian guidelines on sexually transmitted infections. Updated 2026.", url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/syphilis/treatment-follow-up.html" },
  ammi: { id: "ammi-antivirals-2019", citation: "Aoki FY, Allen UD, Mubareka S, Papenburg J, Stiver HG, Evans GA. Use of antiviral drugs for seasonal influenza: foundation document for practitioners. Update 2019. J Assoc Med Microbiol Infect Dis Can. 2019.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9602959/" },
  idsaFlu: { id: "idsa-influenza-2018", citation: "Uyeki TM, Bernstein HH, Bradley JS, et al. Clinical practice guidelines by the Infectious Diseases Society of America: 2018 update on diagnosis, treatment, chemoprophylaxis, and institutional outbreak management of seasonal influenza. Clin Infect Dis. 2019.", url: "https://academic.oup.com/cid/article/68/6/e1/5251935" },
} satisfies Record<string, Source>;

export const INFECTIOUS_DISEASES_S55: Samp[] = [
  /* 48 Device pocket infection with septic shock -------------------------- */
  {
    id: "infectious-diseases-48",
    title: "Older man with fever and no obvious source",
    stem:
      "A 76-year-old man is brought to the emergency department by ambulance with 2 days of fever, shaking chills and weakness. He has no cough, urinary symptoms, abdominal pain, headache or diarrhea. Seven weeks ago he had a dual chamber pacemaker placed below his left clavicle for complete heart block. He has hypertension and type 2 diabetes, and takes metformin and amlodipine. He is drowsy but oriented. His chest is clear, his abdomen is soft and his legs show no redness. A urinalysis is negative for nitrites and leukocytes.",
    vitals: { temperature: "39.1°C oral", pulse: "118/minute", resp: "24/minute", bp: "82/46 mmHg", o2sat: "95% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following examination steps is most likely to reveal the source of his infection?",
        options: [
          "Digital rectal examination",
          "Inspection of the device pocket",
          "Neck flexion for meningism",
          "Oral and dental examination",
          "Skin check between the toes",
        ],
        correct: 1,
        explanation:
          "A pacemaker placed 7 weeks ago is an implanted foreign body, and a pocket infection can show only mild redness, warmth or swelling that is missed unless the gown and dressing are removed and the site examined. The EHRA consensus notes that Staphylococcus aureus is the most common cause of early pocket infection and bacteremia, which can spread along the leads to the heart. His chest, abdomen, urine and legs have already been checked. He has no headache, toothache or bowel symptoms, so meningeal, dental and rectal examinations are less likely to find the source.",
        keyFeature: { topic: "infectious-diseases", n: 6 },
        source: "ehra-cied-2020",
      },
      {
        id: "q2",
        kind: "single",
        update: "There is warmth, swelling and redness over the pacemaker pocket. After 2.4 L of Ringer's lactate over 1 hour, his BP is 84/50 mmHg with a MAP of 61 mmHg, and his lactate is 4.6 mmol/L.",
        prompt: "Which of the following best describes this patient's condition at this point?",
        options: [
          "Bacteremia without sepsis",
          "Pocket infection without sepsis",
          "Sepsis without septic shock",
          "Septic shock from the pocket",
          "Toxic shock syndrome",
        ],
        correct: 3,
        explanation:
          "Sepsis-3 defines septic shock as sepsis that needs a vasopressor to keep the MAP at 65 mmHg or more, with a lactate above 2 mmol/L, despite adequate fluid. After 2.4 L, which is 30 mL/kg for his 80 kg, his MAP is 61 mmHg and his lactate is 4.6 mmol/L. He already has organ dysfunction, with drowsiness and a high lactate, so this is more than bacteremia or a local pocket infection, and more than sepsis without shock. Toxic shock syndrome is a toxin mediated illness with a diffuse rash and is not suggested here.",
        keyFeature: { topic: "infectious-diseases", n: 2 },
        source: "sepsis-3",
      },
      {
        id: "q3",
        kind: "single",
        update: "His only IV is a peripheral catheter in the right antecubital fossa. A central line will take at least 30 minutes to place.",
        prompt: "Which of the following is the most appropriate next step for his blood pressure?",
        options: [
          "Dopamine by peripheral IV now",
          "Further 2 L crystalloid bolus",
          "Norepinephrine by peripheral IV now",
          "Vasopressin by peripheral IV now",
          "Wait for central access for norepinephrine",
        ],
        correct: 2,
        explanation:
          "The Surviving Sepsis Campaign recommends norepinephrine as the first-line vasopressor and suggests starting it through a peripheral vein rather than delaying until central access is secured. Peripheral use is kept short, in a vein at or above the antecubital fossa, with close checks for extravasation. Waiting 30 minutes leaves his MAP at 61 mmHg. He has had 30 mL/kg, so another 2 L risks fluid overload without fixing vasodilation. Dopamine causes more arrhythmias than norepinephrine. Vasopressin is added to norepinephrine, not used as the first agent.",
        keyFeature: { topic: "infectious-diseases", n: 2 },
        source: "ssc-2021",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate timing of his first antibiotic dose?",
        options: [
          "After pocket fluid is aspirated",
          "After the echocardiogram is done",
          "After the first blood culture result",
          "Now, after two sets of blood cultures",
          "Once three sets are drawn 30 minutes apart",
        ],
        correct: 3,
        explanation:
          "The EHRA consensus advises that patients with sepsis or septic shock receive empiric antibiotics right after two sets of blood cultures, so that treatment is not delayed, and the Surviving Sepsis Campaign recommends antimicrobials immediately, ideally within 1 hour, for possible septic shock. The three sets drawn 30 minutes apart that EHRA advises for stable patients would delay treatment here. EHRA advises against sampling the pocket through the skin, because it risks seeding infection. Echocardiography and culture results take hours to days and must not delay the first dose.",
        keyFeature: { topic: "infectious-diseases", n: 1 },
        source: "ehra-cied-2020",
      },
      {
        id: "q5",
        kind: "single",
        update: "Thirty minutes later, on norepinephrine 0.3 mcg/kg/minute through a new central line, his MAP is 60 mmHg.",
        prompt: "Which of the following is the most appropriate addition to his vasopressor therapy?",
        options: [
          "dopamine infusion IV",
          "levosimendan infusion IV",
          "phenylephrine infusion IV",
          "sodium bicarbonate infusion IV",
          "vasopressin infusion IV",
        ],
        correct: 4,
        explanation:
          "The Surviving Sepsis Campaign suggests adding vasopressin rather than escalating norepinephrine when the MAP stays low, and in practice vasopressin is usually started once norepinephrine reaches 0.25 to 0.5 mcg/kg/minute. He is on 0.3 mcg/kg/minute with a MAP of 60 mmHg. The guideline suggests against levosimendan, and against bicarbonate to improve hemodynamics in lactic acidemia. Dopamine causes more arrhythmias and is kept for settings without norepinephrine. Phenylephrine is not among the agents the guideline recommends for septic shock.",
        keyFeature: { topic: "infectious-diseases", n: 2 },
        source: "ssc-2021",
      },
    ],
    sources: [S.ehra, S.sepsis3, S.ssc],
    ...META,
  },

  /* 49 Viral gastroenteritis in an older adult on kidney-sensitive drugs --- */
  {
    id: "infectious-diseases-49",
    title: "Vomiting and diarrhea at a retirement residence",
    stem:
      "A 74-year-old woman presents to the emergency department with 2 days of vomiting and watery diarrhea, 6 to 8 stools a day. Several residents of her retirement residence became ill after a shared dinner 3 days ago. She has no blood in her stools, no recent antibiotics and no travel. She has type 2 diabetes, hypertension and hypothyroidism. She takes metformin 1 000 mg twice daily, ramipril 10 mg daily, hydrochlorothiazide 25 mg daily, atorvastatin, levothyroxine, calcium and vitamin D. She feels lightheaded on standing. Her mucous membranes are dry. Her abdomen is soft, with mild diffuse tenderness and no guarding.",
    vitals: { temperature: "37.6°C oral", pulse: "104/minute", resp: "18/minute", bp: "112/64 mmHg", o2sat: "97% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate for this patient in the emergency department?",
        options: [
          "Abdominal X-ray series",
          "Blood cultures, two sets",
          "Creatinine and electrolytes",
          "Stool culture for bacteria",
          "Stool ova and parasites",
        ],
        correct: 2,
        explanation:
          "Two days of vomiting and watery diarrhea in a 74-year-old who takes ramipril, hydrochlorothiazide and metformin put her at risk of acute kidney injury and electrolyte loss, so creatinine and electrolytes guide her care. IDSA 2017 advises stool testing for bacterial pathogens when diarrhea comes with fever, bloody or mucoid stools, or severe cramping or tenderness, and she has none of these. Several residents falling ill after one meal fits a viral outbreak such as norovirus. Blood cultures are for a febrile or toxic patient, an abdominal series for suspected obstruction, and a parasite search does not fit 2 days of illness.",
        keyFeature: { topic: "infectious-diseases", n: 7 },
        source: "idsa-diarrhea-2017",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her creatinine is 148 umol/L, up from 82 umol/L a month ago, and her potassium is 3.4 mmol/L. After ondansetron she is drinking well.",
        prompt: "Which of the following antimicrobial plans is most appropriate for her diarrhea?",
        options: [
          "azithromycin 500 mg PO daily",
          "ciprofloxacin 500 mg PO twice daily",
          "metronidazole 500 mg PO three times daily",
          "vancomycin 125 mg PO four times daily",
          "No antimicrobial treatment",
        ],
        correct: 4,
        explanation:
          "Acute watery diarrhea without fever, blood or recent travel, shared by several people after one meal, is most likely viral, and IDSA 2017 does not recommend empiric antimicrobial therapy for acute watery diarrhea in people without recent international travel. Antibiotics do not shorten a viral illness and add adverse effects. Azithromycin or a fluoroquinolone such as ciprofloxacin is kept for selected cases such as suspected bacillary dysentery. Metronidazole and oral vancomycin treat Clostridioides difficile, and she has had no recent antibiotics. Reduced osmolarity oral rehydration solution is the first-line treatment.",
        keyFeature: { topic: "infectious-diseases", n: 9 },
        source: "idsa-diarrhea-2017",
      },
      {
        id: "q3",
        kind: "menu",
        select: 3,
        prompt: "Which of the following of her medications should be held until she is eating and drinking normally again?",
        options: [
          "atorvastatin 20 mg daily",
          "calcium carbonate 500 mg daily",
          "hydrochlorothiazide 25 mg daily",
          "levothyroxine 75 mcg daily",
          "metformin 1 000 mg twice daily",
          "ramipril 10 mg daily",
          "vitamin D 1 000 IU daily",
        ],
        correct: [2, 4, 5],
        explanation:
          "Diabetes Canada's sick-day list advises holding drugs that worsen kidney function when fluid intake cannot keep up, such as ACE inhibitors like ramipril and diuretics like hydrochlorothiazide, and drugs that build up when the kidneys falter, such as metformin. Her creatinine has risen from 82 to 148 umol/L, so these host factors are already turning a mild viral illness into a kidney injury. Atorvastatin, levothyroxine, calcium and vitamin D are not on the list and can continue.",
        keyFeature: { topic: "infectious-diseases", n: 3 },
        source: "diabetes-canada-sick-day",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following new findings would most justify stool testing and possible antibiotic treatment for her?",
        options: [
          "Blood in stools with fever and tenesmus",
          "Cramps that ease after each stool",
          "Five watery stools in a day",
          "Nausea lasting a further 2 days",
          "Vomiting in two more residents",
        ],
        correct: 0,
        explanation:
          "Frequent bloody stools with fever, cramps and tenesmus suggest bacillary dysentery. IDSA 2017 advises stool testing when diarrhea comes with fever or bloody stools, and it allows empiric azithromycin or a fluoroquinolone for suspected shigellosis in that setting. Watery stools, cramps that ease, a few more days of nausea and more cases in the residence all fit the viral illness she already has, and none of them is a reason to start an antibiotic.",
        keyFeature: { topic: "infectious-diseases", n: 9 },
        source: "idsa-diarrhea-2017",
      },
    ],
    sources: [S.idsaDiarrhea, S.sickDay],
    ...META,
  },

  /* 50 Infected femoral pseudoaneurysm after groin injection -------------- */
  {
    id: "infectious-diseases-50",
    title: "Fever and a limp in a woman who uses drugs",
    stem:
      "A 31-year-old woman presents to the emergency department with 4 days of fever, chills and an ache in her right thigh that makes her limp. She injects fentanyl and methamphetamine and says she uses the veins in her arms. She is housed in a supportive housing building and has no other medical history. She has no cough, urinary symptoms or abdominal pain. She is wearing jeans and a hooded sweatshirt. Her forearms show old scars without redness or swelling. Her teeth are in poor repair but her gums are not swollen. Heart sounds are normal with no murmur. Her chest is clear.",
    vitals: { temperature: "38.8°C oral", pulse: "116/minute", resp: "20/minute", bp: "108/66 mmHg", o2sat: "98% on room air", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following areas is most important to examine next in this patient?",
        options: [
          "Groin and inguinal region",
          "Mouth and teeth",
          "Neck over the jugular veins",
          "Scalp under the hair",
          "Toes and soles of the feet",
        ],
        correct: 0,
        explanation:
          "People who inject drugs often move to the femoral vessels in the groin when arm veins are used up, and they may not say so. Her right thigh ache and limp point to the right groin, which stays hidden under jeans unless she is undressed. Injection injury there can cause an abscess, septic thrombosis or an infected femoral pseudoaneurysm. The neck is another hidden injection site, but her symptoms point to the leg. The mouth, scalp and feet are worth checking if the groin is clear.",
        keyFeature: { topic: "infectious-diseases", n: 6 },
        source: "coughlin-drug-arterial",
      },
      {
        id: "q2",
        kind: "single",
        update: "Below the right inguinal ligament there is a tender, warm, 5 cm swelling with overlying redness. It is pulsatile and a bruit is heard over it. She now says she has injected into her right groin for 3 months.",
        prompt: "Which of the following is the most appropriate next step for the swelling in her groin?",
        options: [
          "Bedside incision and drainage",
          "Needle aspiration of the swelling",
          "Oral antibiotics and review in 2 days",
          "Urgent CT angiography of the groin",
          "Warm compresses and IV antibiotics",
        ],
        correct: 3,
        explanation:
          "A pulsatile groin swelling with a bruit in a person who injects into the groin is an infected femoral pseudoaneurysm until imaging shows otherwise. It can look exactly like an abscess, and incision or needle aspiration can open the artery and cause catastrophic bleeding, so imaging with Doppler ultrasound or CT angiography comes first and vascular surgery is called. Oral antibiotics with review in 2 days, or compresses with antibiotics, treat neither the infection in the arterial wall nor the risk of rupture.",
        keyFeature: { topic: "infectious-diseases", n: 4 },
        source: "guelbi-ifap",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following empiric antibiotics is most appropriate while she awaits vascular surgery?",
        options: [
          "ceftriaxone 2 g IV daily",
          "cephalexin 500 mg PO four times daily",
          "clindamycin 300 mg PO three times daily",
          "metronidazole 500 mg IV twice daily",
          "vancomycin 25 mg/kg IV loading dose",
        ],
        correct: 4,
        explanation:
          "She has a deep purulent infection with fever and tachycardia, and IDSA advises empiric coverage of methicillin-resistant Staphylococcus aureus with an agent such as vancomycin for severe purulent infections with systemic signs. For her 52 kg, a 25 mg/kg load is 1.3 g IV. Ceftriaxone and cephalexin do not cover MRSA. Oral clindamycin is not adequate for an endovascular infection with systemic signs. Metronidazole covers only anaerobes.",
        keyFeature: { topic: "infectious-diseases", n: 8 },
        source: "idsa-ssti-2014",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following features of her drug use most increased her risk of this complication?",
        options: [
          "Drinking alcohol most days",
          "Injecting into the groin",
          "Smoking crack cocaine",
          "Snorting crushed tablets",
          "Using drugs alone at home",
        ],
        correct: 1,
        explanation:
          "The femoral vein in the groin lies right beside the femoral artery, and repeated groin injection punctures or infects the arterial wall, which is how infected pseudoaneurysms form in people who inject drugs. Coughlin and Mavor describe pseudoaneurysm as a serious consequence of injection, with ligation of the femoral artery often the safest repair. Using alone raises the risk of a fatal overdose rather than of this infection. Smoking, snorting and alcohol carry their own harms but do not puncture the artery.",
        keyFeature: { topic: "infectious-diseases", n: 3 },
        source: "coughlin-drug-arterial",
      },
    ],
    sources: [S.coughlin, S.guelbi, S.idsaSsti],
    ...META,
  },
];
