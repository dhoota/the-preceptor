import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s03. Management of Care. */
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
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const HALTER: Source = { body: "Halter MJ", work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition", year: 2022 };
export const BEAUCHAMP: Source = { body: "Beauchamp TL, Childress JF", work: "Principles of Biomedical Ethics, 8th edition", year: 2019 };
export const MELNYK: Source = { body: "Melnyk BM, Fineout-Overholt E", work: "Evidence-Based Practice in Nursing and Healthcare: A Guide to Best Practice, 5th edition", year: 2023 };
export const GUIDO: Source = { body: "Guido GW", work: "Legal and Ethical Issues in Nursing, 7th edition", year: 2020 };
export const ANA_CODE: Source = {
  body: "American Nurses Association",
  work: "Code of Ethics for Nurses with Interpretive Statements",
  year: 2025,
  url: "https://codeofethics.ana.org/home",
};
export const ANA_FATIGUE: Source = {
  body: "American Nurses Association",
  work: "Addressing Nurse Fatigue to Promote Safety and Health: Joint Responsibilities of Registered Nurses and Employers to Reduce Risks",
  year: 2014,
  url: "https://www.nursingworld.org/practice-policy/nursing-excellence/official-position-statements/id/addressing-nurse-fatigue-to-promote-safety-and-health/",
};
export const CMS_RIGHTS: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 482.13, Condition of participation: Patient's rights",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13",
};
export const CMS_DISCHARGE: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 482.43, Condition of participation: Discharge planning",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-C/section-482.43",
};
export const CMS_HOSPICE: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 418.22, Certification of terminal illness",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-418/subpart-B/section-418.22",
};
export const HIPAA_LAW: Source = {
  body: "US Department of Health and Human Services",
  work: "45 CFR 164.512(f), Disclosures for law enforcement purposes",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.512",
};
export const HIPAA_AMEND: Source = {
  body: "US Department of Health and Human Services",
  work: "45 CFR 164.526, Amendment of protected health information",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.526",
};
export const HIPAA_SUMMARY: Source = {
  body: "US Department of Health and Human Services, Office for Civil Rights",
  work: "Summary of the HIPAA Privacy Rule",
  year: 2003,
  url: "https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html",
};
export const TELEHEALTH: Source = {
  body: "US Department of Health and Human Services, Office for Civil Rights",
  work: "Guidance on How the HIPAA Rules Permit Covered Health Care Providers and Health Plans to Use Remote Communication Technologies for Audio-Only Telehealth",
  year: 2022,
  url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-audio-telehealth/index.html",
};
export const ASA_DNR: Source = {
  body: "American Society of Anesthesiologists Committee on Ethics",
  work: "Ethical Guidelines for the Anesthesia Care of Patients with Do-Not-Resuscitate Orders or Other Directives that Limit Treatment",
  year: 2023,
  url: "https://www.asahq.org/standards-and-guidelines/ethical-guidelines-for-the-anesthesia-care-of-patients-with-do-not-resuscitate-orders-or-other-directives-that-limit-treatment",
};
export const IPASS: Source = {
  body: "Starmer AJ, Spector ND, Srivastava R, et al.",
  work: "Changes in Medical Errors after Implementation of a Handoff Program. New England Journal of Medicine 371(19):1803",
  year: 2014,
  url: "https://www.nejm.org/doi/full/10.1056/NEJMsa1405556",
};
export const AHIMA_COPY: Source = {
  body: "American Health Information Management Association",
  work: "Appropriate Use of the Copy and Paste Functionality in Electronic Health Records, position statement",
  year: 2014,
  url: "https://www.hcinnovationgroup.com/clinical-it/news/13022925/ahima-releases-statement-on-ehr-copy-and-paste",
};
export const ALERT: Source = {
  body: "Agency for Healthcare Research and Quality, Patient Safety Network",
  work: "Alert Fatigue, PSNet Primer",
  year: 2019,
  url: "https://psnet.ahrq.gov/primer/alert-fatigue",
};
export const NLC: Source = {
  body: "National Council of State Boards of Nursing",
  work: "Nurse Licensure Compact, Frequently Asked Questions",
  year: 2024,
  url: "https://www.nursecompact.com/FAQs.page",
};
export const FMEA: Source = {
  body: "Institute for Healthcare Improvement",
  work: "Failure Modes and Effects Analysis (FMEA) Tool",
  year: 2017,
  url: "https://www.ihi.org/library/tools/failure-modes-and-effects-analysis-fmea-tool",
};
export const CAUTI: Source = {
  body: "Gould CV, Umscheid CA, Agarwal RK, Kuntz G, Pegues DA. Healthcare Infection Control Practices Advisory Committee",
  work: "Guideline for Prevention of Catheter-Associated Urinary Tract Infections 2009",
  year: 2009,
  url: "https://www.cdc.gov/infection-control/media/pdfs/Guideline-CAUTI-H.pdf",
};
export const RED: Source = {
  body: "Agency for Healthcare Research and Quality",
  work: "Re-Engineered Discharge (RED) Toolkit, Tool 5: How To Conduct a Postdischarge Followup Phone Call",
  year: 2013,
  url: "https://www.ahrq.gov/patient-safety/settings/hospital/red/toolkit/redtool5.html",
};
export const MERP: Source = {
  body: "National Coordinating Council for Medication Error Reporting and Prevention",
  work: "NCC MERP Index for Categorizing Medication Errors, revised",
  year: 2022,
  url: "https://www.nccmerp.org/types-medication-errors",
};
export const TJC_NPG: Source = {
  body: "The Joint Commission",
  work: "National Performance Goals, Hospital Program, effective January 2026",
  year: 2026,
  url: "https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82",
};
export const SEPSIS: Source = {
  body: "Prescott H, Antonelli M, Alhazzani W, et al.",
  work: "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026. Critical Care Medicine, doi 10.1097/CCM.0000000000007075",
  year: 2026,
  url: "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026",
};
export const SOCIAL: Source = {
  body: "National Council of State Boards of Nursing",
  work: "A Nurse's Guide to the Use of Social Media",
  year: 2024,
  url: "https://www.ncsbn.org/brochures-and-posters/nurses-guide-to-the-use-of-socialmedia",
};
