import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s02. Management of Care. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "MOC",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const DELEGATION: Source = {
  body: "National Council of State Boards of Nursing and American Nurses Association",
  work: "National Guidelines for Nursing Delegation",
  year: 2019,
  url: "https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf",
};
export const POTTER: Source = { body: "Potter PA, Perry AG, Stockert PA, Hall AM", work: "Fundamentals of Nursing, 11th edition", year: 2023 };
export const YODER: Source = { body: "Yoder-Wise PS, Sportsman S", work: "Leading and Managing in Nursing, 8th edition", year: 2023 };
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
  url: "https://codeofethics.ana.org/home",
};
export const ANA_DOC: Source = {
  body: "American Nurses Association",
  work: "ANA's Principles for Nursing Documentation: Guidance for Registered Nurses",
  year: 2010,
  url: "https://www.nursingworld.org/globalassets/docs/ana/ethics/principles-of-nursing-documentation.pdf",
};
export const ASHP_DIVERSION: Source = {
  body: "American Society of Health-System Pharmacists",
  work: "ASHP Guidelines on Preventing Diversion of Controlled Substances. American Journal of Health-System Pharmacy 79(24):2279",
  year: 2022,
  url: "https://pubmed.ncbi.nlm.nih.gov/36208462/",
};
export const CHILD_REPORT: Source = {
  body: "Child Welfare Information Gateway, Children's Bureau",
  work: "Mandatory Reporting of Child Abuse and Neglect, State Statutes",
  year: 2023,
  url: "https://artifacts.childwelfare.gov/public/documents/mandatory-reporting-abuse-neglect.pdf",
};
export const ELDER_REPORT: Source = {
  body: "National Center on Elder Abuse and National Adult Protective Services Association",
  work: "Mandated Reporting of Abuse of Older Adults and Adults with Disabilities",
  year: 2024,
  url: "https://www.napsa-now.org/wp-content/uploads/2024/01/NCEA_NAPSA_MandatedReportBrief.pdf",
};
export const TJC_SENTINEL: Source = {
  body: "The Joint Commission",
  work: "Sentinel Event Policy and Procedures, Comprehensive Accreditation Manual for Hospitals",
  year: 2024,
  url: "https://www.jointcommission.org/en/knowledge-library/sentinel-events",
};
export const TJC_UP: Source = {
  body: "The Joint Commission",
  work: "National Performance Goals, Hospital Program, effective January 2026, NPG.01.06.03 Time-out before the procedure",
  year: 2026,
  url: "https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82",
};
export const MARX: Source = {
  body: "Marx D",
  work: "Patient Safety and the Just Culture: A Primer for Health Care Executives. Columbia University",
  year: 2001,
  url: "https://psnet.ahrq.gov/issue/patient-safety-and-just-culture-primer-health-care-executives",
};
export const HIPAA_ACCESS: Source = {
  body: "US Department of Health and Human Services, Office for Civil Rights",
  work: "Individuals' Right under HIPAA to Access their Health Information, 45 CFR 164.524",
  year: 2024,
  url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html",
};
export const HIPAA_DIRECTORY: Source = {
  body: "US Department of Health and Human Services",
  work: "45 CFR 164.510, Uses and disclosures requiring an opportunity for the individual to agree or to object",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.510",
};
export const HIPAA: Source = {
  body: "US Department of Health and Human Services, Office for Civil Rights",
  work: "Summary of the HIPAA Privacy Rule",
  year: 2003,
  url: "https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html",
};
export const EMTALA: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 489.24, Special responsibilities of Medicare hospitals in emergency cases",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-489/subpart-B/section-489.24",
};
export const RESIDENT_RIGHTS: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 483.10, Resident rights",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-483/subpart-B/section-483.10",
};
export const CLIENT_RIGHTS: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 482.13, Condition of participation: Patient's rights",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13",
};
export const RESEARCH_CONSENT: Source = {
  body: "US Department of Health and Human Services",
  work: "45 CFR 46.116, General requirements for informed consent",
  year: 2018,
  url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-A/section-46.116",
};
export const BEDSIDE: Source = {
  body: "Agency for Healthcare Research and Quality",
  work: "Guide to Patient and Family Engagement in Hospital Quality and Safety, Strategy 3: Nurse Bedside Shift Report",
  year: 2017,
  url: "https://www.ahrq.gov/patient-safety/patients-families/engagingfamilies/strategy3/index.html",
};
export const TEACHBACK: Source = {
  body: "Agency for Healthcare Research and Quality",
  work: "Health Literacy Universal Precautions Toolkit, 3rd edition",
  year: 2024,
  url: "https://www.ahrq.gov/health-literacy/improve/precautions/toolkit.html",
};
export const SAFER: Source = {
  body: "Office of the National Coordinator for Health Information Technology",
  work: "SAFER Guides: Contingency Planning",
  year: 2025,
  url: "https://www.healthit.gov/wp-content/uploads/2025/06/SAFER-Guide-2.-Contingency-Planning-Final.pdf",
};
export const CMSA: Source = {
  body: "Case Management Society of America",
  work: "Standards of Practice for Case Management, Revised 2022",
  year: 2022,
  url: "https://cmsa.org/about/standards-of-case-management-practice/",
};
export const SBAR: Source = {
  body: "Institute for Healthcare Improvement",
  work: "SBAR Tool: Situation-Background-Assessment-Recommendation",
  year: 2023,
  url: "https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation",
};
export const BEAUCHAMP: Source = { body: "Beauchamp TL, Childress JF", work: "Principles of Biomedical Ethics, 8th edition", year: 2019 };
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const STROKE: Source = {
  body: "Prabhakaran S, Gonzalez NR, et al. American Heart Association and American Stroke Association",
  work: "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke 57(8):e316",
  year: 2026,
  url: "https://pubmed.ncbi.nlm.nih.gov/41582814/",
};
export const ACOG_HTN: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Gestational Hypertension and Preeclampsia, Practice Bulletin 222. Obstetrics and Gynecology 135(6):e237",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32443079/",
};
export const LOWDERMILK: Source = {
  body: "Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE",
  work: "Maternity and Women's Health Care, 13th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/maternity-and-womens-health-care/lowdermilk/978-0-323-81018-0",
};
