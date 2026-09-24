import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c16 items. */
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
  pdq: {
    body: "National Cancer Institute, PDQ Supportive and Palliative Care Editorial Board",
    work: "Last Days of Life (PDQ), Health Professional Version",
    year: 2025,
    url: "https://www.cancer.gov/about-cancer/advanced-cancer/caregivers/planning/last-days-hp-pdq",
  },
  painad: {
    body: "Warden V, Hurley AC, Volicer L",
    work: "Development and psychometric evaluation of the Pain Assessment in Advanced Dementia (PAINAD) scale. Journal of the American Medical Directors Association 4(1):9",
    year: 2003,
    url: "https://pubmed.ncbi.nlm.nih.gov/12807591/",
  },
  morphine: {
    body: "US Food and Drug Administration",
    work: "Morphine Sulfate Oral Solution prescribing information",
    year: 2012,
    url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/022195s006lbl.pdf",
  },
  hfa: {
    body: "Hospice Foundation of America",
    work: "When Death Happens at Home",
    year: 2024,
    url: "https://hospicefoundation.org/when-death-happens-at-home/",
  },
  alz: {
    body: "Alzheimer's Association",
    work: "Wandering: caregiver safety guidance",
    year: 2026,
    url: "https://www.alz.org/help-support/caregiving/safety/wandering",
  },
  fazio: {
    body: "Fazio S, Pace D, Maslow K, Zimmerman S, Kallmyer B. Alzheimer's Association",
    work: "Alzheimer's Association Dementia Care Practice Recommendations. The Gerontologist 58(S1):S1",
    year: 2018,
    url: "https://pubmed.ncbi.nlm.nih.gov/29361074/",
  },
  aaos: {
    body: "American Academy of Orthopaedic Surgeons",
    work: "Management of Hip Fractures in Older Adults: Evidence-Based Clinical Practice Guideline",
    year: 2021,
    url: "https://www.aaos.org/globalassets/quality-and-practice-resources/hip-fractures-in-the-elderly/hipfxcpg.pdf",
  },
  epuap: {
    body: "European Pressure Ulcer Advisory Panel, National Pressure Injury Advisory Panel, Pan Pacific Pressure Injury Alliance",
    work: "Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline, 3rd edition",
    year: 2019,
    url: "https://internationalguideline.com/2019",
  },
  edsberg: {
    body: "Edsberg LE, Black JM, Goldberg M, McNichol L, Moore L, Sieggreen M",
    work: "Revised National Pressure Ulcer Advisory Panel Pressure Injury Staging System. Journal of Wound, Ostomy and Continence Nursing 43(6):585",
    year: 2016,
    url: "https://pubmed.ncbi.nlm.nih.gov/27749790/",
  },
  white: {
    body: "White JV, Guenter P, Jensen G, Malone A, Schofield M. Academy of Nutrition and Dietetics and American Society for Parenteral and Enteral Nutrition",
    work: "Consensus statement: characteristics recommended for the identification and documentation of adult malnutrition. JPEN 36(3):275",
    year: 2012,
    url: "https://pubmed.ncbi.nlm.nih.gov/22535923/",
  },
  delegation: {
    body: "National Council of State Boards of Nursing and American Nurses Association",
    work: "National Guidelines for Nursing Delegation",
    year: 2019,
    url: "https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf",
  },
  tomaselli: {
    body: "Tomaselli GF, Mahaffey KW, Cuker A, et al. American College of Cardiology",
    work: "2020 ACC Expert Consensus Decision Pathway on Management of Bleeding in Patients on Oral Anticoagulants. Journal of the American College of Cardiology 76(5):594",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/32680646/",
  },
  kcentra: {
    body: "CSL Behring",
    work: "Kcentra (Prothrombin Complex Concentrate, Human) prescribing information",
    year: 2023,
    url: "https://labeling.cslbehring.com/pi/us/kcentra/en/kcentra-prescribing-information.pdf",
  },
  nice: {
    body: "National Institute for Health and Care Excellence",
    work: "Head injury: assessment and early management. NICE guideline NG232",
    year: 2023,
    url: "https://www.nice.org.uk/guidance/ng232",
  },
  falls: {
    body: "Montero-Odasso M, van der Velde N, Martin FC, et al. Task Force on Global Guidelines for Falls in Older Adults",
    work: "World guidelines for falls prevention and management for older adults. Age and Ageing 51(9):afac205",
    year: 2022,
    url: "https://pubmed.ncbi.nlm.nih.gov/36178003/",
  },
  conley: {
    body: "Conley RB, Adib G, Adler RA, et al. American Society for Bone and Mineral Research",
    work: "Secondary Fracture Prevention: Consensus Clinical Recommendations from a Multistakeholder Coalition. Journal of Bone and Mineral Research 35(1):36",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/31538675/",
  },
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
};
