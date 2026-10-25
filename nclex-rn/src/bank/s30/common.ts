import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s30. Management of Care and Safety and Infection Prevention and Control. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "need" | "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  canada: "",
  reviewed: true,
  version: 1,
  ...over,
});

export const NLC: Source = {
  body: "National Council of State Boards of Nursing",
  work: "Nurse Licensure Compact, Frequently Asked Questions",
  year: 2024,
  url: "https://www.nursecompact.com/FAQs.page",
};
export const VA_LICENSE: Source = {
  body: "US Department of Veterans Affairs",
  work: "VA Careers: Nurses",
  year: 2026,
  url: "https://www.vacareers.va.gov/careers/nurses/",
};
export const SCOPE_FRAMEWORK: Source = {
  body: "Ballard K, Haagenson D, Christiansen L, et al. National Council of State Boards of Nursing and Tri-Council for Nursing",
  work: "Scope of Nursing Practice Decision-Making Framework. Journal of Nursing Regulation 7(3):19",
  year: 2016,
  url: "https://www.ncsbn.org/decision-making-framework.htm",
};
export const GUIDO: Source = {
  body: "Guido GW",
  work: "Legal and Ethical Issues in Nursing, 7th edition",
  year: 2020,
  url: "https://www.pearson.com/en-us/subject-catalog/p/legal-ethical-issues-in-nursing/P200000001146/9780134701233",
};
export const ANA_CODE: Source = {
  body: "American Nurses Association",
  work: "Code of Ethics for Nurses with Interpretive Statements",
  year: 2025,
  url: "https://codeofethics.ana.org/provisions",
};
export const TJC_NPG: Source = {
  body: "The Joint Commission",
  work: "National Performance Goals Effective January 2026 for the Hospital Program",
  year: 2026,
  url: "https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82",
};
export const HIPAA: Source = {
  body: "US Department of Health and Human Services, Office for Civil Rights",
  work: "Summary of the HIPAA Privacy Rule",
  year: 2003,
  url: "https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html",
};
export const GINA: Source = {
  body: "National Human Genome Research Institute",
  work: "Genetic Discrimination",
  year: 2022,
  url: "https://www.genome.gov/about-genomics/policy-issues/Genetic-Discrimination",
};
export const AAP_GENETIC: Source = {
  body: "American Academy of Pediatrics Committee on Bioethics, Committee on Genetics, and American College of Medical Genetics and Genomics",
  work: "Ethical and Policy Issues in Genetic Testing and Screening of Children. Pediatrics 131(3):620",
  year: 2013,
  url: "https://pubmed.ncbi.nlm.nih.gov/23428972/",
};
export const CDC_MEASLES: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Clinical Overview of Measles",
  year: 2025,
  url: "https://www.cdc.gov/measles/hcp/clinical-overview/index.html",
};
export const NNDSS: Source = {
  body: "Centers for Disease Control and Prevention, National Notifiable Diseases Surveillance System",
  work: "2026 National Notifiable Conditions",
  year: 2026,
  url: "https://ndc.services.cdc.gov/search-results-year/",
};
export const ASHP_SHORTAGE: Source = {
  body: "Fox ER, McLaughlin MM. American Society of Health-System Pharmacists",
  work: "ASHP Guidelines on Managing Drug Product Shortages. American Journal of Health-System Pharmacy 75(21):1742",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/30061155/",
};
export const BEAUCHAMP: Source = { body: "Beauchamp TL, Childress JF", work: "Principles of Biomedical Ethics, 8th edition", year: 2019 };
export const POTTER: Source = {
  body: "Potter PA, Perry AG, Stockert PA, Hall AM",
  work: "Fundamentals of Nursing, 11th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0",
};
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const ASPEN_EN: Source = {
  body: "Boullata JI, Carrera AL, Harvey L, et al. American Society for Parenteral and Enteral Nutrition",
  work: "ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN Journal of Parenteral and Enteral Nutrition 41(1):15",
  year: 2017,
  url: "https://pubmed.ncbi.nlm.nih.gov/27815525/",
};
export const SCCM_ASPEN: Source = {
  body: "McClave SA, Taylor BE, Martindale RG, et al. Society of Critical Care Medicine and American Society for Parenteral and Enteral Nutrition",
  work: "Guidelines for the Provision and Assessment of Nutrition Support Therapy in the Adult Critically Ill Patient. JPEN Journal of Parenteral and Enteral Nutrition 40(2):159",
  year: 2016,
  url: "https://pubmed.ncbi.nlm.nih.gov/26773077/",
};
export const MALNUTRITION: Source = {
  body: "White JV, Guenter P, Jensen G, Malone A, Schofield M. Academy of Nutrition and Dietetics and American Society for Parenteral and Enteral Nutrition",
  work: "Consensus Statement: Characteristics Recommended for the Identification and Documentation of Adult Malnutrition (Undernutrition). JPEN Journal of Parenteral and Enteral Nutrition 36(3):275",
  year: 2012,
  url: "https://pubmed.ncbi.nlm.nih.gov/22535923/",
};
export const ABC_TRIAL: Source = {
  body: "Girard TD, Kress JP, Fuchs BD, et al.",
  work: "Efficacy and Safety of a Paired Sedation and Ventilator Weaning Protocol for Mechanically Ventilated Patients in Intensive Care (Awakening and Breathing Controlled Trial). Lancet 371(9607):126",
  year: 2008,
  url: "https://pubmed.ncbi.nlm.nih.gov/18191684/",
};
export const ABCDEF: Source = {
  body: "Pun BT, Balas MC, Barnes-Daly MA, et al.",
  work: "Caring for Critically Ill Patients with the ABCDEF Bundle: Results of the ICU Liberation Collaborative in Over 15,000 Adults. Critical Care Medicine 47(1):3",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/30339549/",
};
export const NPIAP: Source = {
  body: "European Pressure Ulcer Advisory Panel, National Pressure Injury Advisory Panel, Pan Pacific Pressure Injury Alliance",
  work: "Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline, The International Guideline, 3rd edition",
  year: 2019,
  url: "https://internationalguideline.com/2019",
};
export const CLAS: Source = {
  body: "US Department of Health and Human Services, Office of Minority Health",
  work: "National Standards for Culturally and Linguistically Appropriate Services in Health and Health Care",
  year: 2013,
  url: "https://www.federalregister.gov/documents/2013/09/24/2013-23164/national-standards-for-culturally-and-linguistically-appropriate-services-clas-in-health-and-health",
};
export const NCMEC: Source = {
  body: "National Center for Missing and Exploited Children",
  work: "For Health Care Professionals: Guidelines on Prevention of and Response to Infant Abductions, 10th edition",
  year: 2014,
  url: "https://www.missingkids.org/content/dam/missingkids/pdfs/ForHealthCareProfessionals_10thEdition.pdf",
};
export const MR_ZONES: Source = {
  body: "Gilk T, Kanal E",
  work: "Interrelating Sentinel Event Alert 38 With the ACR Guidance Document on MR Safe Practices: 2013. An MRI Accreditation Safety Review Tool. Journal of Magnetic Resonance Imaging 37(3):531",
  year: 2013,
};
export const ACR_MR_2013: Source = {
  body: "Kanal E, Barkovich AJ, Bell C, et al. ACR Blue Ribbon Panel on MR Safety",
  work: "ACR Guidance Document on MR Safe Practices: 2013. Journal of Magnetic Resonance Imaging 37(3):501",
  year: 2013,
  url: "https://pubmed.ncbi.nlm.nih.gov/23345200/",
};
export const ACR_MR_2019: Source = {
  body: "Greenberg TD, Hoff MN, Gilk TB, et al. ACR Committee on MR Safety",
  work: "ACR Guidance Document on MR Safe Practices: Updates and Critical Information 2019. Journal of Magnetic Resonance Imaging 51(2):331",
  year: 2020,
  url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jmri.26880",
};
export const LASER: Source = {
  body: "Laser Institute of America",
  work: "American National Standard for Safe Use of Lasers in Health Care, ANSI Z136.3-2018",
  year: 2018,
  url: "https://lia.org/store/ansi-z1363-2018-safe-use-lasers-health-care",
};
export const ANA_SPHM: Source = {
  body: "American Nurses Association",
  work: "Safe Patient Handling and Mobility: Interprofessional National Standards Across the Care Continuum, 2nd edition",
  year: 2021,
};
export const WATERS: Source = {
  body: "Waters TR",
  work: "When Is It Safe to Manually Lift a Patient? American Journal of Nursing 107(8):53",
  year: 2007,
  url: "https://stacks.cdc.gov/view/cdc/186586",
};
export const ASCIA_LATEX: Source = {
  body: "Australasian Society of Clinical Immunology and Allergy",
  work: "ASCIA Guidelines for Hospital Management of Latex Allergic Patients",
  year: 2010,
  url: "https://allergy.org.au/hp/papers/management-of-latex-allergic-patients/hospital-management",
};
export const CNO_INL: Source = {
  body: "College of Nurses of Ontario",
  work: "Interjurisdictional Nurse Licensure (INL): Registering in More than One Jurisdiction",
  year: 2026,
  url: "https://www.cno.org/maintain-your-membership/interjurisdictional-nurse-licensure",
};
export const PHAC_NND: Source = {
  body: "Public Health Agency of Canada",
  work: "Notifiable Diseases Online: Canadian Notifiable Disease Surveillance System",
  year: 2026,
  url: "https://diseases.canada.ca/notifiable/",
};
export const GNDA: Source = {
  body: "Parliament of Canada",
  work: "Genetic Non-Discrimination Act, S.C. 2017, c. 3",
  year: 2017,
  url: "https://laws-lois.justice.gc.ca/eng/acts/g-2.5/page-1.html",
};
export const OPC_HEALTH: Source = {
  body: "Office of the Privacy Commissioner of Canada",
  work: "Provincial Laws That May Apply Instead of PIPEDA",
  year: 2020,
  url: "https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/r_o_p/prov-pipeda/",
};
export const ON_HCCA: Source = {
  body: "Government of Ontario",
  work: "Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A, section 20",
  year: 1996,
  url: "https://www.ontario.ca/laws/statute/96h02",
};
export const CNA_CODE: Source = {
  body: "Canadian Nurses Association",
  work: "Code of Ethics for Nurses",
  year: 2025,
  url: "https://www.cna-aiic.ca/en/blogs/cn-content/2025/07/14/cna-releases-revamped-coe-for-nurses",
};
