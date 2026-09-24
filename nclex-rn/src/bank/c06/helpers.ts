import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c06 items. */
export const meta = (id: string, over: Partial<ItemMeta>): ItemMeta => ({
  id,
  need: "PA",
  topic: "",
  cjmm: "recognize",
  process: "clinical-judgment",
  difficulty: 3,
  stem: "",
  rationale: "",
  sources: [],
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const SRC: Record<string, Source> = {
  stroke: {
    body: "Prabhakaran S, Gonzalez NR, Zachrison KS, et al. American Heart Association/American Stroke Association",
    work: "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke 57(8):e316",
    year: 2026,
    url: "https://pubmed.ncbi.nlm.nih.gov/41582814/",
  },
  acs: {
    body: "Rao SV, O'Donoghue ML, Ruel M, et al. American College of Cardiology/American Heart Association Joint Committee",
    work: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes. Circulation 151(13):e771",
    year: 2025,
    url: "https://pubmed.ncbi.nlm.nih.gov/40014670/",
  },
  he: {
    body: "Vilstrup H, Amodio P, Bajaj J, et al. AASLD and EASL",
    work: "Hepatic Encephalopathy in Chronic Liver Disease: 2014 Practice Guideline. Hepatology 60(2):715",
    year: 2014,
    url: "https://pubmed.ncbi.nlm.nih.gov/25042402/",
  },
  ascites: {
    body: "Biggins SW, Angeli P, Garcia-Tsao G, et al. American Association for the Study of Liver Diseases",
    work: "Diagnosis, Evaluation, and Management of Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome: 2021 Practice Guidance. Hepatology 74(2):1014",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/33942342/",
  },
  hypona: {
    body: "Spasovski G, Vanholder R, Allolio B, et al. Hyponatraemia Guideline Development Group",
    work: "Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia. European Journal of Endocrinology 170(3):G1",
    year: 2014,
    url: "https://pubmed.ncbi.nlm.nih.gov/24569125/",
  },
  verbalis: {
    body: "Verbalis JG, Goldsmith SR, Greenberg A, et al.",
    work: "Diagnosis, Evaluation, and Treatment of Hyponatremia: Expert Panel Recommendations. American Journal of Medicine 126(10 Suppl 1):S1",
    year: 2013,
    url: "https://pubmed.ncbi.nlm.nih.gov/24074529/",
  },
  gcai: {
    body: "Beuschlein F, Else T, Bancos I, et al. European Society of Endocrinology and Endocrine Society",
    work: "Joint Clinical Guideline: Diagnosis and Therapy of Glucocorticoid-Induced Adrenal Insufficiency. European Journal of Endocrinology 190(5):G25",
    year: 2024,
    url: "https://pubmed.ncbi.nlm.nih.gov/38714321/",
  },
  crisis: {
    body: "Rushworth RL, Torpy DJ, Falhammar H",
    work: "Adrenal Crisis. New England Journal of Medicine 381(9):852",
    year: 2019,
    url: "https://pubmed.ncbi.nlm.nih.gov/31461595/",
  },
  bornstein: {
    body: "Bornstein SR, Allolio B, Arlt W, et al. Endocrine Society",
    work: "Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline. Journal of Clinical Endocrinology and Metabolism 101(2):364",
    year: 2016,
    url: "https://pubmed.ncbi.nlm.nih.gov/26760044/",
  },
  noro: {
    body: "MacCannell T, Umscheid CA, Agarwal RK, et al. Healthcare Infection Control Practices Advisory Committee",
    work: "Guideline for the Prevention and Control of Norovirus Gastroenteritis Outbreaks in Healthcare Settings. Infection Control and Hospital Epidemiology 32(10):939",
    year: 2011,
    url: "https://pubmed.ncbi.nlm.nih.gov/21931246/",
  },
  ismp: {
    body: "Institute for Safe Medication Practices",
    work: "ISMP List of High-Alert Medications in Acute Care Settings",
    year: 2024,
    url: "https://www.ismp.org/recommendations/high-alert-medications-acute-list",
  },
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  potter: {
    body: "Potter PA, Perry AG, Stockert PA, Hall AM",
    work: "Fundamentals of Nursing, 11th edition",
    year: 2023,
  },
  halter: {
    body: "Halter MJ",
    work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition",
    year: 2022,
    url: "https://shop.elsevier.com/books/varcarolis-foundations-of-psychiatric-mental-health-nursing/halter/978-0-323-69707-1",
  },
};
