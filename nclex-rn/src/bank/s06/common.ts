import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s06. */
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
export const BOYCE: Source = { body: "Boyce JM, Pittet D. Healthcare Infection Control Practices Advisory Committee", work: "Guideline for Hand Hygiene in Health-Care Settings. MMWR Recommendations and Reports 51(RR-16)", year: 2002 };
export const NOROVIRUS: Source = { body: "MacCannell T, Umscheid CA, Agarwal RK, et al. Healthcare Infection Control Practices Advisory Committee", work: "Guideline for the Prevention and Control of Norovirus Gastroenteritis Outbreaks in Healthcare Settings. Infect Control Hosp Epidemiol 32(10):939", year: 2011 };
export const PHS2001: Source = { body: "Centers for Disease Control and Prevention", work: "Updated US Public Health Service Guidelines for the Management of Occupational Exposures to HBV, HCV, and HIV. MMWR Recommendations and Reports 50(RR-11)", year: 2001 };
export const PEP2025: Source = { body: "Kofman AD, Struble KA, Heneine W, et al. US Public Health Service", work: "2025 Guidelines for the Management of Occupational Exposures to HIV and Recommendations for Post-exposure Prophylaxis. Infect Control Hosp Epidemiol 46(9):863", year: 2025 };
export const CMS_RESTRAINT: Source = { body: "Centers for Medicare and Medicaid Services", work: "Condition of Participation: Patient's Rights, Restraint or Seclusion. 42 CFR 482.13(e)", year: 2024 };
export const TJC_NPSG: Source = { body: "The Joint Commission", work: "National Patient Safety Goals Effective January 2026, Hospital Program", year: 2026 };
export const TJC_UP: Source = { body: "The Joint Commission", work: "Universal Protocol for Preventing Wrong Site, Wrong Procedure, and Wrong Person Surgery", year: 2004 };
export const POTTER: Source = { body: "Potter PA, Perry AG, Stockert PA, Hall AM", work: "Fundamentals of Nursing, 11th edition", year: 2022 };
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const GOULD: Source = { body: "Gould CV, Umscheid CA, Agarwal RK, Kuntz G, Pegues DA. Healthcare Infection Control Practices Advisory Committee", work: "Guideline for Prevention of Catheter-Associated Urinary Tract Infections", year: 2009 };
export const SSI: Source = { body: "Berrios-Torres SI, Umscheid CA, Bratzler DW, et al. Centers for Disease Control and Prevention", work: "Guideline for the Prevention of Surgical Site Infection, 2017. JAMA Surgery 152(8):784", year: 2017 };
export const VAP: Source = { body: "Klompas M, Branson R, Cawcutt K, et al. SHEA, IDSA, APIC, AHA and The Joint Commission", work: "Strategies to Prevent Ventilator-Associated Pneumonia, Ventilator-Associated Events, and Nonventilator Hospital-Acquired Pneumonia in Acute-Care Hospitals: 2022 Update. Infect Control Hosp Epidemiol 43(6):687", year: 2022 };
export const AHRQ_FALLS: Source = { body: "Ganz DA, Huang C, Saliba D, et al. Agency for Healthcare Research and Quality", work: "Preventing Falls in Hospitals: A Toolkit for Improving Quality of Care", year: 2013 };
export const STEADI: Source = { body: "Centers for Disease Control and Prevention, STEADI", work: "Check for Safety: A Home Fall Prevention Checklist for Older Adults", year: 2017 };
export const SAFE_SLEEP: Source = { body: "Moon RY, Carlin RF, Hand I. American Academy of Pediatrics Task Force on Sudden Infant Death Syndrome", work: "Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment. Pediatrics 150(1):e2022057990", year: 2022 };
export const OSHA_WPV: Source = { body: "Occupational Safety and Health Administration", work: "Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers, OSHA 3148", year: 2016 };
export const ONS_HD: Source = { body: "Olsen MM, Walton AL, editors. Oncology Nursing Society", work: "Safe Handling of Hazardous Drugs, 4th edition", year: 2024 };
export const NIOSH_HD: Source = { body: "National Institute for Occupational Safety and Health", work: "NIOSH List of Hazardous Drugs in Healthcare Settings, 2024. DHHS (NIOSH) Publication No. 2025-103", year: 2024 };
export const ACR_MR: Source = { body: "American College of Radiology Committee on MR Safety", work: "ACR Manual on MR Safety", year: 2024 };
export const NCMEC: Source = { body: "National Center for Missing and Exploited Children", work: "For Healthcare Professionals: Guidelines on Prevention of and Response to Infant Abductions, 9th edition", year: 2009 };
export const WATERS: Source = { body: "Waters TR", work: "When Is It Safe to Manually Lift a Patient? American Journal of Nursing 107(8):53", year: 2007 };
export const ANA_SPHM: Source = { body: "American Nurses Association", work: "Safe Patient Handling and Mobility: Interprofessional National Standards Across the Care Continuum, 2nd edition", year: 2021 };
export const START: Source = { body: "Benson M, Koenig KL, Schultz CH", work: "Disaster Triage: START, then SAVE. A New Method of Dynamic Triage for Victims of a Catastrophic Earthquake. Prehospital and Disaster Medicine 11(2):117", year: 1996 };
export const SEHULSTER: Source = { body: "Sehulster L, Chinn RYW. Healthcare Infection Control Practices Advisory Committee", work: "Guidelines for Environmental Infection Control in Health-Care Facilities. MMWR Recommendations and Reports 52(RR-10)", year: 2003 };
export const LATEX: Source = { body: "Blanco C", work: "Latex-Fruit Syndrome. Current Allergy and Asthma Reports 3(1):47", year: 2003 };
export const PERTUSSIS: Source = { body: "Kilgore PE, Salim AM, Zervos MJ, Schmitt HJ", work: "Pertussis: Microbiology, Disease, Treatment, and Prevention. Clinical Microbiology Reviews 29(3):449", year: 2016 };
export const IPECAC: Source = { body: "American Academy of Pediatrics Committee on Injury, Violence, and Poison Prevention", work: "Poison Treatment in the Home. Pediatrics 112(5):1182", year: 2003 };
export const ALARMS: Source = { body: "American Association of Critical-Care Nurses", work: "Practice Alert: Managing Alarms in Acute Care Across the Life Span, Electrocardiography and Pulse Oximetry. Critical Care Nurse 38(2):e16", year: 2018 };
export const HAZCOM: Source = { body: "Occupational Safety and Health Administration", work: "Hazard Communication Standard, 29 CFR 1910.1200", year: 2024 };
export const EYEWASH: Source = { body: "Occupational Safety and Health Administration", work: "Medical Services and First Aid, 29 CFR 1910.151(c), and interpretation on ANSI Z358.1 eyewash guidance", year: 2002 };
export const OSHA_BBP: Source = { body: "Occupational Safety and Health Administration", work: "Bloodborne Pathogens Standard, 29 CFR 1910.1030", year: 2001 };
export const CDC_PPE: Source = { body: "Centers for Disease Control and Prevention", work: "Sequence for Putting On and Removing Personal Protective Equipment (PPE), poster CS250672-E", year: 2014 };
export const CDC_SCABIES: Source = { body: "Centers for Disease Control and Prevention", work: "Public Health Strategies for Scabies Outbreaks in Institutional Settings", year: 2024 };
export const WHO_SURGERY: Source = { body: "World Health Organization", work: "WHO Guidelines for Safe Surgery 2009: Safe Surgery Saves Lives", year: 2009 };
