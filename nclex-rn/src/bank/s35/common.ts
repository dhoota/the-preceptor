import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s35. Pharmacological and Parenteral Therapies. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "PPT",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

const dm = (setid: string) => `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${setid}`;

export const HUMIRA: Source = { body: "AbbVie Inc.", work: "HUMIRA (adalimumab) injection, US prescribing information", year: 2025, url: "https://www.rxabbvie.com/pdf/humira.pdf" };
export const REMICADE: Source = {
  body: "Janssen Biotech, Inc.",
  work: "REMICADE (infliximab) for injection, US prescribing information",
  year: 2025,
  url: "https://www.janssenlabels.com/package-insert/product-monograph/prescribing-information/REMICADE-pi.pdf",
};
export const XELJANZ: Source = { body: "Pfizer Laboratories", work: "XELJANZ (tofacitinib) tablets, US prescribing information", year: 2026, url: dm("68e3d6b2-7838-4d2d-a417-09d919b43e13") };
export const MOUNJARO: Source = { body: "Eli Lilly and Company", work: "MOUNJARO (tirzepatide) injection, US prescribing information", year: 2026, url: "https://pi.lilly.com/us/mounjaro-uspi.pdf" };
export const VICTOZA: Source = { body: "Novo Nordisk", work: "VICTOZA (liraglutide) injection, US prescribing information", year: 2025, url: "https://www.novo-pi.com/victoza.pdf" };
export const OZEMPIC: Source = { body: "Novo Nordisk", work: "OZEMPIC (semaglutide) injection, US prescribing information", year: 2026, url: "https://www.novo-pi.com/ozempic.pdf" };
export const FARXIGA: Source = { body: "AstraZeneca Pharmaceuticals LP", work: "FARXIGA (dapagliflozin) tablets, US prescribing information", year: 2026, url: dm("72ad22ae-efe6-4cd6-a302-98aaee423d69") };
export const HYPERGLYCEMIC_2024: Source = {
  body: "Umpierrez GE, Davis GM, ElSayed NA, et al. American Diabetes Association and partner societies",
  work: "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care 47(8):1257",
  year: 2024,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11272983/",
};
export const LTBI_2020: Source = {
  body: "Sterling TR, Njie G, Zenner D, et al. National Tuberculosis Controllers Association and CDC",
  work: "Guidelines for the Treatment of Latent Tuberculosis Infection, 2020. MMWR Recommendations and Reports 69(1):1",
  year: 2020,
  url: "https://www.cdc.gov/mmwr/volumes/69/rr/rr6901a1.htm",
};
export const PROTAMINE: Source = { body: "Fresenius Kabi USA, LLC", work: "Protamine sulfate injection, US prescribing information", year: 2025, url: dm("c76876da-b9a8-45d0-9278-7df3288d3a06") };
export const PRAXBIND: Source = { body: "Boehringer Ingelheim Pharmaceuticals, Inc.", work: "PRAXBIND (idarucizumab) injection, US prescribing information", year: 2023, url: dm("c7400f8a-dcf4-a6df-6d07-983081b1bf34") };
export const GARCIA_2012: Source = {
  body: "Garcia DA, Baglin TP, Weitz JI, Samama MM. American College of Chest Physicians",
  work: "Parenteral Anticoagulants: Antithrombotic Therapy and Prevention of Thrombosis, 9th edition. Chest 141(2 Suppl):e24S",
  year: 2012,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3278070/",
};
export const ENTRESTO: Source = { body: "Novartis Pharmaceuticals Corporation", work: "ENTRESTO (sacubitril and valsartan) tablets, US prescribing information", year: 2024, url: "https://www.novartis.com/us-en/sites/novartis_us/files/entresto.pdf" };
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const CORLANOR: Source = { body: "Amgen Inc.", work: "CORLANOR (ivabradine) tablets and oral solution, US prescribing information", year: 2021, url: "https://www.pi.amgen.com/-/media/Project/Amgen/Repository/pi-amgen-com/Corlanor/corlanor_pi.pdf" };
export const VITAMIN_K: Source = { body: "Hospira, Inc.", work: "Vitamin K1 (phytonadione) injectable emulsion, US prescribing information", year: 2025, url: dm("e8808230-2c44-44c6-8cab-8f29b6b34051") };
export const LAMICTAL: Source = { body: "GlaxoSmithKline", work: "LAMICTAL (lamotrigine) tablets, US prescribing information", year: 2025, url: "https://gskpro.com/content/dam/global/hcpportal/en_US/Prescribing_Information/Lamictal/pdf/LAMICTAL-PI-MG.PDF" };
export const RELPREVV: Source = { body: "H2-Pharma, LLC", work: "ZYPREXA RELPREVV (olanzapine pamoate) extended-release injectable suspension, US prescribing information", year: 2026, url: dm("11544cba-64a9-49cb-8d74-da228053b252") };
