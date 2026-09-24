// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S = {
  cpsInfant: { id: "cps-infant", citation: "Burstein B, Lirette MP, Beck C, Chauvin-Kimoff L, Chan K. Canadian Paediatric Society position statement. Management of well-appearing febrile young infants aged 90 days or younger. Paediatr Child Health. 2024. Updated 2026.", url: "https://cps.ca/en/documents/position/management-of-well-appearing-febrile-young-infants-aged-90-days" },
  cpsMening: { id: "cps-meningitis", citation: "Le Saux N, Canadian Paediatric Society Infectious Diseases and Immunization Committee. Guidelines for the management of suspected and confirmed bacterial meningitis in Canadian children older than 2 months of age. Paediatr Child Health. 2014. Updated 2020, reaffirmed 2026.", url: "https://cps.ca/en/documents/position/management-of-bacterial-meningitis" },
  cpsSepsis: { id: "cps-sepsis", citation: "Farrell CA, Canadian Paediatric Society Acute Care Committee. Diagnosis and management of severe sepsis in the paediatric patient. Paediatr Child Health. 2020. Reaffirmed 2026.", url: "https://cps.ca/en/documents/position/diagnosis-and-management-of-sepsis-in-the-paediatric-patient" },
  ssc: { id: "ssc-peds-2026", citation: "Weiss SL, Peters MJ, Oczkowski SJW, et al. Surviving Sepsis Campaign international guidelines for the management of sepsis and septic shock in children 2026. Pediatr Crit Care Med. 2026.", url: "https://pubmed.ncbi.nlm.nih.gov/41869844/" },
  phoenix: { id: "phoenix", citation: "Schlapbach LJ, Watson RS, Sorce LR, et al. International consensus criteria for pediatric sepsis and septic shock. JAMA. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/38245889/" },
  thompson: { id: "thompson-mening", citation: "Thompson MJ, Ninis N, Perera R, et al. Clinical recognition of meningococcal disease in children and adolescents. Lancet. 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16458763/" },
  aapFever: { id: "aap-antipyretic", citation: "Sullivan JE, Farrar HC, American Academy of Pediatrics Section on Clinical Pharmacology and Therapeutics, Committee on Drugs. Fever and antipyretic use in children. Pediatrics. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/21357332/" },
  aapFs: { id: "aap-febrile-seizure", citation: "American Academy of Pediatrics Subcommittee on Febrile Seizures. Febrile seizures: clinical practice guideline for the long-term management of the child with simple febrile seizures. Pediatrics. 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/18519501/" },
  aapFsDx: { id: "aap-febrile-seizure-eval", citation: "American Academy of Pediatrics Subcommittee on Febrile Seizures. Neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/21285335/" },
  aha: { id: "aha-kawasaki", citation: "McCrindle BW, Rowley AH, Newburger JW, et al. Diagnosis, treatment, and long-term management of Kawasaki disease: a scientific statement for health professionals from the American Heart Association. Circulation. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/28356445/" },
  mas: { id: "mas-criteria", citation: "Ravelli A, Minoia F, Davi S, et al. 2016 classification criteria for macrophage activation syndrome complicating systemic juvenile idiopathic arthritis. Ann Rheum Dis. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/26865703/" },
  catmat: { id: "catmat-dx", citation: "Committee to Advise on Tropical Medicine and Travel (CATMAT). Canadian recommendations for the prevention and treatment of malaria. Chapter 6: malaria diagnosis. Public Health Agency of Canada. Updated 2023.", url: "https://www.canada.ca/en/public-health/services/catmat/canadian-recommendations-prevention-treatment-malaria/chapter-6-malaria-diagnosis.html" },
  cpsAom: { id: "cps-aom", citation: "Le Saux N, Robinson JL, Canadian Paediatric Society Infectious Diseases and Immunization Committee. Management of acute otitis media in children six months of age and older. Paediatr Child Health. 2016. Reaffirmed 2024.", url: "https://cps.ca/en/documents/position/acute-otitis-media" },
  cpsBronch: { id: "cps-bronchiolitis", citation: "Friedman JN, Rieder MJ, Walton JM, Canadian Paediatric Society Acute Care Committee, Drug Therapy and Hazardous Substances Committee. Bronchiolitis: recommendations for diagnosis, monitoring and management of children one to 24 months of age. Paediatr Child Health. 2014. Updated 2021.", url: "https://pubmed.ncbi.nlm.nih.gov/25414585/" },
  cpsCap: { id: "cps-cap", citation: "Le Saux N, Robinson JL, Canadian Paediatric Society Infectious Diseases and Immunization Committee. Uncomplicated pneumonia in healthy Canadian children and youth: practice points for management. Paediatr Child Health. 2015. Updated 2024.", url: "https://cps.ca/en/documents/position/pneumonia-management-children-youth" },
  cpsUti: { id: "cps-uti", citation: "Barton M, Viel-Theriault I, Purewal R, Canadian Paediatric Society Infectious Diseases and Immunization Committee. Optimizing management of urinary tract infections in children: a need for improved stewardship. Canadian Paediatric Society position statement. 2026.", url: "https://cps.ca/en/documents/position/management-urinary-tract-infections" },
  cpsHsv: { id: "cps-hsv", citation: "Allen UD, Robinson JL, Bitnun A, McDonald J, Canadian Paediatric Society Infectious Diseases and Immunization Committee. Prevention and management of neonatal herpes simplex virus infections. Canadian Paediatric Society position statement. 2020. Updated 2025.", url: "https://cps.ca/en/documents/position/prevention-management-neonatal-herpes-simplex-virus-infections" },
  cpsKawasaki: { id: "cps-kawasaki", citation: "Chen A, Rozenblyum E, Dahdah N, et al., Canadian Paediatric Society Community Paediatrics Committee. Kawasaki disease: practical guidance on diagnosis and management. Paediatr Child Health. 2026.", url: "https://cps.ca/en/documents/position/kawasaki-disease" },
  cpsGas: { id: "cps-gas", citation: "Sauve L, Forrester AM, Top KA, Canadian Paediatric Society Infectious Diseases and Immunization Committee. Group A streptococcal (GAS) pharyngitis: a practical guide to diagnosis and treatment. Paediatr Child Health. 2021.", url: "https://cps.ca/en/documents/position/group-a-streptococcal" },
  hunter: { id: "hunter", citation: "Dunkley EJ, Isbister GK, Sibbritt D, Dawson AH, Whyte IM. The Hunter Serotonin Toxicity Criteria: simple and accurate diagnostic decision rules for serotonin toxicity. QJM. 2003.", url: "https://pubmed.ncbi.nlm.nih.gov/12925718/" },
  boyer: { id: "boyer-serotonin", citation: "Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med. 2005.", url: "https://pubmed.ncbi.nlm.nih.gov/15784664/" },
  dawson: { id: "dawson-anticholinergic", citation: "Dawson AH, Buckley NA. Pharmacological management of anticholinergic delirium: theory, evidence and practice. Br J Clin Pharmacol. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/26589572/" },
  goldfrank: { id: "goldfrank", citation: "Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019." },
  epstein: { id: "epstein-heatstroke", citation: "Epstein Y, Yanovich R. Heatstroke. N Engl J Med. 2019.", url: "https://pubmed.ncbi.nlm.nih.gov/31216400/" },
  nelson: { id: "nelson", citation: "Kliegman RM, St Geme JW III, Blum NJ, et al., editors. Nelson Textbook of Pediatrics. 22nd ed. Elsevier. 2024." },
  mermel: { id: "idsa-line", citation: "Mermel LA, Allon M, Bouza E, et al. Clinical practice guidelines for the diagnosis and management of intravascular catheter-related infection: 2009 update by the Infectious Diseases Society of America. Clin Infect Dis. 2009.", url: "https://pubmed.ncbi.nlm.nih.gov/19489710/" },
} satisfies Record<string, Source>;

