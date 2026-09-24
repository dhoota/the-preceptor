import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c01 items. */
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
  hf: {
    body: "Heidenreich PA, Bozkurt B, Aguilar D, et al. American Heart Association, American College of Cardiology, Heart Failure Society of America",
    work: "2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation 145(18):e895",
    year: 2022,
    url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063",
  },
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  furosemide: {
    body: "US Food and Drug Administration",
    work: "Furosemide Injection prescribing information",
    year: 2024,
    url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/018267s029lbl.pdf",
  },
  pph: {
    body: "American College of Obstetricians and Gynecologists",
    work: "Practice Bulletin No. 183: Postpartum Hemorrhage. Obstetrics and Gynecology 130(4):e168",
    year: 2017,
    url: "https://pubmed.ncbi.nlm.nih.gov/28937571/",
  },
  lowdermilk: {
    body: "Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE",
    work: "Maternity and Women's Health Care, 13th edition",
    year: 2023,
  },
  delegation: {
    body: "National Council of State Boards of Nursing and American Nurses Association",
    work: "National Guidelines for Nursing Delegation",
    year: 2019,
    url: "https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf",
  },
  age: {
    body: "King CK, Glass R, Bresee JS, Duggan C. Centers for Disease Control and Prevention",
    work: "Managing Acute Gastroenteritis Among Children. MMWR Recommendations and Reports 52(RR-16)",
    year: 2003,
    url: "https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5216a1.htm",
  },
  pals: {
    body: "American Heart Association",
    work: "Pediatric Advanced Life Support Provider Manual",
    year: 2020,
  },
  wong: {
    body: "Hockenberry MJ, Duffy EA, Gibbs KD",
    work: "Wong's Nursing Care of Infants and Children, 12th edition",
    year: 2023,
  },
  isolation: {
    body: "Siegel JD, Rhinehart E, Jackson M, Chiarello L. Healthcare Infection Control Practices Advisory Committee",
    work: "2007 Guideline for Isolation Precautions, Appendix A",
    year: 2007,
    url: "https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html",
  },
  asam: {
    body: "American Society of Addiction Medicine",
    work: "The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. Journal of Addiction Medicine 14(3S)",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/32511109/",
  },
  lorazepam: {
    body: "US National Library of Medicine, DailyMed",
    work: "Lorazepam Injection, USP prescribing information",
    year: 2021,
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b5b17cde-a94c-4105-871c-54e7d2bd47e8",
  },
  delirium: {
    body: "Inouye SK, Westendorp RG, Saczynski JS",
    work: "Delirium in elderly people. The Lancet 383(9920):911",
    year: 2014,
    url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(13)60688-1/abstract",
  },
  falls: {
    body: "Montero-Odasso M, van der Velde N, Martin FC, et al. Task Force on Global Guidelines for Falls in Older Adults",
    work: "World guidelines for falls prevention and management for older adults. Age and Ageing 51(9):afac205",
    year: 2022,
    url: "https://academic.oup.com/ageing/article/51/9/afac205/6730755",
  },
  cms: {
    body: "Centers for Medicare and Medicaid Services",
    work: "42 CFR 483.12, Freedom from abuse, neglect, and exploitation",
    year: 2016,
    url: "https://www.law.cornell.edu/cfr/text/42/483.12",
  },
  sbar: {
    body: "Institute for Healthcare Improvement",
    work: "SBAR Tool: Situation-Background-Assessment-Recommendation",
    year: 2023,
    url: "https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation",
  },
};
