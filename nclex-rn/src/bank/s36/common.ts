import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s36. Pharmacological and Parenteral Therapies and Reduction of Risk Potential. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "need" | "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const INS: Source = {
  body: "Nickel B, Gorski L, Kleidon T, et al. Infusion Nurses Society",
  work: "Infusion Therapy Standards of Practice, 9th edition. Journal of Infusion Nursing 47(1S):S1",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/38211609/",
};
export const VESICANT: Source = {
  body: "Gorski LA, Ong J, Van Gerpen R, Nickel B, Kokotis K, Hadaway L",
  work: "Development of an Evidence-Based List of Non-Antineoplastic Vesicants: 2024 Update. Journal of Infusion Nursing 47(5):290",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/39250767/",
};
export const VINCRISTINE: Source = {
  body: "Hospira, Inc.",
  work: "Vincristine Sulfate Injection, USP. Prescribing information (DailyMed)",
  year: 2026,
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b22e4c8e-dbe1-4d4b-a026-e1812974071c",
};
export const DOPAMINE: Source = {
  body: "Hospira, Inc.",
  work: "Dopamine Hydrochloride in 5% Dextrose Injection. Prescribing information (DailyMed)",
  year: 2026,
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=08f23f6e-150d-45ea-098e-f2edf64c21a1",
};
export const AABB: Source = {
  body: "AABB, American Red Cross, America's Blood Centers, Armed Services Blood Program",
  work: "Circular of Information for the Use of Human Blood and Blood Components, June 2024",
  year: 2024,
  url: "https://www.aabb.org/news-resources/resources/circular-of-information",
};
export const ASCITES: Source = {
  body: "Biggins SW, Angeli P, Garcia-Tsao G, et al. American Association for the Study of Liver Diseases",
  work: "Diagnosis, Evaluation, and Management of Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome: 2021 Practice Guidance. Hepatology 74(2):1014",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/33942342/",
};
export const LAST: Source = {
  body: "Neal JM, Neal EJ, Weinberg GL. American Society of Regional Anesthesia and Pain Medicine",
  work: "ASRA Local Anesthetic Systemic Toxicity Checklist: 2020 Version. Regional Anesthesia and Pain Medicine 46(1):81",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/33148630/",
};
export const SALICYLATE: Source = {
  body: "Palmer BF, Clegg DJ",
  work: "Salicylate Toxicity. New England Journal of Medicine 382(26):2544",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32579814/",
};
export const ANTICOAG: Source = {
  body: "Garcia DA, Baglin TP, Weitz JI, Samama MM. American College of Chest Physicians",
  work: "Parenteral Anticoagulants: Antithrombotic Therapy and Prevention of Thrombosis, 9th edition. Chest 141(2 Suppl):e24S",
  year: 2012,
  url: "https://pubmed.ncbi.nlm.nih.gov/22315264/",
};
export const UDMI: Source = {
  body: "Thygesen K, Alpert JS, Jaffe AS, et al. Joint ESC, ACC, AHA and WHF Task Force",
  work: "Fourth Universal Definition of Myocardial Infarction (2018). Circulation 138(20):e618",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/30571511/",
};
export const TEE: Source = {
  body: "Hahn RT, Abraham T, Adams MS, et al. American Society of Echocardiography and Society of Cardiovascular Anesthesiologists",
  work: "Guidelines for Performing a Comprehensive Transesophageal Echocardiographic Examination. Journal of the American Society of Echocardiography 26(9):921",
  year: 2013,
  url: "https://pubmed.ncbi.nlm.nih.gov/23998692/",
};
export const RADIAL: Source = {
  body: "Shroff AR, Gulati R, Drachman DE, et al. Society for Cardiovascular Angiography and Interventions",
  work: "SCAI Expert Consensus Statement Update on Best Practices for Transradial Angiography and Intervention. Catheterization and Cardiovascular Interventions 95(2):245",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/31880380/",
};
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const PAGANA: Source = {
  body: "Pagana KD, Pagana TJ, Pagana TN",
  work: "Mosby's Diagnostic and Laboratory Test Reference, 17th edition",
  year: 2024,
  url: "https://shop.elsevier.com/books/mosbys-diagnostic-and-laboratory-test-reference/pagana/978-0-323-82866-6",
};
export const INTRALIPID: Source = {
  body: "Fresenius Kabi USA, LLC",
  work: "Intralipid 20% (lipid injectable emulsion). Prescribing information (DailyMed)",
  year: 2025,
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=61e025f1-a38e-4af2-9e18-13ea12977cf5",
};
export const NATRIURETIC: Source = {
  body: "Mueller C, McDonald K, de Boer RA, et al. Heart Failure Association of the European Society of Cardiology",
  work: "Practical Guidance on the Use of Natriuretic Peptide Concentrations. European Journal of Heart Failure 21(6):715",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31222929/",
};
export const KDOQI_VA: Source = {
  body: "Lok CE, Huber TS, Lee T, et al. National Kidney Foundation KDOQI",
  work: "KDOQI Clinical Practice Guideline for Vascular Access: 2019 Update. American Journal of Kidney Diseases 75(4 Suppl 2):S1",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32778223/",
};
export const MAGIC: Source = {
  body: "Chopra V, Flanders SA, Saint S, et al.",
  work: "The Michigan Appropriateness Guide for Intravenous Catheters (MAGIC). Annals of Internal Medicine 163(6 Suppl):S1",
  year: 2015,
  url: "https://pubmed.ncbi.nlm.nih.gov/26369828/",
};
export const ACID_BASE: Source = {
  body: "Berend K, de Vries AP, Gans RO",
  work: "Physiological Approach to Assessment of Acid-Base Disturbances. New England Journal of Medicine 371(15):1434",
  year: 2014,
  url: "https://pubmed.ncbi.nlm.nih.gov/25295502/",
};
export const SEPSIS_2021: Source = {
  body: "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign",
  work: "International Guidelines for Management of Sepsis and Septic Shock 2021. Critical Care Medicine 49(11):e1063",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/34605781/",
};
export const FUROSEMIDE: Source = {
  body: "Cardinal Health 107, LLC",
  work: "Furosemide Injection, USP. Prescribing information (DailyMed)",
  year: 2026,
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2590ebb6-ce2a-4e23-9244-e54e3010d488",
};
export const PHENYTOIN: Source = {
  body: "Major Pharmaceuticals",
  work: "Phenytoin Sodium Extended Capsules, USP. Prescribing information (DailyMed)",
  year: 2026,
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=46d5c0d1-a97b-46d9-8cf4-994780673337",
};
export const LANOXIN: Source = {
  body: "Covis Pharma US, Inc.",
  work: "Lanoxin (digoxin) Injection. Prescribing information (DailyMed)",
  year: 2025,
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9ec84cac-6ecc-43dc-8006-6ccc029e2707",
};
export const CACL: Source = {
  body: "PAI Pharma",
  work: "Calcium Chloride Injection 10%. Prescribing information (DailyMed)",
  year: 2026,
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d5d9c301-599e-47bb-ba9b-c0065c08dfb4",
};
export const ONDANSETRON: Source = {
  body: "Henry Schein, Inc.",
  work: "Ondansetron Injection, USP. Prescribing information (DailyMed)",
  year: 2026,
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1a44601b-c31c-4779-a688-28cc4cc75e8b",
};
export const CEFTRIAXONE: Source = {
  body: "Hikma Pharmaceuticals USA Inc.",
  work: "Ceftriaxone for Injection, USP. Prescribing information (DailyMed)",
  year: 2026,
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29",
};
export const POSTOP_PAIN: Source = {
  body: "Chou R, Gordon DB, de Leon-Casasola OA, et al. American Pain Society, ASRA and ASA",
  work: "Management of Postoperative Pain: A Clinical Practice Guideline. Journal of Pain 17(2):131",
  year: 2016,
  url: "https://pubmed.ncbi.nlm.nih.gov/26827847/",
};
export const BTS_PLEURAL: Source = {
  body: "Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society",
  work: "British Thoracic Society Guideline for Pleural Disease. Thorax 78(Suppl 3):s1",
  year: 2023,
  url: "https://pubmed.ncbi.nlm.nih.gov/37433578/",
};
export const PROPPR: Source = {
  body: "Holcomb JB, Tilley BC, Baraniuk S, et al. PROPPR Study Group",
  work: "Transfusion of Plasma, Platelets, and Red Blood Cells in a 1:1:1 vs a 1:1:2 Ratio and Mortality in Patients With Severe Trauma. JAMA 313(5):471",
  year: 2015,
  url: "https://pubmed.ncbi.nlm.nih.gov/25647203/",
};
export const BTS_BRONCH: Source = {
  body: "Du Rand IA, Blaikley J, Booton R, et al. British Thoracic Society",
  work: "British Thoracic Society Guideline for Diagnostic Flexible Bronchoscopy in Adults. Thorax 68(Suppl 1):i1",
  year: 2013,
  url: "https://pubmed.ncbi.nlm.nih.gov/23860341/",
};
export const TACO: Source = {
  body: "Wiersum-Osselton JC, Whitaker B, Grey S, et al. International Society of Blood Transfusion, International Haemovigilance Network and AABB",
  work: "Revised International Surveillance Case Definition of Transfusion-Associated Circulatory Overload. Lancet Haematology 6(7):e350",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31080132/",
};
export const BOWEL_PREP: Source = {
  body: "Johnson DA, Barkun AN, Cohen LB, et al. US Multi-Society Task Force on Colorectal Cancer",
  work: "Optimizing Adequacy of Bowel Cleansing for Colonoscopy. Gastroenterology 147(4):903",
  year: 2014,
  url: "https://pubmed.ncbi.nlm.nih.gov/25239068/",
};
export const ERCP: Source = {
  body: "Chandrasekhara V, Khashab MA, Muthusamy VR, et al. ASGE Standards of Practice Committee",
  work: "Adverse Events Associated With ERCP. Gastrointestinal Endoscopy 85(1):32",
  year: 2017,
  url: "https://pubmed.ncbi.nlm.nih.gov/27546389/",
};
export const HYLENEX: Source = {
  body: "Antares Pharma, Inc.",
  work: "Hylenex recombinant (hyaluronidase human injection). Prescribing information (DailyMed)",
  year: 2025,
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3023cc56-ed4b-4e87-b3a1-81b20943f658",
};
export const LIVER_BIOPSY: Source = {
  body: "Neuberger J, Patel J, Caldwell H, et al. British Society of Gastroenterology, Royal College of Radiologists and Royal College of Pathology",
  work: "Guidelines on the Use of Liver Biopsy in Clinical Practice. Gut 69(8):1382",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32467090/",
};
export const HIZENTRA: Source = {
  body: "CSL Behring AG",
  work: "Hizentra (immune globulin subcutaneous, human) 20% liquid. Prescribing information (DailyMed)",
  year: 2023,
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7b58f5ff-0316-49a3-b585-1f6003ddb953",
};
export const ACR_CONTRAST: Source = {
  body: "American College of Radiology Committee on Drugs and Contrast Media",
  work: "ACR Manual on Contrast Media",
  year: 2024,
  url: "https://geiselmed.dartmouth.edu/radiology/wp-content/uploads/sites/47/2024/08/ACR-contrast-2024.pdf",
};
