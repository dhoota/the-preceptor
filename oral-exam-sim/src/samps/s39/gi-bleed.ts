// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  "icg": {"id": "icg", "citation": "Barkun AN, Almadi M, Kuipers EJ, et al. Management of nonvariceal upper gastrointestinal bleeding: guideline recommendations from the International Consensus Group. Ann Intern Med. 2019.", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7233308/"},
  "acg-ugib": {"id": "acg-ugib", "citation": "Laine L, Barkun AN, Saltzman JR, Martel M, Leontiadis GI. ACG clinical guideline: upper gastrointestinal and ulcer bleeding. Am J Gastroenterol. 2021."},
  "acg-cag": {"id": "acg-cag", "citation": "Abraham NS, Barkun AN, Sauer BG, et al. American College of Gastroenterology and Canadian Association of Gastroenterology clinical practice guideline: management of anticoagulants and antiplatelets during acute gastrointestinal bleeding and the periendoscopic period. Am J Gastroenterol. 2022."},
  "aasld": {"id": "aasld", "citation": "Kaplan DE, Bosch J, Ripoll C, et al. AASLD practice guidance on risk stratification and management of portal hypertension and varices in cirrhosis. Hepatology. 2024."},
  "villanueva": {"id": "villanueva", "citation": "Villanueva C, Colomo A, Bosch A, et al. Transfusion strategies for acute upper gastrointestinal bleeding. N Engl J Med. 2013."},
  "blatchford": {"id": "blatchford", "citation": "Blatchford O, Murray WR, Blatchford M. A risk score to predict need for treatment for upper gastrointestinal haemorrhage. Lancet. 2000."},
  "stanley": {"id": "stanley", "citation": "Stanley AJ, Laine L, Dalton HR, et al. Comparison of risk scoring systems for patients presenting with upper gastrointestinal bleeding: international multicentre prospective study. BMJ. 2017."},
  "oakland": {"id": "oakland", "citation": "Oakland K, Jairath V, Uberoi R, et al. Derivation and validation of a novel risk score for safe discharge after acute lower gastrointestinal bleeding: a modelling study. Lancet Gastroenterol Hepatol. 2017."},
  "bsg-lgib": {"id": "bsg-lgib", "citation": "Oakland K, Chadwick G, East JE, et al. Diagnosis and management of acute lower gastrointestinal bleeding: guidelines from the British Society of Gastroenterology. Gut. 2019."},
  "acg-lgib": {"id": "acg-lgib", "citation": "Sengupta N, Feuerstein JD, Jairath V, et al. Management of patients with acute lower gastrointestinal bleeding: an updated ACG guideline. Am J Gastroenterol. 2023."},
  "lau": {"id": "lau", "citation": "Lau JYW, Yu Y, Tang RSY, et al. Timing of endoscopy for acute upper gastrointestinal bleeding. N Engl J Med. 2020.", "url": "https://doi.org/10.1056/NEJMoa1912484"},
  "tc-doac": {"id": "tc-doac", "citation": "Thrombosis Canada. Clinical guide: DOACs: management of bleeding. 2024.", "url": "https://thrombosiscanada.ca/clinical_guides/pdfs/MANAGEMENTOFBLEEDINGINPATIENTS_75.pdf"},
  "cbs": {"id": "cbs", "citation": "Trudeau JD, Dawe P, Shih AW. Massive hemorrhage and emergency transfusion. In: Clinical Guide to Transfusion. Canadian Blood Services. 2021.", "url": "https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion"},
  "halt-it": {"id": "halt-it", "citation": "HALT-IT Trial Collaborators. Effects of a high-dose 24-h infusion of tranexamic acid on death and thromboembolic events in patients with acute gastrointestinal bleeding (HALT-IT): an international randomised, double-blind, placebo-controlled trial. Lancet. 2020.", "url": "https://doi.org/10.1016/S0140-6736(20)30848-5"},
  "rosen-ch20": {"id": "rosen-ch20", "citation": "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 20, Hemoptysis.", "url": "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html"},
  "rosen-ch26": {"id": "rosen-ch26", "citation": "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 26, Gastrointestinal Bleeding.", "url": "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html"},
  "rosen-ch56": {"id": "rosen-ch56", "citation": "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 56, Oral Medicine.", "url": "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html"},
  "rosen-ch75": {"id": "rosen-ch75", "citation": "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 75, Esophagus, Stomach, and Duodenum.", "url": "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html"},
  "rosen-ch184": {"id": "rosen-ch184", "citation": "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 184, The Morbidly Obese Patient.", "url": "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html"},
  "aao-epistaxis": {"id": "aao-epistaxis", "citation": "Tunkel DE, Anne S, Payne SC, et al. Clinical practice guideline: nosebleed (epistaxis). American Academy of Otolaryngology-Head and Neck Surgery Foundation. Otolaryngol Head Neck Surg. 2020.", "url": "https://doi.org/10.1177/0194599819890327"},
  "acr-hemoptysis": {"id": "acr-hemoptysis", "citation": "Expert Panel on Thoracic Imaging, Olsen KM, Manouchehr-Pour S, et al. ACR Appropriateness Criteria hemoptysis. J Am Coll Radiol. 2020.", "url": "https://pubmed.ncbi.nlm.nih.gov/32370959/"},
  "hc-nsaid-pregnancy": {"id": "hc-nsaid-pregnancy", "citation": "Health Canada. Use of non-steroidal anti-inflammatory drugs (NSAIDs) beyond 20 weeks of pregnancy and risk of kidney damage in unborn babies, leading to low amniotic fluid. Public advisory. 2020.", "url": "https://recalls-rappels.canada.ca/en/alert-recall/use-non-steroidal-anti-inflammatory-drugs-nsaids-beyond-20-weeks-pregnancy-and-risk"},
  "ese-es-gcai": {"id": "ese-es-gcai", "citation": "Beuschlein F, Else T, Bancos I, et al. European Society of Endocrinology and Endocrine Society joint clinical guideline: diagnosis and therapy of glucocorticoid-induced adrenal insufficiency. J Clin Endocrinol Metab. 2024.", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11180513/"},
  "beran-mu": {"id": "beran-marginal-ulcer", "citation": "Beran A, Shaear M, Al-Mudares S, et al. Predictors of marginal ulcer after gastric bypass: a systematic review and meta-analysis. J Gastrointest Surg. 2023.", "url": "https://doi.org/10.1007/s11605-023-05619-7"},
  "hht2020": {"id": "hht-2020", "citation": "Faughnan ME, Mager JJ, Hetts SW, et al. Second international guidelines for the diagnosis and management of hereditary hemorrhagic telangiectasia. Ann Intern Med. 2020.", "url": "https://doi.org/10.7326/M20-1443"},
  "srygley": {"id": "srygley-ugib", "citation": "Srygley FD, Gerardo CJ, Tran T, Fisher DA. Does this patient have a severe upper gastrointestinal bleed? JAMA. 2012.", "url": "https://pubmed.ncbi.nlm.nih.gov/22416103/"},
  "sdcep": {"id": "sdcep-anticoagulants", "citation": "Scottish Dental Clinical Effectiveness Programme. Management of dental patients taking anticoagulants or antiplatelet drugs. 2nd ed. 2022.", "url": "https://www.sdcep.org.uk/published-guidance/anticoagulants-and-antiplatelets/"},
  "araki": {"id": "araki-vkdb", "citation": "Araki S, Shirahata A. Vitamin K deficiency bleeding in infancy. Nutrients. 2020.", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7146284/"},
  "piccirillo": {"id": "piccirillo-peds-gib", "citation": "Piccirillo M, Pucinischi V, Mennini M, et al. Gastrointestinal bleeding in children: diagnostic approach. Ital J Pediatr. 2024.", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10807079/"},
  "spencer": {"id": "spencer-ptb", "citation": "Spencer GM, Wilson CA, Davidson J, et al. International practice variation in post-tonsillectomy hemorrhage: a survey study of pediatric otolaryngologists. World J Otorhinolaryngol Head Neck Surg. 2025.", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13398467/"},
  "secilmis": {"id": "intussusception-neuro", "citation": "Secilmis Y, Gumustekin Bilgin S, Dogan AB. Neurologic presentations of pediatric intussusception lead to diagnostic delay and increased need for surgery. Am Surg. 2026.", "url": "https://pubmed.ncbi.nlm.nih.gov/42092742/"},
  "trekk-ge": {"id": "trekk-gastroenteritis", "citation": "TREKK. Bottom line recommendations: gastroenteritis. Version 5.0. 2025.", "url": "https://trekk.ca/resources/bottom-line-recommendations-gastroenteritis"},
  "apsa-intuss": {"id": "apsa-intussusception", "citation": "Kelley-Quon LI, Arthur LG, Williams RF, et al. Management of intussusception in children: a systematic review. American Pediatric Surgical Association Outcomes and Evidence-Based Practice Committee. J Pediatr Surg. 2021.", "url": "https://pubmed.ncbi.nlm.nih.gov/33158508/"},
  "romano": {"id": "sigenp-peds-gib", "citation": "Romano C, Oliva S, Martellossi S, et al. Pediatric gastrointestinal bleeding: perspectives from the Italian Society of Pediatric Gastroenterology. World J Gastroenterol. 2017.", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5330817/"},
  "fpiap": {"id": "sigenp-fpiap", "citation": "Coppola S, Carucci L, Anania C, et al. Diagnosis and management of food protein-induced allergic proctocolitis in the pediatric age: a position paper from the Italian Society for Pediatric Gastroenterology, Hepatology, and Nutrition and the Italian Society for Pediatric Allergy and Immunology. Pediatr Allergy Immunol. 2025.", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12706178/"},
  "applegate": {"id": "applegate", "citation": "Applegate KE. Evidence-based diagnosis of malrotation and volvulus. Pediatr Radiol. 2009.", "url": "https://pubmed.ncbi.nlm.nih.gov/19308378/"},
  "cps-vitk": {"id": "cps-vitk", "citation": "Ng E, Loewy AD. Guidelines for vitamin K prophylaxis in newborns. Canadian Paediatric Society and College of Family Physicians of Canada position statement. Paediatr Child Health. 2018.", "url": "https://cps.ca/en/documents/position/vitamin-k-prophylaxis-in-newborns"},
  "freedman": {"id": "freedman", "citation": "Freedman SB, Xie J, Neufeld MS, et al. Shiga toxin-producing Escherichia coli infection, antibiotics, and risk of developing hemolytic uremic syndrome: a meta-analysis. Clin Infect Dis. 2016."},
  "wfh": {"id": "wfh", "citation": "Srivastava A, Santagostino E, Dougall A, et al. WFH guidelines for the management of hemophilia, 3rd edition. Haemophilia. 2020."},
  "asge-preg": {"id": "asge-preg", "citation": "ASGE Standard of Practice Committee, Shergill AK, Ben-Menachem T, et al. Guidelines for endoscopy in pregnant and lactating women. Gastrointest Endosc. 2012."},
  "malette": {"id": "malette", "citation": "Malette v. Shulman. Ontario Court of Appeal. 72 OR (2d) 417. 1990.", "url": "https://www.canlii.org/en/on/onca/doc/1990/1990canlii6868/1990canlii6868.html"},
  "espghan-bb": {"id": "espghan-bb", "citation": "Mubarak A, Benninga MA, Broekaert I, et al. Diagnosis, management, and prevention of button battery ingestion in childhood: a European Society for Paediatric Gastroenterology Hepatology and Nutrition position paper. J Pediatr Gastroenterol Nutr. 2021."},
  "sung": {"id": "sung", "citation": "Sung JJ, Lau JY, Ching JY, et al. Continuation of low-dose aspirin therapy in peptic ulcer bleeding: a randomized trial. Ann Intern Med. 2010."},
  "mint": {"id": "mint", "citation": "Carson JL, Brooks MM, Hebert PC, et al. Restrictive or liberal transfusion strategy in myocardial infarction and anemia. N Engl J Med. 2023."},
  "gerson": {"id": "gerson", "citation": "Gerson LB, Fidler JL, Cave DR, Leighton JA. ACG clinical guideline: diagnosis and management of small bowel bleeding. Am J Gastroenterol. 2015."},
  "brandt": {"id": "brandt", "citation": "Brandt LJ, Feuerstadt P, Longstreth GF, Boley SJ. ACG clinical guideline: epidemiology, risk factors, patterns of presentation, diagnosis, and management of colon ischemia. Am J Gastroenterol. 2015."},
  "cag-vte": {"id": "cag-vte", "citation": "Nguyen GC, Bernstein CN, Bitton A, et al. Consensus statements on the risk, prevention, and treatment of venous thromboembolism in inflammatory bowel disease: Canadian Association of Gastroenterology. Gastroenterology. 2014."},
  "bsg-ibd": {"id": "bsg-ibd", "citation": "Lamb CA, Kennedy NA, Raine T, et al. British Society of Gastroenterology consensus guidelines on the management of inflammatory bowel disease in adults. Gut. 2019."},
  "aga-ida": {"id": "aga-ida", "citation": "Ko CW, Siddique SM, Patel A, et al. AGA clinical practice guidelines on the gastrointestinal evaluation of iron deficiency anemia. Gastroenterology. 2020."},
  "share": {"id": "share", "citation": "Ozen S, Marks SD, Brogan P, et al. European consensus-based recommendations for diagnosis and treatment of immunoglobulin A vasculitis: the SHARE initiative. Rheumatology (Oxford). 2019."},
  "aabb": {"id": "aabb", "citation": "Carson JL, Stanworth SJ, Guyatt G, et al. Red blood cell transfusion: 2023 AABB international guidelines. JAMA. 2023.", "url": "https://pubmed.ncbi.nlm.nih.gov/37824153/"},
  "cbs-peds": {"id": "cbs-peds", "citation": "Lau W. Neonatal and pediatric transfusion. In: Clinical Guide to Transfusion. Canadian Blood Services. 2017.", "url": "https://professionaleducation.blood.ca/en/transfusion/clinical-guide/neonatal-and-pediatric-transfusion"},
  "baveno": {"id": "baveno", "citation": "de Franchis R, Bosch J, Garcia-Tsao G, Reiberger T, Ripoll C, Baveno VII Faculty. Baveno VII: renewing consensus in portal hypertension. J Hepatol. 2022."},
} satisfies Record<string, Source>;

export const GI_BLEED_S39_SAMPS: Samp[] = [
  {
    "id": "gi-bleed-16",
    "topic": "gi-bleed",
    "title": "Black stools and bleeding gums",
    "stem": "A 24-year-old woman presents to the emergency department with 2 days of black stools and light-headedness when she stands. For 5 days her gums have bled when she brushes her teeth, and her period, which began 6 days ago, is heavier than usual. She took ibuprofen 400 mg three times daily for 3 days for cramps. She had a cold 3 weeks ago. She takes no other medications, drinks alcohol rarely and has no liver disease. She is pale. There are blood blisters inside both cheeks and petechiae on both legs. There is no lymphadenopathy or splenomegaly. Rectal examination shows black tarry stool. Hemoglobin 88 g/L, WBC 6.8 x 10^9/L with a normal differential, platelets 5 x 10^9/L, INR 1.0, fibrinogen 3.1 g/L. The blood film shows few, large platelets with no blasts and no fragmented red cells.",
    "vitals": {
      "temperature": "36.9°C oral",
      "pulse": "112/minute",
      "resp": "18/minute",
      "bp": "102/64 mmHg",
      "o2sat": "99% on room air",
      "weight": "61 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following best explains why she is bleeding from several sites at once?",
        "options": [
          "Acute myeloid leukemia",
          "Immune thrombocytopenia",
          "NSAID-induced peptic ulcer",
          "Thrombotic microangiopathy",
          "Von Willebrand disease"
        ],
        "correct": 1,
        "explanation": "An isolated platelet count of 5 x 10^9/L with large platelets on the film, a normal white count and a normal INR after a recent viral illness fits immune thrombocytopenia. It explains the gum bleeding, oral blood blisters, petechiae, heavy period and melena together. Leukemia is unlikely with a normal differential and no blasts. A thrombotic microangiopathy would show fragmented red cells. An NSAID ulcer could explain the melena but not the mucosal and skin bleeding. Von Willebrand disease does not cause a platelet count this low.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "icr-itp"
      },
      {
        "id": "q2",
        "kind": "menu",
        "select": 2,
        "prompt": "Which of the following treatments should she receive now to raise her platelet count quickly?",
        "options": [
          "desmopressin 0.3 mcg/kg IV",
          "immune globulin 1 g/kg IV",
          "methylprednisolone 1 g IV",
          "Plasma exchange",
          "rituximab 375 mg/m2 IV",
          "vitamin K 10 mg IV"
        ],
        "correct": [
          1,
          2
        ],
        "explanation": "Melena with a hemoglobin of 88 g/L and a platelet count of 5 x 10^9/L is a life-threatening ITP bleed. The consensus report advises an IV corticosteroid combined with IV immune globulin when the count must rise within 24 hours. Rituximab takes 3 to 4 weeks to work, so it does not help now. Plasma exchange is listed as not indicated in ITP. Her INR is 1.0, so vitamin K adds nothing. Desmopressin is suggested only when reduced kidney function adds to bleeding, and her problem is platelet destruction.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "icr-itp"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "She passes another large black stool. Her pulse is now 124/minute and BP 92/58 mmHg. Repeat hemoglobin is 74 g/L.",
        "prompt": "Which of the following blood products is most appropriate for her now?",
        "options": [
          "Cryoprecipitate 10 units IV",
          "Frozen plasma 15 mL/kg IV",
          "Platelets and red cells now",
          "Prothrombin complex concentrate IV",
          "Red cells alone for now"
        ],
        "correct": 2,
        "explanation": "She is now in shock from ongoing bleeding with a platelet count of 5 x 10^9/L. Red cells restore oxygen delivery, and the consensus report states that platelet transfusion must not be postponed in life-threatening ITP bleeding. Giving red cells alone leaves the cause of the bleeding untreated. Her fibrinogen is 3.1 g/L, so cryoprecipitate is not needed. Her INR is 1.0, so frozen plasma and prothrombin complex concentrate correct nothing.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "icr-itp"
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "After treatment her platelet count rises to 58 x 10^9/L. Her pulse is 96/minute and she has had no further melena.",
        "prompt": "Which of the following is the most appropriate next step to find and treat the source of her melena?",
        "options": [
          "Capsule endoscopy",
          "Colonoscopy after bowel preparation",
          "CT angiography of the abdomen",
          "Tagged red cell scan",
          "Upper endoscopy within 24 hours"
        ],
        "correct": 4,
        "explanation": "Melena after several days of ibuprofen points to an upper source, and upper endoscopy within 24 hours both finds and treats it. Her platelet count of 58 x 10^9/L is now high enough for an endoscopic procedure. Colonoscopy looks in the wrong place for melena. CT angiography and a tagged red cell scan need active bleeding and cannot treat an ulcer. Capsule endoscopy is used for small bowel bleeding after normal upper and lower endoscopy.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "icg"
      }
    ],
    "sources": [
    {
      "id": "icr-itp",
      "citation": "Provan D, Arnold DM, Bussel JB, et al. Updated international consensus report on the investigation and management of primary immune thrombocytopenia. Blood Adv. 2019.",
      "url": "https://doi.org/10.1182/bloodadvances.2019000812"
    },
    {
      "id": "icg",
      "citation": "Barkun AN, Almadi M, Kuipers EJ, et al. Management of nonvariceal upper gastrointestinal bleeding: guideline recommendations from the International Consensus Group. Ann Intern Med. 2019.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7233308/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    "id": "gi-bleed-17",
    "topic": "gi-bleed",
    "title": "Bleeding and drowsiness in a young infant",
    "stem": "A 6-week-old boy is brought to the emergency department because of two stools streaked with bright red blood and new bruises on his chest. His parents say he has been sleepier than usual since this morning and fed poorly at his last two feeds. He was born at term at home, and his parents declined all newborn injections. He received no vitamin K by any route. He is exclusively breastfed. He has had no fever or vomiting. His mother takes no medications. He is pale and difficult to rouse. The anterior fontanelle is full. There are two bruises on the chest. The abdomen is soft.",
    "vitals": {
      "temperature": "36.9°C rectal",
      "pulse": "172/minute",
      "resp": "40/minute",
      "bp": "78/46 mmHg",
      "o2sat": "98% on room air",
      "weight": "4.6 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "update": "INR 6.4, PTT 82 seconds (normal 25 to 38), platelets 356 x 10^9/L, fibrinogen 2.6 g/L, hemoglobin 88 g/L.",
        "prompt": "Which of the following is the most likely cause of his bleeding?",
        "options": [
          "Anal fissure from hard stools",
          "Cow's milk protein proctocolitis",
          "Immune thrombocytopenia",
          "Inherited factor VIII deficiency",
          "Vitamin K deficiency bleeding"
        ],
        "correct": 4,
        "explanation": "A breastfed infant who did not receive vitamin K at birth is at risk of late vitamin K deficiency bleeding, which typically presents between 2 and 12 weeks. His INR of 6.4 with a prolonged PTT, normal platelets and normal fibrinogen fits deficiency of the vitamin K dependent factors. Factor VIII deficiency prolongs the PTT but leaves the INR normal. Immune thrombocytopenia is excluded by a platelet count of 356 x 10^9/L. A fissure or proctocolitis would not explain bruising and a coagulopathy.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "cps-vitk"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following investigations is most urgent for him now?",
        "options": [
          "Abdominal ultrasound",
          "CT head without contrast",
          "Skeletal survey",
          "Stool culture",
          "Upper GI contrast study"
        ],
        "correct": 1,
        "explanation": "Drowsiness, poor feeding and a full fontanelle in an infant with a coagulopathy suggest intracranial hemorrhage, the most common serious site of late vitamin K deficiency bleeding. CT head without contrast is the most urgent test. A skeletal survey belongs in the assessment of unexplained bruising but does not change the next hour of care. Abdominal ultrasound, stool culture and a contrast study do not address the threat to his brain.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "araki-vkdb"
      },
      {
        "id": "q3",
        "kind": "menu",
        "prompt": "Which of the following treatments are most appropriate to correct his coagulopathy now?",
        "options": [
          "Cryoprecipitate 5 mL/kg IV",
          "Desmopressin 0.3 mcg/kg IV",
          "Frozen plasma 15 mL/kg IV",
          "Platelets 10 mL/kg IV",
          "Tranexamic acid 15 mg/kg IV",
          "Vitamin K 1 mg IV",
          "Vitamin K 1 mg PO"
        ],
        "select": 2,
        "correct": [
          2,
          5
        ],
        "explanation": "Vitamin K given IV starts to correct the deficiency within hours, and the IV route is used because he may be bleeding intracranially. Frozen plasma, or prothrombin complex concentrate where local protocols allow, replaces the missing factors at once while vitamin K takes effect. Oral vitamin K is too slow and less reliable for active serious bleeding. His platelets and fibrinogen are normal, so platelets and cryoprecipitate do not help. Desmopressin and tranexamic acid do not correct a vitamin K deficiency.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "araki-vkdb"
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "CT head shows a small subdural hemorrhage, and neurosurgery is consulted. His parents ask how this could be prevented in a future baby.",
        "prompt": "Which of the following is the most effective way to prevent this in their future newborns?",
        "options": [
          "IM vitamin K at birth",
          "Maternal vitamin K supplements",
          "Oral vitamin K once at birth",
          "Routine newborn coagulation tests",
          "Switching to formula feeding"
        ],
        "correct": 0,
        "explanation": "The Canadian Paediatric Society recommends a single IM dose of vitamin K, 0.5 to 1.0 mg, for every newborn, and this reliably prevents vitamin K deficiency bleeding. A single oral dose is less effective. Oral vitamin K is offered only when parents decline the injection, and then as repeated doses. Maternal supplements are not the recommended method of prevention. Coagulation tests do not prevent bleeding. Formula feeding is not needed when the infant receives IM vitamin K, and breastfeeding should be supported.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "cps-vitk"
      }
    ],
    "sources": [S["cps-vitk"], S["araki"]],
    ...META,
  },
  {
    "id": "gi-bleed-18",
    "topic": "gi-bleed",
    "title": "Blood in a newborn's spit-up",
    "stem": "A 3-day-old girl is brought to the emergency department by her parents after she spat up milk streaked with dark red blood twice this morning. She was born at term by uncomplicated vaginal delivery and received vitamin K IM at birth. She breastfeeds every 2 to 3 hours. Her mother says breastfeeding has been painful since yesterday. The infant has had four wet diapers today and one dark stool. She is alert, pink and vigorous with a strong suck. The abdomen is soft and not distended. There is no bruising or petechiae. The nose and mouth show no bleeding site.",
    "vitals": {
      "temperature": "36.9°C rectal",
      "pulse": "142/minute",
      "resp": "44/minute",
      "o2sat": "99% on room air",
      "weight": "3.3 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most useful next step in her assessment?",
        "options": [
          "Abdominal radiograph",
          "Coagulation studies",
          "Examine the mother's breasts",
          "Nasogastric tube lavage",
          "Upper GI contrast study"
        ],
        "correct": 2,
        "explanation": "A well, vigorous newborn with blood-streaked spit-up and a mother with painful breastfeeding most likely swallowed maternal blood from a cracked nipple. Examining the mother's breasts is quick and often answers the question. She received vitamin K and has no bruising, so coagulation studies are less useful first. Her soft, undistended abdomen makes obstruction unlikely, so radiographs and a contrast study are not needed. Nasogastric lavage is uncomfortable and does not identify the source of the blood.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "piccirillo-peds-gib"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "The mother has a cracked, bleeding nipple on the left.",
        "prompt": "Which of the following tests would best show that the blood in the spit-up is maternal?",
        "options": [
          "Apt test on the bloody material",
          "Direct antiglobulin test on the infant",
          "Guaiac test on the bloody material",
          "Kleihauer Betke test on the mother",
          "Peripheral blood smear of the infant"
        ],
        "correct": 0,
        "explanation": "The Apt test mixes the blood with alkali. Fetal hemoglobin resists denaturation and stays pink, while adult hemoglobin turns brown, so a brown result shows swallowed maternal blood. A guaiac test confirms blood but cannot tell whose it is. The Kleihauer Betke test detects fetal cells in maternal blood, which is the reverse question. A direct antiglobulin test and a smear look at hemolysis in the infant, not the source of the blood.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "piccirillo-peds-gib"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "The Apt test shows adult hemoglobin. The infant remains well.",
        "prompt": "Which of the following is the most appropriate plan for this infant?",
        "options": [
          "Admit for serial hemoglobin checks",
          "Admit for upper endoscopy",
          "Discharge with breastfeeding support",
          "Stop breastfeeding and give formula",
          "Transfer to a neonatal intensive care unit"
        ],
        "correct": 2,
        "explanation": "The blood came from the mother, so the infant has no GI bleed and needs no further testing. She is well and feeding, so she can go home with lactation support for the cracked nipple and a plan to return if she becomes unwell. Stopping breastfeeding is not necessary because swallowed maternal blood is harmless to the infant. Serial hemoglobin checks, endoscopy and neonatal intensive care are not indicated when the blood is not hers.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "piccirillo-peds-gib"
      }
    ],
    "sources": [S["piccirillo"]],
    ...META,
  },
  {
    "id": "gi-bleed-19",
    "topic": "gi-bleed",
    "title": "Vomiting blood after throat surgery",
    "stem": "A 15-year-old boy is brought to the emergency department by his parents after he vomited about a cup of dark blood and clots at home. He had a tonsillectomy for recurrent tonsillitis 6 days ago. He has been taking acetaminophen for pain and has been eating little. His mother says he has been swallowing often over the past hour. He has no known bleeding disorder, and there is no family history of bleeding. He is pale and anxious and keeps spitting blood-tinged saliva. His abdomen is soft and non-tender.",
    "vitals": {
      "temperature": "37.2°C oral",
      "pulse": "136/minute",
      "resp": "24/minute",
      "bp": "96/58 mmHg",
      "o2sat": "98% on room air",
      "weight": "58 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following examinations is most likely to identify the source of his bleeding?",
        "options": [
          "Anterior rhinoscopy for a septal vessel",
          "Chest auscultation for crackles",
          "Digital rectal examination",
          "Inspection of the tonsillar fossae",
          "Palpation for hepatosplenomegaly"
        ],
        "correct": 3,
        "explanation": "Delayed post-tonsillectomy hemorrhage is most common 5 to 10 days after surgery, when the eschar separates. Swallowed blood from the tonsillar bed can be vomited and look like hematemesis, so the tonsillar fossae should be inspected first with a good light and suction. Nothing in the stem suggests a nosebleed or a lung source. A rectal examination may show melena from swallowed blood but will not locate the source. He has no history suggesting liver disease.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "spencer-ptb"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following of his vital signs is the best early sign of significant blood loss?",
        "options": [
          "BP of 96/58 mmHg",
          "Oxygen saturation of 98%",
          "Pulse of 136/minute",
          "Respiratory rate of 24/minute",
          "Temperature of 37.2°C"
        ],
        "correct": 2,
        "explanation": "Adolescents, like younger children, keep a normal BP until they have lost a large part of their blood volume, so tachycardia is the earliest reliable sign of hemorrhage. His pulse of 136/minute is well above the normal range for a 15-year-old. His BP of 96/58 mmHg is not yet low and should not reassure. His oxygen saturation, respiratory rate and temperature do not reflect blood loss.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "piccirillo-peds-gib"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following blood tests is most important to send now?",
        "options": [
          "Blood culture",
          "C-reactive protein",
          "Group and crossmatch",
          "Liver enzymes",
          "Serum lipase"
        ],
        "correct": 2,
        "explanation": "He has tachycardia and has vomited a large volume of blood, so blood may be needed soon, and crossmatch should be sent at once with a CBC. Blood culture and C-reactive protein look for infection, which does not explain his bleeding. Liver enzymes and lipase do not help manage bleeding from a tonsillar bed.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "cbs"
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "A clot sits in the left tonsillar fossa with fresh oozing around it. He vomits another 150 mL of blood.",
        "prompt": "Which of the following is the most appropriate next step?",
        "options": [
          "Admit for observation and IV fluids",
          "Discharge with ice water gargles",
          "Emergency upper endoscopy",
          "Start amoxicillin clavulanate PO",
          "Urgent operative control by otolaryngology"
        ],
        "correct": 4,
        "explanation": "Active bleeding from the tonsillar fossa with repeated hematemesis needs urgent control in the operating room by otolaryngology, with the airway protected. Observation alone is unsafe because a small herald bleed can precede a large one. Ice water gargles are not sufficient for active bleeding. The source is the pharynx, not the stomach, so upper endoscopy would not treat it. Antibiotics do not stop bleeding.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "spencer-ptb"
      }
    ],
    "sources": [S["cbs"], S["piccirillo"], S["spencer"]],
    ...META,
  },
  {
    "id": "gi-bleed-20",
    "topic": "gi-bleed",
    "title": "Hematemesis in a toddler with drooling",
    "stem": "A 2-year-old boy is brought to the emergency department after he vomited about 30 mL of bright red blood, with no retching beforehand. For the past 6 days he has refused solid food, drooled more than usual and had a low-grade fever. His parents thought he was teething. Last week they found a television remote control open with its battery missing. He has no past medical history and takes no medications. He is alert, pale and crying. The nose and oropharynx show no bleeding. The chest is clear and the abdomen is soft.",
    "vitals": {
      "temperature": "37.9°C rectal",
      "pulse": "150/minute",
      "resp": "30/minute",
      "bp": "90/56 mmHg",
      "o2sat": "97% on room air",
      "weight": "12 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely cause of his hematemesis?",
        "options": [
          "Erosive esophagitis from reflux",
          "Esophageal button battery injury",
          "Mallory Weiss tear from vomiting",
          "Peptic ulcer disease",
          "Swallowed blood from epistaxis"
        ],
        "correct": 1,
        "explanation": "Six days of drooling and refusal of solids after a battery went missing suggest an impacted esophageal button battery. Hematemesis in that setting may be a herald bleed from erosion into a major vessel such as the aorta. He had no retching before the blood, which argues against a Mallory Weiss tear. The nose and pharynx show no bleeding. Reflux esophagitis and peptic ulcer disease do not explain the missing battery or the new drooling.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "espghan-bb"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "A chest radiograph shows a 20 mm round radiopaque object with a double ring outline in the mid esophagus.",
        "prompt": "Which of the following is the most appropriate next step?",
        "options": [
          "Honey 10 mL by mouth every 10 minutes",
          "Observation for passage into the stomach",
          "Repeat chest radiograph in 4 hours",
          "Upper GI contrast study today",
          "Urgent removal with cardiothoracic backup"
        ],
        "correct": 4,
        "explanation": "An esophageal button battery with hematemesis after several days suggests a fistula to a major vessel. The battery needs urgent removal in the operating room with cardiothoracic surgery available, often after CT angiography if he is stable. Honey is meant for recent ingestions of 12 hours or less, not for a battery in place for days. Waiting for passage or a repeat film delays removal while injury continues. A contrast study adds delay and aspiration risk.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "espghan-bb"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "While awaiting the operating room he vomits 200 mL of bright red blood. Pulse 180/minute, BP 64/30 mmHg.",
        "prompt": "Which of the following is the most appropriate first blood product and volume?",
        "options": [
          "Albumin 5% 20 mL/kg IV",
          "Crossmatched red cells 20 mL/kg IV",
          "Frozen plasma 10 mL/kg IV",
          "Normal saline 60 mL/kg IV",
          "O negative red cells 20 mL/kg IV"
        ],
        "correct": 4,
        "explanation": "He is in hemorrhagic shock, so uncrossmatched group O RhD negative red cells, reserved for children and females of childbearing potential, should be given at once. For a 12 kg child, 20 mL/kg is 240 mL. Waiting for crossmatched cells delays blood he needs now. Large crystalloid or albumin volumes dilute clotting factors and do not carry oxygen. Plasma should be given alongside red cells in a massive hemorrhage protocol, not instead of them.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "cbs"
      }
    ],
    "sources": [S["cbs"], S["espghan-bb"]],
    ...META,
  },
  {
    "id": "gi-bleed-21",
    "topic": "gi-bleed",
    "title": "Bloody diarrhea in a preschooler",
    "stem": "A 4-year-old girl is brought to the emergency department with 3 days of crampy abdominal pain and watery diarrhea that became bloody today. She has had no fever. Five days ago she visited a petting farm and ate a hamburger at a family barbecue. She has passed urine twice today. She takes no medications. She is tired but interactive. Her mucous membranes are dry. The abdomen is diffusely tender without guarding. There is no rash, pallor or jaundice.",
    "vitals": {
      "temperature": "37.4°C tympanic",
      "pulse": "128/minute",
      "resp": "26/minute",
      "bp": "98/60 mmHg",
      "o2sat": "99% on room air",
      "weight": "16 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely cause of her bloody diarrhea?",
        "options": [
          "Campylobacter enteritis",
          "Ileocolic intussusception",
          "Meckel diverticulum",
          "Nontyphoidal Salmonella",
          "Shiga toxin-producing E. coli"
        ],
        "correct": 4,
        "explanation": "Bloody diarrhea without fever after watery diarrhea, with exposure to a petting farm and ground beef, points to Shiga toxin-producing E. coli such as O157:H7. Campylobacter and Salmonella usually cause fever. Intussusception causes episodic pain with currant jelly stool rather than days of diarrhea. Meckel diverticulum causes painless bleeding without diarrhea.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "freedman"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate treatment for her now?",
        "options": [
          "Azithromycin 10 mg/kg PO",
          "Ciprofloxacin 15 mg/kg PO",
          "IV isotonic crystalloid",
          "Loperamide 0.1 mg/kg PO",
          "Metronidazole 10 mg/kg PO"
        ],
        "correct": 2,
        "explanation": "She is dehydrated and has passed little urine, so IV isotonic fluid is the priority. Antibiotics are avoided in suspected Shiga toxin-producing E. coli because, in studies at low risk of bias, they were associated with a higher risk of hemolytic uremic syndrome. Antimotility drugs such as loperamide are also avoided. Metronidazole treats anaerobes and parasites, not this infection.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "freedman"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following sets of blood tests is most important to monitor her for the main complication?",
        "options": [
          "Blood culture and lactate",
          "C-reactive protein and ESR",
          "CBC, smear and creatinine",
          "Liver enzymes and bilirubin",
          "Serum lipase and amylase"
        ],
        "correct": 2,
        "explanation": "Hemolytic uremic syndrome follows Shiga toxin-producing E. coli infection in some children, usually about a week after diarrhea begins. It is recognized by anemia with fragmented red cells on the smear, thrombocytopenia and a rising creatinine, so a CBC, smear and creatinine are the key tests. Blood culture and lactate look for sepsis. Inflammatory markers, liver tests and pancreatic enzymes do not detect this complication.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "freedman"
      }
    ],
    "sources": [S["freedman"]],
    ...META,
  },
  {
    "id": "gi-bleed-22",
    "topic": "gi-bleed",
    "title": "Low blood pressure and a urinary catheter",
    "stem": "A 79-year-old man is brought to the emergency department by ambulance with 1 day of weakness. His home care nurse found his BP low this morning and called 911 for possible sepsis, because he has a long-term urethral catheter for urinary retention that drains cloudy urine. He has had no fever, chills, abdominal pain, vomiting or change in his stools that he has noticed. He had an ischemic stroke 2 years ago. He takes clopidogrel 75 mg daily, escitalopram 20 mg daily, atorvastatin and tamsulosin. He is pale and cool. His lungs are clear and his jugular veins are flat. The abdomen is soft and non-tender. Hemoglobin 71 g/L (132 g/L 4 months ago), WBC 8.9 x 10^9/L, urea 24.6 mmol/L, creatinine 112 umol/L, lactate 3.6 mmol/L. Urinalysis shows leukocytes and bacteria, as on previous visits.",
    "vitals": {
      "temperature": "36.2°C oral",
      "pulse": "116/minute",
      "resp": "22/minute",
      "bp": "86/52 mmHg",
      "o2sat": "97% on room air",
      "weight": "78 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following findings most suggests hidden blood loss as the cause of his shock?",
        "options": [
          "Absence of fever and chills",
          "Cloudy urine in the catheter bag",
          "Fall in hemoglobin of 61 g/L",
          "Lactate of 3.6 mmol/L",
          "Pulse of 116/minute"
        ],
        "correct": 2,
        "explanation": "A fall in hemoglobin from 132 to 71 g/L, 61 g/L in 4 months, in a man on an antiplatelet drug points to hidden gastrointestinal bleeding even though he reports no bleeding. His urea is also high for his creatinine. Urea 24.6 mmol/L is a urea nitrogen of about 69 mg/dL and creatinine 112 umol/L is about 1.27 mg/dL, a ratio of about 54, and a ratio above 30 raises the likelihood of an upper source (LR 7.5). A raised lactate and tachycardia show shock of any cause. Cloudy urine with bacteria is expected with a long-term catheter. Older adults can be septic without fever, so its absence is weak evidence on its own.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 3
        },
        "source": "srygley-ugib"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Rectal examination shows black tarry stool. There is no blood in his nose or mouth.",
        "prompt": "Which of the following combinations in his medication list most increases his risk of this bleed?",
        "options": [
          "atorvastatin with clopidogrel",
          "atorvastatin with tamsulosin",
          "clopidogrel with escitalopram",
          "escitalopram with tamsulosin",
          "tamsulosin with clopidogrel"
        ],
        "correct": 2,
        "explanation": "Selective serotonin reuptake inhibitors raise the odds of upper GI bleeding, and the meta-analysis found the highest risk when they were taken with an antiplatelet drug. Escitalopram lowers platelet serotonin and clopidogrel blocks platelet activation, so the two effects add. Atorvastatin and tamsulosin do not impair platelet function. Pairing either with clopidogrel adds no bleeding risk beyond clopidogrel alone. Escitalopram with tamsulosin lacks the antiplatelet partner.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "jiang-ssri"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "He has received 500 mL of Ringer's lactate. His pulse is 114/minute and BP 88/54 mmHg. INR is 1.1 and platelets 240 x 10^9/L.",
        "prompt": "Which of the following is the most appropriate resuscitation plan for him now?",
        "options": [
          "Albumin 25% 100 mL IV",
          "Crystalloid 30 mL/kg IV, no blood",
          "Frozen plasma 2 units IV",
          "Red cells now, limit crystalloid",
          "Red cells only if Hb below 70 g/L"
        ],
        "correct": 3,
        "explanation": "He remains in shock from bleeding with a hemoglobin of 71 g/L, so red cells should start now. Canadian Blood Services advises limiting crystalloid to about 1 L before switching to blood, because large volumes worsen coagulopathy and cause edema. A 30 mL/kg sepsis bolus is 2.3 L for 78 kg and would dilute his blood further. Waiting for a hemoglobin below 70 g/L ignores his ongoing shock. His INR and platelets are normal, so plasma is not needed. Albumin carries no oxygen.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "cbs"
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "Endoscopy shows a duodenal ulcer with a visible vessel, treated with epinephrine and clips. Eighteen hours later he passes fresh melena, with pulse 120/minute, BP 90/56 mmHg and hemoglobin 64 g/L.",
        "prompt": "Which of the following is the most appropriate next step to control his bleeding?",
        "options": [
          "Octreotide infusion",
          "Repeat endoscopic therapy",
          "Surgical oversew of the ulcer",
          "Tranexamic acid infusion",
          "Transcatheter arterial embolization"
        ],
        "correct": 1,
        "explanation": "The consensus group recommends a second attempt at endoscopic therapy for rebleeding after initial endoscopic hemostasis, while resuscitation continues. Surgery is for bleeding that endoscopy has failed to control, and embolization can be considered as an alternative to surgery at that point. Octreotide lowers portal pressure in variceal bleeding and has no role for an ulcer. Tranexamic acid does not replace endoscopic control of a visible vessel.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "icg"
      }
    ],
    "sources": [
    {
      "id": "srygley-ugib",
      "citation": "Srygley FD, Gerardo CJ, Tran T, Fisher DA. Does this patient have a severe upper gastrointestinal bleed? JAMA. 2012.",
      "url": "https://doi.org/10.1001/jama.2012.253"
    },
    {
      "id": "jiang-ssri",
      "citation": "Jiang HY, Chen HZ, Hu XJ, et al. Use of selective serotonin reuptake inhibitors and risk of upper gastrointestinal bleeding: a systematic review and meta-analysis. Clin Gastroenterol Hepatol. 2015.",
      "url": "https://doi.org/10.1016/j.cgh.2014.06.021"
    },
    {
      "id": "cbs",
      "citation": "Trudeau JD, Dawe P, Shih AW. Massive hemorrhage and emergency transfusion. In: Clinical Guide to Transfusion. Canadian Blood Services. 2021.",
      "url": "https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion"
    },
    {
      "id": "icg",
      "citation": "Barkun AN, Almadi M, Kuipers EJ, et al. Management of nonvariceal upper gastrointestinal bleeding: guideline recommendations from the International Consensus Group. Ann Intern Med. 2019.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7233308/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    "id": "gi-bleed-23",
    "topic": "gi-bleed",
    "title": "Blood in the mouth at breakfast",
    "stem": "A 63-year-old man presents to the emergency department after two episodes of bright red blood filling his mouth at breakfast, about a cup in total. He thought he had vomited blood. The bleeding stopped on its own 40 minutes ago. Five months ago he finished chemoradiation for squamous cell carcinoma of the left tonsil. He has a gastrostomy feeding tube and 2 weeks of worsening left throat pain. He takes no anticoagulant or antiplatelet drug. He has no liver disease, abdominal pain, nausea, melena or cough. He is alert, pale and anxious and is spitting small amounts of bright red saliva.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "104/minute",
      "resp": "18/minute",
      "bp": "112/70 mmHg",
      "o2sat": "97% on room air",
      "weight": "64 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following examinations is most important to find the source of the blood?",
        "options": [
          "Abdominal palpation for tenderness",
          "Auscultation of both lung fields",
          "Digital rectal examination",
          "Inspection of the mouth and throat",
          "Nasal speculum examination"
        ],
        "correct": 3,
        "explanation": "Bright red blood that fills the mouth without nausea, in a man with recent radiation to the left tonsil and worsening throat pain, points to the oropharynx. Inspection with a good light finds the site and shows whether it is still bleeding. He has no cough, so a lung source is less likely. He has no nasal bleeding. Abdominal and rectal examination look for a gastrointestinal source, and he has no abdominal pain or melena.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "slijepcevic-cbs"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "The examination is complete. There is a necrotic ulcer in the left tonsillar fossa with a small adherent clot. The nasal cavities and lungs are clear. The abdomen is soft and non-tender, and rectal examination shows brown stool.",
        "prompt": "Which of the following is the most likely source of his bleeding?",
        "options": [
          "Carotid artery in the tumour bed",
          "Peptic ulcer disease",
          "Posterior epistaxis",
          "Radiation mucositis ooze",
          "Varices from portal hypertension"
        ],
        "correct": 0,
        "explanation": "A brisk bleed that stops on its own from a necrotic ulcer in a field irradiated for cancer is a sentinel bleed from the carotid system. It often comes before a catastrophic hemorrhage. Radiation and wound breakdown are its main risk factors. Brown stool and no abdominal symptoms make a peptic ulcer unlikely. The nasal cavities are clear, so this is not posterior epistaxis. He has no liver disease to suggest varices. Mucositis oozes during and just after treatment, not a cup of bright red blood 5 months later.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "slijepcevic-cbs"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate definitive management of his bleeding?",
        "options": [
          "Discharge with ENT follow-up",
          "Endovascular repair by radiology",
          "Esophagogastroduodenoscopy today",
          "Open surgical vessel ligation",
          "Silver nitrate cautery of the ulcer"
        ],
        "correct": 1,
        "explanation": "A sentinel bleed is an impending carotid blowout, and treatment before a major hemorrhage improves survival. Endovascular embolization or a covered stent is now the standard of care. In one series in the review, mortality was 10% after endovascular therapy and 28.6% after surgical ligation. Endoscopy of the stomach looks in the wrong place. Silver nitrate cannot treat an arterial wall breakdown. Discharge risks a fatal bleed at home.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "suarez-cbs"
      }
    ],
    "sources": [
    {
      "id": "slijepcevic-cbs",
      "citation": "Slijepcevic AA, Roh J, Pipkorn P, Lipsey K, Bradley JP. Carotid blowout syndrome in head and neck cancer patients: management of patients at risk for CBS. Laryngoscope. 2023.",
      "url": "https://doi.org/10.1002/lary.30157"
    },
    {
      "id": "suarez-cbs",
      "citation": "Suárez C, Fernández-Alvarez V, Hamoir M, et al. Carotid blowout syndrome: modern trends in management. Cancer Manag Res. 2018.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6239123/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    "id": "gi-bleed-24",
    "topic": "gi-bleed",
    "title": "Blood after coughing fits",
    "stem": "A 34-year-old man presents to the emergency department saying he has vomited blood four times today, about half a cup each time. Each episode began with a coughing fit. He arrived in Canada from the Philippines 8 months ago. He has had 2 months of cough, night sweats and a 6 kg weight loss. He takes no medications and does not drink alcohol. He has no abdominal pain or black stools. He looks thin. Crackles are heard over the right upper chest. The abdomen is soft and non-tender. The nose and pharynx show no bleeding.",
    "vitals": {
      "temperature": "38.1°C oral",
      "pulse": "104/minute",
      "resp": "24/minute",
      "bp": "124/76 mmHg",
      "o2sat": "93% on room air",
      "weight": "58 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely source of the blood?",
        "options": [
          "Esophageal varices",
          "Gastric or duodenal ulcer",
          "Mallory Weiss tear",
          "Posterior nasopharynx",
          "Right upper lobe of the lung"
        ],
        "correct": 4,
        "explanation": "Blood that comes up with coughing fits, together with fever, night sweats, weight loss and right upper chest crackles, points to hemoptysis from the right upper lobe, likely tuberculosis. Patients often describe hemoptysis as vomiting blood, which is why the chest must be examined. He does not drink alcohol, which makes varices less likely, and he has no abdominal pain or melena to suggest an ulcer. A Mallory Weiss tear follows retching, not coughing, and the nose and pharynx are clear.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "rosen-ch20"
      },
      {
        "id": "q2",
        "kind": "menu",
        "prompt": "Which of the following are the most appropriate immediate steps while you arrange further care?",
        "options": [
          "Airborne isolation room",
          "Chest radiograph",
          "Lie him left side down",
          "Lie him right side down",
          "Nasogastric lavage",
          "Octreotide 50 mcg IV bolus",
          "Pantoprazole 80 mg IV",
          "Urgent upper endoscopy"
        ],
        "select": 3,
        "correct": [
          0,
          1,
          3
        ],
        "explanation": "Suspected pulmonary tuberculosis requires airborne isolation in a negative pressure room. A chest radiograph is the first step to localize the lung source. Placing the bleeding right lung down keeps blood from spilling into the healthy left lung, so left side down would do the opposite. Nasogastric lavage, octreotide, pantoprazole and upper endoscopy all treat a GI source that this history does not support.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "rosen-ch20"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "The radiograph shows a cavity in the right upper lobe. He then coughs up about 200 mL of bright red blood. His oxygen saturation stays at 93%.",
        "prompt": "Which of the following is the most appropriate investigation to localize the bleeding vessel?",
        "options": [
          "CT angiography of the abdomen",
          "CT angiography of the chest",
          "Sputum acid-fast smears",
          "Upper GI endoscopy",
          "Ventilation perfusion scan"
        ],
        "correct": 1,
        "explanation": "Large volume hemoptysis in a stable patient is best mapped with CT angiography of the chest, which shows the lesion and the bronchial arteries and guides embolization or bronchoscopy. Abdominal CT angiography and upper endoscopy look for a GI source that is not present. Sputum smears are needed to confirm tuberculosis but do not locate the bleeding vessel. A ventilation perfusion scan is used for pulmonary embolism.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "acr-hemoptysis"
      }
    ],
    "sources": [S["rosen-ch20"], S["acr-hemoptysis"]],
    ...META,
  },
  {
    "id": "gi-bleed-25",
    "topic": "gi-bleed",
    "title": "Fainting in the third trimester",
    "stem": "A 31-year-old woman who is 30 weeks pregnant is brought to the emergency department by ambulance after fainting at work. She has had 2 days of black stools and epigastric burning. She has been taking ibuprofen 400 mg three times daily for a week for a back strain. She has no vomiting, headache or vaginal bleeding, and fetal movements are normal. Her pregnancy has otherwise been uncomplicated. Her blood group is O RhD negative. She is pale and diaphoretic. The fundal height is 30 cm. Rectal examination shows black tarry stool.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "124/minute",
      "resp": "22/minute",
      "bp": "88/50 mmHg",
      "o2sat": "98% on room air",
      "weight": "72 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "menu",
        "prompt": "Which of the following are the most appropriate immediate measures for her?",
        "options": [
          "Emergency cesarean delivery",
          "Left lateral tilt positioning",
          "Magnesium sulfate 4 g IV",
          "Normal saline 3 L IV bolus",
          "Octreotide 50 mcg IV bolus",
          "Tranexamic acid 1 g IV",
          "Uncrossmatched O negative red cells",
          "Uncrossmatched O positive red cells"
        ],
        "select": 2,
        "correct": [
          1,
          6
        ],
        "explanation": "At 30 weeks the uterus compresses the vena cava when she lies flat, so left lateral tilt improves venous return. She is in hemorrhagic shock, so uncrossmatched red cells are needed now. As a woman of childbearing potential who is RhD negative, she should get O negative cells to avoid anti-D sensitization, so O positive cells are wrong. Large crystalloid boluses dilute clotting factors. Tranexamic acid did not reduce death in GI bleeding in a large trial and raised venous thrombosis, a real concern in pregnancy. She is hypotensive without headache, so nothing suggests eclampsia, nothing in her history suggests varices, and the fetus is not the source of her instability.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "cbs"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "After 2 units of red cells her pulse is 102/minute and BP 108/64 mmHg. The fetal heart rate is 145/minute.",
        "prompt": "Which of the following is the most appropriate plan for endoscopy?",
        "options": [
          "Capsule endoscopy after stabilization",
          "CT angiography before any endoscopy",
          "Defer endoscopy until after delivery",
          "Upper endoscopy only after 34 weeks",
          "Upper endoscopy with obstetric support"
        ],
        "correct": 4,
        "explanation": "Significant upper GI bleeding is a clear indication for endoscopy in pregnancy. It should be done promptly once she is stabilized, with obstetric input on fetal monitoring and positioning. Deferring until 34 weeks or delivery leaves an actively bleeding ulcer untreated. CT angiography exposes the fetus to radiation and cannot treat the lesion. Capsule endoscopy is for suspected small bowel bleeding and has no therapeutic role.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "asge-preg"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most important advice about her pain medication?",
        "options": [
          "Add famotidine to the ibuprofen",
          "Stop ibuprofen for the rest of pregnancy",
          "Switch ibuprofen to naproxen",
          "Take ibuprofen with meals",
          "Use ibuprofen only at night"
        ],
        "correct": 1,
        "explanation": "Ibuprofen caused or worsened this bleed. Health Canada also advises against NSAIDs from 20 weeks of pregnancy because they can harm the fetal kidneys, and they are contraindicated from 28 weeks. She is at 30 weeks, so ibuprofen should be stopped, and acetaminophen used for pain. Naproxen is another NSAID with the same risks. Taking ibuprofen with meals, at night only or with famotidine does not remove the risk of recurrent ulcer bleeding.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "hc-nsaid-pregnancy"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following acid suppression orders is most appropriate before her endoscopy?",
        "options": [
          "Bismuth subsalicylate 524 mg PO",
          "Famotidine 20 mg PO",
          "Misoprostol 200 mcg PO",
          "Pantoprazole 80 mg IV",
          "Sucralfate 1 g PO"
        ],
        "correct": 3,
        "explanation": "An IV proton pump inhibitor before endoscopy may be considered to downstage high risk ulcer stigmata, provided it does not delay endoscopy, and pantoprazole is used in pregnancy when the indication is clear. Misoprostol causes uterine contractions and is contraindicated in pregnancy. Bismuth subsalicylate contains a salicylate, which is avoided in pregnancy, and it does not suppress acid. Oral famotidine and sucralfate do not give the acid suppression needed for a bleeding ulcer.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "icg"
      }
    ],
    "sources": [S["asge-preg"], S["cbs"], S["icg"], S["hc-nsaid-pregnancy"]],
    ...META,
  },
  {
    "id": "gi-bleed-26",
    "topic": "gi-bleed",
    "title": "Faint on the bench",
    "stem": "A 17-year-old boy is brought to the emergency department by his coach after he fainted on the bench during a basketball game. He stood up quickly to go back on the court, felt light-headed and slumped to the floor for about 10 seconds. He had no chest pain, palpitations or jerking. For 3 weeks he has taken ibuprofen 600 mg three or four times daily for a wrist sprain. He has no abdominal pain or vomiting and has not noticed any change in his stools. He has no liver disease and no personal or family history of heart disease or sudden death. He has now been lying on the stretcher for 20 minutes. He is pale and sweaty. His heart sounds are normal with no murmur.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "122/minute",
      "resp": "18/minute",
      "bp": "108/64 mmHg",
      "o2sat": "99% on room air",
      "weight": "70 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following findings most strongly suggests a serious cause for his faint?",
        "options": [
          "Faint on standing up quickly",
          "Heart rate of 122/minute at rest",
          "Light-headedness before the faint",
          "Loss of consciousness for 10 seconds",
          "Sweating and pallor after the event"
        ],
        "correct": 1,
        "explanation": "A heart rate of 122/minute after 20 minutes lying down is not explained by a simple faint, which settles once the person lies flat. Persistent tachycardia with pallor points to hypovolemia, and 3 weeks of high dose ibuprofen makes hidden GI bleeding likely. Tachycardia also raises the likelihood of a severe upper GI bleed (LR 4.9). Fainting on standing, a prodrome of light-headedness, a brief loss of consciousness and sweating after the event are all common in benign reflex syncope.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 3
        },
        "source": "srygley-ugib"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Rectal examination shows black tarry stool. Hemoglobin is 81 g/L, platelets 260 x 10^9/L, INR 1.0, urea 16.2 mmol/L and creatinine 70 umol/L.",
        "prompt": "Which of the following is the most appropriate initial resuscitation for him?",
        "options": [
          "Albumin 5% 500 mL IV",
          "Crystalloid 1 L, then reassess",
          "Frozen plasma 2 units IV",
          "Normal saline 3 L IV rapidly",
          "Red cells 2 units IV now"
        ],
        "correct": 1,
        "explanation": "He is tachycardic but not hypotensive, and his hemoglobin of 81 g/L is above the threshold of 80 g/L suggested for patients without cardiovascular disease. A crystalloid bolus with close reassessment is the right start, with blood crossmatched in case he worsens. Transfusing 2 units now is a liberal strategy the guideline does not support at this hemoglobin. Three litres of saline risks dilution and edema. The consensus group found no mortality benefit of colloids over crystalloids. His INR is 1.0, so plasma has no role.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "icg"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate plan to diagnose and treat his bleeding?",
        "options": [
          "Admit for upper endoscopy within 24 hours",
          "Colonoscopy after bowel preparation",
          "CT angiography of the abdomen now",
          "Discharge on a PPI with clinic follow-up",
          "Tagged red cell nuclear scan"
        ],
        "correct": 0,
        "explanation": "His Glasgow Blatchford score is high. Urea 16.2 mmol/L scores 4, hemoglobin 81 g/L in a male scores 6, systolic BP 108 mmHg scores 1, pulse over 100/minute scores 1, melena 1 and syncope 2, for a total of 15. The guideline suggests early endoscopy within 24 hours, which both finds and treats an ulcer. Only very low scores are suitable for discharge. Colonoscopy looks in the wrong place for melena. CT angiography and a nuclear scan cannot treat an ulcer.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "icg"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following is the most likely source of his bleeding?",
        "options": [
          "Bleeding duodenal ulcer",
          "Crohn disease of the ileum",
          "Esophageal varices",
          "Mallory-Weiss tear",
          "Meckel diverticulum"
        ],
        "correct": 0,
        "explanation": "Melena makes an upper source far more likely (LR 25 on examination). His urea to creatinine ratio is also high. Urea 16.2 mmol/L is a urea nitrogen of about 45 mg/dL and creatinine 70 umol/L is about 0.79 mg/dL, a ratio of about 57. Three weeks of high dose ibuprofen is the clue to a peptic ulcer. A Mallory-Weiss tear follows retching, and he has not vomited. He has no liver disease to suggest varices. Meckel diverticulum and ileal Crohn disease are small bowel sources that usually cause maroon or red blood rather than melena.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "srygley-ugib"
      }
    ],
    "sources": [
    {
      "id": "srygley-ugib",
      "citation": "Srygley FD, Gerardo CJ, Tran T, Fisher DA. Does this patient have a severe upper gastrointestinal bleed? JAMA. 2012.",
      "url": "https://doi.org/10.1001/jama.2012.253"
    },
    {
      "id": "icg",
      "citation": "Barkun AN, Almadi M, Kuipers EJ, et al. Management of nonvariceal upper gastrointestinal bleeding: guideline recommendations from the International Consensus Group. Ann Intern Med. 2019.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7233308/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "gi-bleed-27",
    topic: "gi-bleed",
    title: "Black stools and red spots on the lips",
    stem: "A 61-year-old woman presents to the emergency department with 5 days of black stools and 2 weeks of fatigue. Yesterday she had to stop twice to catch her breath while walking her dog. She has had nosebleeds most weeks since her teens, each lasting a few minutes, and the last was 6 days ago. Her father and brother also have frequent nosebleeds and red spots on their lips. Two months ago she started ASA 81 mg daily on her own to prevent a heart attack. She has no heart disease, stroke, diabetes or liver disease, and no Raynaud symptoms. She is pale. Small flat red spots on her lips, tongue and fingertips blanch with pressure. Her skin is not thickened. The nose shows no active bleeding. Rectal examination shows black tarry stool.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "98/minute",
      resp: "18/minute",
      bp: "124/76 mmHg",
      o2sat: "98% on room air",
      weight: "70 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Hemoglobin 74 g/L, MCV 66 fL, ferritin 4 mcg/L, platelets 305 x 10^9/L, INR 1.0. Liver enzymes are normal.",
        prompt: "Which of the following is the most likely underlying cause of her bleeding?",
        options: [
          "Alcohol-related cirrhosis with spider angiomas",
          "Hereditary hemorrhagic telangiectasia",
          "Immune thrombocytopenia",
          "Limited systemic sclerosis",
          "Von Willebrand disease",
        ],
        correct: 1,
        explanation: "She has recurrent spontaneous nosebleeds, telangiectasias on the lips, tongue and fingertips, and first-degree relatives with the same features. These are three of the four Curacao diagnostic criteria for the condition. Telangiectasias in the gut explain her melena, and a ferritin of 4 mcg/L fits ongoing loss. Von Willebrand disease causes nosebleeds and runs in families but does not produce telangiectasias. Limited systemic sclerosis can, but she has no Raynaud symptoms or skin thickening. Spider angiomas of alcohol-related cirrhosis are unlikely with no known liver disease and normal liver enzymes. A platelet count of 305 x 10^9/L excludes immune thrombocytopenia.",
        keyFeature: { topic: "gi-bleed", n: 1 },
        source: "hht-2020",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate change to her ASA?",
        options: [
          "Continue ASA with a daily PPI",
          "Hold ASA for 7 days, then restart",
          "Stop ASA with no substitute",
          "Switch ASA to clopidogrel 75 mg",
          "Switch to enteric-coated ASA",
        ],
        correct: 2,
        explanation: "The guideline supports antiplatelet therapy in this condition when there is an indication, weighing it against bleeding. She started ASA herself to prevent a first heart attack and has no heart disease, stroke or diabetes, so there is no indication to weigh. It adds to her bleeding and should be stopped without a replacement. A PPI protects against ulcers but not against bleeding from telangiectasias. Enteric-coated ASA and clopidogrel still impair platelet function. Restarting after a week brings back the same risk with no benefit.",
        keyFeature: { topic: "gi-bleed", n: 1 },
        source: "hht-2020",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate first investigation to find the source of her bleeding?",
        options: [
          "Abdominal CT angiography",
          "Capsule endoscopy",
          "Colonoscopy after bowel prep",
          "Tagged red cell scan",
          "Upper endoscopy",
        ],
        correct: 4,
        explanation: "The guideline recommends upper endoscopy as the first test for suspected GI bleeding in this condition. It also fits her melena, and lesions found can be treated at the same time. Capsule endoscopy is advised only when upper endoscopy does not find a cause. The guideline adds colonoscopy for people who meet usual colorectal cancer screening criteria, as she may at 61, but melena points first to the upper tract. CT angiography and a tagged red cell scan need brisk active bleeding to find a source, and she is stable with a picture of slow ongoing loss.",
        keyFeature: { topic: "gi-bleed", n: 6 },
        source: "hht-2020",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following medications is most appropriate to give her in the emergency department?",
        options: [
          "Ceftriaxone 1 g IV",
          "Desmopressin 0.3 mcg/kg IV",
          "Octreotide 50 mcg IV bolus",
          "Pantoprazole 80 mg IV",
          "Vitamin K 10 mg IV",
        ],
        correct: 3,
        explanation: "An ulcer from her ASA remains possible until endoscopy. The International Consensus Group states that a PPI before endoscopy may be considered to downstage an ulcer, as long as it does not delay endoscopy. Octreotide is used for variceal bleeding, and she has no liver disease. Her INR is 1.0, so vitamin K has nothing to correct. Desmopressin treats some bleeding disorders, and none has been shown here. Prophylactic ceftriaxone is given to patients with cirrhosis who bleed, and she has none.",
        keyFeature: { topic: "gi-bleed", n: 6 },
        source: "icg",
      },
    ],
    sources: [S["hht2020"], S["icg"]],
    ...META,
    version: 2,
  },
  {
    "id": "gi-bleed-28",
    "topic": "gi-bleed",
    "title": "Rectal bleeding a week after a procedure",
    "stem": "A 66-year-old man presents to the emergency department after passing four large bright red stools with clots since this morning. Eight days ago he had a colonoscopy with removal of a 25 mm polyp from the ascending colon. He takes clopidogrel 75 mg daily after an ischemic stroke 2 years ago and restarted it 3 days after the procedure. He has no abdominal pain, upper GI symptoms or liver disease. He feels light-headed. Rectal examination shows fresh red blood with clots.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "112/minute",
      "resp": "20/minute",
      "bp": "98/62 mmHg",
      "o2sat": "97% on room air",
      "weight": "88 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely source of his bleeding?",
        "options": [
          "Colonic angiodysplasia",
          "Diverticular bleeding",
          "Internal hemorrhoids",
          "Ischemic colitis",
          "Ulcer at the polypectomy site"
        ],
        "correct": 4,
        "explanation": "Delayed bleeding after polypectomy occurs up to about 2 weeks after the procedure. The risk is higher with large polyps, right colon polyps and restarting antiplatelet drugs, all present here. Diverticular bleeding and angiodysplasia are possible but do not account for the recent procedure. Hemorrhoids rarely cause clots with light-headedness and tachycardia. Ischemic colitis usually begins with crampy pain, which he does not have.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "acg-lgib"
      },
      {
        "id": "q2",
        "kind": "menu",
        "prompt": "Which of the following features in his history increased his risk of delayed bleeding after polypectomy?",
        "options": [
          "Absence of abdominal pain",
          "Being of male sex",
          "History of ischemic stroke",
          "Polyp size of 25 mm",
          "Restarting clopidogrel",
          "Right colon location"
        ],
        "select": 3,
        "correct": [
          3,
          4,
          5
        ],
        "explanation": "Large polyp size, a right-sided location and antithrombotic therapy restarted after the procedure all increase the risk of delayed bleeding after polypectomy. His stroke matters only because it is the reason for clopidogrel. Having no abdominal pain does not change the risk. Male sex is not an established risk factor in this setting.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "acg-lgib"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "Hemoglobin 98 g/L (141 g/L before colonoscopy), platelets 250 x 10^9/L, INR 1.1. After 1 L of Ringer's lactate, pulse is 104/minute and BP 102/64 mmHg.",
        "prompt": "Which of the following hemostatic treatments is most appropriate for him now?",
        "options": [
          "Desmopressin 0.3 mcg/kg IV",
          "Platelets 1 adult dose IV",
          "Platelets 2 adult doses IV",
          "Tranexamic acid 1 g IV",
          "No hemostatic drug or platelets"
        ],
        "correct": 4,
        "explanation": "The ACG and Canadian Association of Gastroenterology guideline suggests against platelet transfusion for patients on antiplatelet drugs with GI bleeding. It showed no benefit and a possible increase in harm. His platelet count is normal. Tranexamic acid did not reduce death in GI bleeding in the HALT-IT trial and increased venous thrombosis. Desmopressin has no proven role here. Definitive control of the bleeding comes from colonoscopy.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "acg-cag"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate next step to stop the bleeding?",
        "options": [
          "Colonoscopy with clip placement",
          "Octreotide IV infusion",
          "Surgical right hemicolectomy",
          "Tagged red cell scan",
          "Upper endoscopy first"
        ],
        "correct": 0,
        "explanation": "Post-polypectomy bleeding comes from a known site, and colonoscopy with clips or other endoscopic therapy treats it directly. He responded to initial fluid, so there is time to prepare the bowel if needed. A tagged red cell scan only localizes bleeding and is slow. Surgery is reserved for failure of endoscopic and radiologic therapy. He has no upper GI features, and octreotide is used for variceal bleeding.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "acg-lgib"
      }
    ],
    "sources": [S["acg-cag"], S["acg-lgib"]],
    ...META,
  },
  {
    "id": "gi-bleed-29",
    "topic": "gi-bleed",
    "title": "Black stools years after weight loss surgery",
    "stem": "A 44-year-old woman presents to the emergency department with 2 days of black stools and upper abdominal pain. Four years ago she had a Roux-en-Y gastric bypass. She smokes a pack of cigarettes a day. She has taken ibuprofen for 2 weeks for a dental abscess and stopped her omeprazole a year ago. She does not drink alcohol. She is pale. There is mild epigastric tenderness without guarding. Rectal examination shows melena.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "98/minute",
      "resp": "18/minute",
      "bp": "116/72 mmHg",
      "o2sat": "99% on room air",
      "weight": "74 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "menu",
        "prompt": "Which of the following features in her history increase her risk of a marginal ulcer?",
        "options": [
          "Being of female sex",
          "Being 44 years of age",
          "Daily cigarette smoking",
          "Ibuprofen for 2 weeks",
          "Recent dental abscess",
          "Stopping omeprazole"
        ],
        "select": 3,
        "correct": [
          2,
          3,
          5
        ],
        "explanation": "A marginal ulcer forms at the gastrojejunal anastomosis after gastric bypass. In a meta-analysis, smoking was a clear predictor of marginal ulcer. NSAID use and lack of PPI protection are recognised risk factors for marginal ulcer, although in this meta-analysis their effects did not reach significance. Age and female sex were not predictors. The dental abscess matters only because it led to ibuprofen use.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "beran-marginal-ulcer"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Hemoglobin 68 g/L, platelets 300 x 10^9/L, INR 1.0. After 500 mL of crystalloid, pulse is 94/minute and BP 118/70 mmHg.",
        "prompt": "Which of the following transfusion plans is most appropriate for her now?",
        "options": [
          "Frozen plasma 2 units IV",
          "Red cells 1 unit, then recheck Hb",
          "Red cells 3 units now",
          "Transfuse to Hb above 100 g/L",
          "No transfusion until Hb below 60 g/L"
        ],
        "correct": 1,
        "explanation": "Her hemoglobin of 68 g/L is below the restrictive threshold of 70 g/L, and below 80 g/L, so she needs transfusion under either threshold. One unit followed by a repeat hemoglobin avoids over-transfusion. In a randomized trial of upper GI bleeding, a restrictive strategy lowered mortality and rebleeding compared with a liberal one. A target above 100 g/L and three units at once are liberal strategies. Her INR is normal, so plasma has no role, and waiting for 60 g/L is below any accepted threshold.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "villanueva"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following consultations is most appropriate to diagnose and treat the source?",
        "options": [
          "Gastroenterology for upper endoscopy",
          "General surgery for laparotomy",
          "Interventional radiology for embolization",
          "Outpatient bariatric clinic review",
          "Radiology for an upper GI series"
        ],
        "correct": 0,
        "explanation": "The gastrojejunal anastomosis can be reached with a standard upper endoscope, so gastroenterology can both diagnose and treat a bleeding marginal ulcer. Laparotomy is kept for perforation or bleeding that endoscopy cannot control. Embolization is a rescue option after failed endoscopy. A contrast series cannot treat bleeding and may interfere with later endoscopy. An outpatient review is too slow for melena with a hemoglobin of 68 g/L.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "rosen-ch184"
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "Endoscopy shows a bleeding marginal ulcer, which is treated. She asks how to prevent another one.",
        "prompt": "Which of the following measures most lowers her risk of another marginal ulcer?",
        "options": [
          "Complete smoking cessation",
          "Daily iron supplements",
          "Liquid diet for 6 weeks",
          "Switching to naproxen",
          "Weekly vitamin B12 injections"
        ],
        "correct": 0,
        "explanation": "Smoking was the clearest modifiable predictor of marginal ulcer in a meta-analysis, so stopping smoking is the most important change. Avoiding NSAIDs and taking a PPI also make sense. Naproxen is another NSAID and would raise the risk again. Iron and vitamin B12 treat deficiencies common after bypass but do not prevent ulcers. A liquid diet does not prevent marginal ulceration.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "beran-marginal-ulcer"
      }
    ],
    "sources": [S["villanueva"], S["beran-mu"], S["rosen-ch184"]],
    ...META,
  },
  {
    "id": "gi-bleed-30",
    "topic": "gi-bleed",
    "title": "Pain, jaundice and melena after a procedure",
    "stem": "A 58-year-old man presents to the emergency department with severe right upper quadrant pain, yellow eyes and black stools that began this morning. Five days ago he had a percutaneous liver biopsy for abnormal liver enzymes. He takes no anticoagulant or antiplatelet drugs and drinks rarely. He is jaundiced and tender in the right upper quadrant without guarding. Rectal examination shows melena. Hemoglobin 101 g/L (136 g/L before the biopsy), bilirubin 62 umol/L, INR 1.1, platelets 210 x 10^9/L.",
    "vitals": {
      "temperature": "37.4°C oral",
      "pulse": "104/minute",
      "resp": "18/minute",
      "bp": "118/70 mmHg",
      "o2sat": "97% on room air",
      "weight": "80 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely diagnosis for him?",
        "options": [
          "Acute ascending cholangitis",
          "Bleeding duodenal ulcer",
          "Common bile duct stone",
          "Hemobilia from arterial injury",
          "Subcapsular liver hematoma"
        ],
        "correct": 3,
        "explanation": "Right upper quadrant pain, jaundice and GI bleeding after a liver biopsy form the classic triad of hemobilia. It is usually caused by an injured hepatic artery bleeding into the bile ducts. A subcapsular hematoma causes pain and anemia but not melena or jaundice. A duodenal ulcer would not explain jaundice. A bile duct stone or cholangitis would not explain melena and a fall in hemoglobin of 35 g/L.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "rosen-ch26"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate next investigation?",
        "options": [
          "CT angiography of the abdomen",
          "ERCP with sphincterotomy",
          "Hepatobiliary scintigraphy",
          "MR cholangiopancreatography",
          "Tagged red cell scan"
        ],
        "correct": 0,
        "explanation": "CT angiography can show a hepatic artery pseudoaneurysm or active bleeding and plans embolization. ERCP may show blood coming from the ampulla, but sphincterotomy adds bleeding risk and does not treat an arterial source. Hepatobiliary scintigraphy and MR cholangiography assess bile flow, not bleeding. A tagged red cell scan cannot define the vessel well enough to guide treatment.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "rosen-ch26"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "CT angiography shows a 9 mm hepatic artery pseudoaneurysm with contrast in the bile ducts.",
        "prompt": "Which of the following is the most appropriate definitive treatment?",
        "options": [
          "Endoscopic biliary stent",
          "Endoscopic clip placement",
          "Observation with serial hemoglobin",
          "Right hepatic lobectomy",
          "Transarterial embolization"
        ],
        "correct": 4,
        "explanation": "Transarterial embolization by interventional radiology is first-line treatment for hemobilia from a hepatic artery pseudoaneurysm and stops bleeding in most patients. Surgery such as lobectomy is kept for failed embolization. A biliary stent may relieve clot obstruction but does not treat the artery. Endoscopic clips cannot reach a vessel inside the liver, and observation risks sudden massive bleeding.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "rosen-ch26"
      }
    ],
    "sources": [S["rosen-ch26"]],
    ...META,
  },
  {
    "id": "gi-bleed-31",
    "topic": "gi-bleed",
    "title": "Melena in a young man with a bleeding disorder",
    "stem": "A 27-year-old man with severe hemophilia A presents to the emergency department with black stools since yesterday and one episode of coffee-ground vomiting. He gives himself prophylactic factor VIII concentrate three times weekly, and his last dose was 3 days ago. His last inhibitor screen was negative. He took naproxen for knee pain this week. He does not drink alcohol. He carries a letter from his hemophilia treatment centre. He is pale. The abdomen is soft with mild epigastric tenderness.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "112/minute",
      "resp": "20/minute",
      "bp": "104/62 mmHg",
      "o2sat": "98% on room air",
      "weight": "70 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "menu",
        "prompt": "Which of the following treatments are most appropriate to start now?",
        "options": [
          "Cryoprecipitate 10 units IV",
          "Desmopressin 0.3 mcg/kg IV",
          "Factor VIII concentrate IV",
          "Frozen plasma 15 mL/kg IV",
          "Octreotide 50 mcg IV bolus",
          "Pantoprazole 80 mg IV",
          "Recombinant factor VIIa IV",
          "Vitamin K 10 mg IV"
        ],
        "select": 2,
        "correct": [
          2,
          5
        ],
        "explanation": "A GI bleed in severe hemophilia is life-threatening. Factor VIII concentrate should be given at once, before investigations, in consultation with his treatment centre. An IV PPI is appropriate for a suspected NSAID ulcer before endoscopy. Desmopressin does not raise factor VIII in severe hemophilia A. Plasma contains too little factor VIII to reach hemostatic levels without volume overload. Cryoprecipitate is not virally inactivated and is used only when concentrate is unavailable. Octreotide treats variceal, not ulcer, bleeding. Recombinant factor VIIa is for patients with inhibitors, and his screen was negative. He has no liver disease or vitamin K deficiency.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "wfh"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate timing of upper endoscopy for him?",
        "options": [
          "Before any factor concentrate is given",
          "Once his INR has been corrected",
          "Only after 7 days of factor cover",
          "Only if he rebleeds despite factor",
          "Within 24 hours, after factor replacement"
        ],
        "correct": 4,
        "explanation": "The source of GI bleeding in hemophilia should be found and treated, and endoscopy is safe once factor levels have been raised. It should be done within 24 hours, as for other upper GI bleeds. Doing endoscopy before replacement risks more bleeding. Waiting a week or for a rebleed delays treatment of a likely ulcer. His INR is expected to be normal because hemophilia A prolongs the PTT, not the INR.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "wfh"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate analgesic for his knee pain at discharge?",
        "options": [
          "Acetaminophen 1 g PO",
          "Celecoxib 200 mg PO",
          "Ibuprofen 400 mg PO",
          "Ketorolac 30 mg IM",
          "Naproxen 250 mg PO"
        ],
        "correct": 0,
        "explanation": "Naproxen likely caused his ulcer and adds platelet dysfunction to his factor deficiency. Acetaminophen is the preferred analgesic in hemophilia, especially after a GI bleed. Ibuprofen and naproxen are nonselective NSAIDs with the same risks. Celecoxib still carries ulcer risk and is not appropriate soon after an ulcer bleed. Intramuscular injections are avoided in hemophilia because they can cause muscle hematomas.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "wfh"
      }
    ],
    "sources": [S["wfh"]],
    ...META,
  },
  {
    "id": "gi-bleed-32",
    "topic": "gi-bleed",
    "title": "Vomiting blood at school",
    "stem": "A 6-year-old boy is brought to the emergency department after vomiting a large amount of bright red blood at school. He was born at 28 weeks and spent 2 months in the neonatal intensive care unit, where he had an umbilical venous catheter. He has been well since then, apart from a large spleen noted at a recent checkup. He takes no medications. He is pale and anxious. The spleen tip is felt 5 cm below the left costal margin. The liver is not enlarged, and there is no jaundice or ascites.",
    "vitals": {
      "temperature": "36.9°C oral",
      "pulse": "146/minute",
      "resp": "26/minute",
      "bp": "84/50 mmHg",
      "o2sat": "98% on room air",
      "weight": "20 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely cause of his bleeding?",
        "options": [
          "Bleeding duodenal ulcer",
          "Esophagitis from gastric reflux",
          "Ulcer from Helicobacter pylori",
          "Varices from cirrhosis of the liver",
          "Varices from portal vein thrombosis"
        ],
        "correct": 4,
        "explanation": "An umbilical venous catheter in the newborn period is a major risk factor for portal vein thrombosis. Years later, splenomegaly and a large variceal bleed follow. His liver is not enlarged and he has no jaundice or ascites, which makes cirrhosis less likely. A large volume of bright red blood with an enlarged spleen fits varices better than an ulcer or esophagitis.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "piccirillo-peds-gib"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate first red cell volume for him?",
        "options": [
          "Red cells 50 mL IV",
          "Red cells 100 mL IV",
          "Red cells 200 mL IV",
          "Red cells 600 mL IV",
          "Red cells 1 000 mL IV"
        ],
        "correct": 2,
        "explanation": "He has tachycardia and borderline hypotension after a large bleed, so red cells are needed. An initial 10 mL/kg (200 mL for 20 kg) restores oxygen delivery and is then repeated as needed. Volumes of 2.5 to 5 mL/kg are too small to treat shock. Volumes of 30 to 50 mL/kg over-transfuse and raise portal pressure, which can worsen variceal bleeding.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "cbs-peds"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following medications is most appropriate to start now?",
        "options": [
          "Ceftriaxone IV",
          "Octreotide IV",
          "Propranolol PO",
          "Tranexamic acid IV",
          "Vitamin K IV"
        ],
        "correct": 1,
        "explanation": "Octreotide lowers splanchnic blood flow and portal pressure. It is started before endoscopy in suspected variceal bleeding in children as in adults. Propranolol is used to prevent a later bleed and is avoided during active bleeding with hypotension. Antibiotic prophylaxis is standard in cirrhosis, but he has no jaundice, ascites or enlarged liver to suggest it. Tranexamic acid and vitamin K do not lower portal pressure, and he has no liver disease or known clotting disorder.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "sigenp-peds-gib"
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "After resuscitation, endoscopy shows large esophageal varices, one with a red spot and fresh oozing.",
        "prompt": "Which of the following is the most appropriate endoscopic treatment for him?",
        "options": [
          "Argon plasma coagulation",
          "Clip placement on the varices",
          "Epinephrine injection alone",
          "Esophageal band ligation",
          "Hemostatic powder spray"
        ],
        "correct": 3,
        "explanation": "Bleeding esophageal varices are treated with band ligation, or with sclerotherapy in children too small for banding. At 20 kg he is large enough for band ligation. Clips, epinephrine injection alone and argon plasma coagulation are used for ulcers or vascular lesions, not varices. Hemostatic powder is a temporary measure for nonvariceal bleeding.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "sigenp-peds-gib"
      }
    ],
    "sources": [S["piccirillo"], S["cbs-peds"], S["romano"]],
    ...META,
  },
  {
    "id": "gi-bleed-33",
    "topic": "gi-bleed",
    "title": "Vomiting blood in a woman with fatty liver",
    "stem": "A 61-year-old woman presents to the emergency department 1 hour after vomiting about 2 cups of dark red blood. She has cirrhosis from metabolic dysfunction-associated steatohepatitis, diagnosed 3 years ago, with type 2 diabetes and obesity. She has never had an endoscopy. She takes metformin and spironolactone. She does not drink alcohol. She is alert and oriented. She has spider angiomas on her chest, mild ascites and no asterixis. Hemoglobin 84 g/L, platelets 62 x 10^9/L, INR 2.0, fibrinogen 2.1 g/L, bilirubin 38 umol/L, albumin 29 g/L, creatinine 74 umol/L.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "108/minute",
      "resp": "18/minute",
      "bp": "102/64 mmHg",
      "o2sat": "97% on room air",
      "weight": "96 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate way to manage her INR of 2.0 during this bleed?",
        "options": [
          "Cryoprecipitate 10 units IV",
          "Frozen plasma 15 mL/kg IV",
          "Prothrombin complex 25 units/kg IV",
          "Recombinant factor VIIa IV",
          "No product to correct the INR"
        ],
        "correct": 4,
        "explanation": "In cirrhosis the INR does not reflect the real balance of clotting, and variceal bleeding is driven by portal pressure. Baveno VII advises against frozen plasma in acute variceal bleeding because it does not correct the coagulopathy and adds volume that raises portal pressure. Prothrombin complex concentrate is also aimed at the INR, which is not the target. Recombinant factor VIIa is not recommended. Her fibrinogen is 2.1 g/L, so cryoprecipitate is not needed.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "baveno"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate timing for her upper endoscopy?",
        "options": [
          "After 48 hours of octreotide",
          "Before any fluid or blood is given",
          "Once the INR falls below 1.5",
          "Within 12 hours of presentation",
          "Within 24 hours of presentation"
        ],
        "correct": 3,
        "explanation": "Baveno VII advises upper endoscopy within 12 hours of presentation for suspected variceal bleeding, once she is resuscitated. Within 24 hours is the standard for nonvariceal bleeding and is too slow for likely varices. Endoscopy should follow resuscitation, not come before it. Waiting 48 hours delays band ligation. Waiting for the INR to fall is wrong, because the INR does not guide hemostasis in cirrhosis.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "baveno"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "Octreotide and ceftriaxone 1 g IV were started in the emergency department. Endoscopy shows bleeding esophageal varices, which are banded. Her Child-Pugh score is 9, class B.",
        "prompt": "Which of the following is the most appropriate total duration of her octreotide infusion?",
        "options": [
          "1 day only",
          "2 to 5 days",
          "6 to 9 days",
          "10 to 14 days",
          "21 to 28 days"
        ],
        "correct": 1,
        "explanation": "Baveno VII advises starting a vasoactive drug such as octreotide as soon as possible and continuing it for 2 to 5 days, because early rebleeding is most likely in that window. Stopping after 1 day leaves her exposed. Courses of 6 days or more add no benefit, and long-term prevention then moves to a nonselective beta blocker. Her Child-Pugh score is 9: bilirubin 2, albumin 2, INR 2, mild ascites 2 and no encephalopathy 1.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "baveno"
      }
    ],
    "sources": [
    {
      "id": "baveno",
      "citation": "de Franchis R, Bosch J, Garcia-Tsao G, Reiberger T, Ripoll C, Baveno VII Faculty. Baveno VII: renewing consensus in portal hypertension. J Hepatol. 2022.",
      "url": "https://doi.org/10.1016/j.jhep.2021.12.022"
    }
  ],
    ...META,
    "version": 2
  },
  {
    "id": "gi-bleed-34",
    "topic": "gi-bleed",
    "title": "Cramps then bloody stools in an older woman",
    "stem": "A 78-year-old woman presents to the emergency department with sudden crampy left lower abdominal pain that began this morning, followed 4 hours later by several loose stools mixed with bright red blood. She has hypertension, type 2 diabetes and chronic constipation. She takes amlodipine, hydrochlorothiazide and metformin. She has no history of atrial fibrillation. She has had no vomiting. The abdomen is mildly tender in the left lower quadrant without guarding or rebound. Lactate 1.4 mmol/L, hemoglobin 124 g/L, WBC 11.2 x 10^9/L, sodium 138 mmol/L, creatinine 84 umol/L.",
    "vitals": {
      "temperature": "37.6°C oral",
      "pulse": "96/minute",
      "resp": "18/minute",
      "bp": "146/80 mmHg",
      "o2sat": "97% on room air",
      "weight": "64 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely diagnosis for her?",
        "options": [
          "Acute mesenteric ischemia",
          "Angiodysplasia bleeding",
          "Diverticular bleeding",
          "Infectious colitis",
          "Ischemic colitis"
        ],
        "correct": 4,
        "explanation": "Sudden crampy left-sided pain followed within hours by bloody diarrhea in an older patient is typical of colon ischemia. Tenderness over the affected segment is mild. Acute mesenteric ischemia causes severe pain out of proportion to the examination, often with atrial fibrillation or a raised lactate, and bleeding comes late. Diverticular bleeding and angiodysplasia are usually painless. Infectious colitis is possible, but the sudden onset and her age favour ischemia.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "brandt"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate first imaging study for her?",
        "options": [
          "Abdominal radiograph",
          "CT abdomen with IV contrast",
          "Mesenteric duplex ultrasound",
          "Tagged red cell scan",
          "Upper GI contrast series"
        ],
        "correct": 1,
        "explanation": "CT with IV contrast is the preferred first imaging test for suspected colon ischemia. It shows the extent of bowel wall thickening and excludes pneumatosis, perforation and other causes. A plain radiograph is too insensitive. Duplex ultrasound of the mesenteric vessels is aimed at small bowel ischemia from large vessel disease. A tagged red cell scan and an upper GI series do not assess the colon wall.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "brandt"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "CT shows segmental wall thickening of the descending and sigmoid colon without pneumatosis or free air.",
        "prompt": "Which of the following is the most appropriate management for her now?",
        "options": [
          "Emergency segmental colectomy",
          "Heparin infusion",
          "Mesenteric angiography",
          "Supportive care with IV fluids",
          "Urgent colonoscopy with clips"
        ],
        "correct": 3,
        "explanation": "Mild colon ischemia of the left colon, without peritoneal signs, pneumatosis or organ failure, usually resolves with supportive care. Treatment includes IV fluids, bowel rest and a review of drugs that lower blood flow, such as her diuretic. Colectomy is reserved for gangrene, perforation or failure to improve. Heparin is used only for a proven embolic or thrombotic cause. Angiography is not needed because the large vessels are not the problem. There is no bleeding point for clips to treat.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "brandt"
      }
    ],
    "sources": [S["brandt"]],
    ...META,
  },
  {
    "id": "gi-bleed-35",
    "topic": "gi-bleed",
    "title": "Bright red blood on the toilet paper",
    "stem": "A 36-year-old woman presents to the emergency department after seeing bright red blood on the toilet paper and coating her stool twice today. She has had constipation for 2 weeks. She has never been admitted to hospital for bleeding. She has no weight loss, change in bowel habit before this or family history of colon cancer. She takes no medications. She is well-appearing. Rectal examination shows a small amount of red blood on the glove and no mass. Hemoglobin 136 g/L.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "76/minute",
      "resp": "16/minute",
      "bp": "132/78 mmHg",
      "o2sat": "99% on room air",
      "weight": "64 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is her Oakland score for acute lower GI bleeding based on these findings?",
        "options": [
          "6",
          "8",
          "10",
          "12",
          "14"
        ],
        "correct": 1,
        "explanation": "Age under 40 scores 0 and female sex scores 0. No previous admission for lower GI bleeding scores 0, and blood on rectal examination scores 1. Pulse 76/minute scores 1 (70 to 89). Systolic BP 132 mmHg scores 2 (130 to 159), and hemoglobin 136 g/L scores 4 (130 to 159 g/L). The total is 0 + 0 + 0 + 1 + 1 + 2 + 4 = 8. Totals of 10 or more come from placing BP or hemoglobin in a band below her actual values.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "oakland"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate disposition for her?",
        "options": [
          "Admit for colonoscopy within 24 hours",
          "Admit for serial hemoglobin checks",
          "CT angiography before discharge",
          "Discharge with outpatient follow-up",
          "Urgent upper endoscopy"
        ],
        "correct": 3,
        "explanation": "An Oakland score of 8 or less predicts about a 95% chance of safe discharge. Her normal vital signs and hemoglobin support management as an outpatient, with follow-up and further evaluation as needed. Admission for urgent colonoscopy or serial hemoglobin checks is not needed. CT angiography is for patients with ongoing hemodynamically significant bleeding. Nothing suggests an upper GI source.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "acg-lgib"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following findings, if present, would most warrant prompt colonoscopy after discharge?",
        "options": [
          "Age under 40 years",
          "Blood on toilet paper",
          "Pain with defecation",
          "Recent constipation",
          "Unintended weight loss"
        ],
        "correct": 4,
        "explanation": "Unintended weight loss is an alarm feature for colorectal cancer and warrants prompt colonoscopy, even in a younger adult. Blood on the toilet paper, pain with defecation and recent constipation point to a benign anorectal source such as a fissure or hemorrhoids. Younger age lowers, rather than raises, the likelihood of cancer.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "acg-lgib"
      }
    ],
    "sources": [S["acg-lgib"], S["oakland"]],
    ...META,
  },
  {
    "id": "gi-bleed-36",
    "topic": "gi-bleed",
    "title": "Black stools after a coronary stent",
    "stem": "A 61-year-old man presents to the emergency department with black stools for 1 day. Four months ago he had a drug-eluting coronary stent placed for a non-ST elevation myocardial infarction. He takes ASA 81 mg daily, ticagrelor 90 mg twice daily, rosuvastatin and ramipril. He has no chest pain. He has no liver disease and drinks rarely. He is pale but alert. The abdomen is soft. Rectal examination shows melena.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "98/minute",
      "resp": "18/minute",
      "bp": "124/74 mmHg",
      "o2sat": "98% on room air",
      "weight": "90 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "update": "Hemoglobin 102 g/L (140 g/L 4 months ago), urea 10.5 mmol/L, creatinine 88 umol/L, INR 1.0, platelets 240 x 10^9/L.",
        "prompt": "Which of the following transfusion approaches is most appropriate for him now?",
        "options": [
          "Frozen plasma 2 units IV",
          "Red cells to keep Hb above 120 g/L",
          "Red cells 1 unit now",
          "Red cells 2 units now",
          "No red cell transfusion now"
        ],
        "correct": 4,
        "explanation": "His coronary disease justifies a threshold higher than 80 g/L, usually up to 100 g/L, but his hemoglobin of 102 g/L is above that and he has no chest pain. He needs crossmatch and serial hemoglobin, not transfusion now. Giving 1 or 2 units, or aiming above 120 g/L, adds volume and transfusion risk without benefit. His INR is normal, so plasma has no role.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "icg"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate plan for his antiplatelet drugs?",
        "options": [
          "Give 1 adult dose of platelets",
          "Hold ASA and continue ticagrelor",
          "Hold ASA and ticagrelor for 7 days",
          "Keep ASA and involve cardiology",
          "Stop ticagrelor without review"
        ],
        "correct": 3,
        "explanation": "ASA taken for secondary prevention should not be held in GI bleeding, because stopping it raises cardiovascular events and death. With a stent placed 4 months ago, any pause in ticagrelor must be short and planned with cardiology. Holding both drugs for a week risks stent thrombosis. Holding ASA while continuing ticagrelor reverses the priority. Platelet transfusion is not suggested for GI bleeding on antiplatelet drugs.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "acg-cag"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "An hour later he vomits a large volume of fresh blood and clots. Endoscopy is arranged for this evening.",
        "prompt": "Which of the following given before endoscopy is most likely to improve the view of the stomach?",
        "options": [
          "Erythromycin 250 mg IV",
          "Metoclopramide 10 mg IV",
          "Octreotide 50 mcg IV",
          "Ondansetron 4 mg IV",
          "Sucralfate 1 g PO"
        ],
        "correct": 0,
        "explanation": "IV erythromycin given about 30 to 120 minutes before endoscopy speeds gastric emptying of blood and clot. It improves the view and reduces repeat endoscopy, and the ACG guideline suggests it. Metoclopramide has much less supporting evidence. Octreotide is for variceal bleeding. Ondansetron treats nausea but does not clear the stomach. Oral sucralfate adds material to the stomach.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "acg-ugib"
      }
    ],
    "sources": [S["acg-cag"], S["acg-ugib"], S["icg"]],
    ...META,
  },
  {
    "id": "gi-bleed-37",
    "topic": "gi-bleed",
    "title": "Weight loss and coffee-ground vomiting",
    "stem": "A 72-year-old man presents to the emergency department after vomiting coffee-ground material this morning. For 3 months he has had early satiety and an unintended weight loss of 9 kg. He has had intermittent black stools for a month and is tired on exertion. He takes ASA 81 mg daily for a coronary stent placed 6 years ago. He smokes and drinks little alcohol. He is thin and pale. There is a vague fullness in the epigastrium. Rectal examination shows melena.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "96/minute",
      "resp": "16/minute",
      "bp": "132/76 mmHg",
      "o2sat": "97% on room air",
      "weight": "61 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "menu",
        "prompt": "Which of the following features in his history most suggest a malignant source of bleeding?",
        "options": [
          "Coffee-ground vomiting today",
          "Daily ASA 81 mg use",
          "Fatigue on exertion",
          "Intermittent black stools",
          "Three months of early satiety",
          "Unintended 9 kg weight loss"
        ],
        "select": 2,
        "correct": [
          4,
          5
        ],
        "explanation": "Early satiety and unintended weight loss are alarm features for gastric cancer. Coffee-ground emesis and melena show an upper GI source but do not separate cancer from an ulcer. Fatigue reflects anemia from any cause. Daily ASA points toward a peptic ulcer rather than a tumour.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "rosen-ch75"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Hemoglobin 64 g/L, MCV 71 fL, urea 8.2 mmol/L, INR 1.0. He has no chest pain, and repeat vital signs are unchanged.",
        "prompt": "Which of the following transfusion plans is most appropriate for him now?",
        "options": [
          "Frozen plasma 2 units IV",
          "Red cells 1 unit, then recheck Hb",
          "Red cells 4 units over 4 hours",
          "Transfuse to Hb above 120 g/L",
          "No transfusion until endoscopy"
        ],
        "correct": 1,
        "explanation": "His hemoglobin of 64 g/L is below the transfusion threshold even with his coronary history, so he needs red cells. A low MCV points to chronic loss, and he is stable, so one unit at a time with a repeat hemoglobin avoids fluid overload. Four units, or a target above 120 g/L, is a liberal strategy. His INR is normal, so plasma has no role, and waiting for endoscopy leaves a hemoglobin of 64 g/L untreated.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "villanueva"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate next step to establish the diagnosis?",
        "options": [
          "Barium swallow and meal",
          "CT abdomen as an outpatient",
          "Outpatient gastroscopy in 6 weeks",
          "Serum CEA and CA 19-9 levels",
          "Upper endoscopy within 24 hours"
        ],
        "correct": 4,
        "explanation": "An upper GI bleed with alarm features needs inpatient upper endoscopy within 24 hours. It can find and treat the source and take biopsies of any mass. A barium study cannot treat bleeding or give tissue. Outpatient CT or gastroscopy delays both diagnosis and hemostasis. Tumour markers are not diagnostic and do not replace endoscopy.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "icg"
      }
    ],
    "sources": [S["icg"], S["villanueva"], S["rosen-ch75"]],
    ...META,
  },
  {
    "id": "gi-bleed-38",
    "topic": "gi-bleed",
    "title": "Near faint on the toilet",
    "stem": "A 68-year-old woman is brought to the emergency department by ambulance after she nearly fainted on the toilet. Since midnight she has passed dark maroon stool four times, the last with red clots. Three days ago she had an ERCP with biliary sphincterotomy and removal of a common bile duct stone and went home the same day. She has stable angina and takes ASA 81 mg daily and bisoprolol. She has no abdominal pain, vomiting or history of liver disease. She is pale and clammy. The abdomen is soft and non-tender. Rectal examination shows maroon blood with clots. Hemoglobin 76 g/L (128 g/L before the ERCP), INR 1.1, platelets 210 x 10^9/L.",
    "vitals": {
      "temperature": "36.5°C oral",
      "pulse": "112/minute",
      "resp": "22/minute",
      "bp": "82/50 mmHg",
      "o2sat": "97% on room air",
      "weight": "66 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "update": "The blood bank can release uncrossmatched red cells now or crossmatched units in 45 minutes. She is expected to need several units quickly.",
        "prompt": "Which of the following is most appropriate as her red cell transfusion begins?",
        "options": [
          "Crystalloid 2 L before any blood",
          "Give each unit over 2 hours",
          "Infuse through a blood warmer",
          "Start warming once she is cold",
          "Wait for crossmatched units"
        ],
        "correct": 2,
        "explanation": "She is in hemorrhagic shock and will need several units fast. Canadian Blood Services advises giving all products through an approved blood warming device, because hypothermia worsens platelet and clotting function, slows citrate metabolism and depresses the heart. Waiting until she is cold lets that harm start first. Giving each unit over 2 hours is far too slow in shock, and waiting 45 minutes for crossmatched units delays red cells she needs now. The guide advises limiting crystalloid to about 1 L before switching to blood, so 2 L first dilutes her further.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "cbs"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate procedure to find and treat her bleeding?",
        "options": [
          "Colonoscopy after bowel preparation",
          "Duodenoscopy with a side-viewing scope",
          "Exploratory laparotomy",
          "Tagged red cell nuclear scan",
          "Video capsule endoscopy"
        ],
        "correct": 1,
        "explanation": "Bleeding 3 days after a sphincterotomy is most often delayed bleeding from the cut papilla. A side-viewing duodenoscope reaches the papilla, and standard endoscopic hemostasis treats it. The ESGE guideline keeps a fully covered metal stent for bleeding that standard methods cannot control. Colonoscopy looks in the wrong place. A nuclear scan and capsule endoscopy cannot treat the bleeding, and capsule is not for an unstable patient. Laparotomy is kept for failed endoscopic and radiological control.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "esge-ercp"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following features of her presentation most suggests an upper source for her maroon stool?",
        "options": [
          "Absence of abdominal pain",
          "Clots mixed in the stool",
          "Fall in hemoglobin of 52 g/L",
          "Hypotension with tachycardia",
          "Recent biliary sphincterotomy"
        ],
        "correct": 4,
        "explanation": "A sphincterotomy 3 days ago left a fresh cut at the papilla in the duodenum, and delayed bleeding from it is a known complication, so brisk bleeding there can pass as maroon stool. Shock with rectal bleeding does raise the chance of an upper source, but it also fits a brisk colonic bleed and is less specific than a known fresh wound. Clots in the stool point toward a lower source (LR 0.05). The size of the hemoglobin fall shows severity, not site. Painless bleeding occurs with both upper and colonic sources.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 2
        },
        "source": "srygley-ugib"
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "The bleeding has been controlled. She has received 3 units of red cells. Her pulse is 88/minute, BP 118/70 mmHg and hemoglobin 86 g/L. She has no chest pain.",
        "prompt": "Which of the following is the most appropriate threshold for further red cell transfusion?",
        "options": [
          "Hb below 60 g/L",
          "Hb below 70 g/L",
          "Hb below 80 g/L",
          "Hb below 100 g/L",
          "Hb below 120 g/L"
        ],
        "correct": 2,
        "explanation": "She has known coronary disease with stable angina, so the AABB guideline suggests a threshold of 80 g/L rather than 70 g/L. Now that bleeding is controlled, further red cells are given only if hemoglobin falls below that level. A threshold of 70 g/L is advised for most hospitalized adults without cardiovascular disease. Thresholds of 100 or 120 g/L expose her to more transfusion without shown benefit. A threshold of 60 g/L is lower than any threshold the guideline recommends.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "aabb"
      }
    ],
    "sources": [
    {
      "id": "cbs",
      "citation": "Trudeau JD, Dawe P, Shih AW. Massive hemorrhage and emergency transfusion. In: Clinical Guide to Transfusion. Canadian Blood Services. 2021.",
      "url": "https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion"
    },
    {
      "id": "esge-ercp",
      "citation": "Dumonceau JM, Kapral C, Aabakken L, et al. ERCP-related adverse events: European Society of Gastrointestinal Endoscopy (ESGE) guideline. Endoscopy. 2020.",
      "url": "https://doi.org/10.1055/a-1075-4080"
    },
    {
      "id": "srygley-ugib",
      "citation": "Srygley FD, Gerardo CJ, Tran T, Fisher DA. Does this patient have a severe upper gastrointestinal bleed? JAMA. 2012.",
      "url": "https://doi.org/10.1001/jama.2012.253"
    },
    {
      "id": "aabb",
      "citation": "Carson JL, Stanworth SJ, Guyatt G, et al. Red blood cell transfusion: 2023 AABB international guidelines. JAMA. 2023.",
      "url": "https://doi.org/10.1001/jama.2023.12914"
    }
  ],
    ...META,
    "version": 2
  },
  {
    "id": "gi-bleed-39",
    "topic": "gi-bleed",
    "title": "Frequent bloody stools in a young woman",
    "stem": "A 24-year-old woman with ulcerative colitis presents to the emergency department with 5 days of eight to ten bloody stools a day and crampy lower abdominal pain. She takes mesalamine 2.4 g daily and has not missed doses. She has not travelled or taken antibiotics recently. She is pale and tired. The abdomen is mildly tender in the lower quadrants and not distended. Hemoglobin 102 g/L, C-reactive protein 64 mg/L, albumin 30 g/L, potassium 3.3 mmol/L.",
    "vitals": {
      "temperature": "37.9°C oral",
      "pulse": "104/minute",
      "resp": "18/minute",
      "bp": "112/70 mmHg",
      "o2sat": "99% on room air",
      "weight": "58 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate initial treatment for her flare?",
        "options": [
          "Ciprofloxacin 500 mg PO twice daily",
          "Loperamide 2 mg PO after each stool",
          "Mesalamine 4.8 g PO daily",
          "Methylprednisolone 60 mg IV daily",
          "Prednisone 40 mg PO daily"
        ],
        "correct": 3,
        "explanation": "Six or more bloody stools a day plus any one sign of systemic toxicity define acute severe ulcerative colitis, and she has several: pulse over 90/minute, fever, hemoglobin below 105 g/L and a raised C-reactive protein. It needs admission and IV corticosteroids such as methylprednisolone 60 mg daily. Oral prednisone and a higher mesalamine dose suit milder flares. Antimotility drugs can precipitate toxic megacolon. Antibiotics are not routine without evidence of infection.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "bsg-ibd"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate venous thromboembolism plan while she is in hospital?",
        "options": [
          "Aspirin 81 mg PO daily",
          "Compression stockings only",
          "Enoxaparin 40 mg SC daily",
          "Heparin 5 000 units IV bolus",
          "No prophylaxis while bleeding"
        ],
        "correct": 2,
        "explanation": "Hospitalized patients with inflammatory bowel disease have a high risk of venous thrombosis. The Canadian Association of Gastroenterology consensus recommends anticoagulant prophylaxis even with rectal bleeding, unless the bleeding is severe. Her hemoglobin and vital signs do not show severe bleeding. ASA and stockings alone are less effective. An IV heparin bolus is treatment dosing, not prophylaxis.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "cag-vte"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following stool tests is most important to send on admission?",
        "options": [
          "C. difficile testing",
          "Fecal calprotectin",
          "Fecal elastase",
          "Fecal immunochemical test",
          "Stool ova and parasites"
        ],
        "correct": 0,
        "explanation": "Clostridioides difficile infection can mimic or trigger a flare of ulcerative colitis and changes treatment. Stool should be tested for it and for other bacterial pathogens on admission. Calprotectin and a fecal immunochemical test only confirm inflammation or blood that are already known. Fecal elastase tests pancreatic function. She has not travelled, so parasites are less likely.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "bsg-ibd"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following imaging studies is most appropriate on admission?",
        "options": [
          "Barium enema of the colon",
          "Full colonoscopy to the cecum",
          "Plain abdominal radiograph",
          "Tagged red cell scan",
          "Upper GI contrast series"
        ],
        "correct": 2,
        "explanation": "A plain abdominal radiograph on admission looks for colonic dilatation suggesting toxic megacolon and helps judge the extent of disease. A full colonoscopy and a barium enema carry a risk of perforation in severe colitis. A limited flexible sigmoidoscopy is preferred when endoscopy is needed. A tagged red cell scan and an upper GI series do not address colitis.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "bsg-ibd"
      }
    ],
    "sources": [S["bsg-ibd"], S["cag-vte"]],
    ...META,
  },
  {
    "id": "gi-bleed-40",
    "topic": "gi-bleed",
    "title": "Black stools after a bout of diarrhea",
    "stem": "A 45-year-old woman presents to the emergency department because her stools have been black for 2 days. Last week she had several days of diarrhea and took bismuth subsalicylate several times a day. Two weeks ago her family doctor started ferrous gluconate for iron deficiency anemia from heavy menstrual periods. She has no abdominal pain, vomiting, dizziness or fainting. She takes no NSAIDs and drinks rarely. She is well-appearing. Her tongue has a black coating. Rectal examination shows formed dark green-black stool that is not tarry or sticky. Hemoglobin 118 g/L (116 g/L 2 weeks ago), urea 4.1 mmol/L.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "76/minute",
      "resp": "16/minute",
      "bp": "124/78 mmHg",
      "o2sat": "99% on room air",
      "weight": "68 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely cause of her black stools?",
        "options": [
          "Bismuth and iron ingestion",
          "Bleeding duodenal ulcer",
          "Colonic angiodysplasia",
          "Esophageal varices",
          "Right colon cancer"
        ],
        "correct": 0,
        "explanation": "Bismuth subsalicylate and oral iron both turn stool black, and bismuth also blackens the tongue. Her stool is formed and green-black rather than tarry, and her hemoglobin is stable with a normal urea, which argues against a GI bleed. A bleeding ulcer or varices large enough to cause melena would usually cause tarry stool, a raised urea or a fall in hemoglobin. Right colon cancer and angiodysplasia usually cause maroon stool or slow iron deficiency.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "rosen-ch26"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following findings, if present, would most suggest true melena?",
        "options": [
          "Black coating on the tongue",
          "Dark green-black formed stool",
          "Heavy menstrual periods",
          "Recent watery diarrhea",
          "Tarry, sticky, foul-smelling stool"
        ],
        "correct": 4,
        "explanation": "Melena is black, tarry, sticky and foul-smelling because hemoglobin has been digested in the gut. Formed dark green-black stool is typical of iron or bismuth. A black tongue points to bismuth. Heavy periods explain her iron deficiency but not black stool. Recent diarrhea explains why she took bismuth.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "rosen-ch26"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate plan for her?",
        "options": [
          "Admit for upper endoscopy",
          "Reassure and stop bismuth",
          "Start pantoprazole 80 mg IV",
          "Stop the iron supplement",
          "Urgent outpatient colonoscopy"
        ],
        "correct": 1,
        "explanation": "She is well, with stable hemoglobin, a normal urea and stool typical of bismuth and iron, so she can be reassured. Stopping bismuth will clear the black tongue. Her iron should continue because she has iron deficiency from heavy periods. She has no features of an upper GI bleed that would need IV PPI or admission for endoscopy. Nothing here calls for urgent colonoscopy, although her family doctor should follow her anemia.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "rosen-ch26"
      }
    ],
    "sources": [S["rosen-ch26"]],
    ...META,
  },
  {
    "id": "gi-bleed-41",
    "topic": "gi-bleed",
    "alsoTopics": ["arrhythmia"],
    "title": "A racing heart that will not settle",
    "stem": "A 58-year-old man presents to the emergency department with 4 hours of a pounding heartbeat and light-headedness when he stands. He has paroxysmal atrial fibrillation, with two brief episodes in the past year that settled on their own, and takes metoprolol 25 mg twice daily. His heart rate between episodes is 60 to 70/minute. He has no other medical conditions and takes no anticoagulant. For 5 weeks he has taken diclofenac 50 mg three times daily for a shoulder injury. For a week he has felt more tired than usual. He denies chest pain, abdominal pain and vomiting, and he has not looked at his stools. He has not missed or changed any medications. He is pale. His lungs are clear and there is no leg edema. The abdomen is soft and non-tender. The ECG shows atrial fibrillation at 138/minute with a narrow QRS and no ST changes.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "138/minute",
      "resp": "20/minute",
      "bp": "96/60 mmHg",
      "o2sat": "97% on room air",
      "weight": "80 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following investigations is most important to add to his assessment now?",
        "options": [
          "Chest radiograph",
          "Complete blood count",
          "Echocardiogram today",
          "High-sensitivity troponin",
          "Thyroid-stimulating hormone"
        ],
        "correct": 1,
        "explanation": "His rate of 138/minute is far above his usual rate on metoprolol, and he is pale with a low BP after a week of fatigue. After 5 weeks of diclofenac, hidden GI bleeding is a likely driver even without GI symptoms. The CAEP checklist lists bleeding among the medical causes of rapid atrial fibrillation that must be found and treated first, so a hemoglobin is needed now, with a rectal examination. The checklist advises against routine troponin in rapid atrial fibrillation because a small demand rise is expected. A chest radiograph, thyroid testing and an echocardiogram look for other causes and do not explain pallor with a low BP.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 3
        },
        "source": "caep-af"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Rectal examination shows melena. Endoscopy is planned for the morning. A resident asks whether to start an anticoagulant because his atrial fibrillation began 4 hours ago.",
        "prompt": "Which of the following is the most appropriate anticoagulation plan for him now?",
        "options": [
          "apixaban 5 mg PO twice daily",
          "enoxaparin 1 mg/kg SC twice daily",
          "Heparin infusion without a bolus",
          "rivaroxaban 20 mg PO daily",
          "No anticoagulation"
        ],
        "correct": 4,
        "explanation": "He is bleeding from the gut, so any anticoagulant would add to the bleed. He also has no current indication for one. He meets none of the CHADS-65 criteria of age 65 or more, prior stroke or TIA, hypertension, heart failure or diabetes, so the CAEP checklist does not call for long-term anticoagulation. His atrial fibrillation began 4 hours ago, less than 12 hours, so the checklist would not require anticoagulation before a cardioversion either. Apixaban, rivaroxaban, enoxaparin and a heparin infusion all add bleeding risk with no benefit to him.",
        "keyFeature": {
          "topic": "arrhythmia",
          "n": 6
        },
        "source": "caep-af"
      },
      {
        "id": "q3",
        "kind": "menu",
        "select": 1,
        "update": "His heart rate is 134/minute and his BP 94/58 mmHg despite 500 mL of Ringer's lactate.",
        "prompt": "Which of the following is the most appropriate treatment for his heart rate now?",
        "options": [
          "amiodarone 150 mg IV",
          "digoxin 0.5 mg IV",
          "diltiazem 20 mg IV",
          "metoprolol 5 mg IV",
          "Red cell transfusion",
          "Synchronized cardioversion"
        ],
        "correct": [
          4
        ],
        "explanation": "His fast rate is a response to blood loss, with melena, pallor and a BP that stays low after crystalloid. The CAEP checklist warns that in rapid atrial fibrillation secondary to a medical cause such as bleeding, cardioversion may be harmful and aggressive rate control should be avoided, and the cause should be treated. Red cells restore volume and oxygen delivery, and his rate should fall as he is resuscitated. Diltiazem 20 mg, the usual 0.25 mg/kg for 80 kg, and metoprolol would lower his BP further and remove the compensation that keeps up his output. Amiodarone and digoxin also target the rhythm, not the bleed. Cardioversion is often chosen for recent-onset atrial fibrillation, but not when bleeding is driving the rate.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "caep-af"
      }
    ],
    "sources": [
    {
      "id": "caep-af",
      "citation": "Stiell IG, de Wit K, Scheuermeyer FX, et al. 2021 CAEP acute atrial fibrillation/flutter best practices checklist. CJEM. 2021.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/"
    }
  ],
    ...META,
    "version": 3
  },
  {
    "id": "gi-bleed-42",
    "topic": "gi-bleed",
    "title": "Blood-streaked stools in a thriving baby",
    "stem": "A 7-week-old girl is brought to the emergency department by her parents because of streaks of blood and mucus in her stools for 4 days. She is exclusively breastfed and feeds well. She weighed 3.4 kg at birth and weighs 4.6 kg today. She has had no vomiting or fever and is content between feeds. She received vitamin K IM at birth. She is alert and well-appearing. The abdomen is soft and not distended. There is no anal fissure on inspection. The diaper shows loose stool with flecks of blood. Hemoglobin 118 g/L, platelets 352 x 10^9/L.",
    "vitals": {
      "temperature": "37.0°C rectal",
      "pulse": "138/minute",
      "resp": "38/minute",
      "o2sat": "99% on room air",
      "weight": "4.6 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely cause of her rectal bleeding?",
        "options": [
          "Allergic proctocolitis",
          "Anal fissure from straining",
          "Infectious bacterial colitis",
          "Necrotizing enterocolitis",
          "Vitamin K deficiency bleeding"
        ],
        "correct": 0,
        "explanation": "A thriving, well breastfed infant with blood-streaked mucoid stools most likely has food protein-induced allergic proctocolitis, usually from cow's milk protein in the mother's diet. No fissure was seen. She received vitamin K and has a normal platelet count, which makes a bleeding disorder unlikely. She has no fever or ill appearance to suggest infection, and no distension or feeding intolerance to suggest necrotizing enterocolitis.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "sigenp-fpiap"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate management for her?",
        "options": [
          "Amoxicillin PO for 7 days",
          "Maternal dairy elimination",
          "Stop breastfeeding for a week",
          "Switch to cow's milk formula",
          "Upper endoscopy and colonoscopy"
        ],
        "correct": 1,
        "explanation": "A 2 to 4 week trial of removing cow's milk protein from the mother's diet, while breastfeeding continues, usually clears the visible blood within days. Stopping breastfeeding is unnecessary, and a standard cow's milk formula contains the protein that causes the problem. Antibiotics do not treat an allergic process. Endoscopy is not needed in a well infant with a typical picture.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "sigenp-fpiap"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following findings, if present, would most warrant urgent further investigation?",
        "options": [
          "Bilious vomiting",
          "Blood-streaked mucus",
          "Several stools a day",
          "Soft, non-tender abdomen",
          "Steady weight gain"
        ],
        "correct": 0,
        "explanation": "Bilious vomiting in an infant suggests malrotation with volvulus or another obstruction and needs urgent imaging and surgical review. Blood-streaked mucus, frequent stools, a soft abdomen and steady weight gain all fit benign allergic proctocolitis.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "applegate"
      }
    ],
    "sources": [S["fpiap"], S["applegate"]],
    ...META,
  },
  {
    "id": "gi-bleed-43",
    "topic": "gi-bleed",
    "title": "Blood on the stool in a preschooler",
    "stem": "A 4-year-old girl is brought to the emergency department by her father because of bright red blood on her stool several times over 3 weeks. Today there was more blood than usual in the toilet. She has no pain when passing stool, and her stools are soft and formed. She has no abdominal pain, vomiting, fever or diarrhea. She is eating well and growing along her usual curve. She takes no medications. There is no family history of bowel disease. She is playful and well. The abdomen is soft and non-tender. There is no anal fissure or skin tag. Rectal examination shows soft stool with red blood and no mass. Hemoglobin 118 g/L, platelets 290 x 10^9/L, INR 1.0.",
    "vitals": {
      "temperature": "36.8°C tympanic",
      "pulse": "104/minute",
      "resp": "22/minute",
      "bp": "98/60 mmHg",
      "o2sat": "99% on room air",
      "weight": "17 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely cause of her rectal bleeding?",
        "options": [
          "Anal fissure",
          "Infectious colitis",
          "Intussusception",
          "Juvenile polyp",
          "Meckel diverticulum"
        ],
        "correct": 3,
        "explanation": "Repeated painless bright red bleeding on formed stool in a well child over 2 years old is typical of a juvenile polyp. An anal fissure causes pain on passing stool and usually follows constipation, and no fissure is seen. Infectious colitis causes diarrhea and often fever. Intussusception causes colicky pain and vomiting. Meckel diverticulum bleeds painlessly but usually as a large maroon bleed with a fall in hemoglobin, and her hemoglobin is normal.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "piccirillo-peds-gib"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following features of her history best helps to locate the source of her bleeding?",
        "options": [
          "Bright red blood on formed stool",
          "Normal hemoglobin level",
          "Painless bleeding episodes",
          "Weight gain on her curve",
          "No family history of polyps"
        ],
        "correct": 0,
        "explanation": "Bright red blood on the surface of formed stool has not travelled far through the bowel, which places the source in the rectum or distal colon. Painless bleeding occurs with sources at many levels, including Meckel diverticulum. A normal hemoglobin and normal growth show that she is not losing much blood, but they do not localize it. A negative family history makes a polyposis syndrome less likely but says nothing about where the bleeding is.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "piccirillo-peds-gib"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate next step to identify the cause?",
        "options": [
          "Abdominal ultrasound today",
          "Air contrast enema",
          "Referral for colonoscopy",
          "Stool culture and reassurance",
          "Technetium-99m pertechnetate scan"
        ],
        "correct": 2,
        "explanation": "Colonoscopy is recommended for any child with persistent rectal bleeding that is not explained by an anal cause, and it can remove a polyp in the same procedure. She is stable with a normal hemoglobin, so this can be arranged with a pediatric gastroenterologist rather than as an emergency. Ultrasound and air enema look for intussusception, which does not fit. A pertechnetate scan looks for Meckel diverticulum, which usually causes a large painless bleed. Stool culture suits bloody diarrhea, which she does not have.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "piccirillo-peds-gib"
      }
    ],
    "sources": [
    {
      "id": "piccirillo-peds-gib",
      "citation": "Piccirillo M, Pucinischi V, Mennini M, et al. Gastrointestinal bleeding in children: diagnostic approach. Ital J Pediatr. 2024.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10807079/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "gi-bleed-44",
    topic: "gi-bleed",
    title: "Maroon stools during dialysis",
    stem: "A 67-year-old man is brought to the emergency department by ambulance from his hemodialysis unit. One hour into his session he passed a large maroon stool and felt light-headed, and dialysis was stopped. He passed a second maroon stool without clots in the ambulance. He received his usual heparin bolus of 2 000 units at the start of dialysis, with no infusion. He has end-stage kidney disease from diabetes, is anuric and has a left forearm arteriovenous fistula. A colonoscopy 3 years ago showed scattered sigmoid diverticula. He takes no antiplatelet, anticoagulant or NSAID. He has no abdominal pain and has not vomited. He is pale. The abdomen is soft and non-tender. Rectal examination shows maroon stool.",
    vitals: {
      temperature: "36.4°C oral",
      pulse: "118/minute",
      resp: "20/minute",
      bp: "88/54 mmHg",
      o2sat: "97% on room air",
      weight: "78 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Hemoglobin 68 g/L (104 g/L last week), urea 31.0 mmol/L, creatinine 690 umol/L, INR 1.1, aPTT 31 seconds, platelets 212 x 10^9/L.",
        prompt: "Which of the following usual clues to an upper GI source is made unreliable by his kidney failure?",
        options: [
          "Absence of clots in the stool",
          "Maroon colour of the stool",
          "Tachycardia with hypotension",
          "Urea to creatinine ratio",
          "Vomiting of blood",
        ],
        correct: 3,
        explanation: "In a systematic review of bedside findings, a urea nitrogen to creatinine ratio above 30 in conventional units made an upper source more likely. In his case both values are set by kidney failure and dialysis, not by digested blood. His ratio is about 11 (urea 31.0 mmol/L is 86.8 mg/dL, and creatinine 690 umol/L is 7.8 mg/dL), so it looks reassuring whatever the source. Tachycardia with hypotension still reflects the size of the bleed. Stool colour, clots and vomiting of blood are not changed by kidney function.",
        keyFeature: { topic: "gi-bleed", n: 2 },
        source: "srygley-ugib",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following stool findings would most lower the likelihood of an upper GI source?",
        options: [
          "Black tarry stool",
          "Blood clots in the stool",
          "Large stool volume",
          "Maroon rather than red colour",
          "Positive fecal occult blood",
        ],
        correct: 1,
        explanation: "In the same review, blood clots in the stool had a likelihood ratio of 0.05 for an upper source, which makes it much less likely. His stools had no clots, so this finding does not argue against an upper source in his case. Black tarry stool seen on examination raises the likelihood of an upper source, with a likelihood ratio of 25. A large volume reflects a brisk bleed from any level. A positive occult blood test confirms blood but does not locate it. Maroon stool is darker than fresh red blood and does not point away from the upper tract.",
        keyFeature: { topic: "gi-bleed", n: 2 },
        source: "srygley-ugib",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        prompt: "Which of the following are the most appropriate immediate measures for him?",
        options: [
          "Crossmatch 2 units of red cells",
          "Crystalloid 2 L IV bolus",
          "Crystalloid 500 mL IV bolus",
          "Frozen plasma 15 mL/kg IV",
          "Platelets 1 adult dose IV",
          "Protamine 20 mg IV",
          "Tranexamic acid 1 g IV",
        ],
        correct: [0, 2],
        explanation: "He is hypotensive and tachycardic with a hemoglobin of 68 g/L, so red cells should be crossmatched now. A modest crystalloid bolus supports his BP while the blood is prepared. He is anuric, so 2 L of crystalloid cannot be excreted, risks pulmonary edema and dilutes clotting factors. His INR of 1.1 and platelets of 212 x 10^9/L need no plasma or platelets. His heparin was a single bolus at the start of dialysis and his aPTT is 31 seconds, so protamine has nothing to reverse. In the HALT-IT trial, tranexamic acid did not reduce death from GI bleeding and increased venous thrombosis.",
        keyFeature: { topic: "gi-bleed", n: 5 },
        source: "halt-it",
      },
      {
        id: "q4",
        kind: "single",
        update: "After resuscitation in the emergency department his pulse is 94/minute and his systolic BP is 116 mmHg. He has had no further stool.",
        prompt: "Which of the following is the most appropriate timing for his upper endoscopy?",
        options: [
          "After colonoscopy",
          "Only if bleeding recurs",
          "Within 6 hours",
          "Within 24 hours",
          "Within 72 hours",
        ],
        correct: 3,
        explanation: "His shock responded to resuscitation, and once a patient is stable, endoscopy within 24 hours is the usual recommendation for upper GI bleeding. In a randomized trial of high-risk patients whose blood pressure responded to resuscitation, endoscopy within 6 hours of gastroenterology consultation did not lower 30-day mortality compared with endoscopy at 6 to 24 hours. That trial excluded patients whose shock did not respond, and for them endoscopy should not wait. Waiting 72 hours, or until after colonoscopy, leaves a possible upper source unexamined in a man who has already been in shock. Waiting for rebleeding risks a second episode of shock.",
        keyFeature: { topic: "gi-bleed", n: 6 },
        source: "lau",
      },
    ],
    sources: [S["srygley"], S["halt-it"], S["lau"]],
    ...META,
    version: 2,
  },
  {
    "id": "gi-bleed-45",
    "topic": "gi-bleed",
    "title": "Tiredness and breathlessness on stairs",
    "stem": "A 41-year-old man presents to the emergency department with 2 months of fatigue and breathlessness when climbing stairs. He has had no chest pain, fainting, black stools or visible bleeding. He eats a varied diet including red meat. He has occasional heartburn. His father had colon cancer at age 52. He takes no medications. He is pale. The abdomen is soft and non-tender. Rectal examination shows brown stool. Hemoglobin 72 g/L, MCV 64 fL, ferritin 4 ug/L, platelets 480 x 10^9/L, creatinine 78 umol/L.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "92/minute",
      "resp": "16/minute",
      "bp": "128/74 mmHg",
      "o2sat": "99% on room air",
      "weight": "82 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely cause of his anemia?",
        "options": [
          "Anemia of chronic disease",
          "Dietary iron deficiency",
          "Hemolytic anemia",
          "Occult GI blood loss",
          "Thalassemia trait"
        ],
        "correct": 3,
        "explanation": "A ferritin of 4 ug/L with microcytosis confirms iron deficiency. In a man who eats a varied diet, iron deficiency is presumed to come from GI blood loss until proven otherwise, even without visible bleeding. Dietary deficiency is unlikely with a varied diet. Anemia of chronic disease has a normal or high ferritin. Thalassemia trait causes microcytosis with normal iron stores. Hemolysis does not cause iron deficiency.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 3
        },
        "source": "aga-ida"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate treatment for his anemia now?",
        "options": [
          "Erythropoietin 40 000 units SC",
          "Folic acid 5 mg PO daily",
          "Iron replacement, no transfusion",
          "Red cells 1 unit now",
          "Red cells 2 units now"
        ],
        "correct": 2,
        "explanation": "He has compensated chronic anemia with no chest pain, fainting or unstable vital signs, and his hemoglobin of 72 g/L is above the restrictive threshold of 70 g/L for stable adults, so transfusion is not needed. Iron replacement, oral or IV, will correct his hemoglobin over weeks. Red cells expose him to transfusion risks without benefit here. Erythropoietin is not a treatment for iron deficiency and needs adequate iron stores to work. Folic acid does not treat iron deficiency.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "aabb"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following investigations is most appropriate to find the source?",
        "options": [
          "Colonoscopy without upper endoscopy",
          "CT colonography with contrast",
          "Fecal immunochemical test",
          "Upper endoscopy and colonoscopy",
          "Upper endoscopy without colonoscopy"
        ],
        "correct": 3,
        "explanation": "The AGA guideline recommends bidirectional endoscopy for men with iron deficiency anemia. Upper and lower sources are both common, and symptoms such as heartburn do not reliably show which one is present. Colonoscopy or upper endoscopy alone can miss the source. CT colonography cannot take biopsies or examine the upper tract. A negative fecal immunochemical test does not exclude a significant lesion in iron deficiency.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 2
        },
        "source": "aga-ida"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following features in his history most increases concern for colorectal cancer?",
        "options": [
          "Being 41 years of age",
          "Eating a varied diet with meat",
          "Father with colon cancer at 52",
          "Fatigue on exertion for 2 months",
          "Occasional heartburn symptoms"
        ],
        "correct": 2,
        "explanation": "A first-degree relative with colorectal cancer before age 60 raises his own risk and makes a colonic source more concerning. His age of 41 years alone does not. Heartburn points, if anywhere, to the upper tract. Fatigue reflects anemia from any cause. A varied diet makes dietary iron deficiency unlikely but does not suggest cancer.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "aga-ida"
      }
    ],
    "sources": [S["aabb"], S["aga-ida"]],
    ...META,
  },
  {
    "id": "gi-bleed-46",
    "topic": "gi-bleed",
    "title": "One black stool at a small hospital",
    "stem": "You are working in a rural hospital 3 hours by road from the nearest endoscopy service. A 47-year-old man presents after passing one black stool this morning. He took ibuprofen 400 mg a few times this week for a sprained ankle. He has had no vomiting, fainting or dizziness. He has no liver disease or heart failure and takes no regular medications. He is well-appearing. The abdomen is soft and non-tender. Rectal examination shows black stool. Hemoglobin 142 g/L, urea 6.1 mmol/L, creatinine 82 umol/L, INR 1.0.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "78/minute",
      "resp": "16/minute",
      "bp": "132/80 mmHg",
      "o2sat": "99% on room air",
      "weight": "86 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is his Glasgow Blatchford score based on these findings?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "correct": 1,
        "explanation": "Urea 6.1 mmol/L is below 6.5 mmol/L and scores 0. Hemoglobin 142 g/L in a man is 130 g/L or more and scores 0. Systolic BP 132 mmHg scores 0 and pulse 78/minute scores 0. Melena scores 1. He has no syncope, liver disease or heart failure. The total is 1. A score of 0 misses the melena point, and higher scores count points he does not have.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "blatchford"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate disposition for him?",
        "options": [
          "Admit and start IV pantoprazole",
          "Admit for serial hemoglobin checks",
          "Discharge with outpatient endoscopy",
          "Observe for 24 hours in hospital",
          "Transfer for endoscopy tonight"
        ],
        "correct": 2,
        "explanation": "A Glasgow Blatchford score of 1 or less identifies patients at very low risk who can be managed as outpatients. In an international study this threshold had the best balance of safety and avoided admissions. He can go home with outpatient endoscopy and clear return instructions. Transfer 3 hours by road for urgent endoscopy, admission or prolonged observation adds risk and cost without benefit.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "stanley"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following discharge instructions is most important for him?",
        "options": [
          "Avoid acetaminophen for pain",
          "Avoid NSAIDs such as ibuprofen",
          "Limit iron-rich foods",
          "Start daily low-dose ASA",
          "Take ibuprofen with food"
        ],
        "correct": 1,
        "explanation": "Ibuprofen is the likely cause of his bleeding, so he should avoid NSAIDs and use acetaminophen for his ankle. Taking ibuprofen with food does not prevent ulcer bleeding. Starting ASA would add bleeding risk without an indication. Limiting iron-rich foods is not needed.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "icg"
      }
    ],
    "sources": [S["blatchford"], S["icg"], S["stanley"]],
    ...META,
  },
  {
    "id": "gi-bleed-47",
    "topic": "gi-bleed",
    "title": "Vomiting dark blood overnight on warfarin",
    "stem": "A 58-year-old man presents to the emergency department at 0300 after vomiting dark blood twice. He has a mechanical mitral valve and takes warfarin. Yesterday afternoon a dentist removed two lower molars. He was told to continue his warfarin. He says he has been swallowing a lot during the night. He has no abdominal pain, NSAID use or alcohol use. He is anxious but well-perfused. The abdomen is soft and non-tender.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "92/minute",
      "resp": "18/minute",
      "bp": "138/84 mmHg",
      "o2sat": "98% on room air",
      "weight": "84 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following examinations should be done first to find the source of the blood?",
        "options": [
          "Abdominal palpation",
          "Chest auscultation",
          "Digital rectal examination",
          "Inspection of the oral cavity",
          "Nasal speculum examination"
        ],
        "correct": 3,
        "explanation": "A recent dental extraction and frequent swallowing overnight suggest that he is swallowing blood from the socket and vomiting it. Inspecting the mouth with good light is the quickest way to confirm this. A rectal examination can show dark stool from swallowed blood but does not locate the source. The abdominal and chest examinations and a nasal examination do not fit the history as well.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "rosen-ch56"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "A loose clot sits in a lower left molar socket with steady oozing around it. INR 2.9, hemoglobin 138 g/L.",
        "prompt": "Which of the following is the most appropriate management of his bleeding?",
        "options": [
          "Frozen plasma 2 units IV",
          "Local pressure, packing and sutures",
          "Prothrombin complex concentrate IV",
          "Stop warfarin for 5 days",
          "Vitamin K 10 mg IV"
        ],
        "correct": 1,
        "explanation": "Bleeding from an extraction socket with an INR in the therapeutic range is controlled with local measures. Remove the loose clot, then apply firm pressure, place a hemostatic packing and suture the socket. His hemoglobin is normal and the bleeding is local, so reversal is not needed. Vitamin K, plasma or prothrombin complex concentrate would expose his mechanical valve to thrombosis. Stopping warfarin for 5 days carries the same risk.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "sdcep-anticoagulants"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "The bleeding stops after local treatment. He feels well and asks to go home.",
        "prompt": "Which of the following plans for his warfarin is most appropriate at discharge?",
        "options": [
          "Bridge with enoxaparin for 5 days",
          "Continue warfarin at the usual dose",
          "Hold warfarin for 3 days",
          "Reduce warfarin by half for a week",
          "Vitamin K 2 mg PO tonight"
        ],
        "correct": 1,
        "explanation": "The bleeding was local and is now controlled, with an INR in range, so warfarin should continue at his usual dose to protect his mechanical valve. Holding or reducing warfarin, or giving vitamin K, lowers his INR and raises the risk of valve thrombosis without need. Bridging with enoxaparin is used when warfarin is interrupted, which is not needed here.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "sdcep-anticoagulants"
      }
    ],
    "sources": [S["rosen-ch56"], S["sdcep"]],
    ...META,
  },
];
