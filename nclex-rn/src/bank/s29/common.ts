import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s29. Management of Care in new settings. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "MOC",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const NGND: Source = {
  body: "National Council of State Boards of Nursing and American Nurses Association",
  work: "National Guidelines for Nursing Delegation",
  year: 2019,
  url: "https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf",
};
export const NASN_IHP: Source = {
  body: "National Association of School Nurses",
  work: "Individualized Healthcare Plans: Promoting Health and Learning for Students With Complex Needs, Position Statement",
  year: 2025,
  url: "https://nasn.org/ps-ihps",
};
export const NASN_SCOPE: Source = {
  body: "National Association of School Nurses",
  work: "School Nursing: Scope and Standards of Practice, 4th edition",
  year: 2022,
  url: "https://www.nasn.org/scope-standards",
};
export const ADA_SCHOOL: Source = {
  body: "Jackson CC, Albanese-O'Neill A, Butler KL, et al. American Diabetes Association",
  work: "Diabetes Care in the School Setting: A Position Statement of the American Diabetes Association. Diabetes Care 38(10):1958",
  year: 2015,
  url: "https://pubmed.ncbi.nlm.nih.gov/26404925/",
};
export const KUO: Source = {
  body: "Kuo DZ, Houtrow AJ. American Academy of Pediatrics Council on Children With Disabilities",
  work: "Recognition and Management of Medical Complexity. Pediatrics 138(6):e20163021",
  year: 2016,
  url: "https://pubmed.ncbi.nlm.nih.gov/27940731/",
};
export const NCCHC_JAILS: Source = {
  body: "National Commission on Correctional Health Care",
  work: "Standards for Health Services in Jails",
  year: 2018,
  url: "https://www.ncchc.org/receiving-screening/",
};
export const NCCHC_SEG: Source = {
  body: "National Commission on Correctional Health Care",
  work: "Spotlight on the Standards: Segregated Inmates",
  year: 2022,
  url: "https://www.ncchc.org/spotlight-on-the-standards/segregated-inmates/",
};
export const NCCHC_REFUSE: Source = {
  body: "National Commission on Correctional Health Care",
  work: "Spotlight on the Standards: Right to Refuse Treatment",
  year: 2022,
  url: "https://www.ncchc.org/right-to-refuse-treatment",
};
export const SIEGEL: Source = {
  body: "Siegel JD, Rhinehart E, Jackson M, Chiarello L. Healthcare Infection Control Practices Advisory Committee",
  work: "2007 Guideline for Isolation Precautions",
  year: 2007,
  url: "https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html",
};
export const ASAM_AWM: Source = {
  body: "American Society of Addiction Medicine",
  work: "The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. Journal of Addiction Medicine 14(3S Suppl 1):1",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32511109/",
};
export const CIWA: Source = {
  body: "Sullivan JT, Sykora K, Schneiderman J, Naranjo CA, Sellers EM",
  work: "Assessment of Alcohol Withdrawal: The Revised Clinical Institute Withdrawal Assessment for Alcohol Scale (CIWA-Ar). British Journal of Addiction 84(11):1353",
  year: 1989,
  url: "https://pubmed.ncbi.nlm.nih.gov/2597811/",
};
export const ESRD_STAFF: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 494.140, Condition: Personnel qualifications, and 42 CFR 494.180, Condition: Governance",
  year: 2024,
  url: "https://www.law.cornell.edu/cfr/text/42/494.180",
};
export const ESRD_EP: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 494.62, Condition for coverage: Emergency preparedness",
  year: 2024,
  url: "https://www.law.cornell.edu/cfr/text/42/494.62",
};
export const CDC_DIALYSIS: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Best Practices for Bloodstream Infection Prevention in Dialysis Settings: Core Interventions",
  year: 2024,
  url: "https://www.cdc.gov/dialysis-safety/hcp/clinical-safety/",
};
export const ASC_ASSESS: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 416.52, Condition for coverage: Patient admission, assessment and discharge",
  year: 2024,
  url: "https://www.law.cornell.edu/cfr/text/42/416.52",
};
export const ASC_TRANSFER: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 416.41, Condition for coverage: Governing body and management",
  year: 2024,
  url: "https://www.law.cornell.edu/cfr/text/42/416.41",
};
export const CHUNG: Source = {
  body: "Chung F, Chan VW, Ong D",
  work: "A Post-Anesthetic Discharge Scoring System for Home Readiness After Ambulatory Surgery. Journal of Clinical Anesthesia 7(6):500",
  year: 1995,
  url: "https://pubmed.ncbi.nlm.nih.gov/8534468/",
};
export const HOSPICE_IPU: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 418.110, Condition of participation: Hospices that provide inpatient care directly",
  year: 2024,
  url: "https://www.law.cornell.edu/cfr/text/42/418.110",
};
export const HOSPICE_AIDE: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 418.76, Condition of participation: Hospice aide and homemaker services",
  year: 2024,
  url: "https://www.law.cornell.edu/cfr/text/42/418.76",
};
export const OPO_CFR: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 482.45, Condition of participation: Organ, tissue, and eye procurement",
  year: 2023,
  url: "https://www.law.cornell.edu/cfr/text/42/482.45",
};
export const SOM_A: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "State Operations Manual, Appendix A: Survey Protocol, Regulations and Interpretive Guidelines for Hospitals, Rev. 248",
  year: 2026,
  url: "https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/downloads/som107ap_a_hospitals.pdf",
};
export const CAH_OPO: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 485.643, Condition of participation: Organ, tissue, and eye procurement (critical access hospitals)",
  year: 2024,
  url: "https://www.law.cornell.edu/cfr/text/42/485.643",
};
export const CAH_ER: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 485.618, Condition of participation: Emergency services (critical access hospitals)",
  year: 2024,
  url: "https://www.law.cornell.edu/cfr/text/42/485.618",
};
export const EMTALA: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 489.24, Special responsibilities of Medicare hospitals in emergency cases",
  year: 2024,
  url: "https://www.law.cornell.edu/cfr/text/42/489.24",
};
export const HICS: Source = {
  body: "California Emergency Medical Services Authority",
  work: "Hospital Incident Command System Guidebook, 5th edition",
  year: 2014,
  url: "https://asprtracie.hhs.gov/technical-resources/resource/2735/hospital-incident-command-system-hics-guidebook-fifth-edition-may-2014",
};
export const SAMHSA_CRISIS: Source = {
  body: "Substance Abuse and Mental Health Services Administration",
  work: "National Guidelines for Behavioral Health Crisis Care: Best Practice Toolkit",
  year: 2020,
  url: "https://www.samhsa.gov/sites/default/files/national-guidelines-for-behavioral-health-crisis-care-02242020.pdf",
};
export const BRIGGS: Source = {
  body: "Briggs JK",
  work: "Telephone Triage Protocols for Nurses, 6th edition",
  year: 2020,
  url: "https://shop.lww.com/Telephone-Triage-Protocols-for-Nurses/p/9781975136871",
};
export const WRIGHT: Source = {
  body: "Wright D",
  work: "The Ultimate Guide to Competency Assessment in Health Care, 4th edition",
  year: 2021,
  url: "https://chcm.com/product/the-ultimate-guide-to-competency-assessment-in-health-care-4th-edition/",
};
export const POWERS: Source = {
  body: "Powers WJ, Rabinstein AA, Ackerson T, et al. American Heart Association and American Stroke Association",
  work: "Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update. Stroke 50(12):e344",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31662037/",
};
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const HALTER: Source = {
  body: "Halter MJ",
  work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing: A Clinical Approach, 9th edition",
  year: 2022,
  url: "https://shop.elsevier.com/books/varcarolis-foundations-of-psychiatric-mental-health-nursing/halter/978-0-323-69707-1",
};
export const HOCKENBERRY: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs KD",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2024,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const YODER: Source = { body: "Yoder-Wise PS, Sportsman S", work: "Leading and Managing in Nursing, 8th edition", year: 2023 };
