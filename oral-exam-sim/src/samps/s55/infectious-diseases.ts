// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { topic: "infectious-diseases", reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  idsaNvo: { id: "idsa-nvo-2015", citation: "Berbari EF, Kanj SS, Kowalski TJ, et al. 2015 Infectious Diseases Society of America (IDSA) clinical practice guidelines for the diagnosis and treatment of native vertebral osteomyelitis in adults. Clin Infect Dis. 2015.", url: "https://academic.oup.com/cid/article/61/6/e26/2196013" },
  kondo: { id: "kondo-beta-lactam-first", citation: "Kondo Y, Klompas M, McKenna CS, et al. Association between the sequence of beta-lactam and vancomycin administration and mortality in patients with suspected sepsis. Clin Infect Dis. 2025.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12043061/" },
  ssc2026: { id: "ssc-2026", citation: "Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.", url: "https://doi.org/10.1097/CCM.0000000000007075" },
  sepsis3: { id: "sepsis-3", citation: "Singer M, Deutschman CS, Seymour CW, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/26903338/" },
  idsaDiarrhea: { id: "idsa-diarrhea-2017", citation: "Shane AL, Mody RK, Crump JA, et al. 2017 Infectious Diseases Society of America clinical practice guidelines for the diagnosis and management of infectious diarrhea. Clin Infect Dis. 2017.", url: "https://academic.oup.com/cid/article/65/12/e45/4557073" },
  samarakoon: { id: "samarakoon-ifp", citation: "Samarakoon LB, Ho DCY, Tan YK, Kum SWC, Lim DM. Infected femoral pseudoaneurysms in intravenous drug abusers: a decade of experience from a Singapore tertiary centre. Singapore Med J. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8027151/" },
  burkey: { id: "burkey-hiv-mrsa", citation: "Burkey MD, Wilson LE, Moore RD, Lucas GM, Francis J, Gebo KA. The incidence of and risk factors for MRSA bacteraemia in an HIV-infected cohort in the HAART era. HIV Med. 2008.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2581476/" },
  guelbi: { id: "guelbi-ifap", citation: "Guelbi M, Hajri M, Hadrich Z, Atallah A, Mestiri H, Omrani S. Differentiating infected femoral pseudoaneurysms from inguinal abscesses: the hidden menace in intravenous drug users. A case report. Int J Surg Case Rep. 2025.", url: "https://pubmed.ncbi.nlm.nih.gov/40541023/" },
  tresson: { id: "tresson-groin", citation: "Tresson P, Huvelle U, Bordet M. Femoral artery ligature for treatment of infected groin pseudoaneurysm in injected drug abusers. Clin Anat. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9796184/" },
  phacSyphClin: { id: "phac-syphilis-clinical", citation: "Public Health Agency of Canada. Syphilis guide: risk factors and clinical manifestations. Canadian guidelines on sexually transmitted infections. 2023.", url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/syphilis/risk-factors-clinical-manifestation.html" },
  phacSyphTest: { id: "phac-syphilis-testing", citation: "Public Health Agency of Canada. Syphilis guide: screening and diagnostic testing. Canadian guidelines on sexually transmitted infections. 2024.", url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/syphilis/screening-diagnostic-testing.html" },
  phacSyphTx: { id: "phac-syphilis-treatment", citation: "Public Health Agency of Canada. Syphilis guide: treatment and follow-up. Canadian guidelines on sexually transmitted infections. Updated 2026.", url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/syphilis/treatment-follow-up.html" },
  ammi: { id: "ammi-antivirals-2019", citation: "Aoki FY, Allen UD, Mubareka S, Papenburg J, Stiver HG, Evans GA. Use of antiviral drugs for seasonal influenza: foundation document for practitioners. Update 2019. J Assoc Med Microbiol Infect Dis Can. 2019.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9602959/" },
  idsaFlu: { id: "idsa-influenza-2018", citation: "Uyeki TM, Bernstein HH, Bradley JS, et al. Clinical practice guidelines by the Infectious Diseases Society of America: 2018 update on diagnosis, treatment, chemoprophylaxis, and institutional outbreak management of seasonal influenza. Clin Infect Dis. 2019.", url: "https://academic.oup.com/cid/article/68/6/e1/5251935" },
} satisfies Record<string, Source>;

export const INFECTIOUS_DISEASES_S55: Samp[] = [
  /* 48 Vertebral infection with septic shock after a spinal injection ----- */
  {
    id: "infectious-diseases-48",
    title: "Older man with fever and no obvious source",
    stem:
      "A 79-year-old man is brought to the emergency department by his daughter with 3 days of fever, sweats and increasing drowsiness. He has no cough, urinary symptoms, abdominal pain, headache or diarrhea, and he has not mentioned any pain. His daughter says he has been reluctant to get out of his chair for a week and now sleeps sitting up. Four weeks ago he had an epidural steroid injection in his lower back for sciatica. He has type 2 diabetes and hypertension, and takes metformin and bisoprolol. He is drowsy but oriented. His neck is supple, his chest is clear and his abdomen is soft. There is no rash. A urinalysis is negative for nitrites and leukocytes.",
    vitals: { temperature: "38.9°C oral", pulse: "104/minute", resp: "22/minute", bp: "84/48 mmHg", o2sat: "95% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following examination steps is most likely to reveal the source of his infection?",
        options: [
          "Digital rectal examination",
          "Inspection of the feet and toes",
          "Neck flexion for meningism",
          "Oral and dental examination",
          "Percussion of the spine",
        ],
        correct: 4,
        explanation:
          "Reluctance to get up, sleeping upright and a spinal injection 4 weeks ago all point to his spine, and percussion over the spinous processes looks for the focal tenderness of vertebral osteomyelitis or an epidural abscess. IDSA advises suspecting vertebral infection in new back pain with fever, notes that recent spinal instrumentation raises the risk, and asks for a full motor and sensory examination. A drowsy older adult may not report back pain, so the spine has to be examined directly. His neck is already supple. A rectal, foot or dental source is possible in an older man with diabetes, but nothing in his story points there.",
        keyFeature: { topic: "infectious-diseases", n: 6 },
        source: "idsa-nvo-2015",
      },
      {
        id: "q2",
        kind: "single",
        update: "There is focal tenderness over the L3 and L4 spinous processes, and leg strength and sensation are normal. Two sets of blood cultures are drawn. Vancomycin and ceftriaxone are ordered through his only IV.",
        prompt: "Which of the following is the most appropriate order for giving his first antibiotic doses?",
        options: [
          "Ceftriaxone, then vancomycin",
          "Vancomycin alone until cultures grow",
          "Vancomycin and ceftriaxone after biopsy",
          "Vancomycin and ceftriaxone after MRI",
          "Vancomycin, then ceftriaxone",
        ],
        correct: 0,
        explanation:
          "Ceftriaxone can be given over a few minutes, while vancomycin usually infuses over 60 minutes or longer, so giving the beta-lactam first puts effective cover in place sooner. In a cohort of over 25 000 adults with suspected sepsis, those given vancomycin first received their beta-lactam a median of almost 3 hours later, and giving the beta-lactam first was linked to modestly lower in-hospital mortality in this observational study. Holding antibiotics for a biopsy is reserved for stable patients with a normal neurologic examination, and he is hypotensive and drowsy. Waiting for MRI delays treatment, and vancomycin alone leaves gram-negative organisms uncovered.",
        keyFeature: { topic: "infectious-diseases", n: 1 },
        source: "kondo-beta-lactam-first",
      },
      {
        id: "q3",
        kind: "single",
        update: "After 2.2 L of Ringer's lactate over 1 hour, his BP is 88/44 mmHg with a MAP of 59 mmHg, and his lactate is 3.8 mmol/L.",
        prompt: "Which of the following best describes this patient's condition at this point?",
        options: [
          "Bacteremia without sepsis",
          "Septic shock from the spine",
          "Severe sepsis without shock",
          "Toxic shock syndrome",
          "Volume depletion without sepsis",
        ],
        correct: 1,
        explanation:
          "Sepsis-3 defines septic shock as sepsis that needs a vasopressor to keep the MAP at 65 mmHg or more, with a lactate above 2 mmol/L, despite adequate fluid. After 2.2 L, which is 30 mL/kg for his 74 kg, his MAP is still 59 mmHg and his lactate is 3.8 mmol/L. Sepsis-3 retired the term severe sepsis, and he has already crossed into shock. Drowsiness and a high lactate show organ dysfunction, so this is more than bacteremia, and a full fluid load without a response argues against simple volume depletion. Toxic shock syndrome causes a diffuse rash, and he has none.",
        keyFeature: { topic: "infectious-diseases", n: 2 },
        source: "sepsis-3",
      },
      {
        id: "q4",
        kind: "single",
        update: "Norepinephrine through a peripheral IV raises his MAP to 66 mmHg. MRI shows L3 and L4 discitis with a small epidural abscess, and spine surgery will see him. The ICU is full and offers a bed at 08:00 tomorrow, 15 hours from now.",
        prompt: "Which of the following is the most appropriate plan for his admission from the emergency department?",
        options: [
          "ICU bed at 08:00 tomorrow",
          "ICU bed within 6 hours",
          "ICU once lactate normalizes",
          "Medical ward with outreach review",
          "Spine surgery ward after review",
        ],
        correct: 1,
        explanation:
          "He needs a titrated vasopressor and close monitoring, and the Surviving Sepsis Campaign 2026 guideline suggests that adults with sepsis or septic shock who need intensive care be admitted to the ICU within 6 hours. A 15 hour wait in the emergency department falls well outside that, so the team escalates through bed management or arranges transfer to an ICU that has a bed. A normal lactate is not a condition for ICU admission. A medical or surgical ward is not set up to titrate a norepinephrine infusion, and spine surgery can review him in the ICU.",
        keyFeature: { topic: "infectious-diseases", n: 2 },
        source: "ssc-2026",
      },
    ],
    sources: [S.idsaNvo, S.kondo, S.sepsis3, S.ssc2026],
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
        kind: "single",
        update: "She asks for something to slow the diarrhea before she goes back to the residence.",
        prompt: "Which of the following is the most appropriate medication to reduce her stool frequency?",
        options: [
          "bismuth subsalicylate 524 mg PO",
          "cholestyramine 4 g PO",
          "codeine 30 mg PO",
          "loperamide 4 mg PO",
          "octreotide 100 mcg SC",
        ],
        correct: 3,
        explanation:
          "IDSA 2017 states that loperamide may be given to immunocompetent adults with acute watery diarrhea, and that it should be avoided where toxic megacolon may result, as in bloody or inflammatory diarrhea. Her stools are watery without blood and her temperature is 37.6°C, so it is reasonable alongside oral fluids. The usual dose is 4 mg, then 2 mg after each loose stool, to a maximum of 16 mg a day. Codeine sedates an older adult and is not used to treat diarrhea. Bismuth subsalicylate adds a salicylate load while her creatinine is raised. Cholestyramine treats bile acid diarrhea, and octreotide is for secretory diarrhea from tumours or chemotherapy.",
        keyFeature: { topic: "infectious-diseases", n: 9 },
        source: "idsa-diarrhea-2017",
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
    sources: [S.idsaDiarrhea],
    ...META,
  },

  /* 50 Infected femoral pseudoaneurysm after groin injection -------------- */
  {
    id: "infectious-diseases-50",
    title: "Fever and a limp in a woman who uses drugs",
    stem:
      "A 31-year-old woman presents to the emergency department with 4 days of fever, chills and an ache in her right thigh that makes her limp. She injects fentanyl, smokes methamphetamine and says she uses the veins in her arms. She has HIV and stopped antiretroviral therapy 18 months ago. Her last CD4 count, 2 months ago, was 150 x 10^6/L. Her hepatitis C was cured with treatment 2 years ago. She smokes a pack of cigarettes a day. She has no cough, urinary symptoms or abdominal pain. She is wearing jeans and a hooded sweatshirt. Her forearms show old scars without redness or swelling. Her teeth are in poor repair but her gums are not swollen. Heart sounds are normal with no murmur. Her chest is clear.",
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
          "People who inject drugs often move to the groin when their superficial veins are used up, and Tresson and colleagues describe the femoral vessels as one of the most common injection sites. Patients may not say so. Her right thigh ache and limp point to the right groin, which stays hidden under jeans unless she is undressed. Injection injury there can cause an abscess, septic thrombosis or an infected femoral pseudoaneurysm. The neck is another hidden injection site, but her symptoms point to the leg. The mouth, scalp and feet are worth checking if the groin is clear.",
        keyFeature: { topic: "infectious-diseases", n: 6 },
        source: "tresson-groin",
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
          "A pulsatile groin swelling with a bruit in a person who injects into the groin is an infected femoral pseudoaneurysm until imaging shows otherwise. It can look exactly like an abscess, and incision or needle aspiration can open the artery and cause catastrophic bleeding, so imaging with Doppler ultrasound or CT angiography comes first and vascular surgery is called. Excision and ligation is then the usual repair in an infected field. Oral antibiotics with review in 2 days, or compresses with antibiotics, treat neither the infection in the arterial wall nor the risk of rupture.",
        keyFeature: { topic: "infectious-diseases", n: 4 },
        source: "guelbi-ifap",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following organisms is the most likely cause of the infection in her groin?",
        options: [
          "Eikenella corrodens",
          "Klebsiella pneumoniae",
          "Pseudomonas aeruginosa",
          "Staphylococcus aureus",
          "Streptococcus anginosus group",
        ],
        correct: 3,
        explanation:
          "Staphylococcus aureus grew in 90% of infected femoral pseudoaneurysms in a 10 year series of people who inject drugs, so her empiric antibiotic must cover it first, including MRSA where local rates or her history call for it. Skin organisms are carried into the vessel wall by repeated nonsterile punctures. Pseudomonas aeruginosa, Klebsiella and the Streptococcus anginosus group were each found only occasionally in that series. Eikenella corrodens comes from mouth flora, for example when a needle is licked, and is an uncommon cause. Blood and operative cultures then guide the final choice.",
        keyFeature: { topic: "infectious-diseases", n: 8 },
        source: "samarakoon-ifp",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following other features of her history most increases her risk of a bloodstream infection?",
        options: [
          "Cured hepatitis C",
          "Daily tobacco smoking",
          "HIV with a low CD4 count",
          "Methamphetamine smoking",
          "Poor dental health",
        ],
        correct: 2,
        explanation:
          "In a large HIV clinic cohort, a low CD4 count was an independent predictor of MRSA bacteremia, alongside injection drug use, with the risk highest at the lowest counts. Her count of 150 x 10^6/L after 18 months off antiretroviral therapy adds this host factor to her injecting, and reconnecting her with HIV care belongs in the admission plan. Hepatitis C that has been cured no longer adds this risk. Tobacco and methamphetamine smoking and poor dental health carry other harms but were not among the predictors that study found.",
        keyFeature: { topic: "infectious-diseases", n: 3 },
        source: "burkey-hiv-mrsa",
      },
    ],
    sources: [S.tresson, S.guelbi, S.samarakoon, S.burkey],
    ...META,
  },

  /* 51 Secondary syphilis labelled as a viral illness --------------------- */
  {
    id: "infectious-diseases-51",
    title: "Rash and tiredness in a young woman",
    stem:
      "A 27-year-old woman presents to the emergency department with 10 days of fatigue, low-grade fevers, headache and a sore throat. Three days ago a rash that does not itch appeared on her trunk. A walk-in clinic diagnosed a viral illness last week. She has had two male partners in the past 3 months and uses condoms inconsistently. She does not recall any genital sore. She takes an oral contraceptive and has no allergies. There is a faint pink macular rash on her trunk, and the lymph nodes in her neck and groins are enlarged and nontender. Her pharynx is mildly red. Her neck is supple, and her neurologic and eye examinations are normal.",
    vitals: { temperature: "37.9°C oral", pulse: "92/minute", resp: "16/minute", bp: "116/72 mmHg", o2sat: "99% on room air", weight: "61 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following parts of the examination is most likely to show the cause of her illness?",
        options: [
          "Auscultation for a heart murmur",
          "Inspection of the palms and soles",
          "Kernig and Brudzinski signs",
          "Palpation of the spleen tip",
          "Tonsils for exudate and swelling",
        ],
        correct: 1,
        explanation:
          "A truncal rash with fever, sore throat and widespread lymph nodes after new partners is secondary syphilis until tested, and PHAC describes its rash as rough red or reddish brown spots on the palms and soles that patients may not notice. The genitals and mouth should also be examined for mucosal lesions and condylomata lata. Her neck is supple and her neurologic examination is normal, so meningeal signs add little. A murmur, a spleen tip or tonsillar exudate would point to endocarditis or mononucleosis, which fit her picture less well.",
        keyFeature: { topic: "infectious-diseases", n: 6 },
        source: "phac-syphilis-clinical",
      },
      {
        id: "q2",
        kind: "single",
        update: "There are scaly reddish brown macules on both palms and soles. On the labia there are two flat, moist, grey plaques.",
        prompt: "Which of the following is the most likely diagnosis for this patient's illness?",
        options: [
          "Acute HIV infection",
          "Disseminated gonorrhea",
          "Hand, foot and mouth disease",
          "Pityriasis rosea",
          "Secondary syphilis",
        ],
        correct: 4,
        explanation:
          "Reddish brown macules on the palms and soles, condylomata lata on the labia, fever, headache and generalized lymph nodes are features PHAC lists for secondary syphilis, which usually appears 2 to 12 weeks after infection and can follow a chancre that went unnoticed. Acute HIV can cause fever, rash and lymph nodes but not condylomata lata, and she will be tested for it. Disseminated gonorrhea causes a few pustules on the limbs with joint pain. Pityriasis rosea spares the palms and soles. Hand, foot and mouth disease causes vesicles, not scaly macules or genital plaques.",
        keyFeature: { topic: "infectious-diseases", n: 5 },
        source: "phac-syphilis-clinical",
      },
      {
        id: "q3",
        kind: "menu",
        select: 3,
        prompt: "Which of the following investigations are most appropriate for her in the emergency department today?",
        options: [
          "Blood cultures, two sets",
          "Chlamydia and gonorrhea NAAT",
          "HIV antigen and antibody test",
          "Lumbar puncture",
          "Monospot test",
          "Syphilis serology with RPR",
          "Throat swab for group A strep",
        ],
        correct: [1, 2, 5],
        explanation:
          "Syphilis is diagnosed by serology, and most provinces screen with a treponemal test followed by a quantitative RPR, which also gives the baseline titre for follow-up. PHAC advises that anyone diagnosed with syphilis also be screened for chlamydia, gonorrhea and HIV. Lumbar puncture is for neurologic, eye or ear findings, and her examinations are normal. Blood cultures, a monospot and a throat swab look for other causes that the palm and sole rash and genital plaques have made unlikely.",
        keyFeature: { topic: "infectious-diseases", n: 7 },
        source: "phac-syphilis-testing",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for this patient's infection?",
        options: [
          "benzathine penicillin G IM single dose",
          "ceftriaxone IM single dose",
          "doxycycline PO for 14 days",
          "minocycline PO for 14 days",
          "penicillin V PO for 10 days",
        ],
        correct: 0,
        explanation:
          "PHAC recommends long-acting benzathine penicillin G 2.4 million units IM as a single dose for primary, secondary and early latent syphilis. Doxycycline 100 mg twice daily for 14 days is the alternative for penicillin allergy, which she does not have. A single dose of ceftriaxone is not a syphilis regimen, and ceftriaxone is kept for exceptional cases as a 10 day course. Minocycline and oral penicillin V are not recommended. She should be warned that fever, headache and muscle aches within hours of the injection may be a Jarisch-Herxheimer reaction, which is most common in secondary syphilis.",
        keyFeature: { topic: "infectious-diseases", n: 8 },
        source: "phac-syphilis-treatment",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate look-back period for notifying her sexual partners?",
        options: ["1 month", "3 months", "6 months", "12 months", "24 months"],
        correct: 2,
        explanation:
          "PHAC sets the partner notification period by stage of syphilis: 3 months before symptom onset for primary syphilis, 6 months for secondary syphilis and 1 year for early latent syphilis. She has secondary syphilis, so partners from the past 6 months are traced, tested and treated, and those from the previous 90 days are strongly considered for treatment without waiting for results. One month misses contacts who may already be infected. Three months is the primary syphilis period. Twelve months is the early latent syphilis period, and 24 months goes beyond any early stage. Syphilis is reportable to public health in every province and territory, and public health can help with notification.",
        keyFeature: { topic: "infectious-diseases", n: 10 },
        source: "phac-syphilis-treatment",
      },
    ],
    sources: [S.phacSyphClin, S.phacSyphTest, S.phacSyphTx],
    ...META,
  },

  /* 52 Influenza in a long-term care resident with kidney disease --------- */
  {
    id: "infectious-diseases-52",
    title: "Cough and aches from a long-term care home",
    stem:
      "An 84-year-old woman is sent to the emergency department from her long-term care home with 1 day of fever, dry cough, sore throat and muscle aches. Four other residents on her unit became ill with similar symptoms in the past 3 days, and one has tested positive for influenza A. She received this season's influenza vaccine. She has hypertension and chronic kidney disease, and takes amlodipine. She is alert and drinking. There are scattered wheezes but no crackles. A chest X-ray shows no consolidation. A nasopharyngeal swab is positive for influenza A. Her creatinine is 142 umol/L, and her estimated creatinine clearance is 22 mL/minute.",
    vitals: { temperature: "38.3°C oral", pulse: "96/minute", resp: "20/minute", bp: "138/76 mmHg", o2sat: "94% on room air", weight: "54 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate antimicrobial treatment for this patient's illness?",
        options: [
          "amoxicillin-clavulanate 875 mg PO twice daily",
          "ceftriaxone 1 g IV daily",
          "oseltamivir 30 mg PO once daily",
          "oseltamivir 75 mg PO once daily",
          "oseltamivir 75 mg PO twice daily",
        ],
        correct: 2,
        explanation:
          "A positive swab with a clear chest X-ray and no crackles means influenza without a bacterial pneumonia, so an antibacterial adds harm without benefit. AMMI Canada lists residents of nursing homes and other chronic care facilities as high risk, so she is treated with an antiviral. Her creatinine clearance of 22 mL/minute falls in the 10 to 30 mL/minute band, where the treatment dose is 30 mg once daily for 5 days rather than the usual 75 mg twice daily. 75 mg once daily is the prophylaxis dose for normal kidney function.",
        keyFeature: { topic: "infectious-diseases", n: 9 },
        source: "ammi-antivirals-2019",
      },
      {
        id: "q2",
        kind: "single",
        update: "Before transfer, her care home physician started azithromycin to prevent a bacterial pneumonia.",
        prompt: "Which of the following is the most appropriate plan for her azithromycin?",
        options: [
          "Add ceftriaxone for broader cover",
          "Change to amoxicillin-clavulanate",
          "Complete a 5 day course",
          "Continue until the fever settles",
          "Stop azithromycin now",
        ],
        correct: 4,
        explanation:
          "IDSA 2018 finds no data to support the safety or efficacy of antibiotic prophylaxis to prevent bacterial complications of influenza, and her swab confirms influenza with a clear chest X-ray and no crackles. Stopping the azithromycin now spares her adverse effects, Clostridioides difficile risk and resistance on a unit that is already in an outbreak. Completing a course, waiting for the fever to settle, switching to another antibacterial or adding ceftriaxone all keep treating a bacterial infection she does not have. Bacterial coinfection is investigated and treated if she develops pneumonia or deteriorates.",
        keyFeature: { topic: "infectious-diseases", n: 9 },
        source: "idsa-influenza-2018",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for the residents on her unit who are not ill?",
        options: [
          "Influenza vaccine booster for all residents",
          "Isolation of the unit without antivirals",
          "Oseltamivir only for unvaccinated residents",
          "Prophylactic oseltamivir for all residents",
          "Swab all residents and treat positives",
        ],
        correct: 3,
        explanation:
          "IDSA 2018 recommends antiviral chemoprophylaxis for all exposed residents of a long-term care facility once an influenza outbreak is identified, regardless of their vaccination history, along with other outbreak control measures. Vaccine protection is often incomplete in frail older adults, so limiting prophylaxis to the unvaccinated leaves most of the unit exposed. A booster dose of vaccine cannot protect them in time. Isolation alone does not stop spread on a unit that already has five cases. Swabbing people without symptoms and treating only positives misses those in the incubation period.",
        keyFeature: { topic: "infectious-diseases", n: 10 },
        source: "idsa-influenza-2018",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the minimum time oseltamivir prophylaxis should continue after symptom onset in the last case on the unit?",
        options: ["3 days", "5 days", "7 days", "10 days", "14 days"],
        correct: 2,
        explanation:
          "IDSA 2018 advises giving outbreak chemoprophylaxis for 14 days and continuing it for at least 7 days after symptom onset in the last identified case. A resident infected by that last case can still fall ill within the following days, so stopping 3 or 5 days after it leaves the unit unprotected while new cases may appear. Ten or 14 days after the last case is longer than the guideline asks when no new cases occur. Active daily surveillance for new cases continues across the facility while prophylaxis runs.",
        keyFeature: { topic: "infectious-diseases", n: 10 },
        source: "idsa-influenza-2018",
      },
    ],
    sources: [S.ammi, S.idsaFlu],
    ...META,
  },
];
