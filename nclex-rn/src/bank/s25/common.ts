import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s25. Mostly Physiological Adaptation. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "PA",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const HINKLE: Source = {
  body: "Hinkle JL, Cheever KH, Overbaugh KJ",
  work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
  year: 2022,
};
export const WONG: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs K",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2023,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const ATLS: Source = {
  body: "American College of Surgeons Committee on Trauma",
  work: "Advanced Trauma Life Support (ATLS), 11th edition",
  year: 2025,
  url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/",
};
export const BTF: Source = {
  body: "Carney N, Totten AM, O'Reilly C, et al. Brain Trauma Foundation",
  work: "Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery 80(1):6",
  year: 2017,
  url: "https://pubmed.ncbi.nlm.nih.gov/27654000/",
};
export const HYPONATREMIA: Source = {
  body: "Verbalis JG, Goldsmith SR, Greenberg A, et al.",
  work: "Diagnosis, Evaluation, and Treatment of Hyponatremia: Expert Panel Recommendations. American Journal of Medicine 126(10 Suppl 1):S1",
  year: 2013,
  url: "https://www.amjmed.com/article/S0002-9343(13)00605-0/fulltext",
};
export const DYSREFLEXIA: Source = {
  body: "Consortium for Spinal Cord Medicine. Paralyzed Veterans of America",
  work: "Evaluation and Management of Autonomic Dysreflexia and Other Autonomic Dysfunctions: Preventing the Highs and Lows, 2nd edition",
  year: 2020,
  url: "https://pva.org/wp-content/uploads/2021/09/cpg_autonomic-dysreflexia.pdf",
};
export const SEPSIS: Source = {
  body: "Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign",
  work: "International Guidelines for Management of Sepsis and Septic Shock 2026. Critical Care Medicine 54(4):725",
  year: 2026,
  url: "https://pubmed.ncbi.nlm.nih.gov/41869847/",
};
export const BLS: Source = {
  body: "American Heart Association",
  work: "Part 7: Adult Basic Life Support. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation",
  year: 2025,
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001369",
};
export const BURN: Source = {
  body: "Cartotto R, Johnson LS, Savetamal A, et al. American Burn Association",
  work: "American Burn Association Clinical Practice Guidelines on Burn Shock Resuscitation. Journal of Burn Care and Research 45(3):565",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/38051821/",
};
export const CDIFF: Source = {
  body: "McDonald LC, Gerding DN, Johnson S, et al. Infectious Diseases Society of America and Society for Healthcare Epidemiology of America",
  work: "Clinical Practice Guidelines for Clostridium difficile Infection in Adults and Children: 2017 Update. Clinical Infectious Diseases 66(7):e1",
  year: 2018,
  url: "https://academic.oup.com/cid/article/66/7/e1/4855916",
};
export const STROKE: Source = {
  body: "American Heart Association and American Stroke Association",
  work: "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke",
  year: 2026,
  url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000513",
};
export const GOLD: Source = {
  body: "Global Initiative for Chronic Obstructive Lung Disease",
  work: "Global Strategy for Prevention, Diagnosis and Management of COPD, 2026 Report",
  year: 2026,
  url: "https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf",
};
export const PANCREATITIS: Source = {
  body: "Tenner S, Vege SS, Sheth SG, et al. American College of Gastroenterology",
  work: "American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. American Journal of Gastroenterology 119(3):419",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/38857482/",
};
export const ANAPHYLAXIS: Source = {
  body: "Golden DBK, Wang J, Waserman S, et al. Joint Task Force on Practice Parameters",
  work: "Anaphylaxis: A 2023 Practice Parameter Update. Annals of Allergy, Asthma and Immunology 132(2):124",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/38108678/",
};
export const DELEGATION: Source = {
  body: "National Council of State Boards of Nursing and American Nurses Association",
  work: "National Guidelines for Nursing Delegation",
  year: 2019,
  url: "https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf",
};
export const SICKLE: Source = {
  body: "National Heart, Lung, and Blood Institute",
  work: "Evidence-Based Management of Sickle Cell Disease: Expert Panel Report",
  year: 2014,
  url: "https://www.nhlbi.nih.gov/sites/default/files/media/docs/Evd-Bsd_SickleCellDis_Rep2014.pdf",
};
export const ADRENAL: Source = {
  body: "Rushworth RL, Torpy DJ, Falhammar H",
  work: "Adrenal Crisis. New England Journal of Medicine 381(9):852",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31461595/",
};
export const THYROID: Source = {
  body: "Ross DS, Burch HB, Cooper DS, et al. American Thyroid Association",
  work: "2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid 26(10):1343",
  year: 2016,
  url: "https://journals.sagepub.com/doi/10.1089/thy.2016.0229",
};
export const PREECLAMPSIA: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Gestational Hypertension and Preeclampsia. ACOG Practice Bulletin No. 222. Obstetrics and Gynecology 135(6):e237",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32443079/",
};
export const PPH: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Postpartum Hemorrhage. ACOG Practice Bulletin No. 183. Obstetrics and Gynecology 130(4):e168",
  year: 2017,
  url: "https://journals.lww.com/greenjournal/abstract/2017/10000/practice_bulletin_no__183__postpartum_hemorrhage.56.aspx",
};
export const AKI: Source = {
  body: "Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group",
  work: "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney International Supplements 2(1):1",
  year: 2012,
  url: "https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf",
};
export const DKA: Source = {
  body: "Umpierrez GE, Davis GM, ElSayed NA, et al.",
  work: "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care 47(8):1257",
  year: 2024,
  url: "https://diabetesjournals.org/care/article/47/8/1257/156808/Hyperglycemic-Crises-in-Adults-With-Diabetes-A",
};
export const GCS: Source = {
  body: "Teasdale G, Maas A, Lecky F, Manley G, Stocchetti N, Murray G",
  work: "The Glasgow Coma Scale at 40 Years: Standing the Test of Time. Lancet Neurology 13(8):844",
  year: 2014,
  url: "https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(14)70120-6/abstract",
};
export const ACS: Source = {
  body: "Rao SV, O'Donoghue ML, Ruel M, et al. American College of Cardiology and American Heart Association",
  work: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes. Circulation 151:e771",
  year: 2025,
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001309",
};
export const HF: Source = {
  body: "Heidenreich PA, Bozkurt B, Aguilar D, et al. American Heart Association, American College of Cardiology and Heart Failure Society of America",
  work: "2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation 145(18):e895",
  year: 2022,
  url: "https://pubmed.ncbi.nlm.nih.gov/35363499/",
};
export const AF: Source = {
  body: "Joglar JA, Chung MK, Armbruster AL, et al. American College of Cardiology and American Heart Association",
  work: "2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation 149(1):e1",
  year: 2024,
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193",
};
export const SEIZURE: Source = {
  body: "Glauser T, Shinnar S, Gloss D, et al. American Epilepsy Society",
  work: "Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults. Epilepsy Currents 16(1):48",
  year: 2016,
  url: "https://journals.sagepub.com/doi/10.5698/1535-7597-16.1.48",
};
export const ASTHMA: Source = {
  body: "Global Initiative for Asthma",
  work: "Global Strategy for Asthma Management and Prevention, 2025 Update",
  year: 2025,
  url: "https://ginasthma.org/wp-content/uploads/2025/11/GINA-2025-Update-25_11_08-WMS.pdf",
};
export const VARICES: Source = {
  body: "Kaplan DE, Ripoll C, Thiele M, et al. American Association for the Study of Liver Diseases",
  work: "AASLD Practice Guidance on Risk Stratification and Management of Portal Hypertension and Varices in Cirrhosis. Hepatology 79(5):1180",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/37870298/",
};
export const HE: Source = {
  body: "Vilstrup H, Amodio P, Bajaj J, et al. American Association for the Study of Liver Diseases and European Association for the Study of the Liver",
  work: "Hepatic Encephalopathy in Chronic Liver Disease: 2014 Practice Guideline. Hepatology 60(2):715",
  year: 2014,
  url: "https://pubmed.ncbi.nlm.nih.gov/25042402/",
};
export const NEUTROPENIA: Source = {
  body: "Freifeld AG, Bow EJ, Sepkowitz KA, et al. Infectious Diseases Society of America",
  work: "Clinical Practice Guideline for the Use of Antimicrobial Agents in Neutropenic Patients with Cancer: 2010 Update. Clinical Infectious Diseases 52(4):e56",
  year: 2011,
  url: "https://pubmed.ncbi.nlm.nih.gov/21258094/",
};
