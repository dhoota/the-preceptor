import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s37. Reduction of Risk Potential and Physiological Adaptation. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "need" | "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const SSC2021: Source = {
  body: "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign",
  work: "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Intensive Care Medicine 47(11):1181",
  year: 2021,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8486643/",
};
export const SSC_BUNDLE: Source = {
  body: "Levy MM, Evans LE, Rhodes A. Surviving Sepsis Campaign",
  work: "The Surviving Sepsis Campaign Bundle: 2018 Update. Intensive Care Medicine 44(6):925",
  year: 2018,
  url: "https://link.springer.com/article/10.1007/s00134-018-5085-0",
};
export const CDC_BCX: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Blood Culture Contamination: An Overview for Infection Control and Antibiotic Stewardship Programs Working with the Clinical Laboratory",
  year: 2022,
  url: "https://www.cdc.gov/antibiotic-use/core-elements/pdfs/fs-bloodculture-508.pdf",
};
export const AHA_ECG: Source = {
  body: "Sandau KE, Funk M, Auerbach A, et al. American Heart Association",
  work: "Update to Practice Standards for Electrocardiographic Monitoring in Hospital Settings: A Scientific Statement. Circulation 136(19):e273",
  year: 2017,
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000527",
};
export const AHA_EXERCISE: Source = {
  body: "Fletcher GF, Ades PA, Kligfield P, et al. American Heart Association",
  work: "Exercise Standards for Testing and Training: A Scientific Statement. Circulation 128(8):873",
  year: 2013,
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0b013e31829b5b44",
};
export const ADA_TECH: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "7. Diabetes Technology: Standards of Care in Diabetes 2025. Diabetes Care 48(Suppl 1):S146",
  year: 2025,
  url: "https://diabetesjournals.org/care/article/48/Supplement_1/S146/157564",
};
export const FDA_BENZO: Source = {
  body: "US Food and Drug Administration",
  work: "FDA Drug Safety Communication: Risk of Serious and Potentially Fatal Blood Disorder Prompts FDA Action on Oral Over-the-Counter Benzocaine Products and Prescription Local Anesthetics",
  year: 2018,
  url: "https://www.fda.gov/drugs/drug-safety-and-availability/risk-serious-and-potentially-fatal-blood-disorder-prompts-fda-action-oral-over-counter-benzocaine",
};
export const AHA_ALS: Source = {
  body: "Panchal AR, Bartos JA, Cabanas JG, et al. American Heart Association",
  work: "Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation 142(16 Suppl 2):S366",
  year: 2020,
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000916",
};
export const GCS40: Source = {
  body: "Teasdale G, Maas A, Lecky F, Manley G, Stocchetti N, Murray G",
  work: "The Glasgow Coma Scale at 40 Years: Standing the Test of Time. Lancet Neurology 13(8):844",
  year: 2014,
  url: "https://eprints.gla.ac.uk/96329/",
};
export const MCQUEEN: Source = {
  body: "McQueen MM, Court-Brown CM",
  work: "Compartment Monitoring in Tibial Fractures: The Pressure Threshold for Decompression. Journal of Bone and Joint Surgery, British Volume 78(1):99",
  year: 1996,
  url: "https://boneandjoint.org.uk/Article/10.1302/0301-620X.78B1.0780099",
};
export const ACOG_FHR: Source = {
  body: "American College of Obstetricians and Gynecologists, Committee on Clinical Practice Guidelines, Obstetrics",
  work: "Clinical Practice Guideline No. 10: Intrapartum Fetal Heart Rate Monitoring: Interpretation and Management. Obstetrics and Gynecology 146(4)",
  year: 2025,
  url: "https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2025/10/intrapartum-fetal-heart-rate-monitoring-interpretation-and-management",
};
export const ACOG_PDX: Source = {
  body: "American College of Obstetricians and Gynecologists, Committee on Practice Bulletins, Obstetrics, Committee on Genetics, and Society for Maternal-Fetal Medicine",
  work: "Practice Bulletin No. 162: Prenatal Diagnostic Testing for Genetic Disorders. Obstetrics and Gynecology 127(5):e108",
  year: 2016,
  url: "https://doi.org/10.1097/AOG.0000000000001405",
};
export const AAP_SEDATION: Source = {
  body: "Cote CJ, Wilson S. American Academy of Pediatrics and American Academy of Pediatric Dentistry",
  work: "Guidelines for Monitoring and Management of Pediatric Patients Before, During, and After Sedation for Diagnostic and Therapeutic Procedures. Pediatrics 143(6):e20191000",
  year: 2019,
  url: "https://www.aapd.org/media/Policies_Guidelines/G_Sedation.pdf",
};
export const ERAS_CR: Source = {
  body: "Gustafsson UO, Scott MJ, Hubner M, et al. Enhanced Recovery After Surgery Society",
  work: "Guidelines for Perioperative Care in Elective Colorectal Surgery: ERAS Society Recommendations 2018. World Journal of Surgery 43(3):659",
  year: 2019,
  url: "https://link.springer.com/article/10.1007/s00268-018-4844-y",
};
export const MH_REVIEW: Source = {
  body: "Rosenberg H, Pollock N, Schiemann A, Bulger T, Stowell K",
  work: "Malignant Hyperthermia: A Review. Orphanet Journal of Rare Diseases 10:93",
  year: 2015,
  url: "https://doi.org/10.1186/s13023-015-0310-1",
};
export const NICE_VTE: Source = {
  body: "National Institute for Health and Care Excellence",
  work: "Venous Thromboembolism in Over 16s: Reducing the Risk of Hospital-Acquired Deep Vein Thrombosis or Pulmonary Embolism (NG89)",
  year: 2018,
  url: "https://www.nice.org.uk/guidance/ng89",
};
export const ACCP_VTE: Source = {
  body: "Gould MK, Garcia DA, Wren SM, et al. American College of Chest Physicians",
  work: "Prevention of VTE in Nonorthopedic Surgical Patients. Chest 141(2 Suppl):e227S",
  year: 2012,
  url: "https://doi.org/10.1378/chest.11-2297",
};
export const ISBI: Source = {
  body: "ISBI Practice Guidelines Committee. International Society for Burn Injuries",
  work: "ISBI Practice Guidelines for Burn Care. Burns 42(5):953",
  year: 2016,
  url: "https://doi.org/10.1016/j.burns.2016.05.013",
};
export const ABLS: Source = {
  body: "American Burn Association",
  work: "Advanced Burn Life Support Course Provider Manual, 2018 Update",
  year: 2018,
  url: "https://ameriburn.org/education/abls-program/",
};
export const TRENDELENBURG: Source = {
  body: "Johnson S, Henderson SO",
  work: "Myth: The Trendelenburg Position Improves Circulation in Cases of Shock. Canadian Journal of Emergency Medicine 6(1):48",
  year: 2004,
};
export const CARDIOGENIC: Source = {
  body: "van Diepen S, Katz JN, Albert NM, et al. American Heart Association",
  work: "Contemporary Management of Cardiogenic Shock: A Scientific Statement. Circulation 136(16):e232",
  year: 2017,
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000525",
};
export const SHOCK_INDEX: Source = {
  body: "Koch E, Lovett S, Nghiem T, Riggs RA, Rech MA",
  work: "Shock Index in the Emergency Department: Utility and Limitations. Open Access Emergency Medicine 11:179",
  year: 2019,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6698590/",
};
export const AAP_IVF: Source = {
  body: "Feld LG, Neuspiel DR, Foster BA, et al. American Academy of Pediatrics Subcommittee on Fluid and Electrolyte Therapy",
  work: "Clinical Practice Guideline: Maintenance Intravenous Fluids in Children. Pediatrics 142(6):e20183083",
  year: 2018,
  url: "https://www.umassmed.edu/globalassets/pediatrics/pediatrics-residency-program/woo-insider/aap-cpg-ivf-2018-002.pdf",
};
export const EAH: Source = {
  body: "Hew-Butler T, Rosner MH, Fowkes-Godek S, et al.",
  work: "Statement of the Third International Exercise-Associated Hyponatremia Consensus Development Conference, Carlsbad, California, 2015. Clinical Journal of Sport Medicine 25(4):303",
  year: 2015,
  url: "https://bjsm.bmj.com/content/49/22/1432",
};
export const KODALI: Source = {
  body: "Kodali BS",
  work: "Capnography Outside the Operating Rooms. Anesthesiology 118(1):192",
  year: 2013,
  url: "https://doi.org/10.1097/ALN.0b013e318278c8b6",
};
