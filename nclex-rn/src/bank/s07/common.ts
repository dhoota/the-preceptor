import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s07. */
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
export const OGRADY: Source = {
  body: "O'Grady NP, Alexander M, Burns LA, et al. Healthcare Infection Control Practices Advisory Committee",
  work: "Guidelines for the Prevention of Intravascular Catheter-Related Infections",
  year: 2011,
};
export const GOULD: Source = {
  body: "Gould CV, Umscheid CA, Agarwal RK, Kuntz G, Pegues DA. Healthcare Infection Control Practices Advisory Committee",
  work: "Guideline for Prevention of Catheter-Associated Urinary Tract Infections",
  year: 2009,
};
export const WHO_HH: Source = { body: "World Health Organization", work: "WHO Guidelines on Hand Hygiene in Health Care", year: 2009 };
export const CDC_INJ: Source = { body: "Centers for Disease Control and Prevention", work: "Safe Injection Practices to Prevent Transmission of Infections to Patients", year: 2024 };
export const AAP_CPS: Source = {
  body: "Durbin DR, Hoffman BD. American Academy of Pediatrics Council on Injury, Violence, and Poison Prevention",
  work: "Child Passenger Safety. Pediatrics 142(5):e20182460",
  year: 2018,
};
export const AAP_DROWN: Source = {
  body: "Denny SA, Quan L, Gilchrist J, et al. American Academy of Pediatrics Council on Injury, Violence, and Poison Prevention",
  work: "Prevention of Drowning. Pediatrics 143(5):e20190850",
  year: 2019,
};
export const AAP_CHOKE: Source = {
  body: "American Academy of Pediatrics Committee on Injury, Violence, and Poison Prevention",
  work: "Prevention of Choking Among Children. Pediatrics 125(3):601",
  year: 2010,
};
export const AAP_FIREARM: Source = {
  body: "Lee LK, Fleegler EW, Goyal MK, et al. American Academy of Pediatrics Council on Injury, Violence, and Poison Prevention",
  work: "Firearm-Related Injuries and Deaths in Children and Youth: Injury Prevention and Harm Reduction. Pediatrics 150(6):e2022060070",
  year: 2022,
};
export const TJC_NPSG: Source = { body: "The Joint Commission", work: "National Performance Goals Effective January 2026 for the Hospital Program, NPG.08.01.01", year: 2026 };
export const ISMP_ABBR: Source = { body: "Institute for Safe Medication Practices", work: "ISMP List of Error-Prone Abbreviations, Symbols, and Dose Designations", year: 2021 };
export const ISMP_PUMP: Source = { body: "Institute for Safe Medication Practices", work: "Guidelines for Optimizing Safe Implementation and Use of Smart Infusion Pumps", year: 2020 };
export const TJC_SEA53: Source = { body: "The Joint Commission", work: "Sentinel Event Alert Issue 53: Managing Risk During Transition to New ISO Tubing Connector Standards", year: 2014 };
export const TJC_SEA68: Source = { body: "The Joint Commission", work: "Sentinel Event Alert Issue 68: Updated Surgical Fire Prevention for the 21st Century", year: 2023 };
export const CMS_RESTRAINT: Source = { body: "Centers for Medicare and Medicaid Services", work: "Condition of Participation: Patient's Rights, Restraint or Seclusion. 42 CFR 482.13(e)", year: 2024 };
export const FDA_BED: Source = { body: "US Food and Drug Administration", work: "Hospital Bed System Dimensional and Assessment Guidance to Reduce Entrapment: Guidance for Industry and FDA Staff", year: 2006 };
export const CDC_CO: Source = { body: "Centers for Disease Control and Prevention", work: "Carbon Monoxide Poisoning Basics", year: 2026 };
export const REMM: Source = { body: "US Department of Health and Human Services, Radiation Emergency Medical Management", work: "Procedures for Radiation Decontamination", year: 2026 };
export const CDC_FLU_LTC: Source = { body: "Centers for Disease Control and Prevention", work: "Interim Guidance for Influenza Outbreak Management in Long-Term Care and Post-Acute Care Facilities", year: 2024 };
export const CDC_CAURIS: Source = { body: "Centers for Disease Control and Prevention", work: "Infection Control Guidance: Candida auris", year: 2026 };
export const CDC_CRE: Source = { body: "Centers for Disease Control and Prevention", work: "Facility Guidance for Control of Carbapenem-resistant Enterobacteriaceae (CRE): November 2015 Update, CRE Toolkit", year: 2015 };
export const CPSC_SCALD: Source = { body: "US Consumer Product Safety Commission", work: "Avoiding Tap Water Scalds, Publication 5098", year: 2012 };
export const CDC_LEAD: Source = { body: "Centers for Disease Control and Prevention, Childhood Lead Poisoning Prevention Program", work: "Preventing Childhood Lead Poisoning", year: 2024 };
export const NCPC: Source = { body: "National Capital Poison Center", work: "Button Battery Ingestion Triage and Treatment Guideline", year: 2018 };
export const FDA_SHARPS: Source = { body: "US Food and Drug Administration", work: "Best Way to Get Rid of Used Needles and Other Sharps", year: 2023 };
export const AARC: Source = {
  body: "American Association for Respiratory Care. Restrepo RD, Brown JM, Hughes JM",
  work: "AARC Clinical Practice Guidelines: Endotracheal Suctioning of Mechanically Ventilated Patients With Artificial Airways 2010. Respiratory Care 55(6):758",
  year: 2010,
};
export const OSHA_BBP: Source = { body: "Occupational Safety and Health Administration", work: "Bloodborne Pathogens Standard, 29 CFR 1910.1030", year: 2001 };
export const ONS_HD: Source = { body: "Olsen MM, Walton AL, editors. Oncology Nursing Society", work: "Safe Handling of Hazardous Drugs, 4th edition", year: 2024 };
export const POTTER: Source = { body: "Potter PA, Perry AG, Stockert PA, Hall AM", work: "Fundamentals of Nursing, 11th edition", year: 2022 };
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
