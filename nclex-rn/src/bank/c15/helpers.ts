import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c15 items. */
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
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  leonhard: {
    body: "Leonhard SE, Mandarakas MR, Gondim FAA, et al.",
    work: "Diagnosis and management of Guillain-Barre syndrome in ten steps. Nature Reviews Neurology 15(11):671",
    year: 2019,
    url: "https://www.nature.com/articles/s41582-019-0250-9",
  },
  lawn: {
    body: "Lawn ND, Fletcher DD, Henderson RD, Wolter TD, Wijdicks EF",
    work: "Anticipating mechanical ventilation in Guillain-Barre syndrome. Archives of Neurology 58(6):893",
    year: 2001,
    url: "https://pubmed.ncbi.nlm.nih.gov/11405803/",
  },
  delegation: {
    body: "National Council of State Boards of Nursing and American Nurses Association",
    work: "National Guidelines for Nursing Delegation",
    year: 2019,
    url: "https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf",
  },
  narayanaswami: {
    body: "Narayanaswami P, Sanders DB, Wolfe G, et al.",
    work: "International Consensus Guidance for Management of Myasthenia Gravis: 2020 Update. Neurology 96(3):114",
    year: 2021,
    url: "https://doi.org/10.1212/WNL.0000000000011124",
  },
  wendell: {
    body: "Wendell LC, Levine JM",
    work: "Myasthenic crisis. The Neurohospitalist 1(1):16",
    year: 2011,
    url: "https://doi.org/10.1177/1941875210382918",
  },
  cipro: {
    body: "Bayer HealthCare Pharmaceuticals. US Food and Drug Administration",
    work: "Cipro (ciprofloxacin) tablets and oral suspension prescribing information",
    year: 2024,
    url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/019537s095%2C020780s050lbl.pdf",
  },
  armstrong: {
    body: "Armstrong MJ, Okun MS",
    work: "Diagnosis and Treatment of Parkinson Disease: A Review. JAMA 323(6):548",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/32044947/",
  },
  pfHospital: {
    body: "Parkinson's Foundation",
    work: "Parkinson's Foundation Hospital Care Recommendations",
    year: 2023,
    url: "https://www.parkinson.org/sites/default/files/documents/hospital-care-recommendations-april2023.pdf",
  },
  beers: {
    body: "American Geriatrics Society Beers Criteria Update Expert Panel",
    work: "American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society 71(7):2052",
    year: 2023,
    url: "https://pubmed.ncbi.nlm.nih.gov/37139824/",
  },
  nice: {
    body: "National Institute for Health and Care Excellence",
    work: "Multiple sclerosis in adults: management. NICE guideline NG220",
    year: 2022,
    url: "https://www.nice.org.uk/guidance/ng220",
  },
  glauser: {
    body: "Glauser T, Shinnar S, Gloss D, et al. American Epilepsy Society Guideline Committee",
    work: "Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults. Epilepsy Currents 16(1):48",
    year: 2016,
    url: "https://journals.sagepub.com/doi/10.5698/1535-7597-16.1.48",
  },
  sbar: {
    body: "Institute for Healthcare Improvement",
    work: "SBAR Tool: Situation-Background-Assessment-Recommendation",
    year: 2023,
    url: "https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation",
  },
  kapur: {
    body: "Kapur J, Elm J, Chamberlain JM, et al.",
    work: "Randomized Trial of Three Anticonvulsant Medications for Status Epilepticus. New England Journal of Medicine 381(22):2103",
    year: 2019,
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1905795",
  },
};
