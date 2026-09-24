import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s16. */
export const meta = (
  id: string,
  over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">,
): ItemMeta => ({
  id,
  need: "PPT",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const LEHNE: Source = { body: "Burchum JR, Rosenthal LD", work: "Lehne's Pharmacology for Nursing Care, 11th edition", year: 2022 };
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const POTTER: Source = { body: "Potter PA, Perry AG, Stockert PA, Hall AM", work: "Fundamentals of Nursing, 11th edition", year: 2023 };
export const ISMP_HIGH: Source = { body: "Institute for Safe Medication Practices", work: "ISMP List of High-Alert Medications in Acute Care Settings", year: 2024 };
export const INS: Source = { body: "Nickel B, Gorski L, Kleidon T, et al. Infusion Nurses Society", work: "Infusion Therapy Standards of Practice, 9th edition. Journal of Infusion Nursing 47(1S):S1", year: 2024 };
export const ACR_CONTRAST: Source = { body: "American College of Radiology Committee on Drugs and Contrast Media", work: "ACR Manual on Contrast Media", year: 2024 };
export const ADA_PHARM: Source = { body: "American Diabetes Association Professional Practice Committee", work: "Pharmacologic Approaches to Glycemic Treatment: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S183", year: 2026 };
export const DKA: Source = { body: "Umpierrez GE, Davis GM, ElSayed NA, et al.", work: "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care 47(8):1257", year: 2024 };
export const GINA: Source = { body: "Global Initiative for Asthma", work: "Global Strategy for Asthma Management and Prevention, 2025 update", year: 2025 };
export const GOLD: Source = { body: "Global Initiative for Chronic Obstructive Lung Disease", work: "Global Strategy for the Diagnosis, Management, and Prevention of COPD, 2026 Report", year: 2025 };
export const SVT: Source = { body: "Page RL, Joglar JA, et al. ACC, AHA and HRS", work: "2015 ACC/AHA/HRS Guideline for the Management of Adult Patients With Supraventricular Tachycardia. Circulation 133(14):e506", year: 2016 };
export const AF: Source = { body: "Joglar JA, Chung MK, Armbruster AL, et al. ACC, AHA, ACCP and HRS", work: "2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation 149(1):e1", year: 2024 };
export const STROKE: Source = { body: "Prabhakaran S, et al. American Heart Association and American Stroke Association", work: "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke, doi:10.1161/STR.0000000000000513", year: 2026 };
export const HYPONATREMIA: Source = { body: "Spasovski G, Vanholder R, Allolio B, et al.", work: "Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia. European Journal of Endocrinology 170(3):G1", year: 2014 };
export const CDIFF: Source = { body: "Johnson S, Lavergne V, Skinner AM, et al. IDSA and SHEA", work: "2021 Focused Update Guidelines on Management of Clostridioides difficile Infection in Adults. Clinical Infectious Diseases 73(5):e1029", year: 2021 };
export const FQ: Source = { body: "US Food and Drug Administration", work: "FDA Drug Safety Communication: FDA updates warnings for oral and injectable fluoroquinolone antibiotics due to disabling side effects", year: 2016 };
export const MONTELUKAST: Source = { body: "US Food and Drug Administration", work: "FDA requires Boxed Warning about serious mental health side effects for asthma and allergy drug montelukast (Singulair)", year: 2020 };
export const MOUD: Source = { body: "Substance Abuse and Mental Health Services Administration", work: "TIP 63: Medications for Opioid Use Disorder", year: 2021 };
export const AUD: Source = { body: "Reus VI, Fochtmann LJ, Bukstein O, et al. American Psychiatric Association", work: "Practice Guideline for the Pharmacological Treatment of Patients With Alcohol Use Disorder. American Journal of Psychiatry 175(1):86", year: 2018 };
export const PPH: Source = { body: "American College of Obstetricians and Gynecologists", work: "Postpartum Hemorrhage. ACOG Practice Bulletin No. 183", year: 2017 };
export const RHD: Source = { body: "American College of Obstetricians and Gynecologists", work: "Prevention of Rh D Alloimmunization. ACOG Practice Bulletin No. 181", year: 2017 };
export const SEVERE_HTN: Source = { body: "American College of Obstetricians and Gynecologists", work: "Emergent Therapy for Acute-Onset, Severe Hypertension During Pregnancy and the Postpartum Period. ACOG Committee Opinion No. 767", year: 2019 };
export const ONS: Source = { body: "Olsen MM, LeFebvre KB, Walker SL, Prechtel Dunphy E. Oncology Nursing Society", work: "Chemotherapy and Immunotherapy Guidelines and Recommendations for Practice, 2nd edition", year: 2023 };
export const GOUT: Source = { body: "FitzGerald JD, Dalbeth N, Mikuls T, et al. American College of Rheumatology", work: "2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care and Research 72(6):744", year: 2020 };
export const THYROID: Source = { body: "Ross DS, Burch HB, Cooper DS, et al. American Thyroid Association", work: "2016 Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid 26(10):1343", year: 2016 };
export const ADHD: Source = { body: "Wolraich ML, Hagan JF, Allan C, et al. American Academy of Pediatrics", work: "Clinical Practice Guideline for the Diagnosis, Evaluation, and Treatment of ADHD in Children and Adolescents. Pediatrics 144(4):e20192528", year: 2019 };
export const MG: Source = { body: "Narayanaswami P, Sanders DB, Wolfe G, et al.", work: "International Consensus Guidance for Management of Myasthenia Gravis: 2020 Update. Neurology 96(3):114", year: 2021 };
export const ENTERAL: Source = { body: "Boullata JI, Carrera AL, Harvey L, et al. American Society for Parenteral and Enteral Nutrition", work: "ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN 41(1):15", year: 2017 };
export const BEERS: Source = { body: "American Geriatrics Society Beers Criteria Update Expert Panel", work: "American Geriatrics Society 2023 Updated AGS Beers Criteria for Potentially Inappropriate Medication Use in Older Adults. J Am Geriatr Soc 71(7):2052", year: 2023 };
