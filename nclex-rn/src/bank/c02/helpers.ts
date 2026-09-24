import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c02 items. */
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
  ata: {
    body: "Orloff LA, Wiseman SM, Bernet VJ, et al. American Thyroid Association Surgical Affairs Committee",
    work: "American Thyroid Association Statement on Postoperative Hypoparathyroidism: Diagnosis, Prevention, and Management in Adults. Thyroid 28(7):830",
    year: 2018,
    url: "https://pubmed.ncbi.nlm.nih.gov/29848235/",
  },
  calcium: {
    body: "Fresenius Kabi USA. US Food and Drug Administration",
    work: "Calcium Gluconate Injection prescribing information",
    year: 2017,
    url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/208418s000lbl.pdf",
  },
  acog: {
    body: "American College of Obstetricians and Gynecologists",
    work: "Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia. Obstetrics and Gynecology 135(6):e237",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/32443079/",
  },
  lowdermilk: {
    body: "Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE",
    work: "Maternity and Women's Health Care, 13th edition",
    year: 2023,
  },
  ismp: {
    body: "Institute for Safe Medication Practices",
    work: "ISMP List of High-Alert Medications in Acute Care Settings",
    year: 2024,
  },
  lithium: {
    body: "Sun Pharmaceutical Industries. US National Library of Medicine, DailyMed",
    work: "Lithium Carbonate Tablets prescribing information",
    year: 2023,
    url: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=d3284649-ed4c-4096-987b-4ac16b8278f2&type=display",
  },
  halter: {
    body: "Halter MJ",
    work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition",
    year: 2021,
  },
  sbar: {
    body: "Institute for Healthcare Improvement",
    work: "SBAR Tool: Situation-Background-Assessment-Recommendation",
    year: 2023,
    url: "https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation",
  },
  gina: {
    body: "Global Initiative for Asthma",
    work: "Summary Guide for Asthma Management and Prevention, for adults, adolescents and children 6 to 11 years",
    year: 2024,
    url: "https://ginasthma.org/wp-content/uploads/2024/12/GINA-Summary-Guide-2024-WEB-WMS.pdf",
  },
  wong: {
    body: "Hockenberry MJ, Duffy EA, Gibbs KD",
    work: "Wong's Nursing Care of Infants and Children, 12th edition",
    year: 2023,
  },
  stroke: {
    body: "Winstein CJ, Stein J, Arena R, et al. American Heart Association and American Stroke Association",
    work: "Guidelines for Adult Stroke Rehabilitation and Recovery. Stroke 47(6):e98",
    year: 2016,
    url: "https://www.ahajournals.org/doi/10.1161/str.0000000000000098",
  },
  delegation: {
    body: "National Council of State Boards of Nursing and American Nurses Association",
    work: "National Guidelines for Nursing Delegation",
    year: 2019,
    url: "https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf",
  },
};
