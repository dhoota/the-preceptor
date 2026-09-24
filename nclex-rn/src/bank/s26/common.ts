import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s26. Safety and infection control, lab values and two dosage calculations. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "need" | "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const ISOLATION: Source = {
  body: "Siegel JD, Rhinehart E, Jackson M, Chiarello L. Healthcare Infection Control Practices Advisory Committee",
  work: "2007 Guideline for Isolation Precautions: Preventing Transmission of Infectious Agents in Healthcare Settings",
  year: 2007,
  url: "https://www.cdc.gov/infection-control/hcp/isolation-precautions/precautions.html",
};
export const HAND_HYGIENE: Source = {
  body: "Boyce JM, Pittet D. Healthcare Infection Control Practices Advisory Committee and HICPAC/SHEA/APIC/IDSA Hand Hygiene Task Force",
  work: "Guideline for Hand Hygiene in Health-Care Settings. MMWR Recommendations and Reports 51(RR-16):1",
  year: 2002,
  url: "https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5116a1.htm",
};
export const WHO_HH: Source = {
  body: "World Health Organization",
  work: "WHO Guidelines on Hand Hygiene in Health Care",
  year: 2009,
  url: "https://www.ncbi.nlm.nih.gov/books/NBK144013/",
};
export const DISINFECTION: Source = {
  body: "Rutala WA, Weber DJ. Healthcare Infection Control Practices Advisory Committee",
  work: "Guideline for Disinfection and Sterilization in Healthcare Facilities, 2008",
  year: 2008,
  url: "https://www.cdc.gov/infection-control/media/pdfs/guideline-disinfection-h.pdf",
};
export const SSI: Source = {
  body: "Berrios-Torres SI, Umscheid CA, Bratzler DW, et al. Healthcare Infection Control Practices Advisory Committee",
  work: "Centers for Disease Control and Prevention Guideline for the Prevention of Surgical Site Infection, 2017. JAMA Surgery 152(8):784",
  year: 2017,
  url: "https://jamanetwork.com/journals/jamasurgery/fullarticle/2623725",
};
export const AORN: Source = {
  body: "Association of periOperative Registered Nurses",
  work: "Guideline for Sterile Technique. Guidelines for Perioperative Practice, 2025 edition",
  year: 2025,
  url: "https://www.aorn.org/about-aorn/aorn-newsroom/periop-today-newsletter/periop-today-newsletter/aorn-guideline-in-focus--sterile-technique-in-the-or",
};
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
  url: "https://www.amazon.com/Brunner-Suddarths-Textbook-Medical-Surgical-Nursing/dp/1975161033",
};
export const LEHNE: Source = {
  body: "Burchum JR, Rosenthal LD",
  work: "Lehne's Pharmacology for Nursing Care, 11th edition",
  year: 2022,
  url: "https://shop.elsevier.com/books/lehnes-pharmacology-for-nursing-care/burchum/978-0-323-82522-1",
};
export const ASHP_HD: Source = {
  body: "Power LA, Coyne JW. American Society of Health-System Pharmacists",
  work: "ASHP Guidelines on Handling Hazardous Drugs. American Journal of Health-System Pharmacy 75(24):1996",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/30327293/",
};
export const NIOSH_ALERT: Source = {
  body: "National Institute for Occupational Safety and Health",
  work: "NIOSH Alert: Preventing Occupational Exposures to Antineoplastic and Other Hazardous Drugs in Health Care Settings. DHHS (NIOSH) Publication 2004-165",
  year: 2004,
  url: "https://www.cdc.gov/niosh/docs/2004-165/default.html",
};
export const NIOSH_LIST: Source = {
  body: "Ovesen JL, Sammons D, Connor TH, et al. National Institute for Occupational Safety and Health",
  work: "NIOSH List of Hazardous Drugs in Healthcare Settings, 2024. DHHS (NIOSH) Publication 2025-103",
  year: 2024,
  url: "https://www.cdc.gov/niosh/publications/hcp/numbered/2025-103.html",
};
export const ASCO_HD: Source = {
  body: "Celano P, Kennedy EB, Miller TM, et al. American Society of Clinical Oncology",
  work: "Safe Handling of Hazardous Drugs: ASCO Standards. Journal of Clinical Oncology 37(7):598",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/30620670/",
};
export const HIV_PEP: Source = {
  body: "Kofman AD, Struble KA, Heneine W, et al. US Public Health Service",
  work: "2025 US Public Health Service Guidelines for the Management of Occupational Exposures to Human Immunodeficiency Virus and Recommendations for Post-exposure Prophylaxis in Healthcare Settings. Infection Control and Hospital Epidemiology 46(9):863",
  year: 2025,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12616222/",
};
export const NIOSH_BBP: Source = {
  body: "National Institute for Occupational Safety and Health",
  work: "Bloodborne Infectious Disease Risk Factors. Healthcare Workers",
  year: 2025,
  url: "https://www.cdc.gov/niosh/healthcare/risk-factors/bloodborne-infectious-diseases.html",
};
export const HEPB: Source = {
  body: "Schillie S, Vellozzi C, Reingold A, et al. Advisory Committee on Immunization Practices",
  work: "Prevention of Hepatitis B Virus Infection in the United States. MMWR Recommendations and Reports 67(RR-1):1",
  year: 2018,
  url: "https://www.cdc.gov/mmwr/volumes/67/rr/rr6701a1.htm",
};
export const OSHA_BBP: Source = {
  body: "Occupational Safety and Health Administration",
  work: "Bloodborne Pathogens Standard, 29 CFR 1910.1030",
  year: 2001,
  url: "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1910/section-1910.1030",
};
export const OSHA_HCS: Source = {
  body: "Occupational Safety and Health Administration",
  work: "Hazard Communication Standard, 29 CFR 1910.1200",
  year: 2024,
  url: "https://www.osha.gov/laws-regs/standardinterpretations/2017-06-20",
};
export const OSHA_GLUT: Source = {
  body: "Occupational Safety and Health Administration",
  work: "Best Practices for the Safe Use of Glutaraldehyde in Health Care. OSHA 3258-08N",
  year: 2006,
  url: "https://www.osha.gov/sites/default/files/publications/GLUTARALDEHYDE.pdf",
};
export const NFPA99: Source = {
  body: "National Fire Protection Association",
  work: "NFPA 99: Health Care Facilities Code, 2024 edition",
  year: 2024,
  url: "https://www.nfpa.org/product/nfpa-99-handbook/p0099hb/nfpa-99-health-care-facilities-code-handbook-2024/99hb24",
};
export const GLUCOSE_METER: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Considerations for Blood Glucose Monitoring and Insulin Administration. Injection Safety",
  year: 2024,
  url: "https://www.cdc.gov/injection-safety/hcp/infection-control/index.html",
};
export const CAUTI: Source = {
  body: "Gould CV, Umscheid CA, Agarwal RK, Kuntz G, Pegues DA. Healthcare Infection Control Practices Advisory Committee",
  work: "Guideline for Prevention of Catheter-Associated Urinary Tract Infections",
  year: 2009,
  url: "https://www.cdc.gov/infection-control/hcp/cauti/evidence-review.html",
};
export const ADA_DX: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S27",
  year: 2026,
  url: "https://pubmed.ncbi.nlm.nih.gov/41358893/",
};
export const HYPERGLYCEMIC_CRISES: Source = {
  body: "Umpierrez GE, et al. American Diabetes Association and partner societies",
  work: "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care 47(8):1257",
  year: 2024,
  url: "https://diabetesjournals.org/care/article/47/8/1257/156808/Hyperglycemic-Crises-in-Adults-With-Diabetes-A",
};
export const TLS: Source = {
  body: "Howard SC, Jones DP, Pui CH",
  work: "The Tumor Lysis Syndrome. New England Journal of Medicine 364(19):1844",
  year: 2011,
  url: "https://www.nejm.org/doi/full/10.1056/NEJMra0904569",
};
export const HIT: Source = {
  body: "Cuker A, Arepally GM, Chong BH, et al. American Society of Hematology",
  work: "American Society of Hematology 2018 Guidelines for Management of Venous Thromboembolism: Heparin-Induced Thrombocytopenia. Blood Advances 2(22):3360",
  year: 2018,
  url: "https://ashpublications.org/bloodadvances/article/2/22/3360/16129/American-Society-of-Hematology-2018-guidelines-for",
};
export const REFEEDING: Source = {
  body: "da Silva JSV, et al. American Society for Parenteral and Enteral Nutrition",
  work: "ASPEN Consensus Recommendations for Refeeding Syndrome. Nutrition in Clinical Practice 35(2):178",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32115791/",
};
export const THYROID: Source = {
  body: "Jonklaas J, Bianco AC, Bauer AJ, et al. American Thyroid Association",
  work: "Guidelines for the Treatment of Hypothyroidism. Thyroid 24(12):1670",
  year: 2014,
  url: "https://www.liebertpub.com/doi/abs/10.1089/thy.2014.0028",
};
export const CEFTRIAXONE: Source = {
  body: "Sandoz Inc.",
  work: "Ceftriaxone for Injection, USP. Prescribing information",
  year: 2014,
  url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/065169s022lbl.pdf",
};
export const PANCREATITIS: Source = {
  body: "Tenner S, et al. American College of Gastroenterology",
  work: "American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. American Journal of Gastroenterology 119(3):419",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/38857482/",
};
export const HYPERCALCEMIA: Source = {
  body: "El-Hajj Fuleihan G, Clines GA, Hu MI, et al. Endocrine Society",
  work: "Treatment of Hypercalcemia of Malignancy in Adults: An Endocrine Society Clinical Practice Guideline. Journal of Clinical Endocrinology and Metabolism 108(3):507",
  year: 2023,
  url: "https://pubmed.ncbi.nlm.nih.gov/36545746/",
};
export const OSHA_PICTO: Source = {
  body: "Occupational Safety and Health Administration",
  work: "Hazard Communication Standard Pictogram QuickCard. OSHA 3491",
  year: 2024,
  url: "https://www.osha.gov/sites/default/files/publications/OSHA3491QuickCardPictogram.pdf",
};
export const SEPSIS: Source = {
  body: "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign",
  work: "International Guidelines for Management of Sepsis and Septic Shock 2021. Critical Care Medicine 49(11):e1063",
  year: 2021,
  url: "https://journals.lww.com/ccmjournal/fulltext/10.1097/ccm.0000000000005337",
};
export const NIOSH_2016: Source = {
  body: "Connor TH, MacKenzie BA, DeBord DG, Trout DB, O'Callaghan JP. National Institute for Occupational Safety and Health",
  work: "NIOSH List of Antineoplastic and Other Hazardous Drugs in Healthcare Settings, 2016. DHHS (NIOSH) Publication 2016-161",
  year: 2016,
  url: "https://stacks.cdc.gov/view/cdc/41372",
};
export const CDC_EXPOSURE: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Best Practices for Occupational Exposure to Blood. Dental Infection Prevention and Control",
  year: 2023,
  url: "https://www.cdc.gov/dental-infection-control/hcp/dental-ipc-faqs/occupational-exposure.html",
};
export const KDIGO: Source = {
  body: "Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group",
  work: "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney International Supplements 2(1):1",
  year: 2012,
  url: "https://kdigo.org/guidelines/acute-kidney-injury/",
};