export const PEDIATRIC_FEVER_S46: Samp[] = [
  /* 16 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-16",
    topic: "pediatric-fever",
    title: "Five day old who is feeding poorly",
    stem:
      "A 5-day-old girl is brought to the emergency department by her parents because she felt hot and has fed poorly since this morning. She was born at 39 weeks by vaginal delivery and went home at 36 hours of age. Two days before delivery her mother had painful genital blisters for the first time, and these were not treated. The infant is sleepy but rouses when handled. The anterior fontanelle is flat. There are no skin, eye or mouth lesions. Capillary refill is 2 seconds.",
    vitals: { temperature: "38.3°C rectal", pulse: "172/minute", resp: "52/minute", o2sat: "98% on room air", weight: "3.2 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial evaluation for this infant?",
        options: [
          "Blood, urine and CSF studies with HSV testing",
          "Catheter urine culture with review tomorrow",
          "CBC, CRP and urinalysis, discharge if normal",
          "Observe after blood and urine cultures",
          "Step by step rule before deciding on an LP",
        ],
        correct: 0,
        explanation:
          "At 5 days of age every febrile infant needs a CBC, CRP or procalcitonin, blood culture, urinalysis and urine culture. Her mother's first episode of genital blisters just before delivery puts her at risk of neonatal HSV, so she also needs a lumbar puncture with CSF HSV testing and empiric IV acyclovir. Observation after blood and urine cultures alone omits the CSF studies her HSV risk requires. The Step by Step approach applies only to well-appearing infants aged 22 to 90 days, and no febrile infant this young is discharged on normal screening results. Outpatient review after a urine culture alone would miss bacteremia, meningitis and HSV.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Samples are sent. The CSF shows 48 white cells/mm3, 20 red cells/mm3 and no organisms on Gram stain.",
        prompt: "Which of the following empiric antimicrobial regimens is most appropriate for her while results are pending?",
        options: [
          "Ampicillin and gentamicin without an antiviral",
          "Ampicillin, cefotaxime and vancomycin",
          "Ampicillin, gentamicin, cefotaxime, acyclovir",
          "Cefotaxime and acyclovir without ampicillin",
          "Ceftriaxone, vancomycin and acyclovir",
        ],
        correct: 2,
        explanation:
          "A CSF count of 48 white cells/mm3 is above the CPS pleocytosis threshold of more than 15 cells/mm3 for infants 28 days or younger, so meningitis is suspected and cefotaxime is added to ampicillin and gentamicin. Her mother's untreated genital lesions at delivery are a clear HSV risk, so IV acyclovir 20 mg/kg every 8 hours is added as well. Ampicillin and gentamicin alone leave meningitis and HSV undertreated. Regimens without ampicillin miss Listeria and enterococcus. The CPS neonatal regimens use cefotaxime rather than ceftriaxone, which displaces bilirubin and can precipitate with IV calcium in neonates.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-infant",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following gentamicin orders is most appropriate for this infant?",
        options: [
          "gentamicin 24 mg IV every 24 hours",
          "gentamicin 19.2 mg IV every 24 hours",
          "gentamicin 16 mg IV every 24 hours",
          "gentamicin 12.8 mg IV every 24 hours",
          "gentamicin 8 mg IV every 12 hours",
        ],
        correct: 3,
        explanation:
          "For a term infant aged 0 to 7 days the CPS dose is gentamicin 4 mg/kg IV every 24 hours. At 3.2 kg that is 4 x 3.2 = 12.8 mg every 24 hours. The 16 mg dose is 5 mg/kg, the CPS dose for infants aged 8 to 28 days, so it is too high at 5 days of age. The 19.2 mg and 24 mg doses are 6 and 7.5 mg/kg. Giving 8 mg every 12 hours is an older divided schedule of 5 mg/kg/day rather than the once daily dose the CPS recommends.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-infant",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "At 36 hours the blood and urine cultures show no growth. The CSF HSV PCR is positive.",
        prompt: "Which of the following is the most appropriate plan for her antiviral treatment?",
        options: [
          "Change to oral acyclovir for 14 days",
          "Continue IV acyclovir for 7 days",
          "Continue IV acyclovir for 10 days",
          "Continue IV acyclovir for 21 days",
          "Stop acyclovir once she is afebrile",
        ],
        correct: 3,
        explanation:
          "Neonatal HSV with central nervous system involvement, shown here by a positive CSF PCR, is treated with IV acyclovir 20 mg/kg every 8 hours for a minimum of 21 days, with CSF HSV PCR repeated near the end of the course. Courses of 7 or 10 days are too short for CNS disease, and 14 days is the course for disease limited to the skin, eyes and mouth. Oral acyclovir gives drug levels too low for acute treatment and is used only for suppression afterwards. Defervescence does not mean the virus has been cleared.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-hsv",
      },
    ],
    sources: [S.cpsInfant, S.cpsHsv],
    ...META,
  },

  /* 17 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-17",
    topic: "pediatric-fever",
    title: "Seven week old with a fever at home",
    stem:
      "A 7-week-old boy is brought to the emergency department after his mother measured a rectal temperature of 38.6°C this evening. He was born at term and has no medical problems. He has fed well and has had his usual number of wet diapers. There is no cough, rhinorrhea, vomiting or diarrhea. He is alert, smiles and is well perfused. The anterior fontanelle is flat. He is uncircumcised. The examination shows no source of fever.",
    vitals: { temperature: "38.4°C rectal", pulse: "164/minute", resp: "42/minute", o2sat: "99% on room air", weight: "4.9 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following sets of investigations is most appropriate for this infant?",
        options: [
          "Blood culture, CBC, urine culture and LP",
          "Catheter urinalysis and urine culture only",
          "CBC and CRP with a bag urine specimen",
          "CBC, procalcitonin, blood culture, urine tests",
          "Chest radiograph, CBC and viral swab",
        ],
        correct: 3,
        explanation:
          "At 7 weeks he is in the CPS group aged 29 to 60 days, for whom the recommended tests are a CBC with differential, CRP or procalcitonin, blood culture, urinalysis and urine culture. The inflammatory markers decide whether he is low or high risk and whether a lumbar puncture is needed, so a routine LP without markers skips that step. Urine tests alone are the minimum only for infants aged 61 to 90 days. A bag specimen is too often contaminated to use for culture. He has no respiratory symptoms, so a chest radiograph adds nothing.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Catheter urinalysis shows leukocyte esterase 2+, positive nitrite and 25 white cells/hpf. ANC is 3.1 x 10^9/L, CRP 8 mg/L and procalcitonin 0.2 mcg/L.",
        prompt: "Which of the following is the most appropriate next step for this infant?",
        options: [
          "Admit for IV ampicillin and gentamicin",
          "Lumbar puncture before any antibiotic",
          "Repeat the urinalysis on a bag specimen",
          "Treat the UTI without a lumbar puncture",
          "Withhold antibiotics until culture results",
        ],
        correct: 3,
        explanation:
          "His ANC of 3.1 x 10^9/L, CRP of 8 mg/L and procalcitonin of 0.2 mcg/L, below the 0.5 mcg/L (0.5 ng/mL) cut-off, are normal. The CPS considers infants aged 29 to 60 days with normal inflammatory markers to be at low risk of bacteremia and meningitis even with a positive urinalysis, and the decision about lumbar puncture follows the markers rather than the urine. His urine shows a probable UTI that needs antibiotics now, not after culture results. A bag specimen adds nothing to a catheter sample, and ampicillin with gentamicin is the CPS regimen for infants 28 days or younger.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition if his parents can return easily?",
        options: [
          "Admit for a 7 day course of IV antibiotics",
          "Admit until cultures negative at 36 hours",
          "Home on oral cefixime, review in 7 days",
          "Home on oral cefixime, review in 24 to 48 hours",
          "Home without antibiotics, return if fever persists",
        ],
        correct: 3,
        explanation:
          "A well-appearing infant aged 29 to 60 days with normal inflammatory markers and an isolated UTI may be treated with oral antibiotics, such as cefixime 8 mg/kg every 24 hours, and discharged with review by a health care provider within 24 to 48 hours. Review after 7 days is too late for an infant this young. His positive urinalysis needs treatment, so discharge without antibiotics is not appropriate. Admission until cultures are negative at 36 hours is the plan for high-risk infants, and a full IV course is not needed for a well infant who is feeding normally.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "His mother asks what she can give at home if he seems uncomfortable with fever.",
        prompt: "Which of the following antipyretic orders is most appropriate for him?",
        options: [
          "acetaminophen 40 mg PO every 4 to 6 hours",
          "acetaminophen 73 mg PO every 4 to 6 hours",
          "acetaminophen 160 mg PO every 4 to 6 hours",
          "ASA 49 mg PO every 6 hours",
          "ibuprofen 49 mg PO every 6 to 8 hours",
        ],
        correct: 1,
        explanation:
          "Antipyretics are dosed by weight. At 4.9 kg, acetaminophen 15 mg/kg is about 73 mg (4.9 x 15 = 73.5 mg) every 4 to 6 hours. The 40 mg dose is about 8 mg/kg, below the usual 10 to 15 mg/kg, and 160 mg is about 33 mg/kg, more than twice the maximum single dose. Ibuprofen is not recommended for infants younger than 6 months. ASA is not used for fever in children because of the risk of Reye syndrome.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
    ],
    sources: [S.cpsInfant, S.aapFever],
    ...META,
  },

  /* 18 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-18",
    topic: "pediatric-fever",
    title: "Ten week old on the day of her vaccines",
    stem:
      "A 10-week-old girl is brought to the emergency department with a rectal temperature of 38.5°C that began 6 hours after her 2-month immunizations this morning. She was born at term and has been well. She is feeding normally and has had four wet diapers today. She has received no medication. She is alert, smiles and is consolable, with warm hands and feet. There is mild swelling at the injection site on her right thigh. The examination is otherwise normal.",
    vitals: { temperature: "38.2°C rectal", pulse: "158/minute", resp: "40/minute", o2sat: "99% on room air", weight: "5.4 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following would most increase this infant's risk of a serious bacterial infection?",
        options: [
          "Fever persisting beyond 24 hours",
          "Fussiness for the rest of the day",
          "Injection site swelling of 2 cm",
          "Raised CRP of 25 mg/L on screening",
          "Receipt of several vaccines at once",
        ],
        correct: 0,
        explanation:
          "Fever is common after routine vaccines. Fever that starts within 24 hours of immunization carries a low risk of serious bacterial infection, about 0.6%, but the risk rises to about 8.9% when fever persists beyond 24 hours. Inflammatory markers are often raised after immunization, so a CRP of 25 mg/L would not reliably identify infection. Fussiness, local swelling and receiving several vaccines at once are expected reactions, not markers of bacterial infection.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for this infant today?",
        options: [
          "Admit for observation for 36 hours",
          "Blood culture and CRP before she goes home",
          "Discharge home on oral amoxicillin",
          "Home, with urine testing if fever persists",
          "Lumbar puncture and IV ceftriaxone",
        ],
        correct: 3,
        explanation:
          "Her fever began within 24 hours of immunization, she is feeding well and her examination is reassuring, so her risk of serious bacterial infection is low. In studies of recently immunized febrile infants, the only serious bacterial infections found were UTIs and no invasive infection was found, so the CPS post-immunization guidance recommends urine testing if fever persists beyond 24 hours. Blood culture and CRP add little because inflammatory markers are often raised after vaccines. Admission, lumbar puncture and empiric antibiotics are reserved for infants at higher risk.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Her parents return the next day because the fever has continued for 30 hours. She is still feeding well.",
        prompt: "Which of the following urine collection methods is most appropriate for her culture?",
        options: [
          "Catheter specimen for culture",
          "Cotton ball placed in the diaper",
          "Dipstick of a bag specimen alone",
          "Plastic bag specimen for culture",
          "Urine squeezed from a wet diaper",
        ],
        correct: 0,
        explanation:
          "Her fever has now lasted more than 24 hours after immunization, so urine testing is indicated. In a child who is not toilet trained, the CPS prefers a catheter specimen for culture because of its low contamination rate, with suprapubic aspiration as an alternative. The CPS calls bag samples inappropriate for culture, and a positive bag dipstick would still need a second, catheter sample, which delays treatment. Cotton balls or urine squeezed from a diaper are not acceptable culture samples.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-uti",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Her father asks how much acetaminophen he may give if she is uncomfortable. He has infant drops labelled 80 mg/mL.",
        prompt: "Which of the following acetaminophen doses is most appropriate for her?",
        options: [
          "0.3 mL every 4 to 6 hours",
          "1 mL every 4 to 6 hours",
          "1 mL every hour as needed",
          "2 mL every 4 to 6 hours",
          "5 mL every 4 to 6 hours",
        ],
        correct: 1,
        explanation:
          "At 5.4 kg, acetaminophen 15 mg/kg is 81 mg, and 1 mL of the 80 mg/mL drops gives 80 mg, about 15 mg/kg, every 4 to 6 hours. The 0.3 mL dose gives 24 mg, about 4 mg/kg, which is too low to help. The 2 mL and 5 mL volumes give 160 mg and 400 mg, about 30 and 74 mg/kg per dose. Giving 1 mL every hour would pass the maximum daily dose of 75 mg/kg, about 405 mg, with the sixth hourly dose.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
    ],
    sources: [S.cpsInfant, S.cpsUti, S.aapFever],
    ...META,
  },

  /* 19 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-19",
    topic: "pediatric-fever",
    title: "Six week old with a cough and fever",
    stem:
      "A 6-week-old girl is brought to the emergency department with 2 days of cough and nasal congestion and a rectal temperature of 38.4°C at home. Her 3-year-old brother has a cold. She was born at 38 weeks and has no medical problems. She is feeding about two thirds of her usual volume and has had five wet diapers today. She is alert and well perfused. There is mild subcostal indrawing, with scattered crackles and wheeze in both lungs.",
    vitals: { temperature: "38.3°C rectal", pulse: "168/minute", resp: "56/minute", o2sat: "94% on room air", weight: "4.3 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "A nasopharyngeal swab sent at triage is positive for respiratory syncytial virus.",
        prompt: "Which of the following best describes her risk of invasive bacterial infection?",
        options: [
          "Equal to that of infants with no virus found",
          "Higher than with a rhinovirus infection",
          "Limited to a secondary bacterial pneumonia",
          "Lower than without a virus, but not negligible",
          "Negligible, so no bacterial testing is needed",
        ],
        correct: 3,
        explanation:
          "Infants with a laboratory-confirmed virus have lower rates of serious bacterial infection than those in whom no virus is found. The CPS notes a remaining risk of bacteremia of about 0.8% and of bacterial meningitis of about 0.4% even with a confirmed virus, so her RSV result does not make the risk negligible. Rhinovirus is the exception, with a higher risk than other viruses, not a lower one. Her risk is not limited to pneumonia, and bacteremia and meningitis remain possible.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations does the CPS febrile young infant statement recommend for her in the emergency department?",
        options: [
          "Blood culture, CBC, procalcitonin, urine tests",
          "Chest radiograph and viral panel only",
          "Lumbar puncture and blood culture only",
          "Urinalysis and culture from a bag",
          "No tests, as the virus explains the fever",
        ],
        correct: 0,
        explanation:
          "At 42 days she falls in the CPS group aged 29 to 60 days, for whom a CBC, CRP or procalcitonin, blood culture, urinalysis and urine culture are recommended. The CPS febrile infant statement advises that the initial evaluation follow these age-based recommendations even when respiratory symptoms or a documented virus are present, and uses a non-rhinovirus result only to guide later decisions such as early discharge. A chest radiograph is not routinely needed in bronchiolitis. A bag specimen is not acceptable for culture, and a lumbar puncture with blood culture alone omits the urine testing that every febrile infant this age needs.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "The CBC, procalcitonin and catheter urinalysis are normal. Her parents ask whether the crackles mean she needs antibiotics.",
        prompt: "Which of the following is the most appropriate management of her respiratory illness?",
        options: [
          "Azithromycin for atypical pneumonia",
          "Chest radiograph to look for consolidation",
          "High dose oral amoxicillin",
          "Nebulized salbutamol every 4 hours",
          "Supportive care without antibiotics",
        ],
        correct: 4,
        explanation:
          "Scattered crackles and wheeze with coryza in an infant with proven RSV infection are typical of bronchiolitis. The CPS notes that bacterial infection in otherwise healthy children with bronchiolitis is exceedingly rare, so antibiotics are not recommended without a documented secondary infection. Crackles are part of bronchiolitis and do not justify amoxicillin, azithromycin or a routine chest radiograph. Bronchodilators do not improve oxygen saturation or shorten hospital stay in bronchiolitis.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "cps-bronchiolitis",
      },
    ],
    sources: [S.cpsInfant, S.cpsBronch],
    ...META,
  },

  /* 20 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-20",
    topic: "pediatric-fever",
    title: "Five week old with abnormal screening tests",
    stem:
      "A 5-week-old boy is brought to the emergency department after his father measured a rectal temperature of 38.9°C. He was born at term and has been well. Today he has fed a little less than usual and has had four wet diapers. There are no respiratory symptoms and no sick contacts. He is awake, fixes on faces and has normal tone. Capillary refill is 2 seconds. The anterior fontanelle is flat. There is no rash and no source of fever on examination.",
    vitals: { temperature: "38.7°C rectal", pulse: "176/minute", resp: "44/minute", o2sat: "99% on room air", weight: "4.6 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "Catheter urinalysis is negative. ANC is 11.2 x 10^9/L, CRP 34 mg/L and procalcitonin 1.4 mcg/L.",
        prompt: "Which of the following is the most appropriate plan based on these results?",
        options: [
          "High risk: IV antibiotics, no lumbar puncture",
          "High risk: lumbar puncture, then IV antibiotics",
          "Intermediate risk: repeat procalcitonin later",
          "Low risk: admit without a lumbar puncture",
          "Low risk: discharge with review in 24 hours",
        ],
        correct: 1,
        explanation:
          "His procalcitonin of 1.4 mcg/L is above the 0.5 mcg/L cut-off, and his ANC of 11.2 x 10^9/L and CRP of 34 mg/L exceed the Step by Step limits of 10 x 10^9/L and 20 mg/L. The CPS treats infants aged 29 to 60 days with abnormal inflammatory markers as high risk, which calls for a lumbar puncture, empiric antibiotics and admission. Starting antibiotics without an LP leaves meningitis unassessed if the cultures later stay sterile. The low-risk pathways do not apply, and repeating the procalcitonin only delays care.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "The lumbar puncture is traumatic. CSF has 14 white cells/mm3 and 9000 red cells/mm3, and the Gram stain shows no organisms.",
        prompt: "Which of the following best describes this CSF white cell count?",
        options: [
          "Normal once corrected for red cells",
          "Pleocytosis consistent with meningitis",
          "Pleocytosis only if the count exceeds 20",
          "Raised, because correction is not valid in infants",
          "Uninterpretable, so the LP must be repeated",
        ],
        correct: 0,
        explanation:
          "After a traumatic tap with 100 000 red cells/mm3 or fewer, the CPS suggests subtracting about 1 white cell for every 877 red cells, or roughly 1 for every 1000. Here 9000 / 877 is about 10, so the corrected count is about 14 minus 10, or 4 cells/mm3, and 5 cells/mm3 with the 1000 to 1 rule. Both are below the pleocytosis threshold of more than 9 cells/mm3 for infants older than 28 days. The CPS supports a correction factor for traumatic samples with 100 000 red cells/mm3 or fewer, and the count is interpretable, so a repeat LP is not needed.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following antibiotic orders is most appropriate while his cultures are pending?",
        options: [
          "amoxicillin 230 mg PO three times daily",
          "cefixime 37 mg PO every 24 hours",
          "ceftriaxone 230 mg IV every 24 hours",
          "ceftriaxone 460 mg IV every 24 hours",
          "ceftriaxone 460 mg IV plus vancomycin 69 mg IV",
        ],
        correct: 3,
        explanation:
          "For infants aged 29 to 60 days the CPS empiric regimen is ceftriaxone 100 mg/kg IV every 24 hours, which is 460 mg at 4.6 kg. The 230 mg order is 50 mg/kg, half the recommended dose. Vancomycin 15 mg/kg, here 69 mg, is added only when meningitis is suspected, and his corrected CSF count is normal with a negative Gram stain. Oral cefixime is an option only for a low-risk infant with a UTI, and oral amoxicillin is not an empiric regimen for a high-risk febrile infant.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-infant",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for this infant?",
        options: [
          "Admit for a fixed 7 day IV course",
          "Admit until cultures are negative at 24 hours",
          "Admit until cultures are negative at 36 hours",
          "Discharge after one dose, review tomorrow",
          "Discharge on oral cefixime with follow-up",
        ],
        correct: 2,
        explanation:
          "High-risk infants aged 29 to 60 days are admitted on empiric antibiotics until bacterial cultures are negative at 36 hours. Observation until cultures are negative at 24 hours is the CPS option for low-risk infants in this age group, and he is high risk. Discharge after one dose or on oral cefixime is not appropriate with raised inflammatory markers. The length of treatment depends on the culture results, so a fixed 7 day course is not planned at the outset.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
    ],
    sources: [S.cpsInfant],
    ...META,
  },

  /* 21 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-21",
    topic: "pediatric-fever",
    title: "Cool, sleepy newborn in a community hospital",
    stem:
      "You are working in a community hospital emergency department. A 17-day-old boy is brought in because he has fed poorly and slept more than usual for 12 hours. He was born at 37 weeks and went home at 2 days of age. His mother's group B streptococcus screen was negative. He has had two wet diapers today. He is pale and difficult to rouse for feeds. Capillary refill is 4 seconds. The anterior fontanelle is flat. There is no rash.",
    vitals: { temperature: "35.9°C rectal", pulse: "188/minute", resp: "62/minute", o2sat: "95% on room air", weight: "3.3 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following statements about his temperature is most accurate?",
        options: [
          "Hypothermia can be a sign of neonatal sepsis",
          "Low readings reflect poor feeding alone",
          "Only a fever of 38.0°C or more suggests sepsis",
          "Rectal readings are unreliable in newborns",
          "Sepsis is unlikely without a documented fever",
        ],
        correct: 0,
        explanation:
          "Neonates with serious infection often fail to mount a fever, and the CPS HSV risk score counts a temperature below 36.4°C as well as one of 38.0°C or more. His rectal temperature of 35.9°C with poor feeding, lethargy, a pulse of 188/minute and a capillary refill of 4 seconds points to sepsis. Rectal measurement is the reference standard in young infants. Poor feeding alone does not explain these findings, and the absence of fever does not make sepsis unlikely.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "cps-infant",
      },
      {
        id: "q2",
        kind: "menu",
        select: 4,
        prompt: "Which of the following findings in this infant are signs of possible sepsis?",
        options: [
          "Birth at 37 weeks of gestation",
          "Capillary refill of 4 seconds",
          "Difficulty rousing for feeds",
          "Discharge home at 2 days of age",
          "Flat anterior fontanelle",
          "Negative maternal streptococcal screen",
          "Pulse of 188/minute",
          "Rectal temperature of 35.9°C",
          "No rash on examination",
        ],
        correct: [1, 2, 6, 7],
        explanation:
          "Lethargy with difficulty rousing for feeds, a capillary refill of 4 seconds, a pulse of 188/minute and hypothermia of 35.9°C are signs of sepsis in a neonate. A flat fontanelle and the absence of a rash do not exclude sepsis, but they are not signs of it. A negative maternal streptococcal screen lowers the risk of early-onset group B streptococcal disease but does not protect against late-onset infection. Birth at 37 weeks and discharge at 2 days are background details rather than signs of illness.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "cps-sepsis",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Three peripheral IV attempts fail over 10 minutes. The transport team from the pediatric centre is 2 hours away.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Femoral central venous catheter",
          "Intraosseous needle in the proximal tibia",
          "Nasogastric antibiotics until transfer",
          "Ultrasound scalp vein attempts for 30 minutes",
          "Wait for the transport team to gain access",
        ],
        correct: 1,
        explanation:
          "The CPS advises intraosseous access when peripheral venous access is not achieved rapidly in a child with sepsis, and a needle in the proximal tibia allows antibiotics and fluid boluses to be given at once. A femoral central line takes longer and carries more risk in a 3.3 kg infant. Another 30 minutes of attempts, or waiting 2 hours for the transport team, delays antibiotics and resuscitation. Enteral antibiotics are not reliably absorbed in a poorly perfused infant and do not treat bacteremia or meningitis.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-sepsis",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Intraosseous access is obtained. A blood culture and glucose are drawn. A lumbar puncture has not yet been attempted.",
        prompt: "Which of the following is the most appropriate timing for his first antibiotic doses?",
        options: [
          "After a lumbar puncture is completed",
          "After the CBC and CRP are resulted",
          "After the transport team arrives",
          "Now, with the lumbar puncture deferred",
          "Once the chest radiograph is reviewed",
        ],
        correct: 3,
        explanation:
          "He has signs of sepsis, with lethargy, hypothermia, tachycardia and delayed capillary refill, so empiric antibiotics are given as soon as the blood culture is drawn. For an ill-appearing infant the CPS advises blood and urine cultures without delaying antibiotics, with the lumbar puncture deferred until he is stable. CSF cell counts and PCR still give useful information after antibiotics have started. Waiting for the LP, laboratory results, a chest radiograph or the transport team delays treatment of possible bacteremia and meningitis.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-infant",
      },
    ],
    sources: [S.cpsInfant, S.cpsSepsis],
    ...META,
  },

  /* 22 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-22",
    topic: "pediatric-fever",
    title: "Preschooler with fever and sore legs",
    stem:
      "A 3-year-old girl is brought to the emergency department with fever for 10 hours. For the past 2 hours she has refused to walk, saying her legs hurt, and her mother says her hands feel cold. She received ibuprofen 2 hours ago. She is fully immunized and was well yesterday. She lies still and is quiet but answers questions. Her hands and feet are cool to the wrists and ankles, and capillary refill is 4 seconds. The skin over her knees is mottled. There is no rash. Her hips and knees move fully without pain.",
    vitals: { temperature: "38.9°C", pulse: "168/minute", resp: "34/minute", bp: "98/60 mmHg", o2sat: "97% on room air", weight: "15 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely explanation for her examination findings?",
        options: [
          "Compensated septic shock",
          "Febrile tachycardia alone",
          "Hypotensive septic shock",
          "Transient synovitis of the hip",
          "Viral myositis with dehydration",
        ],
        correct: 0,
        explanation:
          "A pulse of 168/minute that persists 2 hours after ibuprofen, cool extremities, mottling and a capillary refill of 4 seconds show poor perfusion, while her blood pressure of 98/60 mmHg is maintained. That is compensated septic shock. Fever alone does not cause mottling or delayed capillary refill. Her blood pressure is not low, so this is not hypotensive shock. Her hips and knees move fully without pain, which argues against synovitis, and leg pain with cold hands is an early sign of sepsis rather than a feature of myositis.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "cps-sepsis",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about her blood pressure is most accurate?",
        options: [
          "Hypotension is a late finding in children",
          "It confirms that her perfusion is adequate",
          "It is falsely raised by her fever",
          "It must fall before fluids are indicated",
          "Normal readings exclude shock at this age",
        ],
        correct: 0,
        explanation:
          "Children maintain blood pressure by raising heart rate and vascular tone until late in shock, so hypotension is a late finding. A blood pressure of 98/60 mmHg does not exclude shock or confirm adequate perfusion when capillary refill is 4 seconds and the skin is mottled. Fluid resuscitation starts on signs of poor perfusion rather than waiting for hypotension. Fever raises heart rate but does not falsely raise blood pressure.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "cps-sepsis",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following features of meningococcal sepsis usually appears earliest, before a rash develops?",
        options: [
          "Focal seizure",
          "Impaired consciousness",
          "Leg pain with cold hands",
          "Neck stiffness",
          "Photophobia and headache",
        ],
        correct: 2,
        explanation:
          "In a large study of children with meningococcal disease, leg pain, cold hands and feet and abnormal skin colour appeared at a median of about 8 hours, well before admission to hospital. The classic features of hemorrhagic rash, meningism and impaired consciousness developed late, at a median of 13 to 22 hours. Neck stiffness and impaired consciousness are therefore late signs. Headache can be an early but nonspecific symptom, whereas photophobia and seizures are meningeal or neurological features rather than the early sepsis features described.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "thompson-mening",
      },
      {
        id: "q4",
        kind: "menu",
        select: 2,
        update:
          "Two IV lines are placed. Blood culture, CBC, lactate and glucose are sent.",
        prompt: "Which of the following orders are most appropriate in the first hour?",
        options: [
          "Ceftriaxone IV now",
          "Crystalloid 1 L IV bolus",
          "Crystalloid 300 mL IV bolus",
          "CT head before antibiotics",
          "Dopamine infusion",
          "Hydrocortisone 30 mg IV",
          "Lumbar puncture before antibiotics",
        ],
        correct: [0, 2],
        explanation:
          "She has compensated septic shock, so she needs prompt empiric antibiotics and a crystalloid bolus of 10 to 20 mL/kg, here 300 mL for 15 kg, with reassessment after each bolus. A 1 L bolus is about 67 mL/kg given at once, without the reassessment that detects fluid overload. Dopamine is no longer the first vasoactive drug, and vasoactive drugs are considered only if shock persists after fluids. Hydrocortisone is reserved for children at risk of adrenal insufficiency or for shock that persists despite fluids and vasoactive drugs. Neither a lumbar puncture nor a CT head should delay antibiotics in a child in shock.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-sepsis",
      },
    ],
    sources: [S.cpsSepsis, S.thompson],
    ...META,
  },

  /* 23 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-23",
    topic: "pediatric-fever",
    title: "Confused teenager far from a pediatric centre",
    stem:
      "You are working in a rural hospital emergency department with no CT scanner. The nearest pediatric centre is 3 hours away by air. A 13-year-old boy is brought in by his parents with fever, headache and vomiting that began 8 hours ago. For the past hour he has been confused and does not recognize his sister. He has no medical problems and his immunizations are up to date. He opens his eyes to voice and is disoriented. His neck is stiff. There is no rash. His pupils are equal and reactive and he moves all limbs.",
    vitals: { temperature: "39.7°C", pulse: "132/minute", resp: "24/minute", bp: "112/64 mmHg", o2sat: "97% on room air", weight: "40 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "IV antibiotics now, after a blood culture",
          "IV antibiotics once the transfer team arrives",
          "Lumbar puncture, then IV antibiotics",
          "Throat swab, then oral antibiotics",
          "Transfer first for CT at the receiving centre",
        ],
        correct: 0,
        explanation:
          "Fever, headache, neck stiffness and a decreased level of consciousness make bacterial meningitis likely. The CPS advises deferring lumbar puncture when consciousness is decreased and warns that antibiotics must not be delayed when imaging is not immediately available. A blood culture is drawn and IV antibiotics are given at once, hours before he could reach a CT scanner. Waiting for the transfer team delays treatment, and oral antibiotics have no role in suspected meningitis.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-meningitis",
      },
      {
        id: "q2",
        kind: "menu",
        select: 2,
        prompt: "Which of the following antimicrobial orders are most appropriate before he is transferred?",
        options: [
          "ampicillin 2 g IV",
          "ceftriaxone 2 g IV",
          "ceftriaxone 500 mg IV",
          "gentamicin 280 mg IV",
          "penicillin G 4 million units IV",
          "vancomycin 2 g IV",
          "vancomycin 600 mg IV",
        ],
        correct: [1, 6],
        explanation:
          "The CPS empiric regimen for suspected bacterial meningitis is ceftriaxone 100 mg/kg/day divided every 12 hours, to a maximum of 4 g/day, with vancomycin 60 mg/kg/day divided every 6 hours. At 40 kg that is ceftriaxone 2 g and vancomycin 600 mg per dose. Ceftriaxone 500 mg is too low, and vancomycin 2 g is more than three times the dose. Penicillin G is a definitive choice only once a susceptible meningococcus or pneumococcus is identified, and it does not cover resistant pneumococci empirically. Ampicillin is added only for immunocompromised children to cover Listeria, and gentamicin is not part of the regimen. The CPS leaves adjuvant dexamethasone as an option to consider when CSF findings suggest Haemophilus influenzae or pneumococcal meningitis.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-meningitis",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "After antibiotics he becomes drowsier. His pulse rises to 150/minute and capillary refill is 4 seconds. His blood pressure is 104/60 mmHg.",
        prompt: "Which of the following best describes his circulatory status at this point?",
        options: [
          "Cushing response to raised pressure",
          "Early shock needing a fluid bolus",
          "Fluid overload from IV antibiotics",
          "Hypotensive shock needing vasopressors",
          "Normal circulation, as BP is normal",
        ],
        correct: 1,
        explanation:
          "A rising pulse of 150/minute, a capillary refill of 4 seconds and increasing drowsiness with a blood pressure of 104/60 mmHg indicate early, compensated shock, which needs a crystalloid bolus with reassessment. A normal blood pressure does not mean normal circulation in a child, because hypotension is a late sign. He is not hypotensive, so vasopressors are not the first step. A Cushing response to raised intracranial pressure causes hypertension with bradycardia, not tachycardia. The small volume of IV antibiotics does not cause fluid overload.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "cps-sepsis",
      },
    ],
    sources: [S.cpsMening, S.cpsSepsis],
    ...META,
  },

  /* 24 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-24",
    topic: "pediatric-fever",
    title: "Boy from a group home who is not himself",
    stem:
      "A 9-year-old boy with spastic quadriplegic cerebral palsy and a gastrostomy tube is brought from his group home because staff say he has not been himself for 6 hours. He is nonverbal at baseline but usually smiles and vocalizes with familiar staff. Today he is quiet and does not track faces. He has had two small wet diapers since morning. He takes baclofen and has had aspiration pneumonia twice. Crackles are heard at the right base. His hands are cool and capillary refill is 3 seconds.",
    vitals: { temperature: "38.1°C rectal", pulse: "146/minute", resp: "38/minute", bp: "96/54 mmHg", o2sat: "91% on room air", weight: "24 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following statements about his assessment is most accurate?",
        options: [
          "A temperature under 38.5°C lowers concern",
          "Caregiver report of a change is a key sign",
          "His reduced interaction is due to baclofen",
          "Nonverbal children rarely show sepsis signs",
          "Tachycardia is expected with cerebral palsy",
        ],
        correct: 1,
        explanation:
          "Staff who know him well report a clear change from his baseline, and in a child who cannot describe symptoms that change is an early sign of serious illness. His quietness, failure to track faces, pulse of 146/minute, rapid breathing, low urine output and cool hands support possible sepsis from aspiration pneumonia. Baclofen is a regular medication and does not explain a new change today. Cerebral palsy does not cause tachycardia, and a modest temperature does not lower concern when behaviour and perfusion have changed.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "cps-sepsis",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Venous lactate is 5.8 mmol/L. Platelets are 88 x 10^9/L and INR is 1.1.",
        prompt: "Which of the following best describes his condition using the Phoenix sepsis criteria?",
        options: [
          "Inflammatory response only",
          "Sepsis with septic shock",
          "Sepsis without septic shock",
          "Severe sepsis",
          "Suspected infection only",
        ],
        correct: 1,
        explanation:
          "His lactate of 5.8 mmol/L exceeds 5 mmol/L and scores 1 cardiovascular point, and his platelet count below 100 x 10^9/L scores 1 coagulation point. Under the Phoenix criteria, suspected infection with a score of at least 2 is sepsis, and sepsis with at least 1 cardiovascular point is septic shock, even when blood pressure is not low. Severe sepsis is no longer a category. The Phoenix criteria replaced the systemic inflammatory response criteria, which predicted outcome poorly, so an inflammatory response label does not apply.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "phoenix",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings in this child is a sign of reduced organ perfusion?",
        options: [
          "Crackles at the right base",
          "Gastrostomy tube feeding",
          "Low urine output since morning",
          "Nonverbal at baseline",
          "Two prior aspiration pneumonias",
        ],
        correct: 2,
        explanation:
          "Two small wet diapers since morning show low urine output, which reflects reduced kidney perfusion in sepsis and should be tracked with his capillary refill and mental status. Crackles at the right base point to the likely source, aspiration pneumonia, rather than to reduced perfusion. His gastrostomy tube, nonverbal baseline and previous aspiration pneumonias are background risk factors, not signs of how well his organs are perfused.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "cps-sepsis",
      },
    ],
    sources: [S.cpsSepsis, S.phoenix],
    ...META,
  },

  /* 25 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-25",
    topic: "pediatric-fever",
    title: "Unimmunized toddler with a high fever",
    stem:
      "A 14-month-old boy is brought to the emergency department with fever to 39.8°C for 1 day. He has no cough, vomiting, diarrhea or rash. His parents declined all routine immunizations. He attends a home daycare. He is drinking well and has had four wet diapers today. After ibuprofen at home he is playful. His tympanic membranes, throat, chest and abdomen are normal. He is uncircumcised. There is no joint swelling or meningismus.",
    vitals: { temperature: "39.4°C rectal", pulse: "150/minute", resp: "30/minute", o2sat: "98% on room air", weight: "10.5 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following most increases this child's risk of occult bacteremia?",
        options: [
          "Absence of routine immunizations",
          "Age older than 12 months",
          "Attendance at a home daycare",
          "Fever response to ibuprofen",
          "Short duration of fever",
        ],
        correct: 0,
        explanation:
          "His parents declined all vaccines, so he lacks pneumococcal and Haemophilus influenzae type b protection. Conjugate vaccines have made occult bacteremia rare in immunized toddlers, but an unimmunized child aged 3 to 36 months with high fever and no source remains at higher risk, protected only in part by herd immunity. Risk of bacteremia is higher in younger infants, so being older than 12 months does not add risk. Improvement after an antipyretic does not separate bacterial from viral illness. Daycare attendance and a short fever mainly raise the chance of a viral infection.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "nelson",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        prompt: "Which of the following investigations are most appropriate for him at this visit?",
        options: [
          "Bag urine culture",
          "Blood culture",
          "Catheter urinalysis and culture",
          "CBC with differential",
          "Chest radiograph",
          "Lumbar puncture",
          "Stool culture",
          "Throat swab for streptococcus",
        ],
        correct: [1, 2, 3],
        explanation:
          "In a nonverbal child, fever without a focus may be the only sign of UTI, and an uncircumcised boy under 2 years with no source is at higher risk. The CPS prefers a catheter specimen in a child who is not toilet trained, with a urinalysis first and the rest sent for culture if it shows pyuria or nitrite. Because he is unimmunized, a CBC and blood culture are added to look for occult pneumococcal bacteremia. The CPS considers bag samples inappropriate for culture. He has no respiratory signs, meningismus or diarrhea, so a chest radiograph, lumbar puncture and stool culture are not indicated, and his throat is normal.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-uti",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "His parents have children's ibuprofen suspension labelled 100 mg/5 mL.",
        prompt: "Which of the following ibuprofen doses is most appropriate for him?",
        options: [
          "ibuprofen 105 mg PO every 2 hours",
          "ibuprofen 25 mg PO every 6 to 8 hours",
          "ibuprofen 105 mg PO every 6 to 8 hours",
          "ibuprofen 200 mg PO every 6 to 8 hours",
          "ibuprofen 420 mg PO every 6 to 8 hours",
        ],
        correct: 2,
        explanation:
          "At 10.5 kg, ibuprofen 10 mg/kg is 105 mg, or 5.25 mL of the 100 mg/5 mL suspension, every 6 to 8 hours, with a maximum of 40 mg/kg/day, or 420 mg. The 25 mg dose is about 2.4 mg/kg and too low to help. The 200 mg dose is about 19 mg/kg per dose. The 420 mg dose is his whole daily maximum given at once, and 105 mg every 2 hours reaches that maximum with the fourth dose and exceeds it with the fifth.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Catheter urinalysis is negative. WBC is 11.4 x 10^9/L. He remains playful and drinks well in the department.",
        prompt: "Which of the following is the most appropriate plan for him?",
        options: [
          "Admit for IV ceftriaxone and observation",
          "Ceftriaxone IM with review in 24 hours",
          "Home, no antibiotics, culture follow-up",
          "Lumbar puncture before discharge",
          "Oral amoxicillin for 10 days, then review",
        ],
        correct: 2,
        explanation:
          "He looks well, is drinking, has a negative catheter urinalysis and a normal WBC of 11.4 x 10^9/L, so a viral illness is the most likely cause of his fever. Antibiotics are not given for a presumed viral fever, but his blood culture result is followed and his parents are told to return if he worsens. Empiric ceftriaxone or amoxicillin without a bacterial source would treat many children to help few and adds side effects and resistance. A lumbar puncture is not indicated without meningeal signs or a change in behaviour.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "nelson",
      },
    ],
    sources: [S.nelson, S.cpsUti, S.aapFever],
    ...META,
  },

  /* 26 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-26",
    topic: "pediatric-fever",
    title: "Shivering with the evening infusion",
    stem:
      "A 4-year-old girl with short bowel syndrome is brought to the emergency department with fever and shivering that began 30 minutes after her parenteral nutrition was connected at home. She has a tunnelled central venous catheter in her right chest and receives parenteral nutrition 14 hours a day. She had a Staphylococcus epidermidis line infection 8 months ago. She is tired but interactive. The catheter exit site is clean and dry. Her abdomen is soft. The examination is otherwise normal.",
    vitals: { temperature: "39.2°C", pulse: "154/minute", resp: "30/minute", bp: "92/54 mmHg", o2sat: "98% on room air", weight: "16 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features most increases this child's risk of a serious bacterial infection?",
        options: [
          "Age older than 3 years",
          "Clean and dry catheter exit site",
          "Fatigue at the end of the day",
          "Fever with a central venous catheter",
          "Soft, nontender abdomen",
        ],
        correct: 3,
        explanation:
          "Fever and shivering that begin soon after her central line is used point to a catheter-related bloodstream infection, and she has had one before. A child with a central venous catheter and fever is at high risk of bacteremia and needs cultures and empiric antibiotics. A clean, dry exit site does not exclude infection inside the catheter. Her age, a soft abdomen and tiredness in the evening do not raise her risk.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "idsa-line",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following blood culture strategies is most appropriate before antibiotics are given?",
        options: [
          "Catheter tip culture after line removal",
          "Cultures only if fever persists",
          "One culture drawn from the catheter only",
          "One peripheral culture only",
          "Paired catheter and peripheral cultures",
        ],
        correct: 4,
        explanation:
          "The IDSA recommends paired blood cultures, one drawn through the catheter and one from a peripheral vein, before antibiotics start. Comparing growth and time to positivity between the two samples helps show whether the catheter is the source. A single sample from either site gives less information. Removing the line to culture its tip sacrifices the access she depends on for nutrition, and delaying cultures until fever persists delays treatment of a possible bacteremia.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "idsa-line",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Paired blood cultures are drawn. Her pulse remains 150/minute and capillary refill is 3 seconds.",
        prompt: "Which of the following empiric antibiotic regimens is most appropriate now?",
        options: [
          "Cefazolin IV while awaiting cultures",
          "Oral amoxicillin-clavulanate at home",
          "Vancomycin IV alone while awaiting cultures",
          "Vancomycin with gram negative coverage",
          "No antibiotics until cultures grow",
        ],
        correct: 3,
        explanation:
          "Persistent tachycardia of 150/minute and a capillary refill of 3 seconds show that she is unwell, so suspected catheter-related bloodstream infection is treated at once with vancomycin plus gram-negative coverage. The IDSA advises vancomycin for coagulase-negative staphylococci and Staphylococcus aureus, with gram-negative coverage guided by severity of illness and local susceptibility. Vancomycin alone leaves gram-negative organisms uncovered in an ill child, and cefazolin misses methicillin-resistant staphylococci. Oral therapy at home and waiting for cultures both delay treatment of a possible bloodstream infection.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "idsa-line",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Twelve hours later she remains febrile and is now hypotensive. Blood cultures have not yet turned positive.",
        prompt: "Which of the following factors in her history most supports adding empiric antifungal coverage?",
        options: [
          "A previous bacterial line infection",
          "Clean catheter exit site",
          "Fever with shivering after infusion",
          "Parenteral nutrition via the catheter",
          "Tunnelled catheter in the chest",
        ],
        correct: 3,
        explanation:
          "She receives parenteral nutrition 14 hours a day through the catheter, and the IDSA lists total parenteral nutrition among the risk factors that justify empiric coverage for candidemia in a septic patient. The other listed risks are prolonged broad-spectrum antibiotics, hematologic malignancy, transplant, a femoral catheter and Candida colonization at several sites. Her previous infection was bacterial and does not by itself point to Candida. Shivering with an infusion suggests line infection of any cause, and a chest catheter with a clean exit site adds no antifungal risk.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "idsa-line",
      },
    ],
    sources: [S.mermel],
    ...META,
  },

  /* 27 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-27",
    topic: "pediatric-fever",
    title: "Five month old with a week of fever",
    stem:
      "A 5-month-old boy is brought to the emergency department with fever for 7 days. He was seen twice at a walk-in clinic and diagnosed with a viral illness. He is irritable and feeding less than usual. His immunizations are up to date. He is fussy but consolable. Both eyes are mildly red without discharge. His lips are red and dry. There is no rash, lymphadenopathy or swelling of the hands or feet. His chest and ears are normal. There is no other focus of infection.",
    vitals: { temperature: "38.9°C rectal", pulse: "170/minute", resp: "40/minute", o2sat: "98% on room air", weight: "7.2 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important diagnosis to consider in this infant?",
        options: [
          "Adenovirus conjunctivitis",
          "Early measles infection",
          "Enteroviral infection",
          "Human herpesvirus 6 infection",
          "Incomplete Kawasaki disease",
        ],
        correct: 4,
        explanation:
          "The CPS advises considering incomplete Kawasaki disease in any infant younger than 12 months with 7 days of unexplained fever, because infants often have incomplete features and the highest risk of coronary artery aneurysms. He has two principal features, bilateral conjunctival injection without discharge and red, dry lips. Human herpesvirus 6 causes roseola, with 3 to 5 days of fever followed by a rash and no conjunctivitis. Measles causes a spreading maculopapular rash by this stage of the illness, and he has no rash. Adenovirus and enteroviruses can cause fever with red eyes, but 7 days of fever at this age requires Kawasaki disease to be excluded.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "cps-kawasaki",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "CRP is 96 mg/L and ESR 72 mm/hour. Albumin is 28 g/L, ALT 64 U/L, WBC 17.8 x 10^9/L and platelets 420 x 10^9/L. Urinalysis shows 15 white cells/hpf with no bacteria.",
        prompt: "Which of the following is the most appropriate next step for this infant?",
        options: [
          "Echocardiogram only if fever lasts 3 more days",
          "Refer to cardiology clinic in 2 weeks",
          "Repeat CRP and ESR in 48 hours",
          "Start oral amoxicillin for a UTI",
          "Treat with IV immune globulin and ASA",
        ],
        correct: 4,
        explanation:
          "His CRP of 96 mg/L and ESR of 72 mm/hour exceed the thresholds of 30 mg/L and 40 mm/hour that prompt supplemental testing. He meets four supplemental criteria: albumin of 30 g/L or less, raised ALT, WBC of 15 x 10^9/L or more, and 10 or more white cells/hpf in the urine. Three or more supplemental criteria, or a positive echocardiogram, is an indication to treat with IV immune globulin and ASA, and an echocardiogram is done. Pyuria without bacteria is a feature of Kawasaki disease, and delaying treatment or follow-up raises the risk of coronary aneurysms.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "cps-kawasaki",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following IV immune globulin doses is most appropriate for him?",
        options: [
          "IV immune globulin 0.72 g as one infusion",
          "IV immune globulin 7.2 g as one infusion",
          "IV immune globulin 14.4 g as one infusion",
          "IV immune globulin 28.8 g as one infusion",
          "IV immune globulin 2.9 g daily for 4 days",
        ],
        correct: 2,
        explanation:
          "The recommended dose is IV immune globulin 2 g/kg as a single infusion, usually over 10 to 12 hours, with ASA. At 7.2 kg that is 2 x 7.2 = 14.4 g. The older regimen of 0.4 g/kg daily for 4 days, 2.9 g a day here, led to more coronary artery abnormalities than a single 2 g/kg dose in a randomized trial. The 7.2 g and 0.72 g doses are 1 and 0.1 g/kg, and 28.8 g is 4 g/kg, twice the recommended dose.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "aha-kawasaki",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about his future immunizations?",
        options: [
          "Defer only inactivated vaccines for 6 months",
          "Delay measles and varicella vaccines 11 months",
          "Give all routine vaccines on schedule",
          "Give measles vaccine early at 6 months",
          "Stop all vaccines until age 5 years",
        ],
        correct: 1,
        explanation:
          "IV immune globulin contains antibodies that can block the response to live measles and varicella vaccines, so the CPS advises deferring live vaccines for 11 months after IV immune globulin unless there is an outbreak. His first measles and varicella doses, due at 12 months, would therefore be delayed until 11 months after the infusion. Inactivated vaccines can be given on schedule, so there is no reason to defer them or to stop all vaccines. An early measles dose at 6 months would likely fail for the same reason.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "cps-kawasaki",
      },
    ],
    sources: [S.cpsKawasaki, S.aha],
    ...META,
  },

  /* 28 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-28",
    topic: "pediatric-fever",
    title: "Fever five weeks after a trip to Nigeria",
    stem:
      "A 6-year-old girl is brought to the emergency department with fever, chills and headache for 3 days. Five weeks ago she returned from a 4-week visit to relatives in Nigeria. She took atovaquone-proguanil during the trip but stopped it on the flight home. She has had no cough, diarrhea or urinary symptoms. She is alert and tired. She has no rash, meningismus or lymphadenopathy. The spleen tip is palpable. The rest of the examination is normal.",
    vitals: { temperature: "39.6°C", pulse: "136/minute", resp: "24/minute", bp: "100/62 mmHg", o2sat: "98% on room air", weight: "21 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following statements about malaria in this child is most accurate?",
        options: [
          "A course of prophylaxis excludes malaria",
          "Malaria is unlikely 5 weeks after return",
          "Malaria needs a rash or jaundice to be likely",
          "Testing can wait for a hematology clinic",
          "Urgent testing is needed to exclude it",
        ],
        correct: 4,
        explanation:
          "Fever, chills and a palpable spleen 5 weeks after a visit to Nigeria make malaria likely, and CATMAT advises that results be available within 2 hours of blood being drawn. More than 90% of falciparum malaria appears within 3 months of travel, so 5 weeks after return is typical, and any unexplained fever within a year of return needs assessment. Chemoprophylaxis lowers but does not remove the risk, especially when it is stopped early. Rash and jaundice are not required for the diagnosis, and waiting for a clinic delays testing.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "catmat-dx",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "A rapid diagnostic test and thick and thin blood films are negative.",
        prompt: "Which of the following is the most appropriate next step in her malaria testing?",
        options: [
          "Repeat films at 12 to 24 hour intervals, twice",
          "Repeat films only if fever returns",
          "Repeat the rapid test in 1 week",
          "Send malaria serology instead of films",
          "No further testing, as malaria is excluded",
        ],
        correct: 0,
        explanation:
          "CATMAT advises that when the first smears are negative and no other diagnosis is established, two more smears are examined at 12 or 24 hour intervals. One negative film and rapid test do not exclude malaria, and her fever, recent travel to Nigeria and palpable spleen keep it likely. Waiting for fever to return or repeating only the rapid test in a week risks missing falciparum malaria, which can progress within hours. Serology reflects past exposure and does not diagnose acute malaria.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "catmat-dx",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Her mother asks how much acetaminophen to give while the tests are repeated.",
        prompt: "Which of the following acetaminophen orders is most appropriate for her?",
        options: [
          "acetaminophen 1 g PO every 4 to 6 hours",
          "acetaminophen 105 mg PO every 4 to 6 hours",
          "acetaminophen 160 mg PO every 4 to 6 hours",
          "acetaminophen 315 mg PO every 4 to 6 hours",
          "acetaminophen 650 mg PO every 4 to 6 hours",
        ],
        correct: 3,
        explanation:
          "At 21 kg, acetaminophen 15 mg/kg is 315 mg every 4 to 6 hours. The 105 mg and 160 mg doses are 5 and about 7.6 mg/kg, below the usual 10 to 15 mg/kg range. The 650 mg dose is about 31 mg/kg, twice the single dose, and 1 g is an adult dose of about 48 mg/kg that would pass her daily maximum of 75 mg/kg, or 1575 mg, with the second dose.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
    ],
    sources: [S.catmat, S.aapFever],
    ...META,
  },

  /* 29 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-29",
    topic: "pediatric-fever",
    title: "Evening fevers and a swollen knee",
    stem:
      "A 7-year-old boy is brought to the emergency department with daily fever for 3 weeks. The fever spikes to 39.5°C each evening and returns to normal by morning. His mother has noticed a pink rash on his trunk that comes with the fever and fades. For a week he has had a swollen right knee and a painful left wrist. Two courses of antibiotics did not help. He has a swollen, warm right knee, a tender left wrist, cervical lymphadenopathy and a palpable spleen.",
    vitals: { temperature: "39.3°C", pulse: "128/minute", resp: "24/minute", bp: "102/64 mmHg", o2sat: "98% on room air", weight: "23 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for this boy's illness?",
        options: [
          "Acute lymphoblastic leukemia",
          "Acute rheumatic fever",
          "Lyme disease with arthritis",
          "Septic arthritis of the right knee",
          "Systemic juvenile idiopathic arthritis",
        ],
        correct: 4,
        explanation:
          "A daily fever for 3 weeks that spikes each evening and returns to normal, with an evanescent pink rash that comes with the fever, arthritis, lymphadenopathy and splenomegaly, is typical of systemic juvenile idiopathic arthritis. Septic arthritis does not explain 3 weeks of fever with a rash and two affected joints. Lyme arthritis usually affects one large joint without daily fever spikes, and rheumatic fever causes a migratory arthritis after streptococcal pharyngitis without quotidian fever spikes, lymphadenopathy or splenomegaly. Leukemia can mimic this picture and is excluded before treatment, but the daily fever with a fading rash favours systemic arthritis.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "nelson",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most important before corticosteroids are started?",
        options: [
          "Bone marrow examination",
          "Echocardiogram",
          "MRI of the right knee",
          "Rheumatoid factor",
          "Serum antinuclear antibody",
        ],
        correct: 0,
        explanation:
          "Leukemia and neuroblastoma can present with fever, bone or joint pain, lymphadenopathy and splenomegaly, and corticosteroids can partly treat leukemia and hide the diagnosis. A bone marrow examination is therefore done before steroids when malignancy has not been excluded. Serum antinuclear antibody and rheumatoid factor are usually negative in systemic arthritis and do not change management. An MRI of the knee and an echocardiogram cannot exclude malignancy.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "nelson",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Five days later he returns with persistent fever and drowsiness. Platelets have fallen from 480 to 130 x 10^9/L. Ferritin is 9200 mcg/L, AST 210 U/L, triglycerides 3.4 mmol/L and fibrinogen 1.3 g/L.",
        prompt: "Which of the following is the most likely cause of this change in his condition?",
        options: [
          "Drug-induced hepatitis",
          "Hemolytic uremic syndrome",
          "Immune thrombocytopenia",
          "Macrophage activation syndrome",
          "Vitamin K deficiency",
        ],
        correct: 3,
        explanation:
          "His ferritin of 9200 mcg/L is far above 684 mcg/L, and he has all four supporting features of the 2016 criteria: platelets of 181 x 10^9/L or less, AST above 48 U/L, triglycerides above 1.76 mmol/L and fibrinogen of 3.6 g/L or less. In a febrile child with systemic arthritis this meets the classification criteria for macrophage activation syndrome. Immune thrombocytopenia does not cause high ferritin, liver injury or low fibrinogen. Hemolytic uremic syndrome and drug-induced hepatitis do not explain this combination, and vitamin K deficiency lowers vitamin K dependent clotting factors but not platelets or fibrinogen.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "mas-criteria",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial treatment for this complication?",
        options: [
          "Broad-spectrum antibiotics alone",
          "High dose IV methylprednisolone",
          "Higher dose naproxen",
          "IV immune globulin 2 g/kg",
          "Platelet transfusion",
        ],
        correct: 1,
        explanation:
          "Macrophage activation syndrome is a life-threatening complication of systemic arthritis that is treated promptly with high dose IV corticosteroids, often with anakinra or cyclosporine, under rheumatology and critical care guidance. A higher NSAID dose does not control the cytokine storm. Platelet transfusion does not treat the cause and is kept for bleeding. IV immune globulin is not the primary treatment, and antibiotics alone do not treat the inflammation, although infection is excluded at the same time.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "nelson",
      },
    ],
    sources: [S.nelson, S.mas],
    ...META,
  },

  /* 30 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-30",
    topic: "pediatric-fever",
    title: "Teenager with night sweats and weight loss",
    stem:
      "A 15-year-old girl presents to the emergency department with fever on and off for 5 weeks. She wakes drenched in sweat most nights and has lost 6 kg, from 58 kg to 52 kg. For 2 weeks she has had a dry cough and feels breathless when lying flat. Two courses of antibiotics for presumed pneumonia did not help. She has no known tuberculosis exposure and has not travelled. She has a firm, painless 3 cm node above her left clavicle. Her chest is clear. There is no hepatosplenomegaly.",
    vitals: { temperature: "38.4°C", pulse: "112/minute", resp: "22/minute", bp: "118/70 mmHg", o2sat: "97% on room air", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her prolonged fever?",
        options: [
          "Hodgkin lymphoma",
          "Infectious mononucleosis",
          "Mycoplasma pneumonia",
          "Pulmonary tuberculosis",
          "Reactive lymphadenopathy",
        ],
        correct: 0,
        explanation:
          "Weeks of fever, drenching night sweats and loss of more than 10% of body weight (6 of 58 kg, about 10.3%) are B symptoms of lymphoma. A firm, painless supraclavicular node with cough and breathlessness lying flat suggests a mediastinal mass, typical of Hodgkin lymphoma in adolescents. Mycoplasma pneumonia should have responded to antibiotics and does not cause B symptoms for 5 weeks. She has no tuberculosis exposure or travel. Mononucleosis causes a shorter illness without weight loss of this degree, and a reactive node is usually tender and does not explain the night sweats and orthopnea.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "nelson",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations should be obtained first in the emergency department?",
        options: [
          "Chest radiograph",
          "Excisional node biopsy",
          "Marrow aspirate and biopsy",
          "Monospot test",
          "Pulmonary function tests",
        ],
        correct: 0,
        explanation:
          "Breathlessness lying flat and a dry cough raise concern for an anterior mediastinal mass, so a chest radiograph comes first to look for a mass and airway compression. It guides the safety of later procedures, because sedation or general anesthesia with a large mass can cause airway or cardiovascular collapse. A node biopsy and a marrow aspirate and biopsy follow once the mass has been assessed. A Monospot test and pulmonary function tests do not address the immediate airway risk.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "nelson",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "The chest radiograph shows a large anterior mediastinal mass narrowing the trachea. The CBC shows no blasts.",
        prompt: "Which of the following is the most appropriate precaution while she awaits oncology assessment?",
        options: [
          "Give IV dexamethasone before a biopsy",
          "Intubate electively to protect the airway",
          "Keep her upright and avoid sedation",
          "Lie her flat for a CT with sedation",
          "Perform node biopsy under general anesthesia",
        ],
        correct: 2,
        explanation:
          "A large anterior mediastinal mass narrowing the trachea can cause sudden airway obstruction or cardiovascular collapse when the patient lies flat or is sedated, so she is kept upright and sedation is avoided. Imaging is done without sedation, in a position she tolerates. Elective intubation and general anesthesia carry a high risk of collapse and need planning by experienced teams. Corticosteroids given before tissue is obtained can obscure the diagnosis of lymphoma, so the decision to give them before a biopsy rests with oncology unless she develops respiratory distress.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "nelson",
      },
    ],
    sources: [S.nelson],
    ...META,
  },

  /* 31 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-31",
    topic: "pediatric-fever",
    alsoTopics: ["tox","environmental"],
    title: "Hot, confused toddler after a visit from grandma",
    stem:
      "A 3-year-old boy is brought to the emergency department by his parents because he has been agitated and hot for 2 hours. He is picking at the air and does not recognize his mother. He was well this morning. His grandmother, who is visiting, takes diphenhydramine for sleep, and her pill bottle was found open on the floor. His skin is flushed, hot and dry. His pupils are 7 mm and sluggish. Bowel sounds are reduced and his bladder is palpable. There is no rash or neck stiffness.",
    vitals: { temperature: "39.1°C rectal", pulse: "174/minute", resp: "28/minute", bp: "118/72 mmHg", o2sat: "99% on room air", weight: "15 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his fever?",
        options: [
          "Anticholinergic toxicity",
          "Bacterial meningitis",
          "Febrile delirium with influenza",
          "Serotonin toxicity",
          "Sympathomimetic toxicity",
        ],
        correct: 0,
        explanation:
          "Hot, flushed, dry skin with delirium, picking at the air, 7 mm pupils, reduced bowel sounds and a palpable bladder form the anticholinergic toxidrome, and an open bottle of diphenhydramine was within reach. Heat builds up because he cannot sweat. Sympathomimetic and serotonin toxicity both cause sweating, and serotonin toxicity also causes clonus and hyperreflexia. He has no neck stiffness or rash, and meningitis or influenza would not explain the dry skin, dilated pupils and urinary retention.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "His ECG shows sinus tachycardia with a QRS duration of 128 ms.",
        prompt: "Which of the following is the most appropriate treatment for this ECG finding?",
        options: [
          "Amiodarone 75 mg IV",
          "Magnesium sulfate 750 mg IV",
          "Physostigmine 0.3 mg IV",
          "Procainamide 225 mg IV",
          "Sodium bicarbonate 15 mmol IV",
        ],
        correct: 4,
        explanation:
          "A QRS of 128 ms reflects sodium channel blockade from diphenhydramine overdose, which is treated with IV sodium bicarbonate 1 to 2 mmol/kg, here 15 mmol for 15 kg, repeated to narrow the QRS. Procainamide and amiodarone also block sodium channels and can worsen conduction. Physostigmine is avoided while the QRS is wide from sodium channel blockade, because it can cause bradycardia and asystole. Magnesium treats torsades de pointes, which he does not have.",
        keyFeature: { topic: "tox", n: 4 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for his temperature?",
        options: [
          "Acetaminophen 225 mg PR and observation",
          "Dantrolene 15 mg IV and ice packs",
          "Haloperidol 1.5 mg IM and cooling",
          "Ibuprofen 150 mg PO and observation",
          "Sedation with a benzodiazepine and cooling",
        ],
        correct: 4,
        explanation:
          "His temperature rises from agitation and loss of sweating, not from a raised hypothalamic set point, so acetaminophen and ibuprofen do not lower it. Treatment is sedation with a benzodiazepine to control agitation, with active external cooling. Antipsychotics such as haloperidol can prolong the QRS and QT intervals, lower the seizure threshold and impair heat loss, so they are avoided. Dantrolene has no established role in drug-induced hyperthermia of this kind.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "After bicarbonate the QRS narrows to 84 ms. He remains agitated and delirious despite two doses of midazolam.",
        prompt: "Which of the following is the most appropriate next treatment for his delirium?",
        options: [
          "Diphenhydramine 15 mg IV",
          "Haloperidol 1 mg IM",
          "Physostigmine 0.3 mg IV slowly",
          "Promethazine 7.5 mg IV",
          "Restraint without further sedation",
        ],
        correct: 2,
        explanation:
          "Once the QRS has narrowed to 84 ms, a cholinesterase inhibitor can be considered for anticholinergic delirium that has not responded to other measures. Physostigmine crosses into the brain and reverses the central anticholinergic effect, and it is given slowly in small titrated doses, about 0.02 mg/kg, with monitoring for bradycardia and seizures. Its supply is variable, so poison centre advice guides its use. Diphenhydramine and promethazine are anticholinergic and would worsen his toxicity. Haloperidol can prolong conduction intervals and lower the seizure threshold, and restraint without sedation increases heat production.",
        keyFeature: { topic: "tox", n: 2 },
        source: "dawson-anticholinergic",
      },
    ],
    sources: [S.goldfrank, S.dawson],
    ...META,
  },

  /* 32 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-32",
    topic: "pediatric-fever",
    alsoTopics: ["tox","environmental"],
    title: "Shaky, sweaty teenager with a cold",
    stem:
      "A 15-year-old girl is brought to the emergency department by her father because she has been shaky, sweaty and restless for 4 hours. She takes sertraline for anxiety. Yesterday she started an over-the-counter cough syrup containing dextromethorphan for a cold, and today she took several extra doses. She is agitated and diaphoretic. Her pupils are 6 mm. She has a coarse tremor, brisk reflexes and sustained ankle clonus, more marked in the legs than the arms. Bowel sounds are hyperactive.",
    vitals: { temperature: "38.9°C oral", pulse: "136/minute", resp: "22/minute", bp: "148/88 mmHg", o2sat: "98% on room air", weight: "54 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains her fever and neuromuscular findings?",
        options: [
          "Anticholinergic toxicity",
          "Neuroleptic malignant syndrome",
          "Serotonin toxicity",
          "Sympathomimetic toxicity",
          "Viral encephalitis",
        ],
        correct: 2,
        explanation:
          "After adding dextromethorphan to sertraline, two serotonergic drugs, she has inducible ankle clonus with agitation and diaphoresis, and tremor with hyperreflexia. Each pair meets the Hunter criteria for serotonin toxicity. Anticholinergic toxicity causes dry skin and reduced bowel sounds rather than sweating and hyperactive bowel sounds. Neuroleptic malignant syndrome follows a dopamine antagonist and develops over days with rigidity rather than clonus. Sympathomimetic toxicity does not cause clonus, and encephalitis does not explain the timing with a new serotonergic drug.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "hunter",
      },
      {
        id: "q2",
        kind: "menu",
        select: 2,
        update:
          "The sertraline and cough syrup are stopped. She is placed on a cardiac monitor.",
        prompt: "Which of the following treatments are most appropriate for her now?",
        options: [
          "Acetaminophen 650 mg PO",
          "Bromocriptine 2.5 mg PO",
          "Cyproheptadine 12 mg PO",
          "Dantrolene 50 mg IV",
          "Lorazepam 1 mg IV",
          "Physical restraints",
          "Propranolol 1 mg IV",
        ],
        correct: [2, 4],
        explanation:
          "Once the serotonergic drugs are stopped, moderate serotonin toxicity is treated with a benzodiazepine for agitation and the serotonin antagonist cyproheptadine, 12 mg by mouth as the first dose. Physical restraint worsens hyperthermia and lactic acidosis as patients struggle against it. Acetaminophen does not work because the heat comes from muscle activity. Propranolol can cause hypotension and mask tachycardia. Bromocriptine and dantrolene are not recommended, and bromocriptine can worsen serotonin toxicity.",
        keyFeature: { topic: "tox", n: 4 },
        source: "boyer-serotonin",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Two hours later her temperature is 41.2°C. She is rigid, and further benzodiazepine doses have not controlled her muscle activity.",
        prompt: "Which of the following is the most appropriate next step in managing her hyperthermia?",
        options: [
          "Acetaminophen 1 g PR and ice packs",
          "Dantrolene 2.5 mg/kg IV and ice packs",
          "Intubation after succinylcholine",
          "Paralysis with rocuronium and intubation",
          "Propranolol infusion to slow the heart",
        ],
        correct: 3,
        explanation:
          "A temperature of 41.2°C with rigidity marks life-threatening serotonin toxicity, and the heat comes from muscle activity. Treatment is sedation, paralysis with a nondepolarizing agent such as rocuronium, and intubation, together with active cooling. Succinylcholine is avoided because of the risk of hyperkalemia from rhabdomyolysis. Antipyretics are ineffective, dantrolene is not recommended, and propranolol can cause hypotension and mask tachycardia.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "boyer-serotonin",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following features best distinguishes her condition from neuroleptic malignant syndrome?",
        options: [
          "Altered mental status",
          "Diaphoresis with high blood pressure",
          "Fever above 38°C with tachycardia",
          "Muscle rigidity with a raised CK",
          "Rapid onset with clonus and hyperreflexia",
        ],
        correct: 4,
        explanation:
          "Her symptoms began within hours of extra dextromethorphan doses, and she has clonus and brisk reflexes. Serotonin toxicity starts rapidly, usually within 24 hours of a drug change, with neuromuscular hyperactivity. Neuroleptic malignant syndrome develops over days with slow movements, lead pipe rigidity and reduced reflexes. Fever, tachycardia, altered mental status, diaphoresis, hypertension, rigidity and a raised CK can occur in both, so they do not separate them.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "boyer-serotonin",
      },
    ],
    sources: [S.hunter, S.boyer],
    ...META,
  },

  /* 33 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-33",
    topic: "pediatric-fever",
    alsoTopics: ["tox","environmental"],
    title: "Two year old who cannot settle",
    stem:
      "A 2-year-old girl is brought to the emergency department because she has been running in circles, grinding her teeth and screaming for 90 minutes. Her 10-year-old brother takes lisdexamfetamine for attention deficit hyperactivity disorder, and several capsules are missing. She was well this morning and has no sick contacts. She is agitated and cannot be consoled. Her skin is flushed and sweaty. Her pupils are 7 mm. She has a fine tremor. Bowel sounds are normal. There is no rash, clonus or neck stiffness.",
    vitals: { temperature: "38.8°C rectal", pulse: "188/minute", resp: "36/minute", bp: "124/80 mmHg", o2sat: "99% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following examination findings best distinguishes her toxidrome from anticholinergic toxicity?",
        options: [
          "Agitation",
          "Dilated pupils",
          "Hyperthermia",
          "Sweaty skin",
          "Tachycardia",
        ],
        correct: 3,
        explanation:
          "Her flushed but sweaty skin points to a sympathomimetic toxidrome, because anticholinergic drugs block sweating and leave the skin hot and dry. Her brother's lisdexamfetamine, an amphetamine, fits this picture. Agitation, hyperthermia, tachycardia and dilated pupils occur in both toxidromes, so they do not separate them. Her normal bowel sounds also argue against anticholinergic toxicity.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first treatment for her agitation?",
        options: [
          "Diphenhydramine 12 mg IV",
          "Haloperidol 1 mg IM",
          "Midazolam 1.2 mg IV",
          "Physical restraint on a stretcher",
          "Propranolol 0.12 mg IV",
        ],
        correct: 2,
        explanation:
          "Benzodiazepines are first-line for sympathomimetic agitation because they reduce central stimulation, which lowers heat production, heart rate and blood pressure. Midazolam 0.1 mg/kg is 1.2 mg for 12 kg, titrated to effect. Physical restraint without sedation increases heat production and the risk of rhabdomyolysis. Diphenhydramine adds anticholinergic effects and impairs sweating. Propranolol can leave alpha stimulation unopposed and worsen hypertension, and haloperidol is at most a second-line choice after benzodiazepines.",
        keyFeature: { topic: "tox", n: 4 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "After midazolam she is calmer. Her rectal temperature is now 40.4°C.",
        prompt: "Which of the following is the most appropriate management of her temperature?",
        options: [
          "Acetaminophen 180 mg PR",
          "Active cooling and sedation",
          "Dantrolene 12 mg IV",
          "Ibuprofen 120 mg PO",
          "Tepid sponging with restraints",
        ],
        correct: 1,
        explanation:
          "Her temperature of 40.4°C comes from muscle activity and agitation, so treatment is continued benzodiazepine sedation with active external cooling, such as mist and fanning or ice packs. Acetaminophen and ibuprofen act on the hypothalamic set point and do not lower drug-induced hyperthermia. Restraint increases heat production as she struggles. Dantrolene is not a standard treatment for sympathomimetic hyperthermia.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following laboratory tests is most important to monitor for a complication of her hyperthermia and agitation?",
        options: [
          "Creatine kinase",
          "Serum ammonia",
          "Serum amylase",
          "Serum lead level",
          "Thyroid function tests",
        ],
        correct: 0,
        explanation:
          "Prolonged agitation and a temperature of 40.4°C in sympathomimetic toxicity can cause rhabdomyolysis, detected by a rising creatine kinase, with a risk of acute kidney injury and hyperkalemia. A lead level, ammonia and amylase do not identify this complication. Thyroid function tests would only matter if thyrotoxicosis were suspected, and the missing lisdexamfetamine explains her findings.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
    ],
    sources: [S.goldfrank],
    ...META,
  },

  /* 34 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-34",
    topic: "pediatric-fever",
    alsoTopics: ["environmental"],
    title: "Toddler found in a parked car",
    stem:
      "A 20-month-old boy is brought to the emergency department by ambulance after he was found in a parked car at a shopping centre. He had been left in his car seat for about 45 minutes on a sunny afternoon with an outside temperature of 31°C. Paramedics removed his clothing. He had a 2-minute generalized seizure on the way to hospital. He now responds only to pain. His skin is hot and dry. There is no rash or sign of injury. Capillary refill is 3 seconds.",
    vitals: { temperature: "41.6°C rectal", pulse: "196/minute", resp: "44/minute", bp: "82/44 mmHg", o2sat: "97% on room air", weight: "11 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his fever and altered consciousness?",
        options: [
          "Bacterial meningitis",
          "Classic heat stroke",
          "Exertional heat stroke",
          "Heat exhaustion",
          "Simple febrile seizure",
        ],
        correct: 1,
        explanation:
          "A core temperature above 40°C with central nervous system dysfunction, here a seizure and response only to pain, after 45 minutes in a hot car is heat stroke. It is classic, nonexertional heat stroke because the heat load came from the environment rather than exercise. Heat exhaustion does not cause major neurological dysfunction. A simple febrile seizure is followed by recovery, not persistent reduced consciousness, and meningitis is less likely with this clear exposure, although infection is considered if he does not improve with cooling.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "epstein-heatstroke",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most effective way to lower his temperature?",
        options: [
          "Acetaminophen 165 mg PR",
          "Cold water immersion",
          "Cooled IV fluids alone",
          "Dantrolene 11 mg IV",
          "Tepid sponging and fanning",
        ],
        correct: 1,
        explanation:
          "Rapid cooling is the key treatment for heat stroke, and cold water immersion lowers core temperature fastest, with continuous rectal temperature monitoring so that cooling stops before overshoot. Acetaminophen does not work because the hypothalamic set point is normal, and dantrolene has no proven benefit. Cooled IV fluids and tepid sponging cool more slowly than immersion and are adjuncts at most.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "epstein-heatstroke",
      },
      {
        id: "q3",
        kind: "menu",
        select: 4,
        update:
          "Cold water immersion is started with continuous rectal temperature monitoring.",
        prompt: "Which of the following laboratory tests are most important to monitor for complications of his condition?",
        options: [
          "Creatine kinase",
          "Creatinine and potassium",
          "Hemoglobin A1c",
          "INR and platelet count",
          "Liver transaminases",
          "Serum lead level",
          "Thyroid stimulating hormone",
          "Vitamin D level",
        ],
        correct: [0, 1, 3, 4],
        explanation:
          "Heat stroke injures many organs at once. Rhabdomyolysis raises creatine kinase, acute kidney injury raises creatinine and potassium, and liver injury raises the transaminases. Disseminated intravascular coagulation lowers the platelet count and prolongs the INR. Thyroid, lead, vitamin D and hemoglobin A1c results do not guide the acute management of heat stroke.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "epstein-heatstroke",
      },
    ],
    sources: [S.epstein],
    ...META,
  },

  /* 35 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-35",
    topic: "pediatric-fever",
    title: "Wheezy toddler with a fever",
    stem:
      "A 2-year-old boy is brought to the emergency department with fever, cough and noisy breathing for 2 days. His older sister has a cold. He had one previous episode of wheeze with a cold last winter. He is drinking well and has had normal wet diapers. He is alert and interactive. He has mild subcostal indrawing, diffuse expiratory wheeze and scattered crackles in both lungs. After one dose of salbutamol his work of breathing improves.",
    vitals: { temperature: "38.6°C", pulse: "142/minute", resp: "40/minute", o2sat: "95% on room air", weight: "13 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "A chest radiograph taken at triage shows bilateral peribronchial thickening with patchy perihilar opacities and no lobar consolidation.",
        prompt: "Which of the following is the most likely cause of his illness?",
        options: [
          "Aspirated foreign body",
          "Bacterial lobar pneumonia",
          "Mycoplasma pneumonia",
          "Pneumococcal bacteremia",
          "Viral lower respiratory infection",
        ],
        correct: 4,
        explanation:
          "Diffuse wheeze with bilateral crackles and bilateral peribronchial thickening without lobar consolidation in a 2-year-old whose sister has a cold points to a viral lower respiratory infection. The CPS notes that viruses such as RSV, influenza, parainfluenza and human metapneumovirus are the most common causes of pneumonia in infants and preschool children. Bacterial lobar pneumonia causes focal findings and consolidation. Mycoplasma is less common at this age, pneumococcal bacteremia does not explain the chest findings, and a foreign body does not cause fever with bilateral signs.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "cps-cap",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment plan for him?",
        options: [
          "Amoxicillin and azithromycin together",
          "Azithromycin for 5 days",
          "High dose amoxicillin for 7 days",
          "IV ceftriaxone and admission",
          "Salbutamol and supportive care",
        ],
        correct: 4,
        explanation:
          "When a viral cause is likely and wheeze is prominent, the CPS advises supportive care without antibiotics unless there is convincing evidence of a secondary bacterial pneumonia. His response to salbutamol supports continuing it. Amoxicillin and azithromycin, alone or together, do not help a viral infection and add side effects and resistance. He is drinking well with a saturation of 95%, so admission for IV antibiotics is not needed.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "cps-cap",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        prompt: "Which of the following findings would most suggest a bacterial pneumonia needing amoxicillin?",
        options: [
          "A sibling with a cold",
          "Bilateral peribronchial thickening",
          "Diffuse expiratory wheeze",
          "Focal crackles over one lobe",
          "Lobar consolidation on radiograph",
          "Response to salbutamol",
          "Runny nose and cough",
        ],
        correct: [3, 4],
        explanation:
          "Focal crackles over one lobe and lobar consolidation on the radiograph suggest bacterial pneumonia, for which the CPS advises oral amoxicillin in outpatients. Diffuse wheeze, bilateral peribronchial thickening and improvement with salbutamol point to a viral illness or reactive airways. A runny nose and cough, and a sibling with a cold, make a viral cause more likely rather than a bacterial one.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "cps-cap",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "His parents ask how to treat his fever at home. They have acetaminophen suspension labelled 160 mg/5 mL.",
        prompt: "Which of the following acetaminophen doses is most appropriate for him?",
        options: [
          "2.5 mL every 4 to 6 hours",
          "6 mL every 2 hours",
          "6 mL every 4 to 6 hours",
          "10 mL every 4 to 6 hours",
          "15 mL every 4 to 6 hours",
        ],
        correct: 2,
        explanation:
          "At 13 kg, acetaminophen 15 mg/kg is 195 mg, and 6 mL of the 160 mg/5 mL suspension gives 192 mg, about 15 mg/kg, every 4 to 6 hours. The 2.5 mL dose gives 80 mg, about 6 mg/kg, which is too low. The 10 mL and 15 mL doses give 320 mg and 480 mg, about 25 and 37 mg/kg. Giving 6 mL every 2 hours would pass the maximum of 75 mg/kg, 975 mg a day, with the sixth dose.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
    ],
    sources: [S.cpsCap, S.aapFever],
    ...META,
  },

  /* 36 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-36",
    topic: "pediatric-fever",
    title: "Two year old tugging at her ear",
    stem:
      "A 2-year-old girl is brought to the emergency department with a runny nose, cough and fever for 3 days. Last night she woke up crying and tugging at her right ear. She is drinking well and playing in the waiting room. She had one ear infection at 14 months. The right tympanic membrane is dull and retracted, with an air-fluid level behind it. It is not bulging or red. The left tympanic membrane is normal. Her chest is clear.",
    vitals: { temperature: "38.3°C", pulse: "128/minute", resp: "28/minute", o2sat: "99% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for her right ear?",
        options: [
          "Acute otitis externa",
          "Acute otitis media",
          "Bullous myringitis",
          "Early mastoiditis",
          "Otitis media with effusion",
        ],
        correct: 4,
        explanation:
          "A dull, retracted tympanic membrane with an air-fluid level and no bulging is otitis media with effusion, common during a viral upper respiratory infection. The CPS treats a bulging tympanic membrane as the key finding for acute otitis media and notes that air-fluid levels without bulging are not predictive of it. Acute otitis externa causes canal swelling and pain on moving the pinna. Bullous myringitis shows blisters on the membrane, and mastoiditis causes swelling or tenderness behind the ear.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "cps-aom",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate management for her ear?",
        options: [
          "Amoxicillin 90 mg/kg/day divided for 10 days",
          "Amoxicillin 45 mg/kg/day for 5 days",
          "Analgesia and review if symptoms persist",
          "Cefuroxime for 10 days",
          "Ciprofloxacin ear drops",
        ],
        correct: 2,
        explanation:
          "Middle ear fluid without signs of acute inflammation does not need antibiotics, and the effusion usually clears as the viral infection settles. She needs analgesia and review if pain or fever persists or the membrane later bulges. Amoxicillin is the first-line treatment for confirmed acute otitis media, and cefuroxime is the CPS choice for a non-life-threatening penicillin allergy, so neither is indicated here. Ear drops treat otitis externa or a draining ear, which she does not have.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "cps-aom",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings on review would indicate that she needs antibiotics?",
        options: [
          "Dull tympanic membrane",
          "New tympanic membrane bulging",
          "Persistent fluid for 2 weeks",
          "Temperature of 38.5°C",
          "Tugging at the ear",
        ],
        correct: 1,
        explanation:
          "A bulging tympanic membrane is the most important sign of acute otitis media in the CPS statement, and it would mark a bacterial middle ear infection that may need amoxicillin. Middle ear fluid can persist for weeks after a cold without infection, so persistent effusion alone does not need antibiotics. Ear tugging, a dull membrane and a temperature of 38.5°C are common with viral infections and with otitis media with effusion.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "cps-aom",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following analgesic orders is most appropriate for her ear pain?",
        options: [
          "acetaminophen 360 mg PO every 4 to 6 hours",
          "ibuprofen 120 mg PO every 3 hours",
          "ibuprofen 480 mg PO every 6 to 8 hours",
          "ibuprofen 240 mg PO every 6 to 8 hours",
          "ibuprofen 120 mg PO every 6 to 8 hours",
        ],
        correct: 4,
        explanation:
          "At 12 kg, ibuprofen 10 mg/kg is 120 mg every 6 to 8 hours, within the maximum of 40 mg/kg/day, or 480 mg. Giving 120 mg every 3 hours would total 960 mg a day, twice the maximum. The 240 mg dose is 20 mg/kg, and 480 mg is her whole daily maximum given at once. Acetaminophen 360 mg is 30 mg/kg, twice the usual 15 mg/kg single dose.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
    ],
    sources: [S.cpsAom, S.aapFever],
    ...META,
  },

  /* 37 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-37",
    topic: "pediatric-fever",
    title: "Teenager with a sore throat and a new rash",
    stem:
      "A 16-year-old boy presents to the emergency department with a new rash. He has had fever, sore throat and fatigue for 6 days. Three days ago a walk-in clinic prescribed amoxicillin for tonsillitis without a throat swab. Yesterday an itchy red rash appeared on his trunk and arms. He has no lip or eye swelling, wheeze or mouth ulcers. His tonsils are enlarged with grey exudate. He has tender posterior cervical lymph nodes. The spleen tip is palpable. The rash is symmetric and maculopapular, with no blisters or skin peeling. He plays hockey.",
    vitals: { temperature: "38.4°C oral", pulse: "104/minute", resp: "18/minute", bp: "122/74 mmHg", o2sat: "99% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains his rash and associated findings?",
        options: [
          "Anaphylaxis to amoxicillin",
          "Early Stevens-Johnson syndrome",
          "Measles with secondary tonsillitis",
          "Mononucleosis with an amoxicillin rash",
          "Scarlet fever from group A streptococcus",
        ],
        correct: 3,
        explanation:
          "Exudative tonsillitis, posterior cervical lymphadenopathy, fatigue and a palpable spleen in an adolescent suggest Epstein-Barr virus infection, and many patients with mononucleosis who take amoxicillin develop a maculopapular rash that does not usually mean a lasting penicillin allergy. He has no mucosal ulcers, blisters or peeling to suggest Stevens-Johnson syndrome, and no swelling or wheeze to suggest anaphylaxis. Measles and scarlet fever do not explain the splenomegaly, and the scarlet fever rash is a fine sandpaper rash rather than one that follows amoxicillin.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment plan for his illness?",
        options: [
          "Change to azithromycin for 5 days",
          "Change to cephalexin for 10 days",
          "Continue amoxicillin with an antihistamine",
          "Oral prednisone for 5 days",
          "Stop amoxicillin, give supportive care",
        ],
        correct: 4,
        explanation:
          "Infectious mononucleosis is a viral illness, so the amoxicillin is stopped and he receives fluids, rest and analgesia. Switching to azithromycin or cephalexin treats a bacterial infection he is unlikely to have, and continuing amoxicillin gives no benefit while the rash persists. Corticosteroids are reserved for complications such as impending airway obstruction, which he does not have.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "nelson",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings would most suggest a dangerous drug reaction rather than this rash?",
        options: [
          "Itch that is worse at night",
          "Maculopapular appearance",
          "Onset 3 days after starting a drug",
          "Painful skin with mucosal erosions",
          "Rash on the trunk and arms",
        ],
        correct: 3,
        explanation:
          "Skin pain, mucosal erosions, blisters and skin detachment are warning signs of Stevens-Johnson syndrome or toxic epidermal necrolysis, which need urgent assessment and withdrawal of the drug. An itchy, symmetric maculopapular rash on the trunk and arms without mucosal involvement fits the benign amoxicillin rash of mononucleosis. Onset a few days after starting a drug is common to both benign and severe reactions, so timing alone does not separate them.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
    ],
    sources: [S.nelson],
    ...META,
  },

  /* 38 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-38",
    topic: "pediatric-fever",
    title: "Rash after three days of high fever",
    stem:
      "A 13-month-old girl is brought to the emergency department with a new rash. She had fever up to 40.1°C for 3 days without cough, vomiting or diarrhea. She was irritable but kept drinking. The fever resolved this morning, and a few hours later a rash of small pink, blanching spots appeared on her trunk and neck. She is fully immunized. She is alert, playful and well hydrated. Her tympanic membranes are normal. The rash spares her face, palms, soles and mouth. The examination is otherwise normal.",
    vitals: { temperature: "37.2°C rectal", pulse: "118/minute", resp: "28/minute", o2sat: "99% on room air", weight: "9.8 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her fever and rash?",
        options: [
          "Erythema infectiosum",
          "Measles infection",
          "Meningococcemia",
          "Roseola infantum",
          "Scarlet fever",
        ],
        correct: 3,
        explanation:
          "Three days of high fever in a well-looking infant, followed by a pink, blanching rash on the trunk and neck as the fever resolves, is typical of roseola infantum from human herpesvirus 6. Measles causes cough, coryza and conjunctivitis with fever that continues as the rash spreads, and she is immunized. Meningococcemia causes a nonblanching petechial or purpuric rash in an unwell child. Erythema infectiosum causes slapped cheeks, and scarlet fever is uncommon at this age and causes a sandpaper rash with pharyngitis.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Her father says a walk-in clinic prescribed amoxicillin on day 2 of the fever, and she has had three doses. He asks whether the rash is an allergy.",
        prompt: "Which of the following is the most appropriate advice about the amoxicillin?",
        options: [
          "Continue it for the full 10 days",
          "Give it with an antihistamine",
          "Stop it and label her penicillin allergic",
          "Stop it, as the illness is viral",
          "Switch to azithromycin",
        ],
        correct: 3,
        explanation:
          "Roseola is caused by human herpesvirus 6, so antibiotics have no benefit and the amoxicillin can be stopped. The rash appeared as the fever settled, which is the expected course of roseola rather than a drug reaction, so she should not be labelled penicillin allergic without further assessment. Switching to azithromycin or adding an antihistamine continues treatment of an infection she does not have.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "nelson",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following statements about treating fever in young children is most accurate?",
        options: [
          "Aim to keep the temperature below 38°C",
          "Alternate two drugs every 2 hours",
          "Dose by weight to improve comfort",
          "Give ASA if acetaminophen fails",
          "Wake the child at night for doses",
        ],
        correct: 2,
        explanation:
          "The goal of treating fever is to improve the child's comfort rather than to normalize the temperature, and antipyretic doses are based on weight. Fever itself does not worsen the illness or cause brain injury, so there is no need to keep the temperature below 38°C or wake a sleeping child for doses. Combining or alternating acetaminophen and ibuprofen is more complicated and raises the risk of dosing errors. ASA is not used for fever in children because of the risk of Reye syndrome.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
      {
        id: "q4",
        kind: "menu",
        select: 2,
        prompt: "Which of the following features in a febrile infant with a rash would most suggest a dangerous cause?",
        options: [
          "Fever for 3 days before the rash",
          "Lethargy or an ill appearance",
          "Mild irritability",
          "Pink macules on the trunk",
          "Rash after the fever resolves",
          "Rash that does not blanch",
          "Rash that spares the face",
        ],
        correct: [1, 5],
        explanation:
          "A rash that does not blanch with pressure suggests petechiae or purpura from meningococcemia or another serious infection, and lethargy or an ill appearance in a febrile infant with a rash needs urgent assessment for sepsis. Pink, blanching macules on the trunk that appear after 3 days of fever, as the fever resolves, and spare the face are typical of roseola. Mild irritability is common during the febrile phase of viral illness.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
    ],
    sources: [S.nelson, S.aapFever],
    ...META,
  },

  /* 39 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-39",
    topic: "pediatric-fever",
    title: "Toddler who screams when he is picked up",
    stem:
      "A 2-year-old boy is brought to the emergency department with fever and irritability for 1 day. His mother says his skin became red and very tender this morning, and he screams when picked up. Four days ago he had crusted sores around his nose. He takes no medications. His skin is diffusely red, most marked in the neck, armpits and groin. There are flaccid blisters in the armpits, and gentle rubbing makes the top layer of skin slide off. There is radial crusting around his mouth, but the inside of his mouth and his eyes are normal. Capillary refill is 2 seconds.",
    vitals: { temperature: "38.7°C", pulse: "162/minute", resp: "30/minute", bp: "98/58 mmHg", o2sat: "98% on room air", weight: "13 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his rash?",
        options: [
          "Staphylococcal scalded skin syndrome",
          "Stevens-Johnson syndrome",
          "Streptococcal toxic shock syndrome",
          "Toxic epidermal necrolysis",
          "Widespread bullous impetigo",
        ],
        correct: 0,
        explanation:
          "Tender, diffuse erythema that is worse in skin folds, with flaccid blisters and skin that slides off with rubbing, a positive Nikolsky sign, after crusted sores around the nose points to staphylococcal scalded skin syndrome. Stevens-Johnson syndrome and toxic epidermal necrolysis involve the mouth and eyes and usually follow a drug, and he takes none. Bullous impetigo forms localized blisters without widespread tender erythema. Streptococcal toxic shock syndrome is marked by shock and organ dysfunction, and his blood pressure and capillary refill are normal.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features best distinguishes his condition from toxic epidermal necrolysis?",
        options: [
          "Fever at the onset of illness",
          "Flaccid blisters on the skin",
          "Positive Nikolsky sign",
          "Sparing of the mucous membranes",
          "Tender, widespread red skin",
        ],
        correct: 3,
        explanation:
          "His normal mouth and eyes favour staphylococcal scalded skin syndrome, in which the toxin splits the superficial epidermis and spares the mucous membranes. Toxic epidermal necrolysis causes full-thickness epidermal necrosis with erosions of the mouth, eyes and genitals. Fever, tender red skin, flaccid blisters and a positive Nikolsky sign occur in both conditions, so they do not separate them.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate management for this child?",
        options: [
          "Oral cephalexin and review in 48 hours",
          "Oral prednisolone for 5 days",
          "Silver sulfadiazine dressings at home",
          "Skin care, IV cloxacillin and admission",
          "Topical mupirocin to the blisters",
        ],
        correct: 3,
        explanation:
          "Widespread skin involvement with fever and a pulse of 162/minute in a 2-year-old calls for admission for IV antistaphylococcal antibiotics such as cloxacillin, fluid replacement, analgesia and gentle skin care. Oral therapy with outpatient review is not appropriate for this extent of disease at his age. Topical mupirocin and silver sulfadiazine do not treat the toxin-producing infection. Corticosteroids do not help and can worsen infection.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
    ],
    sources: [S.nelson],
    ...META,
  },

  /* 40 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-40",
    topic: "pediatric-fever",
    title: "Painful facial rash in a child with eczema",
    stem:
      "A 3-year-old girl with atopic dermatitis is brought to the emergency department with fever and a worsening rash for 2 days. Her eczema usually affects her face and neck and is treated with a moisturizer and hydrocortisone cream. Her mother says her face has become painful and she is refusing to eat. Her father had a cold sore last week. She is irritable. On her cheeks, forehead and neck there are clusters of small punched-out erosions and umbilicated vesicles, some with hemorrhagic crusts. The lesions extend onto the skin of the left lower eyelid. Her conjunctivae are clear.",
    vitals: { temperature: "38.9°C", pulse: "140/minute", resp: "26/minute", o2sat: "99% on room air", weight: "14 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her worsening rash?",
        options: [
          "Bacterial impetigo",
          "Contact dermatitis",
          "Eczema herpeticum",
          "Molluscum contagiosum",
          "Varicella infection",
        ],
        correct: 2,
        explanation:
          "Clusters of uniform punched-out erosions and umbilicated vesicles with hemorrhagic crusts on eczematous skin, with fever, pain and recent contact with a cold sore, are typical of eczema herpeticum from herpes simplex virus. Impetigo causes honey-coloured crusts and does not form punched-out erosions. Varicella appears in crops over the whole body, with lesions at different stages, rather than clustered on eczema. Molluscum lesions are painless firm papules without fever, and contact dermatitis does not cause fever or punched-out erosions.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate antimicrobial treatment for her now?",
        options: [
          "acyclovir 140 mg IV every 8 hours",
          "cephalexin 175 mg PO four times daily",
          "clindamycin 140 mg PO three times daily",
          "fluconazole 84 mg PO once daily",
          "mupirocin ointment three times daily",
        ],
        correct: 0,
        explanation:
          "Fever, facial pain, refusal to eat and lesions reaching the eyelid show extensive eczema herpeticum, which can spread and disseminate quickly, so she needs IV acyclovir 10 mg/kg every 8 hours, here 140 mg for 14 kg. Cephalexin and clindamycin treat secondary bacterial infection but not the underlying herpes simplex virus. Topical mupirocin does not treat the viral infection, and fluconazole treats fungal infection, which she does not have.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "nelson",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        prompt: "Which of the following additional steps are most important in her emergency department care?",
        options: [
          "Allergy testing for foods",
          "Dermatology clinic in 2 weeks",
          "Ophthalmology assessment",
          "Serum IgE level",
          "Skin biopsy of a lesion",
          "Stop all emollients",
          "Viral swab for HSV PCR",
        ],
        correct: [2, 6],
        explanation:
          "Lesions on the eyelid put her at risk of herpes simplex keratitis, so she needs urgent ophthalmology assessment even though her conjunctivae look clear now. A swab of a vesicle or erosion for HSV PCR confirms the diagnosis, so a skin biopsy is not needed. Dermatology follow-up, a serum IgE level and food allergy testing do not address the acute infection. Emollients can continue on unaffected skin.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
    ],
    sources: [S.nelson],
    ...META,
  },

  /* 41 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-41",
    topic: "pediatric-fever",
    alsoTopics: ["infectious-diseases"],
    title: "Sore throat and a rough red rash",
    stem:
      "A 6-year-old boy is brought to the emergency department with fever, sore throat and headache for 2 days and a rash since this morning. He vomited once. A classmate had strep throat last week. The rash is fine, red and rough like sandpaper, most prominent in the groin and armpits, with darker lines in the elbow creases. His cheeks are flushed with pallor around the mouth. His tonsils are red and swollen with exudate, and his tongue is red with prominent papillae. His eyes are not red. Tender anterior cervical nodes are present. His hands and feet are normal.",
    vitals: { temperature: "39.2°C", pulse: "124/minute", resp: "22/minute", bp: "104/62 mmHg", o2sat: "99% on room air", weight: "21 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his fever and rash?",
        options: [
          "Kawasaki disease",
          "Measles infection",
          "Scarlet fever",
          "Toxic shock syndrome",
          "Viral exanthem",
        ],
        correct: 2,
        explanation:
          "A fine, rough sandpaper rash accentuated in skin folds with Pastia lines, circumoral pallor, a strawberry tongue and exudative tonsillitis after contact with streptococcal pharyngitis is scarlet fever from group A streptococcus. Kawasaki disease needs fever for about 5 days and usually causes conjunctival injection and hand or foot changes, which he does not have. Measles causes cough, coryza and conjunctivitis with a blotchy rash. Toxic shock syndrome causes hypotension and organ dysfunction, and a viral exanthem does not explain these streptococcal features.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate to confirm the diagnosis?",
        options: [
          "Antistreptolysin O titre",
          "Blood culture and CBC",
          "Echocardiogram and CRP",
          "Monospot and liver enzymes",
          "Rapid streptococcal antigen test",
        ],
        correct: 4,
        explanation:
          "Scarlet fever is caused by group A streptococcus, and the CPS recommends confirming it with a rapid antigen test or throat culture before antibiotics are started. Antistreptolysin O titres cannot distinguish carriage from acute infection and are not used for diagnosis. A blood culture and CBC do not identify pharyngeal streptococcus. An echocardiogram is not indicated because he does not meet criteria for Kawasaki disease, and a Monospot does not explain the sandpaper rash.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "cps-gas",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "The rapid antigen test is positive. He has no drug allergies.",
        prompt: "Which of the following antibiotic regimens is most appropriate for him?",
        options: [
          "amoxicillin 1 g PO daily for 3 days",
          "amoxicillin 1 g PO daily for 10 days",
          "amoxicillin 250 mg PO daily for 10 days",
          "azithromycin 250 mg PO daily for 5 days",
          "ciprofloxacin 300 mg PO twice daily",
        ],
        correct: 1,
        explanation:
          "The CPS treats laboratory-confirmed streptococcal pharyngitis with amoxicillin 50 mg/kg once daily, to a maximum of 1 g a day, for 10 days, which prevents rheumatic fever. At 21 kg the calculated 1050 mg is capped at 1 g. A 3 day course is too short to eradicate the organism, and 250 mg is about 12 mg/kg. Azithromycin is reserved for documented penicillin anaphylaxis, and ciprofloxacin is not a treatment for streptococcal pharyngitis.",
        keyFeature: { topic: "infectious-diseases", n: 8 },
        source: "cps-gas",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "His 3-year-old sister has had a runny nose, cough and fever to 38.5°C for 1 day. She has no sore throat, and her examination shows only nasal congestion. The parents ask for antibiotics for her too.",
        prompt: "Which of the following is the most appropriate approach for his sister?",
        options: [
          "Amoxicillin for 10 days without testing",
          "Azithromycin for 5 days",
          "Rapid strep test and treat if positive",
          "Supportive care without testing",
          "Throat culture and start amoxicillin",
        ],
        correct: 3,
        explanation:
          "His sister has cough, runny nose and nasal congestion without sore throat or pharyngitis, which points to a viral upper respiratory infection. The CPS notes that a positive throat test in a child with rhinorrhea and cough often reflects carriage, so testing her would lead to unneeded antibiotics. Amoxicillin and azithromycin do not help a viral infection and expose her to side effects and resistance.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "cps-gas",
      },
    ],
    sources: [S.nelson, S.cpsGas],
    ...META,
  },

  /* 42 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-42",
    topic: "pediatric-fever",
    title: "Fever that keeps coming back",
    stem:
      "A 3-year-old girl is brought to the emergency department with fever and cough for 2 days. Her mother is worried that the fever keeps returning despite medicine. She has been giving 2.5 mL of children's acetaminophen suspension, 160 mg/5 mL, every 6 hours, the dose she remembers from when the girl was a baby. The girl was born at 28 weeks and is small for her age. She is drinking well and voiding normally. She is alert and interactive. Her ears are normal, her chest is clear and her throat is mildly red without exudate.",
    vitals: { temperature: "38.9°C", pulse: "136/minute", resp: "30/minute", o2sat: "98% on room air", weight: "11 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the acetaminophen she has been receiving?",
        options: [
          "About 15 mg/kg per dose, which is correct",
          "About 22 mg/kg per dose, which is too high",
          "About 7 mg/kg per dose, which is too low",
          "Correct, as doses follow age not weight",
          "Too high, as she was born preterm",
        ],
        correct: 2,
        explanation:
          "2.5 mL of the 160 mg/5 mL suspension contains 80 mg, and 80 mg divided by 11 kg is about 7 mg/kg per dose. The usual dose is 10 to 15 mg/kg every 4 to 6 hours, so she has been underdosed, which may explain why the fever keeps returning. Doses are based on current weight, not age or a remembered infant dose. Being born preterm does not make a weight-based dose too high at 3 years.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following acetaminophen doses is most appropriate for her now?",
        options: [
          "2.5 mL every 4 to 6 hours",
          "5 mL every hour until afebrile",
          "5 mL every 4 to 6 hours",
          "7.5 mL every 4 to 6 hours",
          "10 mL every 4 to 6 hours",
        ],
        correct: 2,
        explanation:
          "At 11 kg, 15 mg/kg is 165 mg, and 5 mL of the 160 mg/5 mL suspension gives 160 mg, about 14.5 mg/kg, every 4 to 6 hours. The 2.5 mL dose is the underdose she has been receiving. The 7.5 mL and 10 mL doses give 240 mg and 320 mg, about 22 and 29 mg/kg. Giving 5 mL every hour would pass the maximum of 75 mg/kg, or 825 mg a day, with the sixth dose.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is her maximum total daily dose of acetaminophen?",
        options: [
          "165 mg in 24 hours",
          "330 mg in 24 hours",
          "550 mg in 24 hours",
          "660 mg in 24 hours",
          "825 mg in 24 hours",
        ],
        correct: 4,
        explanation:
          "The maximum daily acetaminophen dose for a child is 75 mg/kg, which is no more than five doses of 15 mg/kg in 24 hours and never above the adult maximum. At 11 kg that is 75 x 11 = 825 mg. The 165 mg figure is a single 15 mg/kg dose, not a daily limit. The 330 mg, 550 mg and 660 mg totals are 30, 50 and 60 mg/kg, below the maximum, and would limit her to fewer doses than she may need.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of her illness?",
        options: [
          "Amoxicillin for 10 days",
          "Azithromycin for 5 days",
          "Chest radiograph for pneumonia",
          "Rapid streptococcal test",
          "Supportive care without antibiotics",
        ],
        correct: 4,
        explanation:
          "Fever with cough, a clear chest, normal ears and a mildly red throat without exudate indicate a viral upper respiratory infection, which does not need antibiotics. The CPS advises testing for group A streptococcus only when cough and rhinorrhea are absent, because a positive result with viral features often reflects carriage. Amoxicillin and azithromycin do not help viral infections and add side effects and resistance. Her chest is clear and her saturation is 98%, so a chest radiograph is not needed.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "cps-gas",
      },
    ],
    sources: [S.aapFever, S.cpsGas],
    ...META,
  },

  /* 43 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-43",
    topic: "pediatric-fever",
    title: "Toddler brought in after a seizure",
    stem:
      "An 18-month-old boy is brought to the emergency department by ambulance after a seizure at home. He has had a runny nose and cough since yesterday, and a fever of 39.4°C started this afternoon. His parents saw him stiffen and then shake all four limbs for about 2 minutes. He was sleepy for 20 minutes afterwards. He has had no previous seizures and is developing normally. He is fully immunized. He is now alert and playing. He has no neck stiffness and his neurological examination is normal. He has clear nasal discharge, and his ears and chest are normal.",
    vitals: { temperature: "39.1°C", pulse: "146/minute", resp: "30/minute", o2sat: "98% on room air", weight: "11.5 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate investigation plan for him?",
        options: [
          "CT head before discharge",
          "EEG within 48 hours",
          "Electrolytes, glucose and CBC",
          "Lumbar puncture and blood culture",
          "No routine investigations",
        ],
        correct: 4,
        explanation:
          "A single generalized seizure of 2 minutes in a febrile, developmentally normal 18-month-old is a simple febrile seizure. He is fully immunized, back to normal, has no meningeal signs and has a clear viral source, so a lumbar puncture is not required. The AAP advises against routine blood tests, neuroimaging and an EEG after a simple febrile seizure, and evaluation focuses on finding the source of the fever.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "aap-febrile-seizure-eval",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "His parents ask whether giving medicine regularly for fever will stop another seizure.",
        prompt: "Which of the following is the most accurate advice about antipyretics and febrile seizures?",
        options: [
          "Alternate two drugs to keep him afebrile",
          "Give doses every 4 hours around the clock",
          "They help comfort, not seizure prevention",
          "They prevent seizures only if given early",
          "Use rectal doses at the first sign of fever",
        ],
        correct: 2,
        explanation:
          "Antipyretics such as acetaminophen and ibuprofen can improve his comfort, but they do not reduce the risk of another febrile seizure. Around-the-clock dosing, alternating drugs or early rectal doses add the risk of dosing errors without preventing a recurrence. The AAP does not recommend continuous or intermittent medication to prevent simple febrile seizures.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-febrile-seizure",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following features should prompt his parents to bring him back immediately?",
        options: [
          "Clear nasal discharge",
          "Cough that is worse at night",
          "Drowsiness that does not improve",
          "Fever lasting another day",
          "Temperature of 39°C",
        ],
        correct: 2,
        explanation:
          "After the brief sleepiness that follows a febrile seizure, a child should return to normal, as he has. Persistent drowsiness, a seizure lasting more than 5 minutes, a stiff neck, a rash that does not blanch or difficulty breathing needs immediate reassessment for meningitis or another serious illness. Clear nasal discharge, night cough and another day of fever are expected with a viral infection, and a temperature of 39°C is common with viral illness.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "nelson",
      },
    ],
    sources: [S.aapFsDx, S.aapFs, S.nelson],
    ...META,
  },

  /* 44 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-44",
    topic: "pediatric-fever",
    title: "Purple spots on the legs after a cold",
    stem:
      "A 5-year-old boy is brought to the emergency department with a rash on his legs for 1 day. He had a sore throat and runny nose last week. Since yesterday he has had a low-grade fever, pain in both ankles and crampy abdominal pain. He is playful between bouts of pain. He has raised, purple spots that do not blanch, concentrated on the backs of his legs and buttocks. Both ankles are swollen and tender. His abdomen is soft with mild periumbilical tenderness. The rest of the examination is normal.",
    vitals: { temperature: "37.9°C", pulse: "108/minute", resp: "22/minute", bp: "102/60 mmHg", o2sat: "99% on room air", weight: "19 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his rash?",
        options: [
          "Acute leukemia",
          "Hemolytic uremic syndrome",
          "IgA vasculitis",
          "Immune thrombocytopenia",
          "Meningococcemia",
        ],
        correct: 2,
        explanation:
          "Palpable, nonblanching purpura on the buttocks and backs of the legs, with ankle arthritis, crampy abdominal pain and a recent upper respiratory infection in a well child, is typical of IgA vasculitis, also called Henoch-Schonlein purpura. Meningococcemia causes a rapidly spreading petechial or purpuric rash in an ill child with poor perfusion, which he does not have. Immune thrombocytopenia and leukemia cause flat petechiae and bruising from low platelets rather than palpable purpura with arthritis. Hemolytic uremic syndrome usually follows bloody diarrhea and causes pallor and kidney injury.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
      {
        id: "q2",
        kind: "menu",
        select: 2,
        prompt: "Which of the following investigations are most important to obtain at this visit?",
        options: [
          "Antinuclear antibody",
          "CBC and blood film",
          "CT of the abdomen",
          "Lumbar puncture",
          "Serum IgA level",
          "Skin biopsy",
          "Throat culture",
          "Urinalysis",
        ],
        correct: [1, 7],
        explanation:
          "A CBC with blood film shows a normal platelet count in IgA vasculitis, which separates it from thrombocytopenic causes of purpura such as immune thrombocytopenia and leukemia. A urinalysis looks for hematuria and proteinuria from kidney involvement, the main source of long-term harm. Serum IgA, antinuclear antibody and a skin biopsy do not change emergency management. A lumbar puncture and throat culture are not indicated, and ultrasound rather than CT is used if intussusception is suspected.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "His platelet count is 310 x 10^9/L and his urinalysis shows trace blood with no protein. His blood pressure remains normal.",
        prompt: "Which of the following is the most appropriate follow-up plan for him?",
        options: [
          "Admit for IV methylprednisolone",
          "Serial urinalysis and BP checks for months",
          "Start oral ASA for joint pain",
          "Start oral prednisone for 4 weeks",
          "No follow-up needed as he is well",
        ],
        correct: 1,
        explanation:
          "Kidney involvement in IgA vasculitis can appear weeks to months after the rash, so he needs repeated urinalysis and blood pressure checks for about 6 months even though the first urinalysis is nearly normal. Corticosteroids do not prevent kidney disease and are reserved for severe abdominal pain or significant nephritis. ASA is avoided in children because of the risk of Reye syndrome, and acetaminophen or an NSAID with normal kidney function treats the joint pain. Discharge without follow-up would miss late nephritis.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
    ],
    sources: [S.nelson],
    ...META,
  },

  /* 45 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-45",
    topic: "pediatric-fever",
    title: "Six month old with a full fontanelle",
    stem:
      "A 6-month-old boy is brought to the emergency department with fever for 1 day, vomiting and irritability. His mother says he cries when she picks him up and has taken only small feeds. His immunizations are up to date. He is irritable and difficult to console, with a high-pitched cry. The anterior fontanelle is full and tense when he is calm. He moves all limbs equally, and his pupils are equal and reactive. There is no rash. Capillary refill is 2 seconds.",
    vitals: { temperature: "39.4°C rectal", pulse: "172/minute", resp: "38/minute", bp: "96/58 mmHg", o2sat: "98% on room air", weight: "8 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings is most suggestive of meningitis in this infant?",
        options: [
          "Fever of 39.4°C",
          "Normal capillary refill",
          "Pulse of 172/minute",
          "Reduced feeding",
          "Tense, full fontanelle",
        ],
        correct: 4,
        explanation:
          "A full, tense anterior fontanelle when the infant is calm is a sign of raised intracranial pressure, and with inconsolable irritability and a high-pitched cry it makes bacterial meningitis likely. Neck stiffness is often absent at this age, so the fontanelle is a more useful sign. Fever, tachycardia and reduced feeding occur in many febrile illnesses and are less specific. Normal capillary refill does not exclude meningitis.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "nelson",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate timing of lumbar puncture and antibiotics?",
        options: [
          "Antibiotics after CT head and lumbar puncture",
          "Antibiotics only once CSF results return",
          "CT head first, then antibiotics",
          "Lumbar puncture now, then antibiotics at once",
          "Observe for 4 hours before any tests",
        ],
        correct: 3,
        explanation:
          "He has no focal deficit, seizure, decreased level of consciousness or other sign of herniation, so the CPS criteria for imaging before lumbar puncture are not met. A lumbar puncture is done promptly with a blood culture, and antibiotics follow immediately. A CT head first delays antibiotics and is not needed here. Waiting for CSF results or observing for hours delays treatment of likely bacterial meningitis.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-meningitis",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        prompt: "Which of the following antimicrobial orders are most appropriate for him now?",
        options: [
          "ampicillin 400 mg IV",
          "ceftriaxone 1.6 g IV",
          "ceftriaxone 400 mg IV",
          "gentamicin 40 mg IV",
          "vancomycin 120 mg IV",
          "vancomycin 480 mg IV",
        ],
        correct: [2, 4],
        explanation:
          "The CPS regimen is ceftriaxone 100 mg/kg/day divided every 12 hours with vancomycin 60 mg/kg/day divided every 6 hours, so at 8 kg each dose is ceftriaxone 400 mg and vancomycin 120 mg. Vancomycin 480 mg is the whole daily amount. Ceftriaxone 1.6 g is 200 mg/kg, twice the daily dose at once. Ampicillin is added only for immunocompromised children to cover Listeria, and gentamicin is not part of the regimen. The CPS leaves adjuvant dexamethasone as an option to consider when the CSF Gram stain suggests Haemophilus influenzae or pneumococcal meningitis.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-meningitis",
      },
    ],
    sources: [S.cpsMening, S.nelson],
    ...META,
  },

  /* 46 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-46",
    topic: "pediatric-fever",
    alsoTopics: ["shock"],
    title: "Infant with pneumonia and cold hands",
    stem:
      "An 11-month-old girl is brought to the emergency department with fever, cough and fast breathing for 2 days. Today she is lethargic and has had one wet diaper. She was born at term and is healthy. She is pale and mottled, with cool hands and feet and a capillary refill of 5 seconds. She has crackles at the right base. The liver edge is 1 cm below the right costal margin.",
    vitals: { temperature: "39.3°C rectal", pulse: "188/minute", resp: "54/minute", bp: "78/40 mmHg", o2sat: "92% on room air", weight: "9 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial fluid resuscitation for her?",
        options: [
          "Albumin 25% 45 mL IV bolus",
          "Crystalloid 45 mL IV bolus",
          "Crystalloid 180 mL IV bolus",
          "Crystalloid 540 mL IV bolus",
          "Maintenance fluid at 36 mL/hour",
        ],
        correct: 2,
        explanation:
          "Lethargy, mottling, cool extremities, a capillary refill of 5 seconds and low urine output show septic shock with poor perfusion, so resuscitation starts with a crystalloid bolus of 10 to 20 mL/kg, here 180 mL for 9 kg, preferably a balanced crystalloid, given rapidly and followed by reassessment. The 2026 Surviving Sepsis Campaign guideline allows up to 40 to 60 mL/kg in the first hour only as repeated 10 to 20 mL/kg boluses. A 45 mL bolus is only 5 mL/kg and too small. Giving 540 mL, or 60 mL/kg, at once removes the chance to detect fluid overload between boluses. Maintenance fluid at 36 mL/hour does not treat shock, and the guideline recommends crystalloids rather than albumin.",
        keyFeature: { topic: "shock", n: 3 },
        source: "ssc-peds-2026",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "After a second 180 mL bolus her pulse is 176/minute and capillary refill 4 seconds. New crackles are heard in both lungs, the liver edge is 4 cm below the costal margin and her saturation is 88% on room air.",
        prompt: "Which of the following best explains the new findings after her second fluid bolus?",
        options: [
          "Anaphylaxis to the fluid",
          "Aspiration of feeds",
          "Fluid overload after boluses",
          "Progression of her pneumonia",
          "Tension pneumothorax",
        ],
        correct: 2,
        explanation:
          "New crackles in both lungs, a falling saturation and a liver edge that has moved from 1 cm to 4 cm below the costal margin after 40 mL/kg of fluid indicate fluid overload. Each bolus is followed by reassessment for these signs, and further boluses stop when they appear. Pneumonia progression would not enlarge the liver within minutes. Tension pneumothorax causes unilateral loss of breath sounds, anaphylaxis to crystalloid is not expected, and aspiration would not enlarge the liver.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "cps-sepsis",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step for her persistent shock?",
        options: [
          "Dopamine infusion",
          "Epinephrine infusion",
          "Furosemide 9 mg IV",
          "Phenylephrine infusion",
          "Third crystalloid bolus",
        ],
        correct: 1,
        explanation:
          "Shock that persists after fluid, now with fluid overload, needs a vasoactive infusion rather than more fluid. The CPS recommends epinephrine or norepinephrine as the first vasoactive drug and no longer recommends dopamine. Her cool, mottled extremities and delayed capillary refill fit cold shock, in which epinephrine is usually chosen. A third bolus would worsen her pulmonary edema, furosemide lowers preload while she is still in shock, and phenylephrine raises afterload without improving cardiac output.",
        keyFeature: { topic: "shock", n: 7 },
        source: "cps-sepsis",
      },
    ],
    sources: [S.cpsSepsis, S.ssc],
    ...META,
  },

  /* 47 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-47",
    topic: "pediatric-fever",
    title: "Toddler with mouth sores who will not drink",
    stem:
      "A 20-month-old boy is brought to the emergency department with fever for 2 days and refusal to eat or drink since this morning. Several children at his daycare have been sick. He drools and cries when offered his bottle. He has had one wet diaper in the last 10 hours. He is fussy but alert. His mucous membranes are dry. There are small ulcers on his tongue and soft palate, and small oval vesicles on his palms, soles and buttocks. His gums are normal. His chest and ears are normal.",
    vitals: { temperature: "38.6°C", pulse: "152/minute", resp: "30/minute", o2sat: "99% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his illness?",
        options: [
          "Hand, foot and mouth disease",
          "Herpetic gingivostomatitis",
          "Kawasaki disease",
          "Measles infection",
          "Varicella infection",
        ],
        correct: 0,
        explanation:
          "Ulcers on the tongue and soft palate with small oval vesicles on the palms, soles and buttocks during a daycare outbreak are typical of hand, foot and mouth disease from enteroviruses such as coxsackievirus A16. Herpetic gingivostomatitis causes swollen, bleeding gums and lip lesions, and his gums are normal. Varicella produces crops of vesicles concentrated on the trunk. Kawasaki disease and measles do not cause oral ulcers with vesicles on the hands and feet.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nelson",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "His mother asks for an antibiotic to clear the infection.",
        prompt: "Which of the following is the most appropriate treatment plan for him?",
        options: [
          "Amoxicillin for 10 days",
          "Analgesia and oral rehydration",
          "Nystatin oral suspension",
          "Oral acyclovir for 7 days",
          "Viscous lidocaine to the mouth",
        ],
        correct: 1,
        explanation:
          "Dry mucous membranes and one wet diaper in 10 hours show dehydration from painful swallowing, and hand, foot and mouth disease is a self-limited enteroviral infection, so treatment is analgesia followed by oral rehydration. Antibiotics have no role in a viral infection. Acyclovir does not treat enteroviruses, and nystatin treats candida. Viscous lidocaine is avoided in young children because swallowed doses can cause seizures.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "nelson",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following acetaminophen orders is most appropriate for his mouth pain?",
        options: [
          "acetaminophen 60 mg PO every 4 to 6 hours",
          "acetaminophen 180 mg PO every 4 to 6 hours",
          "acetaminophen 360 mg PO every 4 to 6 hours",
          "acetaminophen 900 mg PO once daily",
          "ASA 180 mg PO every 4 hours",
        ],
        correct: 1,
        explanation:
          "At 12 kg, acetaminophen 15 mg/kg is 180 mg every 4 to 6 hours. The 60 mg dose is 5 mg/kg and too low to relieve his pain. The 360 mg dose is 30 mg/kg, twice the single dose, and 900 mg is his whole daily maximum of 75 mg/kg given at once. ASA is avoided in children with viral infections because of the risk of Reye syndrome.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
    ],
    sources: [S.nelson, S.aapFever],
    ...META,
  },
];
