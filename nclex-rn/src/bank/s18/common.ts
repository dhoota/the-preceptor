import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s18. */
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
export const POTTER: Source = { body: "Potter PA, Perry AG, Stockert PA, Hall AM", work: "Fundamentals of Nursing, 11th edition", year: 2022 };
export const GINA: Source = { body: "Global Initiative for Asthma", work: "Global Strategy for Asthma Management and Prevention, 2026 update", year: 2026 };
export const GLAUSER: Source = {
  body: "Glauser T, Shinnar S, Gloss D, et al. American Epilepsy Society",
  work: "Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults. Epilepsy Currents 16(1):48",
  year: 2016,
};
export const ASAM: Source = { body: "American Society of Addiction Medicine", work: "The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. Journal of Addiction Medicine 14(3S):1", year: 2020 };
export const WOOLF: Source = {
  body: "Woolf AD, Erdman AR, Nelson LS, et al. American Association of Poison Control Centers",
  work: "Tricyclic Antidepressant Poisoning: an Evidence-Based Consensus Guideline for Out-of-Hospital Management. Clinical Toxicology 45(3):203",
  year: 2007,
};
export const ROSENBERG: Source = { body: "Rosenberg H, Pollock N, Schiemann A, Bulger T, Stowell K", work: "Malignant Hyperthermia: a Review. Orphanet Journal of Rare Diseases 10:93", year: 2015 };
export const ONS: Source = {
  body: "Olsen MM, LeFebvre KB, Walker SL, Prechtel Dunphy E. Oncology Nursing Society",
  work: "Chemotherapy and Immunotherapy Guidelines and Recommendations for Practice, 2nd edition",
  year: 2023,
};
export const SIEGEL: Source = {
  body: "Siegel RD, LeFebvre KB, Temin S, et al. ASCO and ONS",
  work: "Antineoplastic Therapy Administration Safety Standards for Adult and Pediatric Oncology: ASCO-ONS Standards. JCO Oncology Practice",
  year: 2024,
};
export const ISMP_ABBR: Source = { body: "Institute for Safe Medication Practices", work: "ISMP List of Error-Prone Abbreviations, Symbols, and Dose Designations", year: 2021 };
export const ISMP_HIGH: Source = { body: "Institute for Safe Medication Practices", work: "ISMP List of High-Alert Medications in Acute Care Settings", year: 2024 };
export const SCHNEIDER: Source = {
  body: "Schneider BJ, Naidoo J, Santomasso BD, et al. American Society of Clinical Oncology",
  work: "Management of Immune-Related Adverse Events in Patients Treated With Immune Checkpoint Inhibitor Therapy: ASCO Guideline Update. Journal of Clinical Oncology 39(36):4073",
  year: 2021,
};
export const ASA_NEURAXIAL: Source = {
  body: "American Society of Anesthesiologists Task Force on Neuraxial Opioids and American Society of Regional Anesthesia and Pain Medicine",
  work: "Practice Guidelines for the Prevention, Detection, and Management of Respiratory Depression Associated with Neuraxial Opioid Administration. Anesthesiology 124(3):535",
  year: 2016,
};
export const JUNGQUIST: Source = {
  body: "Jungquist CR, Quinlan-Colwell A, Vallerand A, et al. American Society for Pain Management Nursing",
  work: "Guidelines on Monitoring for Opioid-Induced Advancing Sedation and Respiratory Depression: Revisions. Pain Management Nursing 21(1):7",
  year: 2020,
};
export const NARAYANASWAMI: Source = {
  body: "Narayanaswami P, Sanders DB, Wolfe G, et al.",
  work: "International Consensus Guidance for Management of Myasthenia Gravis: 2020 Update. Neurology 96(3):114",
  year: 2021,
};
export const HOH: Source = {
  body: "Hoh BL, Ko NU, Amin-Hanjani S, et al. American Heart Association and American Stroke Association",
  work: "2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage. Stroke 54(7):e314",
  year: 2023,
};
export const AILANI: Source = {
  body: "Ailani J, Burch RC, Robbins MS. American Headache Society",
  work: "The American Headache Society Consensus Statement: Update on Integrating New Migraine Treatments Into Clinical Practice. Headache 61(7):1021",
  year: 2021,
};
export const CDC_FLU: Source = { body: "Centers for Disease Control and Prevention", work: "Influenza Antiviral Medications: Summary for Clinicians", year: 2026 };
export const ADA_APA: Source = {
  body: "American Diabetes Association, American Psychiatric Association, AACE and NAASO",
  work: "Consensus Development Conference on Antipsychotic Drugs and Obesity and Diabetes. Diabetes Care 27(2):596",
  year: 2004,
};
export const FIORE: Source = { body: "Fiore MC, Jaen CR, Baker TB, et al. US Public Health Service", work: "Treating Tobacco Use and Dependence: 2008 Update. Clinical Practice Guideline", year: 2008 };
export const TJC: Source = { body: "The Joint Commission", work: "National Performance Goals Effective January 2026 for the Hospital Program", year: 2026 };
export const DHHS: Source = {
  body: "Panel on Antiretroviral Guidelines for Adults and Adolescents, US Department of Health and Human Services",
  work: "Guidelines for the Use of Antiretroviral Agents in Adults and Adolescents With HIV",
  year: 2026,
};
export const GYAWALI: Source = {
  body: "Gyawali B, Bohlke K, Dickter JK, et al. American Society of Clinical Oncology",
  work: "WBC Growth Factors: ASCO Guideline Update. Journal of Clinical Oncology 44(9):812",
  year: 2026,
};
export const RYBAK: Source = {
  body: "Rybak MJ, Le J, Lodise TP, et al. ASHP, IDSA, PIDS and SIDP",
  work: "Therapeutic Monitoring of Vancomycin for Serious MRSA Infections: A Revised Consensus Guideline. Am J Health Syst Pharm 77(11):835",
  year: 2020,
};
export const COX: Source = {
  body: "Cox L, Platts-Mills TA, Finegold I, et al. AAAAI and ACAAI Joint Task Force",
  work: "Joint Task Force Report on Omalizumab-Associated Anaphylaxis. Journal of Allergy and Clinical Immunology 120(6):1373",
  year: 2007,
};
export const CDC_OPIOID: Source = {
  body: "Dowell D, Ragan KR, Jones CM, Baldwin GT, Chou R. Centers for Disease Control and Prevention",
  work: "CDC Clinical Practice Guideline for Prescribing Opioids for Pain, United States. MMWR Recommendations and Reports 71(3)",
  year: 2022,
};
