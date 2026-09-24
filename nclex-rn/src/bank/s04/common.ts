import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s04. Management of Care. */
export const meta = (
  id: string,
  over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">,
): ItemMeta => ({
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
export const GUIDO: Source = { body: "Guido GW", work: "Legal and Ethical Issues in Nursing, 7th edition", year: 2020 };
export const ANA_CODE: Source = {
  body: "American Nurses Association",
  work: "Code of Ethics for Nurses with Interpretive Statements",
  year: 2025,
  url: "https://codeofethics.ana.org/provisions",
};
export const ANA_ASSIGN: Source = {
  body: "American Nurses Association",
  work: "Patient Safety: Rights of Registered Nurses When Considering a Patient Assignment. Position statement",
  year: 2009,
  url: "https://www.nursingworld.org/practice-policy/nursing-excellence/official-position-statements/id/patient-safety-rights-of-registered-nurses-when-considering-a-patient-assignment/",
};
export const TEAMSTEPPS: Source = {
  body: "Agency for Healthcare Research and Quality",
  work: "TeamSTEPPS 3.0 Pocket Guide",
  year: 2023,
  url: "https://www.ahrq.gov/teamstepps-program/resources/pocket-guide/index.html",
};
export const TJC_SEA40: Source = {
  body: "The Joint Commission",
  work: "Sentinel Event Alert 40: Behaviors That Undermine a Culture of Safety, updated",
  year: 2021,
  url: "https://www.jointcommission.org/en-us/knowledge-library/newsletters/sentinel-event-alert/issue-40",
};
export const AACN_4A: Source = {
  body: "American Association of Critical-Care Nurses, Ethics Work Group",
  work: "The 4A's to Rise Above Moral Distress",
  year: 2004,
};
export const BOUNDARIES: Source = {
  body: "National Council of State Boards of Nursing",
  work: "A Nurse's Guide to Professional Boundaries",
  year: 2018,
  url: "https://www.ncsbn.org/public-files/ProfessionalBoundaries_Complete.pdf",
};
export const NCSBN_SUD: Source = {
  body: "National Council of State Boards of Nursing",
  work: "A Nurse's Guide to Substance Use Disorder in Nursing",
  year: 2014,
  url: "https://www.ncsbn.org/public-files/SUD_Brochure_2014.pdf",
};
export const PSNET_REPORT: Source = {
  body: "Agency for Healthcare Research and Quality, Patient Safety Network",
  work: "Reporting Patient Safety Events. PSNet Primer",
  year: 2019,
  url: "https://psnet.ahrq.gov/primer/reporting-patient-safety-events",
};
export const MARX: Source = {
  body: "Marx D. Trustees of Columbia University",
  work: "Patient Safety and the Just Culture: A Primer for Health Care Executives",
  year: 2001,
};
export const FDA_MDR: Source = {
  body: "US Food and Drug Administration",
  work: "21 CFR Part 803, Medical Device Reporting, Subpart C: User Facility Reporting Requirements",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-803/subpart-C",
};
export const OSHA_WPV: Source = {
  body: "Occupational Safety and Health Administration",
  work: "Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers, OSHA 3148",
  year: 2016,
  url: "https://www.osha.gov/sites/default/files/publications/OSHA3148.pdf",
};
export const ADA_ANIMALS: Source = {
  body: "US Department of Justice, Civil Rights Division",
  work: "ADA Requirements: Service Animals",
  year: 2020,
  url: "https://www.ada.gov/resources/service-animals-2010-requirements/",
};
export const SAFE_HAVEN: Source = {
  body: "Child Welfare Information Gateway, Children's Bureau",
  work: "Infant Safe Haven Laws",
  year: 2026,
  url: "https://www.childwelfare.gov/resources/infant-safe-haven-laws/",
};
export const SAFE_PROTOCOL: Source = {
  body: "US Department of Justice, Office on Violence Against Women",
  work: "A National Protocol for Sexual Assault Medical Forensic Examinations: Adults and Adolescents, 3rd edition",
  year: 2024,
  url: "https://www.justice.gov/ovw/sexual-assault-medical-forensic-examination-safe-information",
};
export const NCEA_FLAGS: Source = {
  body: "National Center on Elder Abuse",
  work: "Red Flags of Abuse",
  year: 2021,
  url: "https://www.pacourts.us/Storage/media/pdfs/20210516/225550-ncea_redflagsea.pdf",
};
export const PLACEBO: Source = {
  body: "Arnstein P, Broglio K, Wuhrman E, Kean MB. American Society for Pain Management Nursing",
  work: "Use of Placebos in Pain Management. Pain Management Nursing 12(4):225",
  year: 2011,
  url: "https://pubmed.ncbi.nlm.nih.gov/22117754/",
};
export const CMS_IM: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 405.1205, Notifying beneficiaries of hospital discharge appeal rights",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-405/subpart-J/section-405.1205",
};
export const CDC_ISOLATION: Source = {
  body: "Siegel JD, Rhinehart E, Jackson M, Chiarello L. Healthcare Infection Control Practices Advisory Committee",
  work: "2007 Guideline for Isolation Precautions",
  year: 2007,
  url: "https://www.cdc.gov/niosh/docket/archive/pdfs/niosh-219/0219-010107-siegel.pdf",
};
