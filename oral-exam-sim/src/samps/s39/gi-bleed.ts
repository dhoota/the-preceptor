// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

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
  "lau": {"id": "lau", "citation": "Lau JYW, Yu Y, Tang RSY, et al. Timing of endoscopy for acute upper gastrointestinal bleeding. N Engl J Med. 2020."},
  "tc-doac": {"id": "tc-doac", "citation": "Thrombosis Canada. Clinical guide: DOACs: management of bleeding. 2024.", "url": "https://thrombosiscanada.ca/clinical_guides/pdfs/MANAGEMENTOFBLEEDINGINPATIENTS_75.pdf"},
  "cbs": {"id": "cbs", "citation": "Trudeau JD, Dawe P, Shih AW. Massive hemorrhage and emergency transfusion. In: Clinical Guide to Transfusion. Canadian Blood Services. 2021.", "url": "https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion"},
  "halt-it": {"id": "halt-it", "citation": "HALT-IT Trial Collaborators. Effects of a high-dose 24-h infusion of tranexamic acid on death and thromboembolic events in patients with acute gastrointestinal bleeding (HALT-IT): an international randomised, double-blind, placebo-controlled trial. Lancet. 2020."},
  "rosen": {"id": "rosen", "citation": "Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023."},
  "tintinalli": {"id": "tintinalli", "citation": "Tintinalli JE, Ma OJ, Yealy DM, et al, editors. Tintinalli's Emergency Medicine: A Comprehensive Study Guide. 9th ed. McGraw Hill. 2020."},
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
    "title": "Black stools after joint surgery",
    "stem": "A 71-year-old man presents to the emergency department with two days of black stools and light-headedness when he stands. Twelve days ago he had a left total knee replacement. He was discharged on rivaroxaban 10 mg daily for thromboprophylaxis and naproxen 500 mg twice daily for pain. He also takes ramipril for hypertension. He has no history of coronary disease, liver disease, heart failure or previous bleeding. He has not vomited or fainted. He is pale. The abdomen is soft and non-tender. Rectal examination shows black tarry stool.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "108/minute",
      "resp": "18/minute",
      "bp": "104/66 mmHg",
      "o2sat": "97% on room air",
      "weight": "84 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely source of his bleeding?",
        "options": [
          "Angiodysplasia of the colon",
          "Esophageal varices",
          "Mallory Weiss tear",
          "Peptic ulcer disease",
          "Reflux esophagitis"
        ],
        "correct": 3,
        "explanation": "Melena with a new NSAID, naproxen 500 mg twice daily, points to a peptic ulcer, and rivaroxaban adds to the bleeding risk. Colonic angiodysplasia usually causes maroon or red blood rather than black tarry stool. He has no liver disease, so varices are unlikely. A Mallory Weiss tear follows retching or vomiting, which he did not have. Reflux esophagitis rarely causes enough bleeding to produce melena with postural symptoms.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "icg"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Hemoglobin 96 g/L (142 g/L before surgery), urea 12.4 mmol/L, creatinine 96 umol/L, INR 1.2, platelets 310 x 10^9/L.",
        "prompt": "Which of the following is his Glasgow Blatchford score based on these findings?",
        "options": [
          "9",
          "11",
          "13",
          "15",
          "17"
        ],
        "correct": 2,
        "explanation": "Urea 12.4 mmol/L scores 4 (10 to 25 mmol/L). Hemoglobin 96 g/L in a man scores 6 (below 100 g/L). Systolic BP 104 mmHg scores 1 (100 to 109). Pulse 108/minute scores 1 and melena scores 1. He has no syncope, liver disease or heart failure. The total is 4 + 6 + 1 + 1 + 1 = 13, which marks a high risk of needing intervention. A total of 11 misses the pulse and melena points, and 15 places urea in the band above 25 mmol/L.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "blatchford"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate transfusion plan for him now?",
        "options": [
          "Crossmatch and transfuse if Hb below 80 g/L",
          "Transfuse frozen plasma 2 units now",
          "Transfuse to keep Hb above 100 g/L",
          "Transfuse 1 unit of red cells now",
          "Transfuse 2 units of red cells now"
        ],
        "correct": 0,
        "explanation": "His hemoglobin is 96 g/L and he has no coronary disease or heart failure, so a restrictive threshold applies. Blood should be crossmatched now, and red cells given if hemoglobin falls below 80 g/L. Transfusing 1 or 2 units now, or to a target above 100 g/L, is a liberal strategy that adds risk without benefit in this patient. His INR is 1.2, so frozen plasma has no role.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "icg"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate timing for his upper endoscopy?",
        "options": [
          "After 72 hours of IV PPI therapy",
          "At outpatient follow-up in 2 weeks",
          "Before any fluid or blood is given",
          "Only if he rebleeds in hospital",
          "Within 24 hours of presentation"
        ],
        "correct": 4,
        "explanation": "With a Glasgow Blatchford score of 13 he needs inpatient endoscopy within 24 hours, after resuscitation. In a randomized trial, endoscopy within 6 hours did not lower mortality compared with 6 to 24 hours in high risk patients. Delaying to 72 hours or to an outpatient visit is too late for a high risk score. Waiting for a rebleed forgoes treatment of high risk stigmata. Endoscopy should follow, not replace, initial resuscitation.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "lau"
      }
    ],
    "sources": [S["blatchford"], S["icg"], S["lau"]],
    ...META,
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
        "source": "tintinalli"
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
        "source": "tintinalli"
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
    "sources": [S["cps-vitk"], S["tintinalli"]],
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
        "source": "tintinalli"
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
        "source": "tintinalli"
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
        "source": "tintinalli"
      }
    ],
    "sources": [S["tintinalli"]],
    ...META,
  },
  {
    "id": "gi-bleed-19",
    "topic": "gi-bleed",
    "title": "Vomiting blood after throat surgery",
    "stem": "A 7-year-old girl is brought to the emergency department by her parents after she vomited about a cup of dark blood and clots at home. She had a tonsillectomy for obstructive sleep apnea 6 days ago. She has been taking acetaminophen for pain and has been eating little. Her mother says she has been swallowing often over the past hour. She has no known bleeding disorder, and there is no family history of bleeding. She is pale and anxious and keeps spitting blood-tinged saliva. Her abdomen is soft and non-tender.",
    "vitals": {
      "temperature": "37.2°C oral",
      "pulse": "136/minute",
      "resp": "24/minute",
      "bp": "96/58 mmHg",
      "o2sat": "98% on room air",
      "weight": "24 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following examinations is most likely to identify the source of her bleeding?",
        "options": [
          "Anterior rhinoscopy for a septal vessel",
          "Chest auscultation for crackles",
          "Digital rectal examination",
          "Inspection of the tonsillar fossae",
          "Palpation for hepatosplenomegaly"
        ],
        "correct": 3,
        "explanation": "Delayed post-tonsillectomy hemorrhage is most common 5 to 10 days after surgery, when the eschar separates. Swallowed blood from the tonsillar bed can be vomited and look like hematemesis, so the tonsillar fossae should be inspected first with a good light and suction. Nothing in the stem suggests a nosebleed or a lung source. A rectal examination may show melena from swallowed blood but will not locate the source. She has no history suggesting liver disease.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "tintinalli"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following of her vital signs is the best early sign of significant blood loss?",
        "options": [
          "BP of 96/58 mmHg",
          "Oxygen saturation of 98%",
          "Pulse of 136/minute",
          "Respiratory rate of 24/minute",
          "Temperature of 37.2°C"
        ],
        "correct": 2,
        "explanation": "Children keep a normal BP until they have lost a large part of their blood volume, so tachycardia is the earliest reliable sign of hemorrhage. Her pulse of 136/minute is high for a 7-year-old. Her BP of 96/58 mmHg is normal for her age and should not reassure. Her oxygen saturation, respiratory rate and temperature do not reflect blood loss.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "tintinalli"
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
        "explanation": "She has tachycardia and has vomited a large volume of blood, so blood may be needed soon, and crossmatch should be sent at once with a CBC. Blood culture and C-reactive protein look for infection, which does not explain her bleeding. Liver enzymes and lipase do not help manage bleeding from a tonsillar bed.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "cbs"
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "A clot sits in the right tonsillar fossa with fresh oozing around it. She vomits another 150 mL of blood.",
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
        "source": "tintinalli"
      }
    ],
    "sources": [S["cbs"], S["tintinalli"]],
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
    "title": "A sleepy infant",
    "stem": "A 9-month-old boy is brought to the emergency department because he has been unusually sleepy and floppy since this morning. He vomited twice overnight. His parents report no diarrhea, cough or fever. He had a cold last week. He was born at term, and his immunizations are up to date. He is pale and lethargic but rouses to voice. The fontanelle is flat. The lungs are clear. The abdomen is soft, and a vague mass may be felt in the right upper quadrant. Capillary glucose is 5.1 mmol/L.",
    "vitals": {
      "temperature": "37.1°C rectal",
      "pulse": "164/minute",
      "resp": "34/minute",
      "bp": "84/50 mmHg",
      "o2sat": "99% on room air",
      "weight": "9 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following examinations is most likely to reveal the cause of his lethargy?",
        "options": [
          "Fundoscopy for retinal hemorrhages",
          "Otoscopy for otitis media",
          "Rectal examination for blood",
          "Skin examination for petechiae",
          "Tone and reflex examination"
        ],
        "correct": 2,
        "explanation": "Lethargy and pallor can be the main presentation of intussusception in an infant, even without obvious GI complaints. The vomiting, recent viral illness and a right upper quadrant mass all point there. A rectal examination looking for blood or currant jelly stool is the most useful next step. Fundoscopy, otoscopy, skin and neurological examinations are part of a full assessment but do not fit the mass and pallor as well.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 3
        },
        "source": "tintinalli"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "The rectal examination produces dark red mucoid stool on the glove.",
        "prompt": "Which of the following is the most appropriate diagnostic test?",
        "options": [
          "Abdominal radiograph",
          "Abdominal ultrasound",
          "CT abdomen with contrast",
          "Technetium Meckel scan",
          "Upper GI contrast series"
        ],
        "correct": 1,
        "explanation": "Ultrasound is the test of choice for suspected intussusception. It is highly sensitive, uses no radiation and shows the target sign. A plain radiograph can miss intussusception and is mainly used to look for free air or obstruction. CT exposes the child to radiation without advantage. A Meckel scan looks for painless bleeding from ectopic gastric mucosa, which does not fit a lethargic child with a mass. An upper GI series does not image the ileocolic region well.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "tintinalli"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate initial fluid bolus for him before reduction?",
        "options": [
          "Albumin 5% 90 mL IV",
          "Dextrose 10% 45 mL IV",
          "Normal saline 45 mL IV",
          "Normal saline 180 mL IV",
          "Normal saline 540 mL IV"
        ],
        "correct": 3,
        "explanation": "He is pale and lethargic with a pulse of 164/minute, so he needs volume before reduction. An isotonic crystalloid bolus of 20 mL/kg is 180 mL for 9 kg, repeated after reassessment. A 45 mL bolus of saline is only 5 mL/kg. A 540 mL bolus is 60 mL/kg given at once, which is excessive without reassessment. His glucose is 5.1 mmol/L, so dextrose is not needed as a bolus. Albumin offers no advantage over crystalloid for a first bolus.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "tintinalli"
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "Ultrasound shows an ileocolic intussusception with a target sign and no free fluid. He has no peritoneal signs.",
        "prompt": "Which of the following is the most appropriate treatment for him now?",
        "options": [
          "Air enema reduction by radiology",
          "Colonoscopic reduction",
          "Laparotomy and manual reduction",
          "Nasogastric decompression alone",
          "Observation and repeat ultrasound"
        ],
        "correct": 0,
        "explanation": "With no peritoneal signs, air or hydrostatic enema reduction by radiology is first-line treatment, with the surgical team aware. Laparotomy is kept for failed reduction, perforation or peritonitis. Colonoscopy is not used to reduce intussusception. Nasogastric decompression and observation do not reduce the bowel and allow ischemia to progress.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "tintinalli"
      }
    ],
    "sources": [S["tintinalli"]],
    ...META,
  },
  {
    "id": "gi-bleed-23",
    "topic": "gi-bleed",
    "title": "Vomiting clots after a nosebleed",
    "stem": "A 76-year-old man is brought to the emergency department by ambulance after vomiting dark blood and clots three times over 2 hours. Earlier tonight he had a nosebleed from the right nostril that he stopped by pinching. He has atrial fibrillation and takes apixaban 5 mg twice daily, last dose 4 hours ago. He also takes metoprolol and amlodipine. He has no abdominal pain, NSAID use or alcohol use. He keeps swallowing and clearing his throat. His abdomen is soft and non-tender.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "96/minute irregular",
      "resp": "18/minute",
      "bp": "168/92 mmHg",
      "o2sat": "96% on room air",
      "weight": "78 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate next step in his assessment?",
        "options": [
          "CT angiography of the abdomen",
          "Digital rectal examination",
          "Examine the nose and posterior pharynx",
          "Nasogastric tube aspiration",
          "Urgent upper endoscopy"
        ],
        "correct": 2,
        "explanation": "A nosebleed followed by frequent swallowing and vomiting of dark clots suggests swallowed blood from a posterior nasal source. Examining the nose and posterior pharynx with a light and suction is the quickest way to confirm it. A rectal examination can show melena from swallowed blood but will not show where it came from. Nasogastric aspiration and upper endoscopy look at the stomach, and CT angiography of the abdomen targets a GI source he may not have.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "rosen"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Fresh blood trickles down the posterior pharynx. After suction and a vasoconstrictor spray, no anterior bleeding site is seen in either nostril.",
        "prompt": "Which of the following is the most appropriate management of his bleeding?",
        "options": [
          "Octreotide 50 mcg IV bolus",
          "Posterior balloon nasal packing",
          "Silver nitrate cautery",
          "Transfuse 2 units of red cells",
          "Urgent upper endoscopy"
        ],
        "correct": 1,
        "explanation": "Bleeding down the posterior pharynx with no anterior site seen means a posterior epistaxis. It is controlled with a posterior balloon or pack, followed by admission and otolaryngology care. Silver nitrate cautery works only on a visible anterior vessel. Octreotide and endoscopy target GI sources, not the nose. Transfusion is guided by hemoglobin and hemodynamics, and he is hypertensive rather than in shock.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 4
        },
        "source": "rosen"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "The balloon controls the bleeding. Hemoglobin 128 g/L, platelets 220 x 10^9/L, INR 1.3. He is admitted.",
        "prompt": "Which of the following is the most appropriate plan for his apixaban?",
        "options": [
          "Andexanet alfa bolus then infusion",
          "Continue apixaban at the usual dose",
          "Hold apixaban with no reversal agent",
          "Prothrombin complex concentrate 2 000 units",
          "Switch apixaban to warfarin today"
        ],
        "correct": 2,
        "explanation": "Epistaxis that needs medical care but is controlled, with a hemoglobin of 128 g/L and stable vital signs, is clinically relevant non-major bleeding. Thrombosis Canada advises holding the DOAC and applying local measures, without reversal. Andexanet alfa and prothrombin complex concentrate are for life-threatening bleeding. Continuing apixaban while a posterior pack is in place risks rebleeding. Warfarin offers no bleeding advantage over apixaban.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "tc-doac"
      }
    ],
    "sources": [S["rosen"], S["tc-doac"]],
    ...META,
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
        "source": "rosen"
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
        "source": "rosen"
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
        "source": "rosen"
      }
    ],
    "sources": [S["rosen"]],
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
        "explanation": "Ibuprofen caused or worsened this bleed and is also avoided in the second half of pregnancy because of effects on fetal kidneys and the ductus arteriosus. It should be stopped, and acetaminophen used for pain. Naproxen is another NSAID with the same risks. Taking ibuprofen with meals, at night only or with famotidine does not remove the risk of recurrent ulcer bleeding.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "rosen"
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
    "sources": [S["asge-preg"], S["cbs"], S["icg"], S["rosen"]],
    ...META,
  },
  {
    "id": "gi-bleed-26",
    "topic": "gi-bleed",
    "title": "Breathlessness in a woman on dialysis",
    "stem": "A 74-year-old woman presents to the emergency department with 3 days of shortness of breath and chest tightness when she walks to her mailbox. She has end-stage kidney disease on hemodialysis three times weekly and severe aortic stenosis awaiting valve replacement. She takes ASA 81 mg daily. She reports no vomiting or abdominal pain and has not looked at her stools. Her last dialysis was yesterday. She is pale. A harsh systolic murmur is heard at the right upper sternal border. There are fine crackles at both lung bases. She has no leg edema.",
    "vitals": {
      "temperature": "36.5°C oral",
      "pulse": "108/minute regular",
      "resp": "22/minute",
      "bp": "112/58 mmHg",
      "o2sat": "94% on room air",
      "weight": "61 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "update": "ECG shows sinus tachycardia with 1 mm ST depression in V4 to V6. High sensitivity troponin is 42 ng/L. Hemoglobin 66 g/L (104 g/L 6 weeks ago).",
        "prompt": "Which of the following is the most important next step in her assessment?",
        "options": [
          "Coronary angiography today",
          "CT pulmonary angiography",
          "Digital rectal examination",
          "Transthoracic echocardiogram",
          "Ventilation perfusion scan"
        ],
        "correct": 2,
        "explanation": "Her hemoglobin has fallen from 104 to 66 g/L in 6 weeks, and her dyspnea and ST depression are likely demand ischemia from anemia. A hidden GI bleed is the leading cause, so a rectal examination for melena is the key next step. Coronary angiography would expose her to more antithrombotic therapy while she may be bleeding. Her echocardiogram findings are already known. Nothing points to a pulmonary embolism.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 3
        },
        "source": "rosen"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Rectal examination shows black tarry stool. Her chest tightness settles with rest.",
        "prompt": "Which of the following transfusion plans is most appropriate for her now?",
        "options": [
          "Frozen plasma 2 units IV",
          "Red cells to keep Hb above 130 g/L",
          "Red cells 1 unit, then reassess",
          "Red cells 4 units as fast as possible",
          "No transfusion until endoscopy"
        ],
        "correct": 2,
        "explanation": "She has ischemic symptoms and a hemoglobin of 66 g/L, so red cells are indicated, with a higher threshold than usual because of her cardiovascular disease. Giving one unit at a time and reassessing guards against fluid overload in a dialysis patient who already has crackles. Four rapid units risk pulmonary edema, and a target above 130 g/L is not supported. Plasma does not treat anemia, and waiting for endoscopy leaves her ischemic.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "icg"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "Upper endoscopy and colonoscopy the next day find no bleeding source. Two days later she has melena again.",
        "prompt": "Which of the following is the most appropriate next investigation to find the source?",
        "options": [
          "Barium small bowel series",
          "Repeat colonoscopy in 6 weeks",
          "Stool occult blood testing",
          "Technetium Meckel scan",
          "Video capsule endoscopy"
        ],
        "correct": 4,
        "explanation": "When upper endoscopy and colonoscopy are negative, the small bowel is the likely source, and video capsule endoscopy is the recommended next test. Angiodysplasia is common in patients with kidney failure and aortic stenosis. Barium studies miss flat vascular lesions. Stool occult blood testing adds nothing when melena is visible. A Meckel scan is used in younger patients. Waiting 6 weeks for another colonoscopy delays diagnosis.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "gerson"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following conditions in her history is linked to both acquired von Willebrand syndrome and GI angiodysplasia?",
        "options": [
          "Aortic valve stenosis",
          "Being of female sex",
          "Daily ASA 81 mg use",
          "End-stage kidney disease",
          "Her age of 74 years"
        ],
        "correct": 0,
        "explanation": "Severe aortic stenosis breaks down large von Willebrand factor multimers as blood passes the narrowed valve, and it is associated with bleeding from GI angiodysplasia. This is called Heyde syndrome. Kidney failure is linked to angiodysplasia and platelet dysfunction but not to loss of von Willebrand multimers. ASA impairs platelet function but does not cause either condition. Age raises the chance of angiodysplasia but not acquired von Willebrand syndrome, and sex is not a factor.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "gerson"
      }
    ],
    "sources": [S["gerson"], S["icg"], S["rosen"]],
    ...META,
  },
  {
    "id": "gi-bleed-27",
    "topic": "gi-bleed",
    "title": "Fatigue and dizziness in a woman on several medications",
    "stem": "A 63-year-old woman presents to the emergency department with 4 days of fatigue and dizziness on standing. Yesterday she became short of breath climbing one flight of stairs. She has polymyalgia rheumatica treated with prednisone 15 mg daily for 8 months and depression treated with sertraline 100 mg daily. Two weeks ago she started naproxen 500 mg twice daily for hip pain. She drinks two glasses of wine a week. She has no abdominal pain and has not noticed any bleeding. She has not fainted. She is pale. The abdomen is soft. Rectal examination shows black stool.",
    "vitals": {
      "temperature": "36.9°C oral",
      "pulse": "102/minute",
      "resp": "18/minute",
      "bp": "108/64 mmHg",
      "o2sat": "98% on room air",
      "weight": "66 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "update": "Hemoglobin 88 g/L (131 g/L 2 months ago), urea 9.1 mmol/L, creatinine 70 umol/L, INR 1.0, platelets 290 x 10^9/L.",
        "prompt": "Which of the following is her Glasgow Blatchford score based on these findings?",
        "options": [
          "6",
          "8",
          "10",
          "12",
          "14"
        ],
        "correct": 3,
        "explanation": "Urea 9.1 mmol/L scores 3 (8 to 10 mmol/L). Hemoglobin 88 g/L in a woman scores 6 (below 100 g/L). Systolic BP 108 mmHg scores 1, pulse 102/minute scores 1 and melena scores 1. She has not fainted and has no liver disease or heart failure. The total is 3 + 6 + 1 + 1 + 1 = 12. A score of 10 comes from placing urea in the 6.5 to 8 mmol/L band (2 points) and missing the pulse point.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "blatchford"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following changes to her medications is most appropriate now?",
        "options": [
          "Continue all three with a daily PPI",
          "Stop naproxen and continue prednisone",
          "Stop naproxen, prednisone and sertraline",
          "Stop prednisone and continue naproxen",
          "Stop prednisone and sertraline today"
        ],
        "correct": 1,
        "explanation": "Naproxen is the main cause of her bleed, and the risk is higher because she also takes an SSRI and a corticosteroid. It should be stopped. Prednisone must not be stopped suddenly after long use because of the risk of adrenal crisis and a flare of polymyalgia. Stopping sertraline abruptly causes discontinuation symptoms, so its role can be reviewed later. Adding a PPI while continuing naproxen does not address the main cause.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "rosen"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate disposition for her?",
        "options": [
          "Admit for endoscopy within 24 hours",
          "Admit to ICU for immediate endoscopy",
          "Discharge on a twice daily PPI",
          "Discharge with outpatient endoscopy",
          "Observe 6 hours and repeat hemoglobin"
        ],
        "correct": 0,
        "explanation": "With a Glasgow Blatchford score of 12 she is not low risk, so she needs admission and endoscopy within 24 hours. Discharge is only suggested for a score of 1 or less. She is stable after assessment, with no ongoing hematemesis or shock, so ICU admission and immediate endoscopy are not required. A short observation period does not change the need for endoscopy.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "icg"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following tests is most important to guide her long term ulcer management?",
        "options": [
          "CA 19-9 tumour marker",
          "Celiac serology",
          "Fecal calprotectin",
          "Helicobacter pylori testing",
          "Serum gastrin level"
        ],
        "correct": 3,
        "explanation": "Patients with a bleeding peptic ulcer should be tested for Helicobacter pylori and treated if it is present, because eradication reduces rebleeding. A negative test during the acute bleed should be repeated later because false negatives are common. A gastrin level is only checked when a gastrinoma is suspected. Celiac serology, calprotectin and CA 19-9 do not guide ulcer management.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "icg"
      }
    ],
    "sources": [S["blatchford"], S["icg"], S["rosen"]],
    ...META,
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
        "explanation": "A marginal ulcer forms at the gastrojejunal anastomosis after gastric bypass. Smoking and NSAIDs are the strongest modifiable risk factors, and stopping acid suppression removes protection. Her age and female sex are not established risk factors. The dental abscess matters only because it led to ibuprofen use.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "rosen"
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
        "source": "rosen"
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
        "explanation": "Smoking is a major risk factor for marginal ulcers and for their recurrence, so stopping smoking is the most important change, along with avoiding NSAIDs and taking a PPI. Naproxen is another NSAID and would raise the risk again. Iron and vitamin B12 treat deficiencies common after bypass but do not prevent ulcers. A liquid diet does not prevent marginal ulceration.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "rosen"
      }
    ],
    "sources": [S["rosen"], S["villanueva"]],
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
        "source": "rosen"
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
        "source": "rosen"
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
        "source": "rosen"
      }
    ],
    "sources": [S["rosen"]],
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
        "source": "tintinalli"
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
        "source": "tintinalli"
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
        "source": "tintinalli"
      }
    ],
    "sources": [S["cbs-peds"], S["tintinalli"]],
    ...META,
  },
  {
    "id": "gi-bleed-33",
    "topic": "gi-bleed",
    "title": "Bleeding patient who declines blood",
    "stem": "You are working in an emergency department in Ontario. A 52-year-old man presents with three episodes of hematemesis and black stools since last night. He has a history of duodenal ulcer and has taken ibuprofen daily for a week. He is a Jehovah's Witness and carries a signed card refusing blood transfusion. He is alert and oriented. He understands that he may die without transfusion and repeats his refusal of red cells, plasma and platelets. His wife supports his decision. He is pale and diaphoretic.",
    "vitals": {
      "temperature": "36.4°C oral",
      "pulse": "122/minute",
      "resp": "22/minute",
      "bp": "92/56 mmHg",
      "o2sat": "97% on room air",
      "weight": "82 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "update": "Hemoglobin is 61 g/L. He again declines red cells after you explain that he may die without them.",
        "prompt": "Which of the following is the most appropriate response to his refusal of transfusion?",
        "options": [
          "Ask his wife to consent on his behalf",
          "Respect the refusal and document capacity",
          "Seek an urgent court order to transfuse",
          "Transfuse if he loses consciousness",
          "Transfuse under the emergency exception"
        ],
        "correct": 1,
        "explanation": "A capable adult may refuse blood, even when refusal may be fatal. In Malette v. Shulman, the Ontario Court of Appeal held that transfusing a patient who carried a signed refusal card was battery. So his refusal stands even if he loses consciousness, and the emergency exception does not apply when his wishes are known. A substitute decision maker cannot override a capable patient's own refusal, and no court order is needed or likely to be granted to transfuse a capable adult against his wishes. The priority is to document his capacity and the discussion clearly and treat him with every acceptable alternative.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "malette"
      },
      {
        "id": "q2",
        "kind": "menu",
        "prompt": "Which of the following are the most appropriate measures for him now?",
        "options": [
          "Frozen plasma 2 units IV",
          "Normal saline 4 L IV bolus",
          "Octreotide 50 mcg IV bolus",
          "Pantoprazole 80 mg IV",
          "Pediatric tubes for blood tests",
          "Recombinant factor VIIa IV",
          "Urgent upper endoscopy"
        ],
        "select": 3,
        "correct": [
          3,
          4,
          6
        ],
        "explanation": "Stopping the bleeding quickly matters most when blood cannot be given, so urgent endoscopy and an IV PPI for a likely ulcer are key. Small-volume pediatric tubes limit blood lost to testing. He has refused plasma. Large crystalloid volumes dilute his remaining red cells and clotting factors. Octreotide is for variceal bleeding, and recombinant factor VIIa adds thrombotic risk without proven benefit in ulcer bleeding.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "icg"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "Endoscopy shows a duodenal ulcer with a nonbleeding visible vessel, treated with clips and epinephrine injection.",
        "prompt": "Which of the following acid suppression regimens is most appropriate after endoscopic therapy?",
        "options": [
          "Famotidine 20 mg IV twice daily",
          "Misoprostol 200 mcg PO four times daily",
          "Pantoprazole 80 mg IV then 8 mg/hour",
          "Pantoprazole 40 mg PO once daily",
          "Sucralfate 1 g PO four times daily"
        ],
        "correct": 2,
        "explanation": "After endoscopic hemostasis of a high risk lesion such as a visible vessel, high dose PPI for 3 days lowers rebleeding. The usual regimen is an IV bolus followed by continuous infusion. Standard once daily oral PPI is not enough in the first 3 days. H2 receptor antagonists, sucralfate and misoprostol do not provide the sustained acid suppression needed to stabilize the clot.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "icg"
      }
    ],
    "sources": [S["icg"], S["malette"]],
    ...META,
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
        "source": "rosen"
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
    "sources": [S["icg"], S["rosen"], S["villanueva"]],
    ...META,
  },
  {
    "id": "gi-bleed-38",
    "topic": "gi-bleed",
    "title": "Heavy rectal bleeding at a small hospital",
    "stem": "You are working in a rural hospital with a CT scanner but no endoscopy, interventional radiology or surgeon on site. The referral centre is 90 minutes away by air. An 81-year-old man presents with five large maroon and red stools with clots over 3 hours. He has known diverticulosis and hypertension and takes amlodipine only. He has no vomiting, dyspepsia or NSAID use. He is pale and diaphoretic. Rectal examination shows maroon blood with clots.",
    "vitals": {
      "temperature": "36.3°C oral",
      "pulse": "124/minute",
      "resp": "22/minute",
      "bp": "84/50 mmHg",
      "o2sat": "96% on room air",
      "weight": "76 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following products is most appropriate to give him first?",
        "options": [
          "Albumin 5% 500 mL IV",
          "Crossmatched red cells when ready",
          "Normal saline 2 L IV bolus",
          "Uncrossmatched O negative red cells",
          "Uncrossmatched O positive red cells"
        ],
        "correct": 4,
        "explanation": "He is in hemorrhagic shock and needs red cells now. For an older man, group O RhD positive cells are appropriate, and O negative cells are reserved for females of childbearing potential, children and people known to have anti-D. This matters in a small hospital with few O negative units. Waiting for crossmatched cells delays treatment. Crystalloid or albumin boluses dilute clotting factors and carry no oxygen.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "cbs"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "After 2 units of red cells, pulse is 116/minute and BP 92/58 mmHg. The transport team will arrive in 90 minutes.",
        "prompt": "Which of the following investigations is most appropriate before transfer?",
        "options": [
          "Abdominal ultrasound",
          "CT angiography of the abdomen",
          "Plain abdominal radiograph",
          "Stool culture and toxin",
          "Unprepared flexible sigmoidoscopy"
        ],
        "correct": 1,
        "explanation": "His shock index remains above 1, so the bleeding is unstable. CT angiography is the recommended first test because it localizes active bleeding and guides the referral centre toward embolization or endoscopy. It can be done during the wait for transport. Ultrasound and plain films do not show bleeding points. Stool tests do not help acute management. Flexible sigmoidoscopy is not available on site and cannot see the right colon.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "bsg-lgib"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "CT angiography shows active contrast extravasation into the second part of the duodenum. The colon shows diverticula without extravasation.",
        "prompt": "Which of the following is the most appropriate next step for him?",
        "options": [
          "Bowel preparation, then colonoscopy",
          "Octreotide 50 mcg IV bolus",
          "Tranexamic acid 1 g IV",
          "Transfer for urgent colonoscopy",
          "Transfer for urgent upper endoscopy"
        ],
        "correct": 4,
        "explanation": "Brisk upper GI bleeding can pass through the bowel fast enough to appear as maroon or red blood, and here CT shows the source in the duodenum. He needs transfer for urgent upper endoscopy, with a high dose IV PPI started. Colonoscopy, with or without preparation, looks in the wrong place. Octreotide is for variceal bleeding. Tranexamic acid did not reduce death in GI bleeding and increased venous thrombosis.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 2
        },
        "source": "icg"
      },
      {
        "id": "q4",
        "kind": "menu",
        "update": "While awaiting transport he has received 6 units of red cells and 2 units of plasma. Ionized calcium 0.84 mmol/L, fibrinogen 1.1 g/L.",
        "prompt": "Which of the following are the most appropriate treatments for these results?",
        "options": [
          "Albumin 25% 100 mL IV",
          "Calcium chloride 1 g IV",
          "Cryoprecipitate 10 units IV",
          "Desmopressin 0.3 mcg/kg IV",
          "Sodium bicarbonate 50 mmol IV",
          "Tranexamic acid 1 g IV",
          "Vitamin K 10 mg IV"
        ],
        "select": 2,
        "correct": [
          1,
          2
        ],
        "explanation": "Citrate in transfused blood binds calcium, and his ionized calcium of 0.84 mmol/L needs replacement to support clotting and cardiac function. His fibrinogen of 1.1 g/L is below the target of at least 1.5 g/L in bleeding, and in Canada it is replaced with cryoprecipitate or fibrinogen concentrate. Bicarbonate, albumin and desmopressin do not correct either problem. Vitamin K has no role without a vitamin K deficiency, and tranexamic acid is not recommended in GI bleeding.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "cbs"
      }
    ],
    "sources": [S["bsg-lgib"], S["cbs"], S["icg"]],
    ...META,
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
        "source": "rosen"
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
        "source": "rosen"
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
        "source": "rosen"
      }
    ],
    "sources": [S["rosen"]],
    ...META,
  },
  {
    "id": "gi-bleed-41",
    "topic": "gi-bleed",
    "title": "Palpitations and weakness in an older woman",
    "stem": "An 83-year-old woman is brought to the emergency department by ambulance with 1 day of palpitations and weakness. She has atrial fibrillation treated with rivaroxaban 15 mg daily and bisoprolol, chronic kidney disease and osteoarthritis treated with celecoxib 200 mg daily. She has no chest pain, abdominal pain, vomiting or change in her stools that she has noticed. She is pale with cool hands. ECG shows atrial fibrillation at 146/minute with no ST elevation. Capillary glucose is 6.2 mmol/L.",
    "vitals": {
      "temperature": "36.4°C oral",
      "pulse": "146/minute irregular",
      "resp": "22/minute",
      "bp": "92/54 mmHg",
      "o2sat": "95% on room air",
      "weight": "58 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate next step in her care?",
        "options": [
          "Amiodarone 150 mg IV",
          "Diltiazem 10 mg IV",
          "Metoprolol 5 mg IV",
          "Rectal exam and CBC",
          "Synchronized cardioversion"
        ],
        "correct": 3,
        "explanation": "Rapid atrial fibrillation with pallor, cool hands and a low BP in a patient on an anticoagulant and an NSAID may be a response to hidden blood loss. A rectal examination and hemoglobin should come before any rate control. Diltiazem and metoprolol can cause collapse if the tachycardia is compensating for hypovolemia. Amiodarone and cardioversion treat the rhythm without addressing the likely cause.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 3
        },
        "source": "rosen"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Rectal examination shows maroon stool. Hemoglobin 71 g/L (122 g/L 2 months ago), urea 21.4 mmol/L, creatinine 104 umol/L.",
        "prompt": "Which of the following findings best supports an upper GI source for her bleeding?",
        "options": [
          "Absence of abdominal pain",
          "Hemoglobin of 71 g/L",
          "Maroon colour of the stool",
          "Rivaroxaban anticoagulation",
          "Urea high relative to creatinine"
        ],
        "correct": 4,
        "explanation": "Blood digested in the upper gut is absorbed as protein and raises urea out of proportion to creatinine. Her urea of 21.4 mmol/L with a creatinine of 104 umol/L fits an upper source, likely an NSAID ulcer. Maroon stool is seen in brisk upper bleeding as well as in right colon bleeding, so it does not separate them. The hemoglobin level, the lack of pain and anticoagulation do not indicate where the bleeding comes from.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 2
        },
        "source": "rosen"
      },
      {
        "id": "q3",
        "kind": "menu",
        "prompt": "Which of the following are the most appropriate immediate measures for her?",
        "options": [
          "Diltiazem 10 mg IV",
          "Frozen plasma 4 units IV",
          "Hold rivaroxaban",
          "Normal saline 3 L IV",
          "Platelets 1 adult dose",
          "Tranexamic acid 1 g IV",
          "Transfuse red cells",
          "Vitamin K 10 mg IV"
        ],
        "select": 2,
        "correct": [
          2,
          6
        ],
        "explanation": "She has a major GI bleed with hemodynamic instability and a hemoglobin of 71 g/L, so rivaroxaban is held and red cells are given. Vitamin K and frozen plasma do not reverse a factor Xa inhibitor. Tranexamic acid is not recommended for GI bleeding. Platelets are not indicated because she takes no antiplatelet drug and her count has not been shown to be low. A 3 L crystalloid bolus dilutes clotting factors, and diltiazem may cause collapse.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "tc-doac"
      }
    ],
    "sources": [S["rosen"], S["tc-doac"]],
    ...META,
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
        "source": "tintinalli"
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
        "explanation": "Removing dairy from the mother's diet while breastfeeding continues usually clears the bleeding within days to weeks. Stopping breastfeeding is unnecessary, and a standard cow's milk formula contains the protein that causes the problem. Antibiotics do not treat an allergic process. Endoscopy is not needed in a well infant with a typical picture.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "tintinalli"
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
        "source": "tintinalli"
      }
    ],
    "sources": [S["tintinalli"]],
    ...META,
  },
  {
    "id": "gi-bleed-43",
    "topic": "gi-bleed",
    "title": "Rash, joint pain and dark stool in a child",
    "stem": "A 6-year-old boy is brought to the emergency department with 3 days of crampy abdominal pain and sore ankles. Today he passed a dark red stool. He had a sore throat 2 weeks ago. He takes no medications. He is uncomfortable but alert. There is a palpable purpuric rash over the buttocks and the backs of both legs. Both ankles are swollen and tender. The abdomen is diffusely tender without a mass or guarding. Hemoglobin 118 g/L, platelets 310 x 10^9/L, creatinine 40 umol/L, INR 1.0.",
    "vitals": {
      "temperature": "37.3°C oral",
      "pulse": "112/minute",
      "resp": "22/minute",
      "bp": "102/64 mmHg",
      "o2sat": "99% on room air",
      "weight": "21 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely diagnosis for him?",
        "options": [
          "Acute appendicitis",
          "Hemolytic uremic syndrome",
          "IgA vasculitis",
          "Immune thrombocytopenia",
          "Meningococcemia"
        ],
        "correct": 2,
        "explanation": "Palpable purpura on the buttocks and legs with a normal platelet count, arthritis, abdominal pain and GI bleeding after a sore throat is IgA vasculitis. The rash on examination is the key clue to the source of his bleeding. Immune thrombocytopenia is excluded by a platelet count of 310 x 10^9/L. Hemolytic uremic syndrome causes anemia, low platelets and renal failure. Meningococcemia causes fever and rapid deterioration, and appendicitis does not cause purpura.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "share"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following investigations is most important for his abdominal pain and bleeding?",
        "options": [
          "Abdominal radiograph",
          "Abdominal ultrasound",
          "CT abdomen with contrast",
          "Technetium Meckel scan",
          "Upper GI endoscopy"
        ],
        "correct": 1,
        "explanation": "Intussusception, often ileoileal, is the most important GI complication of IgA vasculitis and can cause pain and bloody stool. Ultrasound detects it and shows bowel wall thickening, without radiation. A plain radiograph is insensitive. CT adds radiation without advantage as a first test. A Meckel scan and upper endoscopy do not address the likely complication.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "share"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following tests is most important to screen for kidney involvement?",
        "options": [
          "Antistreptolysin O titre",
          "Renal ultrasound",
          "Serum complement levels",
          "Serum IgA concentration",
          "Urinalysis for blood and protein"
        ],
        "correct": 4,
        "explanation": "Nephritis is the main long term risk in IgA vasculitis, so urinalysis for hematuria and proteinuria, with BP checks, is the key screen now and at follow-up. A renal ultrasound does not detect glomerulonephritis early. Serum IgA and complement levels do not predict kidney involvement. An antistreptolysin O titre does not change management.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 1
        },
        "source": "share"
      }
    ],
    "sources": [S["share"]],
    ...META,
  },
  {
    "id": "gi-bleed-44",
    "topic": "gi-bleed",
    "title": "Blood in an ileostomy bag",
    "stem": "A 58-year-old man presents to the emergency department after his ileostomy bag filled with dark red blood three times over 4 hours. He feels dizzy on standing. He had a total colectomy with end ileostomy for ulcerative colitis 10 years ago. He has taken naproxen 500 mg twice daily for 3 weeks for back pain. He has had no vomiting. He does not drink alcohol and has no liver disease. He is pale. The stoma is pink with no bleeding from its surface. The abdomen is soft and non-tender.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "118/minute",
      "resp": "20/minute",
      "bp": "94/60 mmHg",
      "o2sat": "97% on room air",
      "weight": "80 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely source of his bleeding?",
        "options": [
          "Colonic diverticular bleeding",
          "Peptic ulcer from naproxen",
          "Retained rectal stump",
          "Small bowel angiodysplasia",
          "Stoma mucosal trauma"
        ],
        "correct": 1,
        "explanation": "Brisk bleeding from an upper GI source can pass quickly through the small bowel and appear as dark red blood in an ileostomy bag. With 3 weeks of naproxen, a peptic ulcer is most likely. He has no colon, so diverticular bleeding is impossible. A rectal stump would bleed per rectum, not into the stoma. The stoma surface is not bleeding. Angiodysplasia is possible but less likely than an NSAID ulcer.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 2
        },
        "source": "rosen"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate first endoscopic procedure?",
        "options": [
          "Capsule endoscopy",
          "Ileoscopy through the stoma",
          "Push enteroscopy",
          "Sigmoidoscopy of the stump",
          "Upper endoscopy"
        ],
        "correct": 4,
        "explanation": "The likely source is a duodenal or gastric ulcer, so upper endoscopy within 24 hours is the first procedure and allows treatment. Ileoscopy through the stoma looks only at the distal ileum. Capsule endoscopy cannot treat and is used after negative upper and lower studies. Push enteroscopy is for suspected proximal small bowel lesions after a negative upper endoscopy. He has no colon to examine.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 2
        },
        "source": "icg"
      },
      {
        "id": "q3",
        "kind": "menu",
        "prompt": "Which of the following are the most appropriate immediate measures for him?",
        "options": [
          "Crossmatch 4 units of red cells",
          "Loperamide 4 mg PO",
          "Normal saline 4 L IV",
          "Octreotide 50 mcg IV bolus",
          "Pantoprazole 80 mg IV",
          "Tranexamic acid 1 g IV",
          "Vitamin K 10 mg IV"
        ],
        "select": 2,
        "correct": [
          0,
          4
        ],
        "explanation": "He has tachycardia and a low BP from GI bleeding, so blood should be crossmatched early, and an IV PPI given for a likely ulcer. Tranexamic acid did not reduce death in GI bleeding in the HALT-IT trial and increased venous thrombosis. Octreotide is for variceal bleeding. Loperamide reduces stoma output but does not treat bleeding. Large crystalloid volumes dilute clotting factors, and vitamin K has no role without warfarin or liver disease.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 5
        },
        "source": "halt-it"
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "After 2 units of red cells he is stable. Endoscopy shows a duodenal ulcer with a clean base and no stigmata of recent bleeding.",
        "prompt": "Which of the following is the most appropriate plan after this endoscopy?",
        "options": [
          "Admit for 72 hours of IV PPI",
          "Angiographic embolization",
          "Discharge without a PPI",
          "Oral PPI and early discharge",
          "Repeat endoscopy in 24 hours"
        ],
        "correct": 3,
        "explanation": "A clean-based ulcer has a low risk of rebleeding, so he can start oral PPI therapy and be discharged early once stable, with Helicobacter pylori testing arranged. High dose IV PPI for 72 hours is for high risk stigmata such as a visible vessel. Routine second-look endoscopy is not recommended. Embolization is a rescue for bleeding that endoscopy cannot control. He still needs a PPI to heal the ulcer and should stop naproxen.",
        "keyFeature": {
          "topic": "gi-bleed",
          "n": 6
        },
        "source": "icg"
      }
    ],
    "sources": [S["halt-it"], S["icg"], S["rosen"]],
    ...META,
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
        "source": "rosen"
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
        "source": "rosen"
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
        "source": "rosen"
      }
    ],
    "sources": [S["rosen"]],
    ...META,
  },
];
