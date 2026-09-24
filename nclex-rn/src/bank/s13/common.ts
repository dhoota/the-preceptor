import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s13. Basic Care and Comfort. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
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
export const NPIAP: Source = {
  body: "National Pressure Injury Advisory Panel, European Pressure Ulcer Advisory Panel and Pan Pacific Pressure Injury Alliance. Haesler E, editor",
  work: "Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline. The International Guideline, 4th edition",
  year: 2026,
  url: "https://internationalguideline.com/the-international-guideline",
};
export const BRADEN_RISK: Source = {
  body: "Ayello EA, Braden B",
  work: "How and Why to Do Pressure Ulcer Risk Assessment. Advances in Skin and Wound Care 15(3):125",
  year: 2002,
  url: "https://pubmed.ncbi.nlm.nih.gov/12055446/",
};
export const ASPEN_EN: Source = {
  body: "Boullata JI, Carrera AL, Harvey L, et al. American Society for Parenteral and Enteral Nutrition",
  work: "ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN Journal of Parenteral and Enteral Nutrition 41(1):15",
  year: 2017,
  url: "https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607116673053",
};
export const AACN_ASP: Source = {
  body: "American Association of Critical-Care Nurses",
  work: "AACN Practice Alert: Prevention of Aspiration in Adults. Critical Care Nurse 36(1):e20",
  year: 2016,
  url: "https://aacnjournals.org/ccnonline/article/36/1/e20/3543/Prevention-of-Aspiration-in-Adults",
};
export const AASM: Source = {
  body: "Edinger JD, Arnedt JT, Bertisch SM, et al. American Academy of Sleep Medicine",
  work: "Behavioral and Psychological Treatments for Chronic Insomnia Disorder in Adults: a Clinical Practice Guideline. Journal of Clinical Sleep Medicine 17(2):255",
  year: 2021,
  url: "https://jcsm.aasm.org/doi/10.5664/jcsm.8986",
};
export const WOCN: Source = {
  body: "Wound, Ostomy and Continence Nurses Society",
  work: "WOCN Society Clinical Guideline: Management of the Adult Patient With a Fecal or Urinary Ostomy. An Executive Summary. Journal of Wound, Ostomy and Continence Nursing 45(1):50",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/29300288/",
};
export const IDDSI: Source = {
  body: "International Dysphagia Diet Standardisation Initiative",
  work: "Complete IDDSI Framework Detailed Definitions 2.0",
  year: 2019,
  url: "https://www.iddsi.org/standards/framework",
};
export const BMAT: Source = {
  body: "Boynton T, Kelly L, Perez A",
  work: "Implementing a Mobility Assessment Tool for Nurses. American Nurse Today 9(9)",
  year: 2014,
  url: "https://www.myamericannurse.com/implementing-mobility-assessment-tool-nurses/",
};
export const SPHM: Source = {
  body: "American Nurses Association",
  work: "Safe Patient Handling and Mobility: Interprofessional National Standards Across the Care Continuum, 2nd edition",
  year: 2021,
  url: "https://www.nursingworld.org/nurses-books/safe-patient-handling-and-mobility-2nd-edition2/",
};
export const ADA_FOOT: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "12. Retinopathy, Neuropathy, and Foot Care: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S261",
  year: 2026,
  url: "https://pubmed.ncbi.nlm.nih.gov/41358886/",
};
export const ACP_LBP: Source = {
  body: "Qaseem A, Wilt TJ, McLean RM, Forciea MA. Clinical Guidelines Committee of the American College of Physicians",
  work: "Noninvasive Treatments for Acute, Subacute, and Chronic Low Back Pain. Annals of Internal Medicine 166(7):514",
  year: 2017,
  url: "https://www.acpjournals.org/doi/10.7326/M16-2367",
};
export const ACP_LBP_2007: Source = {
  body: "Chou R, Qaseem A, Snow V, et al. American College of Physicians and American Pain Society",
  work: "Diagnosis and Treatment of Low Back Pain: a Joint Clinical Practice Guideline. Annals of Internal Medicine 147(7):478",
  year: 2007,
  url: "https://pubmed.ncbi.nlm.nih.gov/17909209/",
};
export const ACP_UI: Source = {
  body: "Qaseem A, Dallas P, Forciea MA, et al. Clinical Guidelines Committee of the American College of Physicians",
  work: "Nonsurgical Management of Urinary Incontinence in Women. Annals of Internal Medicine 161(6):429",
  year: 2014,
  url: "https://www.acpjournals.org/doi/10.7326/M13-2410",
};
export const PAINAD: Source = {
  body: "Warden V, Hurley AC, Volicer L",
  work: "Development and Psychometric Evaluation of the Pain Assessment in Advanced Dementia (PAINAD) Scale. Journal of the American Medical Directors Association 4(1):9",
  year: 2003,
  url: "https://pubmed.ncbi.nlm.nih.gov/12807591/",
};
export const CAUTI: Source = {
  body: "Gould CV, Umscheid CA, Agarwal RK, Kuntz G, Pegues DA. Healthcare Infection Control Practices Advisory Committee",
  work: "Guideline for Prevention of Catheter-Associated Urinary Tract Infections 2009",
  year: 2009,
  url: "https://www.cdc.gov/infection-control/media/pdfs/Guideline-CAUTI-H.pdf",
};
export const STROKE: Source = {
  body: "Prabhakaran S, Gonzalez NR, Zachrison KS, et al. American Heart Association and American Stroke Association",
  work: "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke 57(8):e316",
  year: 2026,
  url: "https://pubmed.ncbi.nlm.nih.gov/41582814/",
};
export const CDC_BMI: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Adult BMI Categories",
  year: 2024,
  url: "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html",
};
