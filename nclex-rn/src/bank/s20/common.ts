import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s20. Reduction of Risk Potential. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "RRP",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const HINKLE: Source = {
  body: "Hinkle JL, Cheever KH, Overbaugh KJ",
  work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
  year: 2022,
  url: "https://www.amazon.com/Brunner-Suddarths-Textbook-Medical-Surgical-Nursing/dp/1975161033",
};
export const POTTER: Source = {
  body: "Potter PA, Perry AG, Stockert PA, Hall AM",
  work: "Fundamentals of Nursing, 11th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0",
};
export const PAGANA: Source = {
  body: "Pagana KD, Pagana TJ, Pagana TN",
  work: "Mosby's Diagnostic and Laboratory Test Reference, 17th edition",
  year: 2024,
  url: "https://shop.elsevier.com/books/mosbys-diagnostic-and-laboratory-test-reference/pagana/978-0-323-82866-6",
};
export const JARVIS: Source = {
  body: "Jarvis C, Eckhardt AL",
  work: "Physical Examination and Health Assessment, 9th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/physical-examination-and-health-assessment/jarvis/978-0-323-80984-9",
};
export const WONG: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs K",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2023,
};
export const INS: Source = {
  body: "Nickel B, Gorski L, Kleidon T, et al. Infusion Nurses Society",
  work: "Infusion Therapy Standards of Practice, 9th edition. Journal of Infusion Nursing 47(1S):S1",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/38211609/",
};
export const AABB: Source = {
  body: "Carson JL, Stanworth SJ, Guyatt G, et al. AABB",
  work: "Red Blood Cell Transfusion: 2023 AABB International Guidelines. JAMA 330(19):1892",
  year: 2023,
  url: "https://pubmed.ncbi.nlm.nih.gov/37824153/",
};
export const USMSTF: Source = {
  body: "Jacobson BC, Anderson JC, Burke CA, et al. US Multi-Society Task Force on Colorectal Cancer",
  work: "Optimizing Bowel Preparation Quality for Colonoscopy: Consensus Recommendations. American Journal of Gastroenterology 120(4):738",
  year: 2025,
  url: "https://pubmed.ncbi.nlm.nih.gov/40035345/",
};
export const ACR_CONTRAST: Source = {
  body: "American College of Radiology Committee on Drugs and Contrast Media",
  work: "ACR Manual on Contrast Media",
  year: 2024,
  url: "https://geiselmed.dartmouth.edu/radiology/wp-content/uploads/sites/47/2024/08/ACR-contrast-2024.pdf",
};
export const WANG_CONTRAST: Source = {
  body: "Wang CL, Ramsey A, Lang D, et al. American College of Radiology and American Academy of Allergy, Asthma and Immunology",
  work: "Management and Prevention of Hypersensitivity Reactions to Radiocontrast Media: a Consensus Statement. Journal of Allergy and Clinical Immunology: In Practice 13:1029",
  year: 2025,
  url: "https://pubmed.ncbi.nlm.nih.gov/40332064/",
};
export const FREIFELD: Source = {
  body: "Freifeld AG, Bow EJ, Sepkowitz KA, et al. Infectious Diseases Society of America",
  work: "Clinical Practice Guideline for the Use of Antimicrobial Agents in Neutropenic Patients With Cancer: 2010 Update. Clinical Infectious Diseases 52(4):e56",
  year: 2011,
  url: "https://academic.oup.com/cid/article/52/4/e56/382256",
};
export const ADA_DX: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "Diagnosis and Classification of Diabetes: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S27",
  year: 2026,
  url: "https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes",
};
export const ADA_FOOT: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "Retinopathy, Neuropathy, and Foot Care: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S261",
  year: 2026,
  url: "https://pubmed.ncbi.nlm.nih.gov/41358886/",
};
export const CDC_TST: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Clinical Testing Guidance for Tuberculosis: Tuberculin Skin Test",
  year: 2025,
  url: "https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html",
};
export const JENSEN_TB: Source = {
  body: "Jensen PA, Lambert LA, Iademarco MF, Ridzon R. Centers for Disease Control and Prevention",
  work: "Guidelines for Preventing the Transmission of Mycobacterium tuberculosis in Health-Care Settings, 2005. MMWR Recommendations and Reports 54(RR-17):1",
  year: 2005,
  url: "https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5417a1.htm",
};
export const ASNC: Source = {
  body: "Henzlova MJ, Duvall WL, Einstein AJ, Travin MI, Verberne HJ. American Society of Nuclear Cardiology",
  work: "ASNC Imaging Guidelines for SPECT Nuclear Cardiology Procedures: Stress, Protocols, and Tracers. Journal of Nuclear Cardiology 23(3):606",
  year: 2016,
  url: "https://www.asnc.org/wp-content/uploads/2024/06/ASNC-SPECT-ProtocolsTracers-Guidelines2016.pdf",
};
export const GULATI: Source = {
  body: "Gulati M, Levy PD, Mukherjee D, et al. AHA, ACC, ASE, CHEST, SAEM, SCCT and SCMR",
  work: "2021 Guideline for the Evaluation and Diagnosis of Chest Pain. Circulation 144(22):e368",
  year: 2021,
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001029",
};
export const GORNIK: Source = {
  body: "Gornik HL, Aronow HD, Goodney PP, et al. ACC, AHA and partner societies",
  work: "2024 Guideline for the Management of Lower Extremity Peripheral Artery Disease. Circulation 149(24):e1313",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/38743805/",
};
export const GOULD_CAUTI: Source = {
  body: "Gould CV, Umscheid CA, Agarwal RK, Kuntz G, Pegues DA. Healthcare Infection Control Practices Advisory Committee",
  work: "Guideline for Prevention of Catheter-Associated Urinary Tract Infections 2009. Infection Control and Hospital Epidemiology 31(4):319",
  year: 2010,
  url: "https://pubmed.ncbi.nlm.nih.gov/20156062/",
};
export const INOUYE: Source = {
  body: "Inouye SK, van Dyck CH, Alessi CA, et al.",
  work: "Clarifying Confusion: the Confusion Assessment Method. Annals of Internal Medicine 113(12):941",
  year: 1990,
  url: "https://www.acpjournals.org/doi/10.7326/0003-4819-113-12-941",
};
export const ACOG_GBS: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Prevention of Group B Streptococcal Early-Onset Disease in Newborns. ACOG Committee Opinion No. 797. Obstetrics and Gynecology 135(2):e51",
  year: 2020,
  url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/02/prevention-of-group-b-streptococcal-early-onset-disease-in-newborns",
};
export const ACOG_RH: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Prevention of Rh D Alloimmunization. ACOG Practice Bulletin No. 181. Obstetrics and Gynecology 130(2):e57",
  year: 2017,
  url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/08/prevention-of-rh-d-alloimmunization",
};
export const NICE_BIPOLAR: Source = {
  body: "National Institute for Health and Care Excellence",
  work: "Bipolar Disorder: Assessment and Management. Clinical Guideline CG185, last updated December 2023",
  year: 2023,
  url: "https://www.nice.org.uk/guidance/cg185",
};
export const ERCP: Source = {
  body: "Chandrasekhara V, Khashab MA, Muthusamy VR, et al. ASGE Standards of Practice Committee",
  work: "Adverse Events Associated With ERCP. Gastrointestinal Endoscopy 85(1):32",
  year: 2017,
  url: "https://pubmed.ncbi.nlm.nih.gov/27546389/",
};
export const SPASOVSKI: Source = {
  body: "Spasovski G, Vanholder R, Allolio B, et al. Hyponatraemia Guideline Development Group",
  work: "Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia. European Journal of Endocrinology 170(3):G1",
  year: 2014,
  url: "https://academic.oup.com/ejendo/article/170/3/G1/6668028",
};
