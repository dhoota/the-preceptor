import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s15. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "PPT",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const LEHNE: Source = { body: "Burchum JR, Rosenthal LD", work: "Lehne's Pharmacology for Nursing Care, 11th edition", year: 2022 };
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const INS: Source = { body: "Nickel B, Gorski L, Kleidon T, et al. Infusion Nurses Society", work: "Infusion Therapy Standards of Practice, 9th edition. Journal of Infusion Nursing 47(1S):S1", year: 2024 };
export const ISMP_HIGH: Source = { body: "Institute for Safe Medication Practices", work: "ISMP List of High-Alert Medications in Acute Care Settings", year: 2024 };
export const ISMP_PUSH: Source = { body: "Institute for Safe Medication Practices", work: "ISMP Safe Practice Guidelines for Adult IV Push Medications", year: 2015 };
export const AABB: Source = { body: "AABB, American Red Cross, America's Blood Centers, Armed Services Blood Program", work: "Circular of Information for the Use of Human Blood and Blood Components", year: 2024 };
export const ASPEN: Source = { body: "Boullata JI, Gilbert K, Sacks G, et al. American Society for Parenteral and Enteral Nutrition", work: "A.S.P.E.N. Clinical Guidelines: Parenteral Nutrition Ordering, Order Review, Compounding, Labeling, and Dispensing. JPEN 38(3):334", year: 2014 };
export const ACOG: Source = { body: "American College of Obstetricians and Gynecologists", work: "Gestational Hypertension and Preeclampsia. ACOG Practice Bulletin No. 222", year: 2020 };
export const PASERO: Source = { body: "Pasero C, McCaffery M", work: "Pain Assessment and Pharmacologic Management", year: 2011 };
export const ATA: Source = { body: "Jonklaas J, Bianco AC, Bauer AJ, et al. American Thyroid Association", work: "Guidelines for the Treatment of Hypothyroidism. Thyroid 24(12):1670", year: 2014 };
export const CDC_CLABSI: Source = { body: "O'Grady NP, Alexander M, Burns LA, et al. Healthcare Infection Control Practices Advisory Committee", work: "Guidelines for the Prevention of Intravascular Catheter-Related Infections", year: 2011 };
export const ASH_HIT: Source = { body: "Cuker A, Arepally GM, Chong BH, et al. American Society of Hematology", work: "2018 Guidelines for Management of Venous Thromboembolism: Heparin-Induced Thrombocytopenia. Blood Advances 2(22):3360", year: 2018 };
export const CHEST_VKA: Source = { body: "Holbrook A, Schulman S, Witt DM, et al. American College of Chest Physicians", work: "Evidence-Based Management of Anticoagulant Therapy. Chest 141(2 Suppl):e152S", year: 2012 };
export const ANAPHYLAXIS: Source = { body: "Shaker MS, Wallace DV, Golden DBK, et al.", work: "Anaphylaxis: a 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. Journal of Allergy and Clinical Immunology 145(4):1082", year: 2020 };
export const CDC_OPIOID: Source = { body: "Dowell D, Ragan KR, Jones CM, Baldwin GT, Chou R. Centers for Disease Control and Prevention", work: "CDC Clinical Practice Guideline for Prescribing Opioids for Pain, United States. MMWR Recommendations and Reports 71(3)", year: 2022 };
export const SEROTONIN: Source = { body: "Boyer EW, Shannon M", work: "The Serotonin Syndrome. New England Journal of Medicine 352(11):1112", year: 2005 };
export const BEERS: Source = { body: "American Geriatrics Society Beers Criteria Update Expert Panel", work: "American Geriatrics Society 2023 Updated AGS Beers Criteria for Potentially Inappropriate Medication Use in Older Adults. J Am Geriatr Soc 71(7):2052", year: 2023 };
export const TB: Source = { body: "Nahid P, Dorman SE, Alipanah N, et al. ATS, CDC and IDSA", work: "Treatment of Drug-Susceptible Tuberculosis. Clinical Infectious Diseases 63(7):e147", year: 2016 };
export const ADA: Source = { body: "American Diabetes Association Professional Practice Committee", work: "Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S132", year: 2026 };
export const HE: Source = { body: "Vilstrup H, Amodio P, Bajaj J, et al. AASLD and EASL", work: "Hepatic Encephalopathy in Chronic Liver Disease: 2014 Practice Guideline. Hepatology 60(2):715", year: 2014 };
export const DYSLIPIDEMIA: Source = { body: "Blumenthal RS, Morris PB, Gaudino M, et al. American College of Cardiology and American Heart Association", work: "2026 ACC/AHA Multisociety Guideline on the Management of Dyslipidemia. Circulation, doi:10.1161/CIR.0000000000001423", year: 2026 };
export const HF: Source = { body: "Heidenreich PA, Bozkurt B, Aguilar D, et al. AHA, ACC and HFSA", work: "2022 Guideline for the Management of Heart Failure. Circulation 145(18):e895", year: 2022 };
export const OXYTOCIN: Source = { body: "Simpson KR. Association of Women's Health, Obstetric and Neonatal Nurses", work: "Cervical Ripening and Labor Induction and Augmentation, 5th edition. Nursing for Women's Health 24(4 Suppl)", year: 2020 };
export const VANCO: Source = { body: "Rybak MJ, Le J, Lodise TP, et al. ASHP, IDSA, PIDS and SIDP", work: "Therapeutic Monitoring of Vancomycin for Serious MRSA Infections: A Revised Consensus Guideline. Am J Health Syst Pharm 77(11):835", year: 2020 };
