import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s08. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "SIPC",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const SIEGEL: Source = {
  body: "Siegel JD, Rhinehart E, Jackson M, Chiarello L. Healthcare Infection Control Practices Advisory Committee",
  work: "2007 Guideline for Isolation Precautions: Preventing Transmission of Infectious Agents in Healthcare Settings",
  year: 2007,
};
export const TJC_NPG: Source = { body: "The Joint Commission", work: "National Performance Goals Effective January 2026 for the Hospital Program", year: 2026 };
export const ATA_I131: Source = {
  body: "Sisson JC, Freitas J, McDougall IR, et al. American Thyroid Association Taskforce on Radioiodine Safety",
  work: "Radiation Safety in the Treatment of Patients with Thyroid Diseases by Radioiodine 131I: Practice Recommendations. Thyroid 21(4):335",
  year: 2011,
};
export const ISMP_TMSBP: Source = { body: "Institute for Safe Medication Practices", work: "ISMP Targeted Medication Safety Best Practices for Hospitals", year: 2024 };
export const WATERS: Source = { body: "Waters TR", work: "When Is It Safe to Manually Lift a Patient? American Journal of Nursing 107(8):53", year: 2007 };
export const ANA_SPHM: Source = { body: "American Nurses Association", work: "Safe Patient Handling and Mobility: Interprofessional National Standards Across the Care Continuum, 2nd edition", year: 2021 };
export const CISA_BOMB: Source = { body: "Cybersecurity and Infrastructure Security Agency", work: "Bomb Threat Guidance", year: 2025 };
export const OSHA_EXT: Source = { body: "Occupational Safety and Health Administration", work: "Evacuation Plans and Procedures eTool: Portable Fire Extinguisher Use", year: 2024 };
export const CMS_RESTRAINT: Source = { body: "Centers for Medicare and Medicaid Services", work: "Condition of Participation: Patient's Rights, Restraint or Seclusion. 42 CFR 482.13(e)", year: 2024 };
export const AHRQ_REPORT: Source = { body: "Agency for Healthcare Research and Quality, Patient Safety Network", work: "Patient Safety Primer: Reporting Patient Safety Events", year: 2025 };
export const BOYCE: Source = {
  body: "Boyce JM, Pittet D. Healthcare Infection Control Practices Advisory Committee",
  work: "Guideline for Hand Hygiene in Health-Care Settings. MMWR Recommendations and Reports 51(RR-16)",
  year: 2002,
};
export const WHO_HH: Source = { body: "World Health Organization", work: "WHO Guidelines on Hand Hygiene in Health Care", year: 2009 };
export const CHEMM: Source = { body: "US Department of Health and Human Services, Chemical Hazards Emergency Medical Management", work: "Patient Decontamination Procedures", year: 2024 };
export const NFPA99: Source = { body: "National Fire Protection Association", work: "NFPA 99: Health Care Facilities Code", year: 2024 };
export const CDC_FLU_HC: Source = { body: "Centers for Disease Control and Prevention", work: "Infection Prevention and Control Strategies for Seasonal Influenza in Healthcare Settings", year: 2025 };
export const CDC_HCP: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Infection Control in Healthcare Personnel: Epidemiology and Control of Selected Infections Transmitted Among Healthcare Personnel and Patients",
  year: 2024,
};
export const CDC_MPOX: Source = { body: "Centers for Disease Control and Prevention", work: "Infection Prevention and Control in Healthcare Settings: Monkeypox", year: 2026 };
export const CDC_VZV: Source = { body: "Centers for Disease Control and Prevention", work: "Clinical Guidance for People at Risk for Severe Varicella", year: 2024 };
export const AAP_WINDOW: Source = {
  body: "American Academy of Pediatrics Committee on Injury and Poison Prevention",
  work: "Falls From Heights: Windows, Roofs, and Balconies. Pediatrics 107(5):1188",
  year: 2001,
};
export const USFA_ALARM: Source = { body: "US Fire Administration", work: "Smoke Alarms", year: 2024 };
export const CPSC_SCALD: Source = { body: "US Consumer Product Safety Commission", work: "Avoiding Tap Water Scalds, Publication 5098", year: 2012 };
export const OSHA_RESP: Source = { body: "Occupational Safety and Health Administration", work: "Respiratory Protection Standard, 29 CFR 1910.134, Appendix B-1: User Seal Check Procedures", year: 2011 };
export const POTTER: Source = { body: "Potter PA, Perry AG, Stockert PA, Hall AM", work: "Fundamentals of Nursing, 11th edition", year: 2022 };
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const STEADI: Source = { body: "Centers for Disease Control and Prevention, STEADI", work: "Check for Safety: A Home Fall Prevention Checklist for Older Adults", year: 2017 };
export const OSHA_WPV: Source = { body: "Occupational Safety and Health Administration", work: "Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers, OSHA 3148", year: 2016 };
export const KLOMPAS: Source = {
  body: "Klompas M, Branson R, Cawcutt K, et al. Society for Healthcare Epidemiology of America",
  work: "Strategies to Prevent Ventilator-Associated Pneumonia, Ventilator-Associated Events, and Nonventilator Hospital-Acquired Pneumonia in Acute-Care Hospitals: 2022 Update. Infection Control and Hospital Epidemiology 43(6):687",
  year: 2022,
};
export const HHS_SHOOTER: Source = {
  body: "US Department of Health and Human Services, Department of Homeland Security, Department of Justice, FBI and FEMA",
  work: "Incorporating Active Shooter Incident Planning into Health Care Facility Emergency Operations Plans",
  year: 2014,
};
export const FREIFELD: Source = {
  body: "Freifeld AG, Bow EJ, Sepkowitz KA, et al. Infectious Diseases Society of America",
  work: "Clinical Practice Guideline for the Use of Antimicrobial Agents in Neutropenic Patients with Cancer: 2010 Update. Clinical Infectious Diseases 52(4):e56",
  year: 2011,
};
export const USDA_TX: Source = { body: "US Department of Agriculture Food Safety and Inspection Service", work: "Food Safety for Transplant Recipients", year: 2006 };
export const GOULD: Source = {
  body: "Gould CV, Umscheid CA, Agarwal RK, Kuntz G, Pegues DA. Healthcare Infection Control Practices Advisory Committee",
  work: "Guideline for Prevention of Catheter-Associated Urinary Tract Infections",
  year: 2009,
};
export const EPA_HG: Source = { body: "US Environmental Protection Agency", work: "What to Do if a Mercury Thermometer Breaks", year: 2025 };
export const SHAKER: Source = {
  body: "Shaker MS, Wallace DV, Golden DBK, et al. Joint Task Force on Practice Parameters",
  work: "Anaphylaxis: A 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. Journal of Allergy and Clinical Immunology 145(4):1082",
  year: 2020,
};
export const BUSHBERG: Source = {
  body: "Bushberg JT, Seibert JA, Leidholdt EM, Boone JM",
  work: "The Essential Physics of Medical Imaging, 4th edition",
  year: 2020,
};
export const NRC_ALARA: Source = { body: "US Nuclear Regulatory Commission", work: "Minimize Your Exposure: Time, Distance and Shielding", year: 2024 };
