import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s14. Basic Care and Comfort. */
export const meta = (
  id: string,
  over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">,
): ItemMeta => ({
  id,
  need: "BCC",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const POTTER: Source = {
  body: "Potter PA, Perry AG, Stockert PA, Hall AM",
  work: "Fundamentals of Nursing, 11th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0",
};
export const HINKLE: Source = {
  body: "Hinkle JL, Cheever KH, Overbaugh KJ",
  work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
  year: 2022,
};
export const HOCKENBERRY: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs K",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2023,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const LOWDERMILK: Source = {
  body: "Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE",
  work: "Maternity and Women's Health Care, 13th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/maternity-and-womens-health-care/lowdermilk/978-0-323-81018-0",
};
export const ASPEN_EN: Source = {
  body: "Boullata JI, Carrera AL, Harvey L, et al. American Society for Parenteral and Enteral Nutrition",
  work: "ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN Journal of Parenteral and Enteral Nutrition 41(1):15",
  year: 2017,
  url: "https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607116673053",
};
export const SCCM_ASPEN: Source = {
  body: "McClave SA, Taylor BE, Martindale RG, et al. Society of Critical Care Medicine and American Society for Parenteral and Enteral Nutrition",
  work: "Guidelines for the Provision and Assessment of Nutrition Support Therapy in the Adult Critically Ill Patient. JPEN Journal of Parenteral and Enteral Nutrition 40(2):159",
  year: 2016,
  url: "https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607115621863",
};
export const AASM: Source = {
  body: "Edinger JD, Arnedt JT, Bertisch SM, et al. American Academy of Sleep Medicine",
  work: "Behavioral and Psychological Treatments for Chronic Insomnia Disorder in Adults: a Clinical Practice Guideline. Journal of Clinical Sleep Medicine 17(2):255",
  year: 2021,
  url: "https://jcsm.aasm.org/doi/10.5664/jcsm.8986",
};
export const STOPBANG: Source = {
  body: "Chung F, Yegneswaran B, Liao P, et al.",
  work: "STOP Questionnaire: a Tool to Screen Patients for Obstructive Sleep Apnea. Anesthesiology 108(5):812",
  year: 2008,
  url: "http://stopbang.ca/publication/pdf/pub6.pdf",
};
export const WOCN: Source = {
  body: "Wound, Ostomy and Continence Nurses Society",
  work: "WOCN Society Clinical Guideline: Management of the Adult Patient With a Fecal or Urinary Ostomy. An Executive Summary. Journal of Wound, Ostomy and Continence Nursing 45(1):50",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/29300288/",
};
export const CAUTI: Source = {
  body: "Gould CV, Umscheid CA, Agarwal RK, Kuntz G, Pegues DA. Healthcare Infection Control Practices Advisory Committee",
  work: "Guideline for Prevention of Catheter-Associated Urinary Tract Infections 2009",
  year: 2009,
  url: "https://www.cdc.gov/infection-control/media/pdfs/Guideline-CAUTI-H.pdf",
};
export const ACP_UI: Source = {
  body: "Qaseem A, Dallas P, Forciea MA, et al. Clinical Guidelines Committee of the American College of Physicians",
  work: "Nonsurgical Management of Urinary Incontinence in Women. Annals of Internal Medicine 161(6):429",
  year: 2014,
  url: "https://www.acpjournals.org/doi/10.7326/M13-2410",
};
export const SPHM: Source = {
  body: "American Nurses Association",
  work: "Safe Patient Handling and Mobility: Interprofessional National Standards Across the Care Continuum, 2nd edition",
  year: 2021,
  url: "https://www.nursingworld.org/nurses-books/safe-patient-handling-and-mobility-2nd-edition2/",
};
export const KDOQI: Source = {
  body: "Ikizler TA, Burrowes JD, Byham-Gray LD, et al. National Kidney Foundation KDOQI",
  work: "KDOQI Clinical Practice Guideline for Nutrition in CKD: 2020 Update. American Journal of Kidney Diseases 76(3 Suppl 1):S1",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32829751/",
};
export const AHA_HF: Source = {
  body: "Heidenreich PA, Bozkurt B, Aguilar D, et al. American Heart Association, American College of Cardiology and Heart Failure Society of America",
  work: "2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation 145(18):e895",
  year: 2022,
  url: "https://pubmed.ncbi.nlm.nih.gov/35363499/",
};
export const ACG_CELIAC: Source = {
  body: "Rubio-Tapia A, Hill ID, Semrad C, et al. American College of Gastroenterology",
  work: "American College of Gastroenterology Guidelines Update: Diagnosis and Management of Celiac Disease. American Journal of Gastroenterology 118(1):59",
  year: 2023,
  url: "https://pubmed.ncbi.nlm.nih.gov/36602836/",
};
export const MASCC: Source = {
  body: "Elad S, Cheng KKF, Lalla RV, et al. Multinational Association of Supportive Care in Cancer and International Society of Oral Oncology",
  work: "MASCC/ISOO Clinical Practice Guidelines for the Management of Mucositis Secondary to Cancer Therapy. Cancer 126(19):4423",
  year: 2020,
  url: "https://acsjournals.onlinelibrary.wiley.com/doi/10.1002/cncr.33100",
};
export const NIDDK_DUMP: Source = {
  body: "National Institute of Diabetes and Digestive and Kidney Diseases",
  work: "Dumping Syndrome: Symptoms and Causes, and Eating, Diet and Nutrition",
  year: 2019,
  url: "https://www.niddk.nih.gov/health-information/digestive-diseases/dumping-syndrome",
};
export const CERUMEN: Source = {
  body: "Schwartz SR, Magit AE, Rosenfeld RM, et al. American Academy of Otolaryngology Head and Neck Surgery Foundation",
  work: "Clinical Practice Guideline (Update): Earwax (Cerumen Impaction). Otolaryngology Head and Neck Surgery 156(1 Suppl):S1",
  year: 2017,
  url: "https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/10.1177/0194599816671491",
};
export const ODS_IRON: Source = {
  body: "National Institutes of Health Office of Dietary Supplements",
  work: "Iron: Fact Sheet for Health Professionals",
  year: 2025,
  url: "https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/",
};
export const ASCO_DYSPNEA: Source = {
  body: "Hui D, Bohlke K, Bao T, et al. American Society of Clinical Oncology",
  work: "Management of Dyspnea in Advanced Cancer: ASCO Guideline. Journal of Clinical Oncology 39(12):1389",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/33617290/",
};
