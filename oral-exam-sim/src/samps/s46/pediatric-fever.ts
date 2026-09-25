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
  goldfrankCh3: { id: "goldfrank-ch3", citation: "Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter 3, Initial Evaluation of the Patient: Vital Signs and Toxic Syndromes.", url: "https://www.mheducation.com/highered/mhp/product/goldfrank-s-toxicologic-emergencies-eleventh-edition.html" },
  ahaTox: { id: "aha-tox-2023", citation: "Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation. 2023.", url: "https://doi.org/10.1161/CIR.0000000000001161" },
  epstein: { id: "epstein-heatstroke", citation: "Epstein Y, Yanovich R. Heatstroke. N Engl J Med. 2019.", url: "https://pubmed.ncbi.nlm.nih.gov/31216400/" },
  nelson221: { id: "nelson-ch221", citation: "Kliegman RM, St Geme JW III, Blum NJ, et al., editors. Nelson Textbook of Pediatrics. 22nd ed. Elsevier. 2024. Chapter 221, Fever in the Older Child.", url: "https://www.inspectioncopy.elsevier.com/book/details/9780323883054" },
  nelson196: { id: "nelson-ch196", citation: "Kliegman RM, St Geme JW III, Blum NJ, et al., editors. Nelson Textbook of Pediatrics. 22nd ed. Elsevier. 2024. Chapter 196, Juvenile Idiopathic Arthritis.", url: "https://www.inspectioncopy.elsevier.com/book/details/9780323883054" },
  nelson545: { id: "nelson-ch545", citation: "Kliegman RM, St Geme JW III, Blum NJ, et al., editors. Nelson Textbook of Pediatrics. 22nd ed. Elsevier. 2024. Chapter 545, Lymphoma.", url: "https://www.inspectioncopy.elsevier.com/book/details/9780323883054" },
  nelson301: { id: "nelson-ch301", citation: "Kliegman RM, St Geme JW III, Blum NJ, et al., editors. Nelson Textbook of Pediatrics. 22nd ed. Elsevier. 2024. Chapter 301, Epstein-Barr Virus.", url: "https://www.inspectioncopy.elsevier.com/book/details/9780323883054" },
  nelson303: { id: "nelson-ch303", citation: "Kliegman RM, St Geme JW III, Blum NJ, et al., editors. Nelson Textbook of Pediatrics. 22nd ed. Elsevier. 2024. Chapter 303, Roseola (Human Herpesviruses 6 and 7).", url: "https://www.inspectioncopy.elsevier.com/book/details/9780323883054" },
  nelson227: { id: "nelson-ch227", citation: "Kliegman RM, St Geme JW III, Blum NJ, et al., editors. Nelson Textbook of Pediatrics. 22nd ed. Elsevier. 2024. Chapter 227, Staphylococcus.", url: "https://www.inspectioncopy.elsevier.com/book/details/9780323883054" },
  nelson299: { id: "nelson-ch299", citation: "Kliegman RM, St Geme JW III, Blum NJ, et al., editors. Nelson Textbook of Pediatrics. 22nd ed. Elsevier. 2024. Chapter 299, Herpes Simplex Virus.", url: "https://www.inspectioncopy.elsevier.com/book/details/9780323883054" },
  nelson229: { id: "nelson-ch229", citation: "Kliegman RM, St Geme JW III, Blum NJ, et al., editors. Nelson Textbook of Pediatrics. 22nd ed. Elsevier. 2024. Chapter 229, Group A Streptococcus.", url: "https://www.inspectioncopy.elsevier.com/book/details/9780323883054" },
  nelson210: { id: "nelson-ch210", citation: "Kliegman RM, St Geme JW III, Blum NJ, et al., editors. Nelson Textbook of Pediatrics. 22nd ed. Elsevier. 2024. Chapter 210, Vasculitis Syndromes.", url: "https://www.inspectioncopy.elsevier.com/book/details/9780323883054" },
  niceFever: { id: "nice-fever-under-5", citation: "National Institute for Health and Care Excellence. Fever in under 5s: assessment and initial management. NICE guideline NG143. 2019, updated 2021.", url: "https://www.nice.org.uk/guidance/ng143" },
  ilar: { id: "ilar-jia", citation: "Petty RE, Southwood TR, Manners P, et al. International League of Associations for Rheumatology classification of juvenile idiopathic arthritis: second revision, Edmonton, 2001. J Rheumatol. 2004.", url: "https://pubmed.ncbi.nlm.nih.gov/14760812/" },
  aplar: { id: "aplar-sjia", citation: "Arkachaisri T, Teh KL, Vilaiyuk S, et al. The Asia-Pacific League of Associations for Rheumatology consensus recommendations on the management of systemic juvenile idiopathic arthritis (juvenile Still's disease). Int J Rheum Dis. 2026.", url: "https://doi.org/10.1111/1756-185x.70810" },
  sjsPeds: { id: "sjs-peds-guidelines", citation: "Creighton R, Gupta S, Langille C, Sutherland A. Diagnosis and management of Stevens-Johnson syndrome and toxic epidermal necrolysis in pediatric patients: a systematic review of clinical guidelines and consensus statements. Pediatr Dermatol. 2026.", url: "https://doi.org/10.1111/pde.70149" },
  niceEczema: { id: "nice-eczema", citation: "National Institute for Health and Care Excellence. Atopic eczema in under 12s: diagnosis and management. Clinical guideline CG57. 2007, updated 2025.", url: "https://www.nice.org.uk/guidance/cg57" },
  eularIgav: { id: "eular-igav", citation: "Ozen S, Pistorio A, Iusan SM, et al. EULAR/PRINTO/PRES criteria for Henoch-Schonlein purpura, childhood polyarteritis nodosa, childhood Wegener granulomatosis and childhood Takayasu arteritis. Ankara 2008. Part II: final classification criteria. Ann Rheum Dis. 2010.", url: "https://doi.org/10.1136/ard.2009.116657" },
  narchi: { id: "narchi-hsp", citation: "Narchi H. Risk of long term renal impairment and duration of follow up recommended for Henoch-Schonlein purpura with normal or minimal urinary findings: a systematic review. Arch Dis Child. 2005.", url: "https://doi.org/10.1136/adc.2005.074641" },
  whoHfmd: { id: "who-hfmd", citation: "World Health Organization Regional Office for the Western Pacific. A guide to clinical management and public health response for hand, foot and mouth disease (HFMD). 2011.", url: "https://iris.who.int/handle/10665/207490" },
  mermel: { id: "idsa-line", citation: "Mermel LA, Allon M, Bouza E, et al. Clinical practice guidelines for the diagnosis and management of intravascular catheter-related infection: 2009 update by the Infectious Diseases Society of America. Clin Infect Dis. 2009.", url: "https://pubmed.ncbi.nlm.nih.gov/19489710/" },
} satisfies Record<string, Source>;

