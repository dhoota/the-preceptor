import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s05. Management of Care. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "MOC",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const POTTER: Source = { body: "Potter PA, Perry AG, Stockert PA, Hall AM", work: "Fundamentals of Nursing, 11th edition", year: 2023 };
export const YODER: Source = { body: "Yoder-Wise PS, Sportsman S", work: "Leading and Managing in Nursing, 8th edition", year: 2023 };
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const LOWDERMILK: Source = {
  body: "Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE",
  work: "Maternity and Women's Health Care, 13th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/maternity-and-womens-health-care/lowdermilk/978-0-323-81018-0",
};
export const HALTER: Source = { body: "Halter MJ", work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition", year: 2022 };
export const LANGLEY: Source = {
  body: "Langley GJ, Moen RD, Nolan KM, Nolan TW, Norman CL, Provost LP",
  work: "The Improvement Guide: A Practical Approach to Enhancing Organizational Performance, 2nd edition",
  year: 2009,
};
export const IHI_MEASURES: Source = {
  body: "Institute for Healthcare Improvement",
  work: "How to Improve: Model for Improvement, Establishing Measures",
  year: 2024,
  url: "https://www.ihi.org/how-improve-model-improvement-establishing-measures",
};
export const IHI_TOOLKIT: Source = {
  body: "Institute for Healthcare Improvement",
  work: "Quality Improvement Essentials Toolkit",
  year: 2017,
  url: "https://www.ihi.org/library/tools/quality-improvement-essentials-toolkit",
};
export const RUN_CHART: Source = {
  body: "Perla RJ, Provost LP, Murray SK",
  work: "The Run Chart: A Simple Analytical Tool for Learning from Variation in Healthcare Processes. BMJ Quality and Safety 20(1):46",
  year: 2011,
  url: "https://pubmed.ncbi.nlm.nih.gov/21228075/",
};
export const RCA2: Source = {
  body: "National Patient Safety Foundation",
  work: "RCA2: Improving Root Cause Analyses and Actions to Prevent Harm",
  year: 2015,
  url: "https://www.ihi.org/library/tools/rca2-improving-root-cause-analyses-and-actions-prevent-harm",
};
export const ISMP_PUMPS: Source = {
  body: "Institute for Safe Medication Practices",
  work: "Guidelines for Optimizing Safe Implementation and Use of Smart Infusion Pumps",
  year: 2020,
  url: "https://www.ismp.org/system/files/resources/2020-10/ISMP176C-Smart%20Infusion%20Pumps-100620.pdf",
};
export const CLABSI: Source = {
  body: "O'Grady NP, Alexander M, Burns LA, et al. Healthcare Infection Control Practices Advisory Committee",
  work: "Guidelines for the Prevention of Intravascular Catheter-Related Infections, 2011",
  year: 2011,
  url: "https://www.cdc.gov/infection-control/media/pdfs/Guideline-BSI-H.pdf",
};
export const NHSN: Source = {
  body: "Centers for Disease Control and Prevention, National Healthcare Safety Network",
  work: "Patient Safety Component Manual, Chapter 4: Bloodstream Infection Event",
  year: 2025,
  url: "https://www.cdc.gov/nhsn/pdfs/pscmanual/4psc_clabscurrent.pdf",
};
export const HIPAA: Source = {
  body: "US Department of Health and Human Services, Office for Civil Rights",
  work: "Summary of the HIPAA Privacy Rule",
  year: 2003,
  url: "https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html",
};
export const HIPAA_MESSAGES: Source = {
  body: "US Department of Health and Human Services, Office for Civil Rights",
  work: "HIPAA FAQ 198: May health care providers leave messages for patients at their homes",
  year: 2002,
  url: "https://www.hhs.gov/hipaa/for-professionals/faq/198/may-health-care-providers-leave-messages/index.html",
};
export const HIPAA_MIN: Source = {
  body: "US Department of Health and Human Services, Office for Civil Rights",
  work: "Minimum Necessary Requirement, 45 CFR 164.502(b) and 164.514(d)",
  year: 2003,
  url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html",
};
export const HIPAA_DEID: Source = {
  body: "US Department of Health and Human Services, Office for Civil Rights",
  work: "Guidance Regarding Methods for De-identification of Protected Health Information in Accordance with the HIPAA Privacy Rule",
  year: 2012,
  url: "https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html",
};
export const HIPAA_ACCESS: Source = {
  body: "US Department of Health and Human Services, Office for Civil Rights",
  work: "Individuals' Right under HIPAA to Access their Health Information, 45 CFR 164.524",
  year: 2024,
  url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html",
};
export const HIPAA_DIRECTORY: Source = {
  body: "US Department of Health and Human Services",
  work: "45 CFR 164.510, Uses and disclosures requiring an opportunity for the individual to agree or to object, including facility directories and persons involved in care",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.510",
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
export const ANA_DOC: Source = {
  body: "American Nurses Association",
  work: "ANA's Principles for Nursing Documentation: Guidance for Registered Nurses",
  year: 2010,
  url: "https://www.nursingworld.org/globalassets/docs/ana/ethics/principles-of-nursing-documentation.pdf",
};
export const ANA_CODE: Source = {
  body: "American Nurses Association",
  work: "Code of Ethics for Nurses with Interpretive Statements",
  year: 2025,
  url: "https://codeofethics.ana.org/home",
};
export const SAFER_ID: Source = {
  body: "Office of the National Coordinator for Health Information Technology",
  work: "SAFER Guides: Patient Identification",
  year: 2025,
  url: "https://healthit.gov/wp-content/uploads/2025/01/Safer-Guide-6.-Patient-Identification-Final.pdf",
};
export const ALERT: Source = {
  body: "Agency for Healthcare Research and Quality, Patient Safety Network",
  work: "Alert Fatigue, PSNet Primer",
  year: 2024,
  url: "https://psnet.ahrq.gov/primer/alert-fatigue",
};
export const RRT: Source = {
  body: "Jones DA, DeVita MA, Bellomo R",
  work: "Rapid-Response Teams. New England Journal of Medicine 365(2):139",
  year: 2011,
  url: "https://www.nejm.org/doi/abs/10.1056/NEJMra0910926",
};
