import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s01. Management of Care. */
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
export const TEAMSTEPPS: Source = {
  body: "Agency for Healthcare Research and Quality",
  work: "TeamSTEPPS 3.0 Pocket Guide",
  year: 2023,
  url: "https://www.ahrq.gov/teamstepps-program/resources/pocket-guide/index.html",
};
export const SBAR: Source = {
  body: "Institute for Healthcare Improvement",
  work: "SBAR Tool: Situation-Background-Assessment-Recommendation",
  year: 2023,
  url: "https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation",
};
export const HIPAA: Source = {
  body: "US Department of Health and Human Services, Office for Civil Rights",
  work: "Summary of the HIPAA Privacy Rule",
  year: 2003,
  url: "https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html",
};
export const SOCIAL: Source = {
  body: "National Council of State Boards of Nursing",
  work: "A Nurse's Guide to the Use of Social Media",
  year: 2024,
  url: "https://www.ncsbn.org/public-files/NCSBN_SocialMedia.pdf",
};
export const PSDA: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 489.102, Advance directives: requirements for providers",
  year: 2019,
  url: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-489/subpart-I/section-489.102",
};
export const ORGAN: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 482.45, Condition of participation: Organ, tissue, and eye procurement",
  year: 2023,
  url: "https://www.law.cornell.edu/cfr/text/42/482.45",
};
export const LANGUAGE: Source = {
  body: "US Department of Health and Human Services",
  work: "45 CFR 92.201, Meaningful access for individuals with limited English proficiency",
  year: 2024,
  url: "https://www.law.cornell.edu/cfr/text/45/92.201",
};
export const APPELBAUM: Source = {
  body: "Appelbaum PS",
  work: "Assessment of Patients' Competence to Consent to Treatment. New England Journal of Medicine 357(18):1834",
  year: 2007,
  url: "https://www.nejm.org/doi/full/10.1056/NEJMcp074045",
};
export const GUTTMACHER: Source = {
  body: "Guttmacher Institute",
  work: "Minors' Access to STI Testing and Treatment, State Laws and Policies",
  year: 2024,
  url: "https://www.guttmacher.org/state-policy/explore/minors-access-sti-services",
};
export const RCA2: Source = {
  body: "National Patient Safety Foundation",
  work: "RCA2: Improving Root Cause Analyses and Actions to Prevent Harm",
  year: 2015,
  url: "https://www.ihi.org/library/tools/rca2-improving-root-cause-analyses-and-actions-prevent-harm",
};
export const SUD: Source = {
  body: "National Council of State Boards of Nursing",
  work: "Substance Use Disorder in Nursing: A Resource Manual and Guidelines for Alternative and Disciplinary Monitoring Programs",
  year: 2011,
  url: "https://www.ncsbn.org/nursing-regulation/practice/substance-use-disorder/substance-use-in-nursing.page",
};
export const TJC_NPG: Source = {
  body: "The Joint Commission",
  work: "National Performance Goals, Hospital Program, effective January 2026, NPG.01.01.01 Patient Identification",
  year: 2026,
  url: "https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82",
};
export const POLST: Source = {
  body: "National POLST",
  work: "National POLST Form: A Portable Medical Order, version 12.25",
  year: 2025,
  url: "https://polst.org/for-professionals/polst-form/",
};
export const LANGLEY: Source = {
  body: "Langley GJ, Moen RD, Nolan KM, Nolan TW, Norman CL, Provost LP",
  work: "The Improvement Guide: A Practical Approach to Enhancing Organizational Performance, 2nd edition",
  year: 2009,
};
export const VERBAL: Source = {
  body: "National Coordinating Council for Medication Error Reporting and Prevention",
  work: "Recommendations to Reduce Medication Errors Associated with Verbal Medication Orders and Prescriptions",
  year: 2015,
  url: "https://www.nccmerp.org/recommendations-reduce-medication-errors-associated-verbal-medication-orders-and-prescriptions",
};
export const CANDOR: Source = {
  body: "Agency for Healthcare Research and Quality",
  work: "Communication and Optimal Resolution (CANDOR) Toolkit",
  year: 2016,
  url: "https://www.ahrq.gov/patient-safety/settings/hospital/candor/modules.html",
};
export const RRT: Source = {
  body: "Jones DA, DeVita MA, Bellomo R",
  work: "Rapid-Response Teams. New England Journal of Medicine 365(2):139",
  year: 2011,
  url: "https://www.nejm.org/doi/abs/10.1056/NEJMra0910926",
};
export const NAYLOR: Source = {
  body: "Naylor MD, Brooten DA, Campbell RL, et al.",
  work: "Transitional Care of Older Adults Hospitalized with Heart Failure: A Randomized, Controlled Trial. Journal of the American Geriatrics Society 52(5):675",
  year: 2004,
  url: "https://pubmed.ncbi.nlm.nih.gov/15086645/",
};
export const CMSA: Source = {
  body: "Case Management Society of America",
  work: "Standards of Practice for Case Management, Revised 2022",
  year: 2022,
  url: "https://cmsa.org/about/standards-of-case-management-practice/",
};
export const BEAUCHAMP: Source = { body: "Beauchamp TL, Childress JF", work: "Principles of Biomedical Ethics, 8th edition", year: 2019 };
export const FALLS: Source = {
  body: "Ganz DA, Huang C, Saliba D, et al. Agency for Healthcare Research and Quality",
  work: "Preventing Falls in Hospitals: A Toolkit for Improving Quality of Care",
  year: 2013,
  url: "https://www.ahrq.gov/sites/default/files/publications/files/fallpxtoolkit_0.pdf",
};
export const AMA_DC: Source = {
  body: "Alfandre DJ",
  work: "I'm Going Home: Discharges Against Medical Advice. Mayo Clinic Proceedings 84(3):255",
  year: 2009,
  url: "https://pubmed.ncbi.nlm.nih.gov/19252113/",
};
export const WONG: Source = { body: "Hockenberry MJ, Duffy EA, Gibbs K", work: "Wong's Nursing Care of Infants and Children, 12th edition", year: 2023 };
export const DO_NOT_USE: Source = {
  body: "The Joint Commission",
  work: "Official Do Not Use List of Abbreviations, standard IM.02.02.01",
  year: 2010,
  url: "https://www.jointcommission.org/en-us/knowledge-library/support-center/standards-interpretation/do-not-use-list-of-abbreviations",
};
export const TJC_NPSG: Source = {
  body: "The Joint Commission",
  work: "National Performance Goals, Hospital Program, effective January 2026, NPG.14.05.01 Patient Medication Information",
  year: 2026,
  url: "https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82",
};
