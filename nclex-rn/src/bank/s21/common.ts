import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s21. Reduction of Risk Potential. */
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
export const WONG: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs K",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2023,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const HALTER: Source = {
  body: "Halter MJ",
  work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition",
  year: 2022,
  url: "https://shop.elsevier.com/books/varcarolis-foundations-of-psychiatric-mental-health-nursing/halter/978-0-323-69707-1",
};
export const ASA_SED: Source = {
  body: "American Society of Anesthesiologists Task Force on Moderate Procedural Sedation and Analgesia",
  work: "Practice Guidelines for Moderate Procedural Sedation and Analgesia 2018. Anesthesiology 128(3):437",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/29334501/",
};
export const ASPMN: Source = {
  body: "Jungquist CR, Quinlan-Colwell A, Vallerand A, et al. American Society for Pain Management Nursing",
  work: "Guidelines on Monitoring for Opioid-Induced Advancing Sedation and Respiratory Depression: Revisions. Pain Management Nursing 21(1):7",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/31377031/",
};
export const AHA_BP: Source = {
  body: "Muntner P, Shimbo D, Carey RM, et al. American Heart Association",
  work: "Measurement of Blood Pressure in Humans: A Scientific Statement. Hypertension 73(5):e35",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/30827125/",
};
export const VAP: Source = {
  body: "Klompas M, Branson R, Cawcutt K, et al. Society for Healthcare Epidemiology of America",
  work: "Strategies to Prevent Ventilator-Associated Pneumonia, Ventilator-Associated Events, and Nonventilator Hospital-Acquired Pneumonia in Acute-Care Hospitals: 2022 Update. Infection Control and Hospital Epidemiology 43(6):687",
  year: 2022,
  url: "https://pubmed.ncbi.nlm.nih.gov/35589091/",
};
export const AF_GUIDE: Source = {
  body: "Joglar JA, Chung MK, Armbruster AL, et al. ACC, AHA, ACCP and HRS",
  work: "2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation 149(1):e1",
  year: 2024,
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193",
};
export const ACLS: Source = {
  body: "Wigginton JG, Agarwal S, Bartos JA, et al. American Heart Association",
  work: "Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation 152(Suppl 2):S538",
  year: 2025,
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376",
};
export const PCAC: Source = {
  body: "Hirsch KG, Amorim E, Coppler PJ, et al. American Heart Association",
  work: "Part 11: Post-Cardiac Arrest Care: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation 152(Suppl 2):S673",
  year: 2025,
  url: "https://pubmed.ncbi.nlm.nih.gov/41122894/",
};
export const AAP_BILI: Source = {
  body: "Kemper AR, Newman TB, Slaughter JL, et al. American Academy of Pediatrics",
  work: "Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation. Pediatrics 150(3):e2022058859",
  year: 2022,
  url: "https://publications.aap.org/pediatrics/article/150/3/e2022058859/188726/",
};
export const ASRA: Source = {
  body: "Kopp SL, Vandermeulen E, McBane RD, et al. American Society of Regional Anesthesia and Pain Medicine",
  work: "Regional Anesthesia in the Patient Receiving Antithrombotic or Thrombolytic Therapy: Evidence-Based Guidelines, fifth edition. Regional Anesthesia and Pain Medicine",
  year: 2025,
  url: "https://pubmed.ncbi.nlm.nih.gov/39880411/",
};
export const NEWS2: Source = {
  body: "Royal College of Physicians",
  work: "National Early Warning Score (NEWS) 2: Standardising the Assessment of Acute-Illness Severity in the NHS. Updated report of a working party",
  year: 2017,
  url: "https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf",
};
export const NPIAP: Source = {
  body: "European Pressure Ulcer Advisory Panel, National Pressure Injury Advisory Panel and Pan Pacific Pressure Injury Alliance",
  work: "Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline. The International Guideline, 4th edition",
  year: 2025,
  url: "https://www.internationalguideline.com/the-international-guideline",
};
export const ASPAN: Source = {
  body: "Hooper VD, Chard R, Clifford T, et al. American Society of PeriAnesthesia Nurses",
  work: "ASPAN's Evidence-Based Clinical Practice Guideline for the Promotion of Perioperative Normothermia, 2nd edition. Journal of PeriAnesthesia Nursing 25(6):346",
  year: 2010,
  url: "https://pubmed.ncbi.nlm.nih.gov/21126665/",
};
export const AANN_EVD: Source = {
  body: "American Association of Neuroscience Nurses",
  work: "Care of the Patient Undergoing Intracranial Pressure Monitoring/External Ventricular Drainage or Lumbar Drainage. AANN Clinical Practice Guideline Series",
  year: 2011,
  url: "https://www.bmc.org/sites/default/files/Patient_Care/Specialty_Care/Stroke_and_Cerebrovascular_Center/Medical_Professionals/Protocols/AANN%20Guideline%20caring%20for%20ICP%20Monitor%20External%20Vent%20Drain%20or%20Lumbar%20Drainage.pdf",
};
export const LEHNE: Source = {
  body: "Burchum JR, Rosenthal LD",
  work: "Lehne's Pharmacology for Nursing Care, 11th edition",
  year: 2022,
  url: "https://shop.elsevier.com/books/lehnes-pharmacology-for-nursing-care/burchum/978-0-323-82522-1",
};
export const IDSA_FEVER: Source = {
  body: "High KP, Bradley SF, Gravenstein S, et al. Infectious Diseases Society of America",
  work: "Clinical Practice Guideline for the Evaluation of Fever and Infection in Older Adult Residents of Long-Term Care Facilities: 2008 Update. Clinical Infectious Diseases 48(2):149",
  year: 2009,
  url: "https://pubmed.ncbi.nlm.nih.gov/19072244/",
};
export const ASPEN_EN: Source = {
  body: "Boullata JI, Carrera AL, Harvey L, et al. American Society for Parenteral and Enteral Nutrition",
  work: "ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN 41(1):15",
  year: 2017,
  url: "https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607116673053",
};
