import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s24. Physiological Adaptation. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "PA",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const HINKLE: Source = {
  body: "Hinkle JL, Cheever KH, Overbaugh KJ",
  work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
  year: 2022,
};
export const LEWIS: Source = {
  body: "Harding MM, Kwong J, Hagler D, Reinisch C",
  work: "Lewis's Medical-Surgical Nursing: Assessment and Management of Clinical Problems, 12th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/lewiss-medical-surgical-nursing/harding/978-0-323-78961-5",
};
export const WONG: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs K",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2023,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const KDIGO_CKD: Source = {
  body: "Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group",
  work: "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney International 105(4S):S117",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/38490803/",
};
export const KDIGO_AKI: Source = {
  body: "Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group",
  work: "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney International Supplements 2(1):1",
  year: 2012,
  url: "https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf",
};
export const KDIGO_GN: Source = {
  body: "Kidney Disease: Improving Global Outcomes (KDIGO) Glomerular Diseases Work Group",
  work: "KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney International 100(4S):S1",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/34556256/",
};
export const ISPD: Source = {
  body: "Li PK, Chow KM, Cho Y, et al. International Society for Peritoneal Dialysis",
  work: "ISPD Peritonitis Guideline Recommendations: 2022 Update on Prevention and Treatment. Peritoneal Dialysis International 42(2):110",
  year: 2022,
  url: "https://pubmed.ncbi.nlm.nih.gov/35264029/",
};
export const ITP: Source = {
  body: "Neunert C, Terrell DR, Arnold DM, et al. American Society of Hematology",
  work: "American Society of Hematology 2019 Guidelines for Immune Thrombocytopenia. Blood Advances 3(23):3829",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31794604/",
};
export const HIT: Source = {
  body: "Cuker A, Arepally GM, Chong BH, et al. American Society of Hematology",
  work: "American Society of Hematology 2018 Guidelines for Management of Venous Thromboembolism: Heparin-Induced Thrombocytopenia. Blood Advances 2(22):3360",
  year: 2018,
  url: "https://ashpublications.org/bloodadvances/article/2/22/3360/16129/American-Society-of-Hematology-2018-guidelines-for",
};
export const WFH: Source = {
  body: "Srivastava A, Santagostino E, Dougall A, et al. World Federation of Hemophilia",
  work: "WFH Guidelines for the Management of Hemophilia, 3rd edition. Haemophilia 26(Suppl 6):1",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32744769/",
};
export const ATA_HYPO: Source = {
  body: "Jonklaas J, Bianco AC, Bauer AJ, et al. American Thyroid Association",
  work: "Guidelines for the Treatment of Hypothyroidism. Thyroid 24(12):1670",
  year: 2014,
  url: "https://journals.sagepub.com/doi/10.1089/thy.2014.0028",
};
export const ADA_GLYCEMIC: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "6. Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S132",
  year: 2026,
  url: "https://pubmed.ncbi.nlm.nih.gov/41358894",
};
export const ADA_TECH: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "7. Diabetes Technology: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S150",
  year: 2026,
  url: "https://diabetesjournals.org/care/article/49/Supplement_1/S150/163922/7-Diabetes-Technology-Standards-of-Care-in",
};
export const ADA_HOSPITAL: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "16. Diabetes Care in the Hospital: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S339",
  year: 2026,
  url: "https://diabetesjournals.org/care/article/49/Supplement_1/S339/163925/16-Diabetes-Care-in-the-Hospital-Standards-of-Care",
};
export const ADRENAL: Source = {
  body: "Bornstein SR, Allolio B, Arlt W, et al. Endocrine Society",
  work: "Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline. Journal of Clinical Endocrinology and Metabolism 101(2):364",
  year: 2016,
  url: "https://academic.oup.com/jcem/article/101/2/364/2810222",
};
export const ALDO: Source = {
  body: "Adler GK, Stowasser M, Correa RR, et al. Endocrine Society",
  work: "Primary Aldosteronism: An Endocrine Society Clinical Practice Guideline. Journal of Clinical Endocrinology and Metabolism 110(9):2453",
  year: 2025,
  url: "https://pubmed.ncbi.nlm.nih.gov/40658480/",
};
export const PANC_CHRONIC: Source = {
  body: "Gardner TB, Adler DG, Forsmark CE, et al. American College of Gastroenterology",
  work: "ACG Clinical Guideline: Chronic Pancreatitis. American Journal of Gastroenterology 115(3):322",
  year: 2020,
  url: "https://journals.lww.com/ajg/fulltext/2020/03000/acg_clinical_guideline__chronic_pancreatitis.9.aspx",
};
export const UGIB: Source = {
  body: "Laine L, Barkun AN, Saltzman JR, Martel M, Leontiadis GI. American College of Gastroenterology",
  work: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. American Journal of Gastroenterology 116(5):899",
  year: 2021,
  url: "https://journals.lww.com/ajg/fulltext/2021/05000/acg_clinical_guideline__upper_gastrointestinal_and.14.aspx",
};
export const UC: Source = {
  body: "Rubin DT, Ananthakrishnan AN, Siegel CA, Barnes EL, Long MD. American College of Gastroenterology",
  work: "ACG Clinical Guideline Update: Ulcerative Colitis in Adults. American Journal of Gastroenterology 120(6):1187",
  year: 2025,
  url: "https://pubmed.ncbi.nlm.nih.gov/40701556/",
};
export const CELIAC: Source = {
  body: "Rubio-Tapia A, Hill ID, Semrad C, et al. American College of Gastroenterology",
  work: "American College of Gastroenterology Guidelines Update: Diagnosis and Management of Celiac Disease. American Journal of Gastroenterology 118(1):59",
  year: 2023,
  url: "https://pubmed.ncbi.nlm.nih.gov/36602836/",
};
export const ASCITES: Source = {
  body: "Biggins SW, Angeli P, Garcia-Tsao G, et al. American Association for the Study of Liver Diseases",
  work: "Diagnosis, Evaluation, and Management of Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome: 2021 Practice Guidance. Hepatology 74(2):1014",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/33942342/",
};
export const CHOLANGITIS: Source = {
  body: "Kiriyama S, Kozaka K, Takada T, et al. Tokyo Guidelines Revision Committee",
  work: "Tokyo Guidelines 2018: Diagnostic Criteria and Severity Grading of Acute Cholangitis. Journal of Hepato-Biliary-Pancreatic Sciences 25(1):17",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/29032610/",
};
export const SAH: Source = {
  body: "Hoh BL, Ko NU, Amin-Hanjani S, et al. American Heart Association and American Stroke Association",
  work: "2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage. Stroke 54(7):e314",
  year: 2023,
  url: "https://pubmed.ncbi.nlm.nih.gov/37212182/",
};
export const MSCC: Source = {
  body: "National Institute for Health and Care Excellence",
  work: "Spinal Metastases and Metastatic Spinal Cord Compression, NICE guideline NG234",
  year: 2023,
  url: "https://www.nice.org.uk/guidance/ng234",
};
export const MH: Source = {
  body: "Glahn KPE, Girard T, Hellblom A, et al. European Malignant Hyperthermia Group",
  work: "Recognition and Management of a Malignant Hyperthermia Crisis: Updated 2024 Guideline. British Journal of Anaesthesia 134(1):221",
  year: 2025,
  url: "https://pubmed.ncbi.nlm.nih.gov/39482150/",
};
export const ASAM_AW: Source = {
  body: "American Society of Addiction Medicine",
  work: "The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. Journal of Addiction Medicine 14(3S):1",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32511109/",
};
export const BELL: Source = {
  body: "Baugh RF, Basura GJ, Ishii LE, et al. American Academy of Otolaryngology Head and Neck Surgery Foundation",
  work: "Clinical Practice Guideline: Bell's Palsy. Otolaryngology Head and Neck Surgery 149(3 Suppl):S1",
  year: 2013,
  url: "https://pubmed.ncbi.nlm.nih.gov/24189771/",
};
export const TACO: Source = {
  body: "Wiersum-Osselton JC, Whitaker B, Grey S, et al. International Society of Blood Transfusion, International Haemovigilance Network and AABB",
  work: "Revised International Surveillance Case Definition of Transfusion-Associated Circulatory Overload. Lancet Haematology 6(7):e350",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31080132/",
};
export const VARICES: Source = {
  body: "Kaplan DE, Ripoll C, Thiele M, et al. American Association for the Study of Liver Diseases",
  work: "AASLD Practice Guidance on Risk Stratification and Management of Portal Hypertension and Varices in Cirrhosis. Hepatology 79:1180",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/37870298/",
};
