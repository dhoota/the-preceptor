import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s31. Safety and Infection Prevention and Control. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "need" | "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  canada: "",
  reviewed: true,
  version: 1,
  ...over,
});

export const VHF_PPE: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "PPE: Confirmed Patients and Clinically Unstable Patients Suspected to Have VHF (Donning and Doffing PPE During Management of Patients With Selected VHF in US Hospitals)",
  year: 2024,
  url: "https://www.cdc.gov/viral-hemorrhagic-fevers/hcp/guidance/ppe-clinically-unstable.html",
};
export const VHF_III: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Identify, Isolate, Inform: Emergency Department Evaluation and Management of Patients With Possible Ebola Virus Disease",
  year: 2014,
  url: "https://stacks.cdc.gov/view/cdc/25741",
};
export const SIEGEL: Source = {
  body: "Siegel JD, Rhinehart E, Jackson M, Chiarello L. Healthcare Infection Control Practices Advisory Committee",
  work: "2007 Guideline for Isolation Precautions, Appendix A: Type and Duration of Precautions Recommended for Selected Infections and Conditions",
  year: 2007,
  url: "https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html",
};
export const HCP_PERTUSSIS: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Infection Control in Healthcare Personnel: Epidemiology and Control of Selected Infections Transmitted Among Healthcare Personnel and Patients, Pertussis",
  year: 2024,
  url: "https://www.cdc.gov/infection-control/hcp/healthcare-personnel-epidemiology-control/pertussis.html",
};
export const HCP_MEASLES: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Infection Control in Healthcare Personnel: Epidemiology and Control of Selected Infections Transmitted Among Healthcare Personnel and Patients, Measles",
  year: 2024,
  url: "https://www.cdc.gov/infection-control/hcp/healthcare-personnel-epidemiology-control/measles.html",
};
export const MMR: Source = {
  body: "McLean HQ, Fiebelkorn AP, Temte JL, Wallace GS. Advisory Committee on Immunization Practices",
  work: "Prevention of Measles, Rubella, Congenital Rubella Syndrome, and Mumps, 2013. MMWR Recommendations and Reports 62(RR-4):1",
  year: 2013,
  url: "https://www.cdc.gov/mmwr/preview/mmwrhtml/rr6204a1.htm",
};
export const SOSA: Source = {
  body: "Sosa LE, Njie GJ, Lobato MN, et al. National Tuberculosis Controllers Association and CDC",
  work: "Tuberculosis Screening, Testing, and Treatment of U.S. Health Care Personnel: Recommendations From the National Tuberculosis Controllers Association and CDC, 2019. MMWR 68(19):439",
  year: 2019,
  url: "https://www.cdc.gov/mmwr/volumes/68/wr/mm6819a3.htm",
};
export const CDC_TST: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Clinical Testing Guidance for Tuberculosis: Tuberculin Skin Test",
  year: 2025,
  url: "https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html",
};
export const LEWINSOHN: Source = {
  body: "Lewinsohn DM, Leonard MK, LoBue PA, et al. American Thoracic Society, Infectious Diseases Society of America and CDC",
  work: "Official ATS/IDSA/CDC Clinical Practice Guidelines: Diagnosis of Tuberculosis in Adults and Children. Clinical Infectious Diseases 64(2):111",
  year: 2017,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5504475/",
};
export const HEPA_ACIP: Source = {
  body: "Nelson NP, Weng MK, Hofmeister MG, et al. Advisory Committee on Immunization Practices",
  work: "Prevention of Hepatitis A Virus Infection in the United States: Recommendations of the ACIP, 2020. MMWR Recommendations and Reports 69(5):1",
  year: 2020,
  url: "https://www.cdc.gov/mmwr/volumes/69/rr/rr6905a1.htm",
};
export const FOOD_CODE: Source = {
  body: "US Food and Drug Administration",
  work: "Food Code 2022, Sections 2-201.12 and 2-201.13: Exclusions, Restrictions and Reinstatement of Food Employees",
  year: 2022,
  url: "https://www.fda.gov/food/fda-food-code/food-code-2022",
};
export const LEG_CLIN: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Clinical Overview of Legionnaires' Disease",
  year: 2025,
  url: "https://www.cdc.gov/legionella/hcp/clinical-overview/index.html",
};
export const LEG_WATER: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Legionella Control Toolkit: Controlling Legionella in Potable Water Systems",
  year: 2025,
  url: "https://www.cdc.gov/control-legionella/php/toolkit/potable-water-systems-module.html",
};
export const TABLAN: Source = {
  body: "Tablan OC, Anderson LJ, Besser R, Bridges C, Hajjeh R. CDC and the Healthcare Infection Control Practices Advisory Committee",
  work: "Guidelines for Preventing Health-Care-Associated Pneumonia, 2003. MMWR Recommendations and Reports 53(RR-3):1",
  year: 2004,
  url: "https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5303a1.htm",
};
export const ENDO_POLICY: Source = {
  body: "Healthcare Infection Control Practices Advisory Committee",
  work: "HICPAC Sample Policy Template: Reprocessing Flexible Endoscopes",
  year: 2024,
  url: "https://stacks.cdc.gov/view/cdc/182185",
};
export const DISINFECTION: Source = {
  body: "Rutala WA, Weber DJ. Healthcare Infection Control Practices Advisory Committee",
  work: "Guideline for Disinfection and Sterilization in Healthcare Facilities, 2008",
  year: 2008,
  url: "https://www.cdc.gov/infection-control/hcp/disinfection-sterilization/sterilizing-practices.html",
};
export const ISPD: Source = {
  body: "Chow KM, Li PKT, Cho Y, et al. International Society for Peritoneal Dialysis",
  work: "ISPD Catheter-related Infection Recommendations: 2023 Update. Peritoneal Dialysis International 43(3):201",
  year: 2023,
  url: "https://doi.org/10.1177/08968608231172740",
};
export const PD_CARD: Source = {
  body: "Fresenius Medical Care",
  work: "Peritoneal Dialysis (PD) Catheter and Exit Site Care",
  year: 2025,
  url: "https://freseniusmedicalcare.com/content/dam/home-products-education/steps2home-pd/PD_Catheter_Exit_Site_Care.pdf",
};
export const EPI: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Principles of Epidemiology in Public Health Practice, 3rd edition, Lesson 6: Investigating an Outbreak",
  year: 2012,
  url: "https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/lesson6/section2.html",
};
export const IDC: Source = {
  body: "Institute for Safe Medication Practices Canada",
  work: "Lowering the Risk of Medication Errors: Independent Double Checks. ISMP Canada Safety Bulletin 5(1)",
  year: 2005,
  url: "https://ismpcanada.ca/wp-content/uploads/ISMPCSB2005-01.pdf",
};
export const ISMP_HIGH: Source = {
  body: "Institute for Safe Medication Practices",
  work: "ISMP List of High-Alert Medications in Acute Care Settings",
  year: 2024,
  url: "https://home.ecri.org/blogs/ismp-resources/high-alert-medications-in-acute-care-settings",
};
export const ISMP_PUMP: Source = {
  body: "Institute for Safe Medication Practices",
  work: "Guidelines for Optimizing Safe Implementation and Use of Smart Infusion Pumps",
  year: 2020,
  url: "https://www.ismp.org/system/files/resources/2020-10/ISMP176C-Smart%20Infusion%20Pumps-100620.pdf",
};
export const TALL_MAN: Source = {
  body: "US Food and Drug Administration",
  work: "FDA Name Differentiation Project",
  year: 2026,
  url: "https://www.fda.gov/drugs/medication-errors-related-cder-regulated-drug-products/fda-name-differentiation-project",
};
export const HOCKENBERRY: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs KD",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2024,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const FDA_HOME: Source = {
  body: "US Food and Drug Administration, Center for Devices and Radiological Health",
  work: "Home Healthcare Medical Devices: A Checklist",
  year: 2024,
  url: "https://www.fda.gov/medical-devices/home-health-and-consumer-devices/brochure-home-healthcare-medical-devices-checklist",
};
export const FDA_HOME_ENV: Source = {
  body: "US Food and Drug Administration",
  work: "Home Use Devices: Unique Considerations in the Home",
  year: 2018,
  url: "https://www.fda.gov/medical-devices/home-use-devices/unique-considerations-home",
};
export const CPSC_CRIB: Source = {
  body: "US Consumer Product Safety Commission",
  work: "Safety Standard for Full-Size Baby Cribs, 16 CFR Part 1219 (75 FR 81766)",
  year: 2010,
  url: "https://www.ecfr.gov/current/title-16/chapter-II/subchapter-B/part-1219",
};
export const HUMPTY: Source = {
  body: "Hill-Rodriguez D, Messmer PR, Williams PD, et al.",
  work: "The Humpty Dumpty Falls Scale: A Case-Control Study. Journal for Specialists in Pediatric Nursing 14(1):22",
  year: 2009,
  url: "https://doi.org/10.1111/j.1744-6155.2008.00166.x",
};
export const NATA_HEAT: Source = {
  body: "Casa DJ, DeMartini JK, Bergeron MF, et al. National Athletic Trainers' Association",
  work: "National Athletic Trainers' Association Position Statement: Exertional Heat Illnesses. Journal of Athletic Training 50(9):986",
  year: 2015,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4639891/",
};
export const WMS_EAH: Source = {
  body: "Bennett BL, Hew-Butler T, Rosner MH, Myers T, Lipman GS. Wilderness Medical Society",
  work: "Wilderness Medical Society Clinical Practice Guidelines for the Management of Exercise-Associated Hyponatremia: 2019 Update. Wilderness and Environmental Medicine 31(1):50",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32044213/",
};
export const SMALLPOX: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Clinical Signs and Symptoms of Smallpox",
  year: 2024,
  url: "https://www.cdc.gov/smallpox/hcp/clinical-signs/index.html",
};
export const SMALLPOX_EVAL: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Evaluating Patients for Smallpox: Acute, Generalized Vesicular or Pustular Rash Illness Protocol",
  year: 2024,
  url: "https://www.cdc.gov/smallpox/hcp/diagnosis-testing/evaluating-patients-rash-illness-protocol.html",
};
export const AORN_CLEAN: Source = {
  body: "Association of periOperative Registered Nurses",
  work: "Clinical FAQs: Instrument Cleaning",
  year: 2014,
  url: "https://qsep.cms.gov/data/2501/InstrumentCleaning_AssociationofperiOperativeRegisteredNurses.pdf",
};
export const PA_OPIOID: Source = {
  body: "Grissinger M. Pennsylvania Patient Safety Authority",
  work: "Decline in Serious Events and Wrong-Drug Reports Involving Opioids in Pennsylvania Facilities. Pennsylvania Patient Safety Advisory 13(1):29",
  year: 2016,
  url: "https://patientsafety.pa.gov/ADVISORIES/Pages/201603_29.aspx",
};
export const WHO_LASA: Source = {
  body: "WHO Collaborating Centre for Patient Safety Solutions",
  work: "Look-Alike, Sound-Alike Medication Names. Patient Safety Solutions, Volume 1, Solution 1",
  year: 2007,
  url: "https://cdn.who.int/media/docs/default-source/patient-safety/patient-safety-solutions/ps-solution1-look-alike-sound-alike-medication-names.pdf",
};
export const BOC_GAS: Source = {
  body: "BOC Limited (Linde)",
  work: "Handle Medical Gases Safely: Gases Safety Pocket Guide (HCD186)",
  year: 2017,
  url: "https://static.prd.echannel.linde.com/wcsstore/AU_BOC_Industrial_Store/pdf/en_AU/HCD186_Gases%20safety%20pocket%20guide_V3_FA_web_tcm350-131320.pdf",
};
export const AIRLIQUIDE: Source = {
  body: "Air Liquide Healthcare Canada",
  work: "Cylinder Safety Basics",
  year: 2026,
  url: "https://ca.healthcare.airliquide.com/academy/cylinder-safety-basics",
};
export const TABLO: Source = {
  body: "Outset Medical",
  work: "Tablo Hemodialysis System: Indications for Use and Important Safety Information",
  year: 2026,
  url: "https://www.outsetmedical.com/indications/",
};
export const CPSC_TIPS: Source = {
  body: "US Consumer Product Safety Commission",
  work: "Crib Safety Tips",
  year: 2026,
  url: "https://www.cpsc.gov/safety-education/safety-guides/cribs/crib-safety-tips",
};
export const ICU_EVAC: Source = {
  body: "King MA, Niven AS, Beninati W, et al. Task Force for Mass Critical Care",
  work: "Evacuation of the ICU: Care of the Critically Ill and Injured During Pandemics and Disasters: CHEST Consensus Statement. Chest 146(4 Suppl):e44S",
  year: 2014,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4504249/",
};
export const MDH_FIRE: Source = {
  body: "Minnesota Department of Health, Engineering Services",
  work: "Fire Safety and Evacuation Plan: Template for Health Care Facilities",
  year: 2017,
  url: "https://www.health.state.mn.us/facilities/regulation/engineering/docs/lscsafetyplan.docx",
};
export const CTS_LTBI: Source = {
  body: "Campbell JR, Pease C, Daley P, Pai M, Menzies D. Canadian Thoracic Society and Public Health Agency of Canada",
  work: "Canadian Tuberculosis Standards, 8th edition, Chapter 4: Diagnosis of Tuberculosis Infection",
  year: 2022,
  url: "https://www.canada.ca/en/public-health/services/diseases/tuberculosis/health-professionals/canadian-tuberculosis-standards/diagnosis-tuberculosis-infection.html",
};
export const CIG_HEPA: Source = {
  body: "Public Health Agency of Canada. National Advisory Committee on Immunization",
  work: "Canadian Immunization Guide, Part 4: Hepatitis A Vaccine",
  year: 2021,
  url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-6-hepatitis-a-vaccine.html",
};
export const NS_HEPA: Source = {
  body: "Nova Scotia Department of Health and Wellness",
  work: "Communicable Disease Manual: Hepatitis A",
  year: 2016,
  url: "https://novascotia.ca/dhw/cdpc/cdc/documents/Hepatitis-A.pdf",
};
export const HC_CRIB: Source = {
  body: "Government of Canada",
  work: "Cribs, Cradles and Bassinets Regulations, SOR/2016-152",
  year: 2016,
  url: "https://laws-lois.justice.gc.ca/eng/regulations/SOR-2016-152/FullText.html",
};
export const CHOA_FALLS: Source = {
  body: "Children's Healthcare of Atlanta",
  work: "Fall Prevention Program: Patient and Family Education (PFEW 004)",
  year: 2025,
  url: "https://www.choa.org/-/media/Files/Childrens/teaching-sheets/fall-prevention-program.pdf",
};
