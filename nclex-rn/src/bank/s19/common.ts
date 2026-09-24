import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s19. Reduction of Risk Potential. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "RRP",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const POTTER: Source = { body: "Potter PA, Perry AG, Stockert PA, Hall AM", work: "Fundamentals of Nursing, 11th edition", year: 2023 };
export const WONG: Source = { body: "Hockenberry MJ, Duffy EA, Gibbs K", work: "Wong's Nursing Care of Infants and Children, 12th edition", year: 2023 };
export const ACR_CONTRAST: Source = {
  body: "American College of Radiology Committee on Drugs and Contrast Media",
  work: "ACR Manual on Contrast Media",
  year: 2024,
  url: "https://geiselmed.dartmouth.edu/radiology/wp-content/uploads/sites/47/2024/08/ACR-contrast-2024.pdf",
};
export const ASA_FAST: Source = {
  body: "American Society of Anesthesiologists Committee on Standards and Practice Parameters",
  work: "Practice Guidelines for Preoperative Fasting and the Use of Pharmacologic Agents to Reduce the Risk of Pulmonary Aspiration. Anesthesiology 126(3):376",
  year: 2017,
  url: "https://journals.lww.com/anesthesiology/fulltext/2017/03000/practice_guidelines_for_preoperative_fasting_and.14.aspx",
};
export const FREEMAN: Source = {
  body: "Freeman R, Wieling W, Axelrod FB, et al.",
  work: "Consensus Statement on the Definition of Orthostatic Hypotension, Neurally Mediated Syncope and the Postural Tachycardia Syndrome. Clinical Autonomic Research 21(2):69",
  year: 2011,
  url: "https://www.researchgate.net/publication/50833270",
};
export const AARC_IS: Source = {
  body: "Restrepo RD, Wettstein R, Wittnebel L, Tracy M. American Association for Respiratory Care",
  work: "AARC Clinical Practice Guideline: Incentive Spirometry 2011. Respiratory Care 56(10):1600",
  year: 2011,
  url: "https://pubmed.ncbi.nlm.nih.gov/22008401/",
};
export const AARC_SUCTION: Source = {
  body: "American Association for Respiratory Care",
  work: "AARC Clinical Practice Guidelines: Endotracheal Suctioning of Mechanically Ventilated Patients With Artificial Airways 2010. Respiratory Care 55(6):758",
  year: 2010,
  url: "https://pubmed.ncbi.nlm.nih.gov/20507660/",
};
export const ASPEN_EN: Source = {
  body: "Boullata JI, Carrera AL, Harvey L, et al. American Society for Parenteral and Enteral Nutrition",
  work: "ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN 41(1):15",
  year: 2017,
  url: "https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607116673053",
};
export const CDIFF: Source = {
  body: "McDonald LC, Gerding DN, Johnson S, et al. IDSA and SHEA",
  work: "Clinical Practice Guidelines for Clostridium difficile Infection in Adults and Children: 2017 Update. Clinical Infectious Diseases 66(7):e1",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/29462280/",
};
export const STROKE: Source = {
  body: "Prabhakaran S, Gonzalez NR, Zachrison KS, et al. American Heart Association and American Stroke Association",
  work: "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke 57(8):e316",
  year: 2026,
  url: "https://pubmed.ncbi.nlm.nih.gov/41582814/",
};
export const SSC: Source = {
  body: "Prescott HC, Antonelli M, Alhazzani W, et al. Society of Critical Care Medicine and European Society of Intensive Care Medicine",
  work: "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026. Critical Care Medicine 54(4):725",
  year: 2026,
  url: "https://pubmed.ncbi.nlm.nih.gov/41869847/",
};
export const ACOG_NST: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Antepartum Fetal Surveillance. ACOG Practice Bulletin No. 229. Obstetrics and Gynecology 137(6):e116",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/34011889/",
};
export const AWHONN: Source = {
  body: "Simpson KR. Association of Women's Health, Obstetric and Neonatal Nurses",
  work: "Cervical Ripening and Labor Induction and Augmentation, 5th edition. Nursing for Women's Health 24(4 Suppl)",
  year: 2020,
  url: "https://www.nwhjournal.org/article/S1751-4851(20)30079-9/abstract",
};
export const TONSIL: Source = {
  body: "Mitchell RB, Archer SM, Ishman SL, et al. American Academy of Otolaryngology Head and Neck Surgery Foundation",
  work: "Clinical Practice Guideline: Tonsillectomy in Children (Update). Otolaryngology Head and Neck Surgery 160(1 Suppl):S1",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/30798778/",
};
export const MH: Source = {
  body: "Rosenberg H, Pollock N, Schiemann A, Bulger T, Stowell K",
  work: "Malignant Hyperthermia: a Review. Orphanet Journal of Rare Diseases 10:93",
  year: 2015,
  url: "https://link.springer.com/article/10.1186/s13023-015-0310-1",
};
export const KDOQI_VA: Source = {
  body: "Lok CE, Huber TS, Lee T, et al. National Kidney Foundation KDOQI Vascular Access Work Group",
  work: "KDOQI Clinical Practice Guideline for Vascular Access: 2019 Update. American Journal of Kidney Diseases 75(4 Suppl 2):S1",
  year: 2020,
  url: "https://www.ajkd.org/article/S0272-6386(19)31137-0/fulltext",
};
export const ISPD: Source = {
  body: "Li PKT, Chow KM, Cho Y, et al. International Society for Peritoneal Dialysis",
  work: "ISPD Peritonitis Guideline Recommendations: 2022 Update on Prevention and Treatment. Peritoneal Dialysis International 42(2):110",
  year: 2022,
  url: "https://pubmed.ncbi.nlm.nih.gov/35264029/",
};
export const KLIGFIELD: Source = {
  body: "Kligfield P, Gettes LS, Bailey JJ, et al. AHA, ACCF and HRS",
  work: "Recommendations for the Standardization and Interpretation of the Electrocardiogram, Part I: The Electrocardiogram and Its Technology. Circulation 115(10):1306",
  year: 2007,
  url: "https://www.ahajournals.org/doi/10.1161/circulationaha.106.180200",
};
export const TRACH: Source = {
  body: "Mitchell RB, Hussey HM, Setzen G, et al.",
  work: "Clinical Consensus Statement: Tracheostomy Care. Otolaryngology Head and Neck Surgery 148(1):6",
  year: 2013,
  url: "https://pubmed.ncbi.nlm.nih.gov/22990518/",
};
export const NEUBERGER: Source = {
  body: "Neuberger J, Patel J, Caldwell H, et al. British Society of Gastroenterology, Royal College of Radiologists and Royal College of Pathology",
  work: "Guidelines on the Use of Liver Biopsy in Clinical Practice. Gut 69(8):1382",
  year: 2020,
  url: "https://www.bsg.org.uk/clinical-resource/guidelines-on-the-use-of-liver-biopsy-in-clinical-practice-from-the-british-society-of-gastroenterology-the-royal-college-of-radiologists-and-the-royal-college-of-pathology/",
};
export const KDIGO_AKI: Source = {
  body: "Kidney Disease: Improving Global Outcomes Acute Kidney Injury Work Group",
  work: "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney International Supplements 2(1):1",
  year: 2012,
  url: "https://kdigo.org/guidelines/acute-kidney-injury/",
};
export const FDA_OX: Source = {
  body: "US Food and Drug Administration",
  work: "Pulse Oximeter Accuracy and Limitations: FDA Safety Communication",
  year: 2021,
  url: "https://content.govdelivery.com/accounts/USFDA/bulletins/2c276cb",
};
export const MR_SAFETY: Source = {
  body: "Greenberg TD, Hoff MN, Gilk TB, et al. ACR Committee on MR Safety",
  work: "ACR Guidance Document on MR Safe Practices: Updates and Critical Information 2019. Journal of Magnetic Resonance Imaging 51(2):331",
  year: 2020,
  url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jmri.26880",
};
export const ESC_PE: Source = {
  body: "Konstantinides SV, Meyer G, Becattini C, et al. European Society of Cardiology and European Respiratory Society",
  work: "2019 ESC Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism. European Heart Journal 41(4):543",
  year: 2020,
  url: "https://academic.oup.com/eurheartj/article/41/4/543/5556136",
};
export const ASH_VTE: Source = {
  body: "Anderson DR, Morgano GP, Bennett C, et al. American Society of Hematology",
  work: "2019 Guidelines for Management of Venous Thromboembolism: Prevention of Venous Thromboembolism in Surgical Hospitalized Patients. Blood Advances 3(23):3898",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31794602/",
};
export const ASGE: Source = {
  body: "Fisher DA, Maple JT, Ben-Menachem T, et al. ASGE Standards of Practice Committee",
  work: "Complications of Colonoscopy. Gastrointestinal Endoscopy 74(4):745",
  year: 2011,
  url: "https://pubmed.ncbi.nlm.nih.gov/21951473/",
};
export const ADA_DX: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "Diagnosis and Classification of Diabetes: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S27",
  year: 2026,
  url: "https://pubmed.ncbi.nlm.nih.gov/41358893/",
};
export const ADA_GOALS: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S132",
  year: 2026,
  url: "https://diabetesjournals.org/care/article/49/Supplement_1/S132/163927/",
};