export const PEDIATRIC_FEVER_S46: Samp[] = [
  /* 16 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-16",
    topic: "pediatric-fever",
    title: "Four day old who is not waking for feeds",
    stem:
      "A 4-day-old boy is brought to the emergency department because he has been sleepy since this morning and has not woken for two feeds. His mother measured a rectal temperature of 38.6°C at home. He was born at 39 weeks by vaginal delivery. His mother's vaginal and rectal swab at 36 weeks grew group B streptococcus. Her labour was fast, and she delivered 40 minutes after reaching the hospital, before any antibiotics were given. He went home at 24 hours of age and has been breastfeeding. He is sleepy and mottled, with a capillary refill of 3 seconds. His fontanelle is soft.",
    vitals: { temperature: "38.5°C rectal", pulse: "178/minute", resp: "58/minute", o2sat: "97% on room air", weight: "3.4 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history most increases his risk of early onset bacterial sepsis?",
        options: [
          "Birth at 39 weeks gestation",
          "Discharge at 24 hours of age",
          "Exclusive breastfeeding at home",
          "Uncomplicated vaginal delivery",
          "Untreated maternal GBS carriage"
        ],
        correct: 4,
        explanation:
          "His mother carried group B streptococcus and received no antibiotics in labour, which the Canadian Paediatric Society lists as a risk factor for early onset sepsis in term infants. Intrapartum prophylaxis is what lowers that risk, and she had none. Birth at 39 weeks is term, which carries less risk than prematurity. Vaginal delivery, breastfeeding and discharge at 24 hours do not raise his risk of invasive bacterial infection.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-eos",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following ampicillin orders is most appropriate for him now?",
        options: [
          "ampicillin 85 mg IV every 6 hours",
          "ampicillin 170 mg IV every 6 hours",
          "ampicillin 255 mg IV every 6 hours",
          "ampicillin 340 mg IV every 12 hours",
          "ampicillin 510 mg IV every 24 hours"
        ],
        correct: 2,
        explanation:
          "The Canadian Paediatric Society gives ampicillin 75 mg/kg IV every 6 hours for febrile infants in the first 7 days of life, and 75 x 3.4 kg is 255 mg. He should get it now, without waiting for results, because he is sleepy and mottled. 85 mg is 25 mg/kg and 170 mg is 50 mg/kg, both below the recommended dose. Giving the drug every 12 or 24 hours leaves long gaps in coverage.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-infant",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following gentamicin orders is most appropriate for him at 4 days of age?",
        options: [
          "gentamicin 6.8 mg IV every 24 hours",
          "gentamicin 13.6 mg IV every 24 hours",
          "gentamicin 17 mg IV every 24 hours",
          "gentamicin 20.4 mg IV every 24 hours",
          "gentamicin 27.2 mg IV every 24 hours"
        ],
        correct: 1,
        explanation:
          "For infants aged 0 to 7 days the Canadian Paediatric Society gives gentamicin 4 mg/kg IV every 24 hours, so 4 x 3.4 kg is 13.6 mg. The dose of 5 mg/kg, 17 mg for him, is for infants aged 8 to 28 days, whose kidneys clear the drug faster. 6.8 mg is 2 mg/kg, which is too low. 20.4 mg and 27.2 mg are 6 and 8 mg/kg, which raise the risk of kidney and ear toxicity.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-infant",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "His lumbar puncture shows 860 white cells/mm3, protein 2.4 g/L, glucose 1.1 mmol/L and gram positive cocci in chains on Gram stain. He has no vesicles and has not had a seizure.",
        prompt: "Which of the following changes to his antimicrobial treatment is most appropriate now?",
        options: [
          "Add acyclovir 68 mg IV every 8 hours",
          "Add cefotaxime 170 mg IV every 8 hours",
          "Add vancomycin 51 mg IV every 6 hours",
          "No change to the current regimen",
          "Switch to amoxicillin by mouth"
        ],
        correct: 1,
        explanation:
          "His CSF shows bacterial meningitis, and the Canadian Paediatric Society adds cefotaxime 50 mg/kg IV every 8 hours in the first week of life when meningitis is suspected, which is 170 mg for him. Cocci in chains fit group B streptococcus. Acyclovir is added for herpes risk factors, which he lacks. Vancomycin is added for meningitis in infants over 28 days. Oral treatment is not adequate for neonatal meningitis, and leaving the regimen unchanged does not follow the recommended meningitis coverage.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-infant",
      },
    ],
    sources: [
      { id: "cps-eos", citation: "Jefferies AL, Canadian Paediatric Society Fetus and Newborn Committee. Management of term infants at increased risk for early-onset bacterial sepsis. Paediatr Child Health. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/29480905/" },
      S.cpsInfant,
    ],
    ...META,
    version: 2,
  },

  /* 17 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-17",
    topic: "pediatric-fever",
    title: "Eight week old born early",
    stem:
      "An 8-week-old boy is brought to the emergency department because his mother measured a rectal temperature of 38.2°C at home 2 hours ago. He was born at 32 weeks gestation and spent 4 weeks in the neonatal intensive care unit, where he received 7 days of IV antibiotics for suspected sepsis. He has been home for 4 weeks and has been well. He is feeding normally and has had his usual wet diapers. He has no cough, rash or vomiting. He is alert, pink and well perfused, and the examination shows no source of fever. He has received no antipyretic.",
    vitals: { temperature: "37.6°C rectal", pulse: "156/minute", resp: "40/minute", o2sat: "99% on room air", weight: "3.9 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following statements about his temperature is most accurate?",
        options: [
          "An axillary reading should confirm fever",
          "Fever needs a reading of 38.5°C or more",
          "Only the reading in the department counts",
          "The home rectal reading counts as fever",
          "Two readings above 38.0°C are needed"
        ],
        correct: 3,
        explanation:
          "The Canadian Paediatric Society defines fever in young infants as any rectal temperature of 38.0°C or more, and notes that infants with a history of fever only are not necessarily at lower risk than those febrile in the department. His mother's rectal reading of 38.2°C therefore counts, even though he measures 37.6°C now. Axillary readings are inaccurate for core temperature in infants. The threshold is 38.0°C, not 38.5°C, and one reading is enough.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features of his history most affects how his risk of bacterial infection is stratified?",
        options: [
          "Age of 56 days at presentation",
          "Birth at 32 weeks with a NICU stay",
          "Exclusive breastfeeding at home",
          "Fever measured only at home",
          "Normal feeding and wet diapers today"
        ],
        correct: 1,
        explanation:
          "The Canadian Paediatric Society lists prematurity, a prior hospitalization or prolonged nursery course and recent antibiotic exposure as accepted risk factors. Studies of low risk rules such as PECARN generally excluded infants with them. He was born preterm and had a prolonged NICU stay, so the rules may not apply to him, and conservative, individualized care is advised. His age of 8 weeks places him in the 29 to 60 day group, but that alone does not change how rules apply. A home reading counts as fever. Normal feeding and breastfeeding are reassuring.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "His urinalysis is negative, the absolute neutrophil count is 3.2 x 10^9/L and procalcitonin is 0.1 ng/mL. Blood and urine cultures are sent.",
        prompt: "Which of the following is the most appropriate plan for him now?",
        options: [
          "Admit and observe while cultures are pending",
          "Discharge, recheck in 24 to 48 hours",
          "Discharge with no follow-up needed",
          "IM ceftriaxone, then discharge home",
          "Oral cefixime at home"
        ],
        correct: 0,
        explanation:
          "His results would meet the PECARN low risk criteria in a term infant, which allow discharge with follow-up. The Canadian Paediatric Society notes that infants with prematurity, prior hospitalization or recent antibiotics were excluded from the studies behind these rules, and advises individualized care with a conservative approach. Observation in hospital while cultures incubate is the safer choice for him. Discharge, with or without follow-up, relies on a rule not validated for him. Antibiotics without a source, including IM ceftriaxone, can partly treat and mask an infection.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q4",
        kind: "single",
        update: "His mother asks what she can give him if he becomes uncomfortable with fever. She has acetaminophen drops at home.",
        prompt: "Which of the following antipyretic orders is most appropriate for him?",
        options: [
          "acetaminophen 20 mg PO every 4 to 6 hours",
          "acetaminophen 30 mg PO every 4 to 6 hours",
          "acetaminophen 58 mg PO every 4 to 6 hours",
          "acetaminophen 120 mg PO every 4 to 6 hours",
          "ibuprofen 40 mg PO every 6 to 8 hours"
        ],
        correct: 2,
        explanation:
          "The American Academy of Pediatrics doses acetaminophen at 10 to 15 mg/kg every 4 to 6 hours, and at 15 mg/kg his 3.9 kg gives about 58 mg. Dosing by weight matters most in small infants, whose weight lags behind their age after preterm birth. 20 mg and 30 mg are about 5 and 8 mg/kg, below the recommended range. 120 mg is about 31 mg/kg, an overdose. Ibuprofen is not recommended under 6 months of age.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
    ],
    sources: [S.cpsInfant, S.aapFever],
    ...META,
    version: 2,
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
    title: "Toddler with a cold and a urology history",
    stem:
      "A 22-month-old girl is brought to the emergency department with 1 day of fever up to 39.4°C, a runny nose and a mild cough. Her 4-year-old sister has had a cold this week. At 5 months she had a febrile urinary tract infection, and a voiding cystourethrogram showed grade IV vesicoureteral reflux on the left. She is followed by a paediatric urologist and takes no daily medication. Her immunizations are up to date. She is drinking well and has had her usual wet diapers. She is alert and playful, with clear nasal discharge. Her ears, throat, chest and abdomen are normal. There is no rash, and her capillary refill is under 2 seconds.",
    vitals: { temperature: "39.1°C rectal", pulse: "138/minute", resp: "30/minute", o2sat: "98% on room air", weight: "11.5 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her history most raises her risk of a serious bacterial infection?",
        options: [
          "Clear nasal discharge with a cough",
          "Fever of 39.4°C at home",
          "Grade IV reflux after a febrile UTI",
          "Sister at home with a cold",
          "Up to date immunizations"
        ],
        correct: 2,
        explanation:
          "Vesicoureteral reflux after a febrile urinary tract infection puts her at high risk of another one. In the RIVUR trial, about 1 in 4 children with reflux after a first UTI who received placebo had a recurrent UTI within 2 years. A cold does not protect her from a urinary infection, so her reflux still shapes the workup. A fever of 39.4°C is common in both viral and bacterial illness. Nasal discharge and a sister with a cold point to a viral source. Up to date immunizations lower, rather than raise, her risk of invasive bacterial infection.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "rivur",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate for her in the emergency department?",
        options: [
          "Bag urine specimen for culture",
          "Blood culture, CBC and CRP",
          "Catheter urine sample for urinalysis",
          "Nasopharyngeal viral swab only",
          "Renal ultrasound today"
        ],
        correct: 2,
        explanation:
          "Her past febrile UTI and high grade reflux mean her urine must be checked even with cold symptoms. The Canadian Paediatric Society prefers a catheter sample in children who are not toilet trained, because it has a low contamination rate, screens it for pyuria and nitrite first, and sends a culture only when these are present. Bag samples are unreliable for culture. A viral swab would not exclude a urinary infection. Blood tests add little in a well, fully immunized child, and a renal ultrasound does not diagnose an acute infection.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-uti",
      },
      {
        id: "q3",
        kind: "single",
        update: "The tests you ordered are normal. She is still playful and drinking. Her mother asks whether she should start an antibiotic to be safe.",
        prompt: "Which of the following is the most appropriate management plan for her fever?",
        options: [
          "amoxicillin by mouth for 7 days",
          "azithromycin by mouth for 3 days",
          "Ceftriaxone IM once, then review",
          "cephalexin by mouth for 10 days",
          "No antibiotic, with clear return advice"
        ],
        correct: 4,
        explanation:
          "Her fever comes with a runny nose, a cough and a sister with a cold, and her testing shows no urinary infection, so a viral respiratory illness is the likely source. NICE advises against prescribing oral antibiotics to children with fever without an apparent bacterial source. Because of her reflux, her parents should bring her back early for a new fever without cold symptoms, foul smelling urine or poor feeding, so that her urine can be tested again. Amoxicillin, azithromycin and cephalexin treat no identified infection and add side effects and resistance. A dose of ceftriaxone can partly treat and hide an evolving infection.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "nice-fever-under-5",
      },
    ],
    sources: [
      { id: "rivur", citation: "RIVUR Trial Investigators, Hoberman A, Greenfield SP, et al. Antimicrobial prophylaxis for children with vesicoureteral reflux. N Engl J Med. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/24795142/" },
      S.cpsUti,
      S.niceFever,
    ],
    ...META,
    version: 2,
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
    title: "Toddler with fever, vomiting and fast breathing",
    stem:
      "A 20-month-old girl is brought to the emergency department with 2 days of fever up to 40.1°C and vomiting since this morning. She has had only two wet diapers today. She has no cough, runny nose or diarrhea. She had a urinary tract infection at 9 months of age. She is irritable and pale. Her hands and feet are cool, and capillary refill is 3 seconds. Her abdomen is soft. There is no rash and no neck stiffness. Her immunizations are up to date. She has no allergies.",
    vitals: { temperature: "39.8°C rectal", pulse: "176/minute", resp: "38/minute", bp: "96/58 mmHg", o2sat: "98% on room air", weight: "11 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate timing for her first antibiotic dose?",
        options: [
          "After a renal ultrasound",
          "After the urinalysis result",
          "After the urine culture grows",
          "Only if the blood culture is positive",
          "Right after urine and blood samples"
        ],
        correct: 4,
        explanation:
          "She is irritable, pale and tachycardic with cool extremities, so she may have sepsis from a urinary source. A catheter urine sample and a blood culture should be taken first, because they take minutes and guide later treatment, and then IV antibiotics should follow at once. The Canadian Paediatric Society notes that febrile UTI with sepsis needs parenteral treatment. Waiting for a urinalysis, a culture, an ultrasound or a positive blood culture delays treatment of a possibly septic child.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-uti",
      },
      {
        id: "q2",
        kind: "menu",
        update: "Her catheter urinalysis shows leukocyte esterase 3+, positive nitrite and many white cells. Her creatinine is normal.",
        prompt: "Which of the following are appropriate empiric parenteral antibiotics for her?",
        select: 2,
        options: [
          "azithromycin IV",
          "cefixime by mouth",
          "ceftriaxone IV",
          "cephalexin by mouth",
          "gentamicin IV",
          "nitrofurantoin by mouth",
          "vancomycin IV alone"
        ],
        correct: [2, 4],
        explanation:
          "The Canadian Paediatric Society lists ceftriaxone and aminoglycosides such as gentamicin as common empiric parenteral options for febrile UTI, with aminoglycosides less likely to select for resistance when there is no concern for meningitis. Cephalexin and cefixime are oral options for well children who can take fluids, which she cannot. Nitrofurantoin does not reach the kidney well enough to treat pyelonephritis. Vancomycin alone misses gram negative organisms such as E. coli. Azithromycin is not a UTI drug.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-uti",
      },
      {
        id: "q3",
        kind: "single",
        update: "One hour later, after acetaminophen, her temperature is 37.8°C, but her pulse is still 172/minute and she is harder to rouse.",
        prompt: "Which of the following best describes her condition at this point?",
        options: [
          "Dehydration that needs oral fluids only",
          "Expected response to a falling temperature",
          "Febrile illness that is resolving",
          "Side effect of acetaminophen",
          "Worsening sepsis despite less fever"
        ],
        correct: 4,
        explanation:
          "A heart rate that stays high after the fever falls, with a declining level of consciousness, points to worsening sepsis. NICE advises not relying on a fall in temperature after antipyretics to separate serious from minor illness, and lists reduced responsiveness as a red feature. Tachycardia from fever alone should settle as the temperature falls. Acetaminophen does not cause tachycardia or drowsiness at usual doses. Oral fluids alone are inadequate for a child who is harder to rouse.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "nice-fever-under-5",
      },
    ],
    sources: [S.cpsUti, S.niceFever],
    ...META,
    version: 2,
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
        source: "nelson-ch221",
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
          "He looks well, is drinking, has a negative catheter urinalysis and a normal WBC of 11.4 x 10^9/L, so a viral illness is the most likely cause of his fever. Antibiotics are not given for a presumed viral fever, but his blood culture result is followed and his parents are told to return if he worsens. NICE advises against oral antibiotics for fever without an apparent source, and a child with no amber or red features can be cared for at home with advice on when to return. Empiric ceftriaxone or amoxicillin would treat many children to help few and adds side effects and resistance. A lumbar puncture is not indicated without meningeal signs or a change in behaviour.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "nice-fever-under-5",
      },
    ],
    sources: [S.nelson221, S.cpsUti, S.aapFever, S.niceFever],
    ...META,
  },

  /* 26 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-26",
    topic: "pediatric-fever",
    title: "Fever and double vision on a biologic drug",
    stem:
      "A 15-year-old girl is brought to the emergency department with 1 day of fever, headache and vomiting. Since this morning she has seen double and feels unsteady when she walks. She has Crohn disease in remission, treated with infliximab infusions every 8 weeks and daily azathioprine. Her last infusion was 3 weeks ago. She is drowsy but opens her eyes to voice and answers questions. Her neck is stiff. She has a left sixth nerve palsy and an unsteady gait. There is no rash, and her fundi are normal. Her capillary refill is 2 seconds.",
    vitals: { temperature: "38.9°C oral", pulse: "112/minute", resp: "20/minute", bp: "118/70 mmHg", o2sat: "98% on room air", weight: "54 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her history most changes the organisms that must be covered?",
        options: [
          "Age of 15 years at onset",
          "Crohn disease in remission",
          "Infliximab and azathioprine",
          "Temperature of 38.9°C",
          "Vomiting since yesterday"
        ],
        correct: 2,
        explanation:
          "Infliximab and azathioprine suppress her immunity, and the Canadian Paediatric Society advises considering Listeria monocytogenes when there is immunosuppression or a brain stem presentation. Her double vision and unsteadiness suggest brain stem involvement. Crohn disease in remission does not by itself change the likely organisms. Her age, fever and vomiting are common to most causes of meningitis and do not point to a particular organism.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-meningitis",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate diagnostic plan for her suspected meningitis?",
        options: [
          "Blood cultures and lumbar puncture now",
          "Blood cultures only, no lumbar puncture",
          "Blood cultures, then CT before lumbar puncture",
          "Lumbar puncture now, blood cultures later",
          "MRI of the brain within 24 hours"
        ],
        correct: 2,
        explanation:
          "She has a new focal deficit, a sixth nerve palsy with ataxia, and a reduced level of consciousness. The Canadian Paediatric Society advises deferring the lumbar puncture until imaging has excluded a risk of herniation in that situation. Blood cultures come first, before antibiotics. A lumbar puncture now ignores her focal signs. Skipping it altogether gives up the diagnosis. Delaying blood cultures or waiting a day for MRI holds up the workup of a critically ill patient.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-meningitis",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following empiric antimicrobial regimens is most appropriate for her?",
        options: [
          "acyclovir as the only drug",
          "ceftriaxone and vancomycin",
          "ceftriaxone as the only drug",
          "ceftriaxone, vancomycin and ampicillin",
          "meropenem as the only drug"
        ],
        correct: 3,
        explanation:
          "The Canadian Paediatric Society recommends ceftriaxone or cefotaxime with vancomycin for suspected bacterial meningitis beyond 2 months of age, and adding ampicillin to cover Listeria in immunocompromised patients, because cephalosporins do not treat Listeria. Ceftriaxone with vancomycin alone leaves that gap. Ceftriaxone alone also misses resistant pneumococcus. Meropenem alone is not the recommended empiric choice. Acyclovir may be added if herpes encephalitis is suspected, but alone it treats no bacteria.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-meningitis",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate timing of her first antimicrobial doses?",
        options: [
          "After CSF results are available",
          "After review by neurology",
          "After the lumbar puncture is done",
          "Immediately after blood cultures",
          "Only if her level of consciousness falls"
        ],
        correct: 3,
        explanation:
          "The Canadian Paediatric Society states that antimicrobials should be given without delay when meningitis is suspected, and should not be delayed when imaging or a lumbar puncture cannot be done at once. Blood cultures are drawn first because they take minutes. Waiting for the lumbar puncture, its results, a consultation or further deterioration delays treatment of a life-threatening infection.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-meningitis",
      },
    ],
    sources: [S.cpsMening],
    ...META,
    version: 2,
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
    title: "Eight days of fever after a family visit",
    stem:
      "A 7-year-old girl is brought to the emergency department with 8 days of fever that rises each evening, now to 39.8°C. She has a headache, crampy abdominal pain and no bowel movement for 4 days. Twelve days ago she returned from 6 weeks with family in Lahore, Pakistan, where she ate street food. She had no pretravel vaccines. A malaria film and rapid test at a clinic 2 days ago were negative. She is tired but alert and drinking. Her tongue is coated. The abdomen is mildly tender, and the spleen tip is palpable. There are three faint pink macules on her upper abdomen.",
    vitals: { temperature: "39.6°C oral", pulse: "98/minute", resp: "22/minute", bp: "104/64 mmHg", o2sat: "98% on room air", weight: "22 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her prolonged fever?",
        options: [
          "Dengue fever",
          "Enteric fever",
          "Kawasaki disease",
          "Tuberculosis",
          "Viral gastroenteritis"
        ],
        correct: 1,
        explanation:
          "A stepwise fever that peaks in the evening, headache, abdominal pain, constipation, splenomegaly and faint rose spots on the trunk after travel to South Asia fit enteric fever. The CDC notes an incubation period of 6 to 30 days, which fits her timeline. Her pulse of 98/minute at 39.6°C is also lower than expected. Dengue causes abrupt high fever with muscle and joint pain rather than 8 days of stepwise fever with constipation. Kawasaki disease needs conjunctivitis, mucosal and extremity changes. Viral gastroenteritis causes diarrhea, not constipation. Tuberculosis rarely presents this acutely.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "cdc-typhoid",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most likely to identify the cause of her fever?",
        options: [
          "Abdominal ultrasound",
          "Chest X-ray, two views",
          "Stool for ova and parasites",
          "Two sets of blood cultures",
          "Urinalysis and urine culture"
        ],
        correct: 3,
        explanation:
          "The CDC names blood culture as the preferred test for enteric fever, positive in about half of cases on a single culture, so it should be drawn before any antibiotic. Stool culture can also grow the organism, but ova and parasite testing looks for other pathogens. Ultrasound may show splenomegaly but does not identify a cause. A chest X-ray and urinalysis do not confirm her likely diagnosis and are only useful if a lung or urinary source is suspected.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "cdc-typhoid",
      },
      {
        id: "q3",
        kind: "single",
        update: "While results are pending, her mother asks what to give her for fever and headache. She has children's ibuprofen at home.",
        prompt: "Which of the following ibuprofen orders is most appropriate for her?",
        options: [
          "ibuprofen 50 mg PO every 6 to 8 hours",
          "ibuprofen 80 mg PO every 6 to 8 hours",
          "ibuprofen 220 mg PO every 6 to 8 hours",
          "ibuprofen 400 mg PO every 6 to 8 hours",
          "ibuprofen 600 mg PO every 6 to 8 hours"
        ],
        correct: 2,
        explanation:
          "Ibuprofen is dosed at 10 mg/kg every 6 to 8 hours, and 10 x 22 kg is 220 mg. Dosing by weight rather than by age avoids under or overdosing. 50 mg and 80 mg are about 2 and 4 mg/kg, below the usual range of 5 to 10 mg/kg. 400 mg is about 18 mg/kg and 600 mg is an adult dose, both above the recommended amount for her weight.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
    ],
    sources: [
      { id: "cdc-typhoid", citation: "Francois Watkins LK, Shih DC, Dorough L. Typhoid and paratyphoid fever. CDC Yellow Book: Health Information for International Travel. Centers for Disease Control and Prevention. 2025.", url: "https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/typhoid-and-paratyphoid-fever.html" },
      S.aapFever,
    ],
    ...META,
    version: 2,
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
        source: "ilar-jia",
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
        source: "nelson-ch196",
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
          "Macrophage activation syndrome is a life-threatening complication of systemic arthritis that is treated promptly with pulse IV methylprednisolone under rheumatology and critical care guidance. Cyclosporine or anakinra is added if the response is inadequate after 48 to 72 hours. A higher NSAID dose does not control the cytokine storm. Platelet transfusion does not treat the cause and is kept for bleeding. IV immune globulin is not the primary treatment, and antibiotics alone do not treat the inflammation, although infection is excluded at the same time.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "aplar-sjia",
      },
    ],
    sources: [S.ilar, S.nelson196, S.mas, S.aplar],
    ...META,
  },

  /* 30 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-30",
    topic: "pediatric-fever",
    title: "Fever that keeps coming back every month",
    stem:
      "A 4-year-old boy is brought to the emergency department with fever to 40.0°C since yesterday, a sore throat and sore mouth. His mother says this is his sixth episode in 7 months. Each lasts 4 to 5 days and starts about 4 weeks after the last, and between episodes he is completely well and playing. He received amoxicillin for three of the episodes, with no change in their course, and two rapid strep tests were negative. He has no cough or runny nose. His growth follows the 50th percentile, and his development is normal. He has small shallow ulcers on the inside of his cheeks, red tonsils and tender enlarged anterior neck nodes. His last CBC, done during an episode, showed a normal neutrophil count.",
    vitals: { temperature: "39.8°C oral", pulse: "130/minute", resp: "24/minute", bp: "98/60 mmHg", o2sat: "99% on room air", weight: "17 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history most suggests a noninfectious cause for his fevers?",
        options: [
          "Fever as high as 40.0°C",
          "Negative rapid strep tests",
          "Red tonsils with tender neck nodes",
          "Regular episodes, well in between",
          "Sore throat with each episode"
        ],
        correct: 3,
        explanation:
          "Fevers that recur at a regular interval, with a child who is completely well and growing normally between them, point to a periodic fever syndrome rather than repeated infections, which occur at random intervals. The Vanoni review lists regularly recurring fevers, an asymptomatic interval and normal growth among the diagnostic criteria for PFAPA. High fever, sore throat and red tonsils with tender nodes occur in both infection and PFAPA. Negative rapid tests do not by themselves separate the two.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "vanoni-pfapa",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for his fevers?",
        options: [
          "Cyclic neutropenia",
          "Epstein-Barr virus infection",
          "Kawasaki disease",
          "PFAPA syndrome",
          "Recurrent tonsillopharyngitis"
        ],
        correct: 3,
        explanation:
          "Regular fevers starting before age 5, with aphthous ulcers, pharyngitis and cervical adenitis, no respiratory symptoms, well intervals and normal growth meet the criteria for periodic fever, aphthous stomatitis, pharyngitis and adenitis (PFAPA). Cyclic neutropenia can mimic it, but his neutrophil count was normal during an episode. Recurrent strep pharyngitis does not recur on a schedule, and his tests were negative. Epstein-Barr virus does not cause six separate episodes. Kawasaki disease is a single illness with conjunctivitis and extremity changes.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "vanoni-pfapa",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for this episode?",
        options: [
          "amoxicillin by mouth for 10 days",
          "filgrastim injections daily",
          "IV immune globulin 2 g/kg",
          "prednisone 1 mg/kg by mouth once",
          "Referral for tonsillectomy this week"
        ],
        correct: 3,
        explanation:
          "The Vanoni review describes a single dose of prednisone, 1 to 2 mg/kg, at the start of an episode as able to abort the fever within hours, which is 17 mg for him. Parents should know that the interval between episodes may shorten in 25 to 50% of children. Amoxicillin has not changed any earlier episode. Filgrastim treats cyclic neutropenia, which his normal neutrophil count during an episode argues against. Tonsillectomy is an option for selected patients but not an emergency. Immune globulin is a treatment for Kawasaki disease.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "vanoni-pfapa",
      },
    ],
    sources: [
      { id: "vanoni-pfapa", citation: "Vanoni F, Theodoropoulou K, Hofer M. PFAPA syndrome: a review on treatment and outcome. Pediatr Rheumatol Online J. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/27349388/" },
    ],
    ...META,
    version: 2,
  },

  /* 31 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-31",
    topic: "pediatric-fever",
    title: "Rash and swollen face on a new medication",
    stem:
      "A 12-year-old girl is brought to the emergency department with 3 days of fever up to 39.4°C and a spreading red rash. Four weeks ago her neurologist started carbamazepine for focal seizures. She takes no other medication. The rash began on her face and trunk and now covers more than half her body. Her face is swollen, and she has tender lymph nodes in her neck and both armpits. Her lips, mouth and eyes are normal. The rash is a confluent red eruption without blisters or skin peeling. White cells are 14.2 x 10^9/L with eosinophils of 2.1 x 10^9/L and atypical lymphocytes, and ALT is 310 U/L. Her capillary refill is 2 seconds.",
    vitals: { temperature: "39.2°C oral", pulse: "118/minute", resp: "20/minute", bp: "108/64 mmHg", o2sat: "98% on room air", weight: "42 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her fever and rash?",
        options: [
          "Acute viral hepatitis A",
          "Drug reaction to carbamazepine",
          "Incomplete Kawasaki disease",
          "Measles infection",
          "Streptococcal scarlet fever"
        ],
        correct: 1,
        explanation:
          "Fever, a widespread rash, facial swelling, lymph nodes at several sites, eosinophilia, atypical lymphocytes and a raised ALT beginning 4 weeks after starting an aromatic anticonvulsant fit drug reaction with eosinophilia and systemic symptoms (DRESS). The EAACI position paper names anticonvulsants, particularly carbamazepine, among the main culprits in children, with a mean latency of 3 to 4 weeks. Measles and scarlet fever do not cause eosinophilia and liver injury in this pattern. Kawasaki disease needs conjunctivitis and mucosal changes, which she lacks. Viral hepatitis does not explain the rash and eosinophilia.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "eaaci-dress",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features most separates her rash from a benign viral exanthem?",
        options: [
          "Confluent redness on the trunk",
          "Facial swelling with eosinophilia",
          "Fever above 39°C",
          "Rash that began on the face",
          "Tachycardia of 118/minute"
        ],
        correct: 1,
        explanation:
          "Facial edema is one of the most common skin signs of DRESS, and with eosinophilia and liver involvement it marks a systemic drug reaction that needs admission and removal of the culprit drug. The EAACI position paper lists fever, liver involvement, lymphadenopathy and eosinophilia as its most common systemic features. Confluent redness, a rash that starts on the face, high fever and tachycardia are all seen with ordinary viral exanthems and do not separate them.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "eaaci-dress",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following new findings would most suggest that she has developed sepsis?",
        options: [
          "ALT rising to 420 U/L",
          "Cool mottled limbs, slow refill",
          "Eosinophil count rising to 3.0 x 10^9/L",
          "Fever that persists for another 2 days",
          "More facial swelling"
        ],
        correct: 1,
        explanation:
          "The Canadian Paediatric Society describes perfusion signs such as prolonged capillary refill, cool or mottled skin and a narrow pulse pressure, together with mental status and vital signs, as the features that identify sepsis in children. Cool mottled limbs would signal circulatory failure. A rising ALT or eosinophil count, persistent fever and more facial swelling are expected in active DRESS and do not by themselves indicate sepsis.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "cps-sepsis",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "She is admitted. The next morning her temperature is 38.9°C, her pulse is 150/minute and her BP is 92/56 mmHg. She is newly confused. Her skin over a scratched area on her thigh is warm and tender.",
        prompt: "Which of the following is the most appropriate interpretation of this change?",
        options: [
          "Anxiety about her admission",
          "Dehydration from poor intake",
          "Expected course of her illness",
          "Postictal state after an unseen seizure",
          "Sepsis until proven otherwise"
        ],
        correct: 4,
        explanation:
          "New confusion with a rising pulse and a falling BP are signs of sepsis in the Canadian Paediatric Society statement, and her damaged skin gives bacteria an entry point. The EAACI position paper also notes that herpesvirus reactivation in DRESS can lead to severe infection. She needs blood cultures, fluids and prompt antibiotics. Attributing the change to the course of her illness, to anxiety or to dehydration risks missing a treatable infection. An unwitnessed seizure would not explain the hypotension.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "cps-sepsis",
      },
    ],
    sources: [
      { id: "eaaci-dress", citation: "Kuyucu S, Blanca-Lopez N, Caubet JC, et al. Clinical diagnosis and management of drug reaction with eosinophilia and systemic symptoms (DRESS) in children. An EAACI position paper. Pediatr Allergy Immunol. 2025.", url: "https://pubmed.ncbi.nlm.nih.gov/40589376/" },
      S.cpsSepsis,
    ],
    ...META,
    version: 2,
  },

  /* 32 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-32",
    topic: "pediatric-fever",
    title: "Fever, belly pain and red eyes in a school age boy",
    stem:
      "A 9-year-old boy is brought to the emergency department with 5 days of fever to 39.5°C, abdominal pain, vomiting and loose stools. Since yesterday his eyes are red and he has a rash. Five weeks ago his parents and sister had COVID-19, and he had a mild cold at the same time. He is lethargic but answers questions. Both conjunctivae are injected without discharge, and his lips are red and cracked. There is a blanching red rash on his trunk. His hands are cool, and capillary refill is 3 seconds. The abdomen is diffusely tender without guarding. CRP is 248 mg/L, lymphocytes 0.6 x 10^9/L, platelets 118 x 10^9/L, troponin and NT-proBNP are raised, and a blood culture is pending.",
    vitals: { temperature: "39.3°C oral", pulse: "142/minute", resp: "28/minute", bp: "80/44 mmHg", o2sat: "96% on room air", weight: "30 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his illness?",
        options: [
          "Acute appendicitis with peritonitis",
          "Classic Kawasaki disease",
          "Measles with conjunctivitis",
          "Post-COVID inflammatory syndrome",
          "Viral gastroenteritis"
        ],
        correct: 3,
        explanation:
          "Fever with prominent abdominal pain, vomiting and diarrhea, conjunctivitis, mucosal and skin changes, shock, cardiac injury, a very high CRP, lymphopenia and low platelets, 5 weeks after household COVID-19, fit paediatric inflammatory multisystem syndrome (PIMS/MIS-C). The Canadian Paediatric Society notes that it follows infection by 2 to 6 weeks and is a post-infectious inflammatory state. Classic Kawasaki disease shares the mucocutaneous features but less often causes shock and cardiac dysfunction. Appendicitis does not cause conjunctivitis and cracked lips. Measles has a cough, coryza and a rash spreading from the face, and gastroenteritis does not explain the cardiac findings.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "cps-pims",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following findings show that his fever and rash have a dangerous cause rather than a benign viral exanthem?",
        select: 3,
        options: [
          "Blanching rash on the trunk",
          "BP of 80/44 mmHg with cool hands",
          "Lethargy with slow responses",
          "Mild abdominal cramps early on",
          "Raised troponin level",
          "Rash appearing after the fever began",
          "Temperature of 39.3°C"
        ],
        correct: [1, 2, 4],
        explanation:
          "Hypotension with cool hands, lethargy and a raised troponin show shock, altered consciousness and heart involvement, which separate a dangerous illness from a benign viral rash. The Canadian Paediatric Society lists shock and cardiac dysfunction as prominent features of PIMS/MIS-C. A blanching rash on the trunk, a rash that follows fever, early mild cramps and a temperature near 39°C are common in viral exanthems and do not by themselves show danger.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "cps-pims",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best describes his circulatory status now?",
        options: [
          "Compensated shock",
          "Decompensated shock",
          "Dehydration without shock",
          "Normal circulation for his fever",
          "Vasovagal hypotension"
        ],
        correct: 1,
        explanation:
          "He has tachycardia, cool hands, a capillary refill of 3 seconds, lethargy and a BP of 80/44 mmHg, below the lower limit of 70 + (2 x 9) = 88 mmHg for a 9-year-old. The Canadian Paediatric Society sepsis statement describes perfusion signs and mental status as the markers of shock, and once hypotension appears the shock is no longer compensated. Compensated shock keeps a normal BP. Fever and dehydration alone do not explain hypotension with lethargy. Vasovagal hypotension comes with a slow pulse.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "cps-sepsis",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following features of his illness is less typical of classic Kawasaki disease?",
        options: [
          "Conjunctival injection without discharge",
          "Fever lasting 5 days so far",
          "Polymorphous rash on the trunk",
          "Prominent vomiting and abdominal pain",
          "Red, cracked and dry lips"
        ],
        correct: 3,
        explanation:
          "The Canadian Paediatric Society compares the two conditions and notes that gastrointestinal symptoms, including abdominal pain and vomiting, are much more prominent in PIMS/MIS-C than in classic Kawasaki disease, along with shock, cardiac dysfunction and a higher CRP. Fever of 5 days, nonexudative conjunctivitis, a polymorphous rash and red cracked lips are all principal features of classic Kawasaki disease, so they do not separate the two.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "cps-pims",
      },
    ],
    sources: [
      { id: "cps-pims", citation: "Berard RA, Tam H, Scuccimarri R, et al. Canadian Paediatric Society practice point. Paediatric inflammatory multisystem syndrome temporally associated with COVID-19 (spring 2021 update). 2021.", url: "https://cps.ca/en/documents/position/pims" },
      S.cpsSepsis,
    ],
    ...META,
    version: 2,
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
        source: "goldfrank-ch3",
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
          "Benzodiazepines are first-line for sympathomimetic agitation because they reduce central stimulation, which lowers heat production, heart rate and blood pressure. Midazolam 0.1 mg/kg is 1.2 mg for 12 kg, titrated to effect. Physical restraint without sedation increases heat production and the risk of rhabdomyolysis. Diphenhydramine adds anticholinergic effects and impairs sweating. Propranolol does not treat the agitation that drives her heat production. Haloperidol can control agitation, but it does not relax muscles or treat seizures as a benzodiazepine does.",
        keyFeature: { topic: "tox", n: 4 },
        source: "aha-tox-2023",
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
          "Her temperature of 40.4°C comes from muscle activity and agitation, so treatment is continued benzodiazepine sedation with rapid external cooling. Evaporative cooling with mist and fanning, or immersion, lowers temperature faster than ice packs. Acetaminophen and ibuprofen act on the hypothalamic set point and do not lower drug-induced hyperthermia. Restraint increases heat production as she struggles. Dantrolene is not a standard treatment for sympathomimetic hyperthermia.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "aha-tox-2023",
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
        source: "aha-tox-2023",
      },
    ],
    sources: [S.goldfrankCh3, S.ahaTox],
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
    title: "Red cheeks after a mild fever",
    stem:
      "A 6-year-old girl is brought to the emergency department with a rash for 2 days. Last week she had 2 days of low grade fever, a headache and a runny nose, which settled. Now both cheeks are bright red, and a lacy, net-like pink rash has appeared on her arms and thighs. It is mildly itchy and brighter after her bath. Several children in her grade 1 class have had a similar rash. She is playful and eating well. Her mouth, lips and eyes are normal, she has no joint swelling, and the rash blanches. Her mother is 16 weeks pregnant.",
    vitals: { temperature: "37.2°C oral", pulse: "96/minute", resp: "20/minute", bp: "100/62 mmHg", o2sat: "99% on room air", weight: "21 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her rash?",
        options: [
          "Erythema infectiosum",
          "Kawasaki disease",
          "Measles infection",
          "Streptococcal scarlet fever",
          "Systemic lupus erythematosus"
        ],
        correct: 0,
        explanation:
          "Bright red cheeks followed by a lacy rash on the limbs that brightens with warmth, after a mild febrile illness, in a well child during a school cluster, is erythema infectiosum from parvovirus B19, a benign viral exanthem. The SOGC guideline describes erythema infectiosum as its typical presentation. Measles brings high fever, cough, conjunctivitis and a rash spreading down from the face. Scarlet fever has a sandpaper rash with sore throat. Kawasaki disease needs 5 days of fever with mucosal and eye changes. Lupus does not appear as a school cluster after a cold.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "sogc-parvovirus",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for her rash?",
        options: [
          "amoxicillin by mouth for 10 days",
          "azithromycin by mouth for 5 days",
          "cephalexin by mouth for 7 days",
          "mupirocin cream to the cheeks",
          "No antibiotic, with supportive care"
        ],
        correct: 4,
        explanation:
          "Her rash comes from a viral infection that resolves without treatment, and she is well, so she needs no antibiotic. Antibiotics do not act on viruses and add side effects, including drug rashes that can confuse the picture. Amoxicillin, azithromycin and cephalexin treat bacterial infections she does not have. Mupirocin treats impetigo, and her cheeks are red without crusts or blisters. Supportive care includes an antihistamine for itch if needed.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "sogc-parvovirus",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice for her pregnant mother?",
        options: [
          "Blood tests for immunity and recent infection",
          "Immune globulin injection today",
          "No action, as the rash is benign",
          "Routine care at her next visit",
          "Stay away from her daughter for 2 weeks"
        ],
        correct: 0,
        explanation:
          "The SOGC recommends that pregnant women exposed to parvovirus B19 have IgG and IgM testing to find out whether they are immune, susceptible or recently infected. A positive IgG with a negative IgM means she is immune and can be reassured, while a recent infection calls for referral and serial ultrasounds for fetal anemia and hydrops. Saying no action is needed, or waiting until her next routine visit, misses a treatable fetal risk. Separating her from her daughter now comes too late, because the child was most infectious before the rash appeared.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "sogc-parvovirus",
      },
    ],
    sources: [
      { id: "sogc-parvovirus", citation: "Crane J, Mundle W, Boucoiran I, SOGC Maternal Fetal Medicine Committee. Parvovirus B19 infection in pregnancy. J Obstet Gynaecol Can. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/25668048/" },
    ],
    ...META,
    version: 2,
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
        source: "nelson-ch303",
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
        source: "nelson-ch303",
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
        source: "nice-fever-under-5",
      },
    ],
    sources: [S.nelson303, S.aapFever, S.niceFever],
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
        source: "nelson-ch227",
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
        source: "nelson-ch227",
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
        source: "nelson-ch227",
      },
    ],
    sources: [S.nelson227],
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
        source: "nice-eczema",
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
        source: "nelson-ch299",
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
          "Lesions on the eyelid put her at risk of herpes simplex keratitis, so she needs same-day ophthalmology assessment even though her conjunctivae look clear now. A swab of a vesicle or erosion for HSV PCR confirms the diagnosis, so a skin biopsy is not needed. NICE advises same-day dermatology advice, so a clinic visit in 2 weeks is too late. A serum IgE level and food allergy testing do not address the acute infection. Emollients can continue on unaffected skin.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "nice-eczema",
      },
    ],
    sources: [S.niceEczema, S.nelson299],
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
        source: "nelson-ch229",
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
    sources: [S.nelson229, S.cpsGas],
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
    title: "Eleven week old seen after a fever at home",
    stem:
      "An 11-week-old girl is brought to the emergency department by her parents after a rectal temperature of 38.7°C at home this afternoon. She was born at 39 weeks and has had no illnesses. Her parents say she is feeding normally and settles when held. She is smiling and alert, with pink skin and a capillary refill under 2 seconds. Her fontanelle is soft. There is no rash, and her ears, chest and abdomen are normal. A catheter urinalysis shows leukocyte esterase 2+, positive nitrite and pyuria, and a urine culture is sent. ANC 3.6 x 10^9/L, CRP 8 mg/L and procalcitonin 0.12 mcg/L, and a blood culture is sent. The family has a children's acetaminophen suspension of 160 mg per 5 mL at home.",
    vitals: { temperature: "38.3°C rectal", pulse: "156/minute", resp: "38/minute", o2sat: "99% on room air", weight: "5.4 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for her now?",
        options: [
          "Admit for a 7 day IV antibiotic course",
          "Home on an oral antibiotic, review in 24 hours",
          "Home without antibiotics until the culture grows",
          "IM ceftriaxone once, then no further antibiotic",
          "Lumbar puncture, then admit for IV antibiotics"
        ],
        correct: 1,
        explanation:
          "She is 77 days old and well appearing, with a positive urinalysis, an ANC of 3.6 x 10^9/L, a CRP of 8 mg/L and a procalcitonin of 0.12 mcg/L. The Canadian Paediatric Society no longer treats a positive urinalysis alone as high risk. It advises oral or IV antibiotics for such infants, with oral cefixime an option, and allows discharge with follow-up within 24 to 48 hours at 61 to 90 days. She can go home on an oral antibiotic with review in 24 hours while cultures incubate. The CPS bases the decision on a lumbar puncture on the inflammatory markers, and hers are normal. A fixed 7 day IV course keeps a well infant in hospital when oral treatment is enough. Leaving a probable urinary infection untreated until the culture grows risks spread to the kidneys and blood. A single dose of ceftriaxone does not complete treatment.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "cps-infant",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following volumes of the 160 mg per 5 mL suspension is the correct acetaminophen dose for her?",
        options: [
          "1 mL every 4 to 6 hours",
          "2.5 mL every 4 to 6 hours",
          "4 mL every 4 to 6 hours",
          "5 mL every 4 to 6 hours",
          "7.5 mL every 4 to 6 hours"
        ],
        correct: 1,
        explanation:
          "At 15 mg/kg, her 5.4 kg gives 81 mg. The suspension has 32 mg per mL, so 81 divided by 32 is about 2.5 mL. The American Academy of Pediatrics advises dosing by weight and measuring with a proper syringe. 1 mL would be the right volume of the stronger 80 mg per mL infant drops, and here gives only 32 mg, or about 6 mg/kg. 4 mL gives 128 mg, about 24 mg/kg. 5 mL and 7.5 mL give 160 mg and 240 mg, doses for older children.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-antipyretic",
      },
      {
        id: "q3",
        kind: "single",
        update: "The next day her urine culture is growing gram negative rods. She had acetaminophen 3 hours ago, and her temperature is 37.4°C rectal. Her pulse is 188/minute, and her hands are cool. She cries during the examination and hiccups after a feed.",
        prompt: "Which of the following findings at this point most suggests that she is becoming septic?",
        options: [
          "Crying during the examination",
          "Culture growing gram negative rods",
          "Hiccups after a feed",
          "Pulse of 188/minute with cool hands",
          "Temperature of 37.4°C after acetaminophen"
        ],
        correct: 3,
        explanation:
          "A pulse of 188/minute while her temperature is almost normal, with cool hands, is tachycardia out of proportion to fever and a sign of poor perfusion. NICE lists a heart rate above 160/minute in infants under 12 months among the warning features of serious illness. In a young infant with a urinary infection this change suggests bacteremia and needs reassessment for IV antibiotics and admission. A culture growing gram negative rods confirms the expected urinary infection but does not by itself show sepsis. A fall in temperature after acetaminophen does not separate serious from minor illness. Crying during examination and hiccups after feeds are normal at this age.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "nice-fever-under-5",
      },
    ],
    sources: [S.cpsInfant, S.aapFever, S.niceFever],
    ...META,
    version: 2,
  },

  /* 44 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-44",
    topic: "pediatric-fever",
    title: "Red patch on the thigh after a camping trip",
    stem:
      "A 7-year-old boy is brought to the emergency department with 2 days of fever up to 38.4°C, headache and aching muscles. Ten days ago he returned from a week of camping in southeastern Manitoba, where he played in long grass and woods. No tick was seen. Yesterday his mother noticed a red patch on the back of his right thigh. It is an oval, flat, pink to red area 12 cm across with a paler centre. It is not itchy, swollen or painful to touch. He is alert and playful. He has no neck stiffness, facial weakness or joint swelling. His heart sounds are normal and regular.",
    vitals: { temperature: "38.1°C oral", pulse: "104/minute", resp: "20/minute", bp: "104/64 mmHg", o2sat: "99% on room air", weight: "24 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his rash?",
        options: [
          "Cellulitis of the thigh",
          "Erythema migrans",
          "Fungal tinea corporis",
          "Hives from a viral illness",
          "Local reaction to an insect bite"
        ],
        correct: 1,
        explanation:
          "A flat, painless red patch more than 5 cm across, appearing about 1 to 2 weeks after time in a Lyme risk area of southeastern Manitoba, with fever, headache and myalgia, is erythema migrans of early Lyme disease. Cellulitis is warm, swollen and tender. A local bite reaction is smaller, swollen and itchy. Tinea has a scaly advancing edge and no fever. Urticarial wheals are itchy and come and go within hours.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "cps-lyme",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following features of his rash are most typical of the most likely diagnosis?",
        select: 2,
        options: [
          "Appeared within hours of being outdoors",
          "Flat and larger than 5 cm",
          "Intense itch with swelling",
          "Not painful to touch",
          "Pustule at the centre",
          "Smaller than 2 cm",
          "Warm and tender to touch"
        ],
        correct: [1, 3],
        explanation:
          "The Canadian Paediatric Society describes erythema migrans as usually larger than 5 cm and mainly flat, appearing 7 to 14 days after a bite, and usually painless, unlike cellulitis. A classic bull's eye is uncommon. A small, swollen and itchy lesion suggests a local hypersensitivity reaction to a bite. Warmth and tenderness suggest cellulitis. A central pustule points to a bacterial skin infection. A rash within hours of exposure is too early for erythema migrans.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "cps-lyme",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate management for him?",
        options: [
          "cephalexin by mouth for 7 days",
          "clotrimazole cream for 2 weeks",
          "doxycycline by mouth for 10 days",
          "No treatment, reassess in 1 week",
          "Serology first, treat only if positive"
        ],
        correct: 2,
        explanation:
          "The Canadian Paediatric Society advises diagnosing and treating erythema migrans without laboratory confirmation, because antibodies are often not detectable in the first 4 weeks, and lists doxycycline for 10 days as a treatment for early localized disease, noting data on the safety of short courses in children. Waiting for serology or reassessing in a week delays treatment and risks spread of infection. Cephalexin treats cellulitis and clotrimazole treats tinea, neither of which he has.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "cps-lyme",
      },
    ],
    sources: [
      { id: "cps-lyme", citation: "Onyett H, updated by McDonald J, Le Saux N, Canadian Paediatric Society Infectious Diseases and Immunization Committee. Lyme disease in Canada: focus on children. Canadian Paediatric Society practice point. 2020. Reaffirmed 2026.", url: "https://cps.ca/en/documents/position/lyme-disease-children" },
    ],
    ...META,
    version: 2,
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
          "A full, tense anterior fontanelle when the infant is calm is a sign of raised intracranial pressure, and with inconsolable irritability and a high-pitched cry it makes bacterial meningitis likely. NICE lists a bulging fontanelle and a high-pitched cry as red flags, and warns that classic signs of meningitis are often absent in infants. Fever, tachycardia and reduced feeding occur in many febrile illnesses and are less specific. Normal capillary refill does not exclude meningitis.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "nice-fever-under-5",
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
    sources: [S.cpsMening, S.niceFever],
    ...META,
  },

  /* 46 ------------------------------------------------------------------ */
  {
    id: "pediatric-fever-46",
    topic: "pediatric-fever",
    title: "Worse again after the flu",
    stem:
      "A 6-year-old girl is brought to the emergency department with fast breathing and right sided chest pain since this morning. Five days ago she and her 9-year-old brother tested positive for influenza A. She was improving, but last night her fever returned to 40.0°C and her cough worsened. She is healthy and immunized but did not receive influenza vaccine this year. She is tired and breathing fast with intercostal indrawing. There are bronchial breath sounds over the right chest. Her hands are cool, and capillary refill is 4 seconds. The chest X-ray shows consolidation in two right lobes with thin walled air cysts and a small effusion.",
    vitals: { temperature: "39.6°C oral", pulse: "152/minute", resp: "44/minute", bp: "98/58 mmHg", o2sat: "88% on room air", weight: "20 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following empiric antibiotic regimens is most appropriate for her?",
        options: [
          "amoxicillin by mouth",
          "ampicillin IV alone",
          "azithromycin by mouth",
          "ceftriaxone IV alone",
          "ceftriaxone with vancomycin IV"
        ],
        correct: 4,
        explanation:
          "Secondary bacterial pneumonia after influenza with rapidly progressing multilobar disease and air cysts, or pneumatoceles, raises concern for Staphylococcus aureus, including MRSA. The Canadian Paediatric Society advises a third generation cephalosporin for severe pneumonia and suggests adding vancomycin when there is rapidly progressing multilobar disease or pneumatoceles. Ampicillin alone suits a child admitted without life-threatening illness. Oral amoxicillin and azithromycin are for outpatients, and pneumococcal resistance to azithromycin is increasingly common. The statement also advises strong consideration of oseltamivir for a hospitalized child with influenza.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "cps-cap",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings in her case best shows reduced perfusion?",
        options: [
          "Capillary refill of 4 seconds",
          "O2 saturation of 88%",
          "Respiratory rate of 44/minute",
          "Right sided chest pain",
          "Temperature of 39.6°C"
        ],
        correct: 0,
        explanation:
          "The Canadian Paediatric Society lists perfusion indicators such as capillary refill, pulse pressure, skin colour and temperature, along with heart rate and mental status, as the signs used to recognize sepsis. Her capillary refill of 4 seconds with cool hands shows poor perfusion even though her BP is normal. Low saturation and fast breathing reflect the lung disease. Chest pain comes from pleural inflammation, and fever alone does not show poor perfusion.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "cps-sepsis",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Her 9-year-old brother is also examined. He has a fever of 38.7°C, a dry cough and muscle aches for 5 days, with steady improvement. He is drinking well, his chest is clear, his breathing is comfortable and his O2 saturation is 98% on room air.",
        prompt: "Which of the following is the most appropriate management for her brother?",
        options: [
          "amoxicillin to prevent pneumonia",
          "azithromycin by mouth for 5 days",
          "Blood culture and chest X-ray",
          "Ceftriaxone IM once",
          "Supportive care without antibiotics"
        ],
        correct: 4,
        explanation:
          "He has uncomplicated influenza that is improving, with a clear chest and normal saturation, so antibiotics are not indicated. Antibiotics do not treat influenza, and they add side effects and resistance. His family should return if he worsens again, as his sister did, since influenza can be followed by bacterial pneumonia. Tests and a dose of ceftriaxone are not needed in a child who is improving.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "cps-cap",
      },
    ],
    sources: [S.cpsCap, S.cpsSepsis],
    ...META,
    version: 2,
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
          "Ulcers on the tongue and soft palate with small oval vesicles on the palms, soles and buttocks during a daycare outbreak are typical of hand, foot and mouth disease from enteroviruses such as coxsackievirus A16. Herpetic gingivostomatitis causes swollen, bleeding gums and lip lesions, and his gums are normal. Varicella covers a larger area, including the scalp, and spares the palms and soles. Kawasaki disease and measles do not cause oral ulcers with vesicles on the hands and feet.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "who-hfmd",
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
          "Dry mucous membranes and one wet diaper in 10 hours show dehydration from painful swallowing, and hand, foot and mouth disease is a self-limited enteroviral infection, so treatment is analgesia followed by oral rehydration. Antibiotics have no role in a viral infection. Acyclovir does not treat enteroviruses, and nystatin treats candida. Viscous lidocaine is best avoided in young children, who may swallow a toxic dose.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "who-hfmd",
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
    sources: [S.whoHfmd, S.aapFever],
    ...META,
  },
];
