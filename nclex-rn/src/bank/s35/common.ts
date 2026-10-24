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
export const ABILIFY_MAINTENA: Source = {
  body: "Otsuka America Pharmaceutical, Inc.",
  work: "ABILIFY MAINTENA (aripiprazole) extended-release injectable suspension, US prescribing information",
  year: 2026,
  url: "https://www.otsuka-us.com/sites/g/files/qhldwo11721/files/media/static/Abilify-M-PI.pdf",
};
export const CHANTIX: Source = { body: "Pfizer Laboratories", work: "CHANTIX (varenicline) tablets, US prescribing information", year: 2025, url: dm("f0ff4f27-5185-4881-a749-c6b7a0ca5696") };
export const VIVITROL: Source = { body: "Alkermes, Inc.", work: "VIVITROL (naltrexone for extended-release injectable suspension), US prescribing information", year: 2026, url: "https://www.vivitrolhcp.com/content/pdfs/prescribing-information.pdf" };
export const ACAMPROSATE: Source = { body: "American Health Packaging", work: "Acamprosate calcium delayed-release tablets, US prescribing information", year: 2020, url: dm("94ef2a5c-cc2f-4e7f-b159-b2d38188d5b8") };
export const METHADONE: Source = { body: "VistaPharm, LLC", work: "Methadone hydrochloride tablets for oral suspension, US prescribing information", year: 2026, url: dm("c54baaee-8ea4-45f5-a5c8-bb84cf86832f") };
export const KRANTZ_2009: Source = {
  body: "Krantz MJ, Martin J, Stimmel B, Mehta D, Haigney MC",
  work: "QTc Interval Screening in Methadone Treatment. Annals of Internal Medicine 150(6):387",
  year: 2009,
  url: "https://pubmed.ncbi.nlm.nih.gov/19153406/",
};
export const RIFAMPIN: Source = { body: "American Health Packaging", work: "Rifampin capsules, US prescribing information", year: 2026, url: dm("50f706f9-5003-4e15-bece-85b6213b1f5c") };
export const SPRAVATO: Source = {
  body: "Janssen Pharmaceuticals, Inc.",
  work: "SPRAVATO (esketamine) nasal spray, US prescribing information",
  year: 2026,
  url: "https://www.janssenlabels.com/package-insert/product-monograph/prescribing-information/SPRAVATO-pi.pdf",
};
export const STRATTERA: Source = { body: "Eli Lilly and Company", work: "STRATTERA (atomoxetine) capsules, US prescribing information", year: 2026, url: "https://pi.lilly.com/us/strattera-pi.pdf" };
export const VYVANSE: Source = { body: "Takeda Pharmaceuticals America, Inc.", work: "VYVANSE (lisdexamfetamine dimesylate) capsules and chewable tablets, US prescribing information", year: 2026, url: dm("704e4378-ca83-445c-8b45-3cfa51c1ecad") };
export const KEYTRUDA: Source = { body: "Merck Sharp and Dohme LLC", work: "KEYTRUDA (pembrolizumab) injection, US prescribing information", year: 2026, url: dm("9333c79b-d487-4538-a9f0-71b91a02b287") };
export const ZIAGEN: Source = { body: "ViiV Healthcare", work: "ZIAGEN (abacavir) tablets and oral solution, US prescribing information", year: 2023, url: dm("ca73b519-015a-436d-aa3c-af53492825a1") };
export const ETHAMBUTOL: Source = { body: "STI Pharma LLC", work: "Ethambutol hydrochloride tablets, US prescribing information", year: 2026, url: dm("3f6428d6-3745-4337-ad78-ebfff9f49135") };
export const YESCARTA: Source = { body: "Kite Pharma, Inc.", work: "YESCARTA (axicabtagene ciloleucel) suspension for IV infusion, US prescribing information", year: 2026, url: dm("9b70606e-b99c-4272-a0f1-b5523cce0c59") };
export const ISONIAZID: Source = { body: "RemedyRepack Inc.", work: "Isoniazid tablets, US prescribing information", year: 2026, url: dm("6dab7b7b-a3a9-47ef-b423-134bc6970d8b") };
export const VANCOMYCIN: Source = { body: "Sagent Pharmaceuticals", work: "Vancomycin hydrochloride for injection, US prescribing information", year: 2025, url: dm("06dcfd36-942f-4752-86ad-4c5a6fc3e48f") };
export const AMPHO_B: Source = { body: "X-Gen Pharmaceuticals, Inc.", work: "Amphotericin B for injection, US prescribing information", year: 2020, url: dm("a0a54943-9ce4-4f3e-b681-a1a9144c16ce") };
export const AMBISOME: Source = { body: "Astellas Pharma US, Inc.", work: "AMBISOME (amphotericin B) liposome for injection, US prescribing information", year: 2026, url: dm("f7be6506-4d20-401e-a0ff-02ad7c33158a") };
export const CDC_FLU_AV: Source = { body: "Centers for Disease Control and Prevention", work: "Influenza Antiviral Medications: Summary for Clinicians", year: 2026, url: "https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html" };
export const TAMIFLU: Source = { body: "Genentech, Inc.", work: "TAMIFLU (oseltamivir phosphate) capsules and oral suspension, US prescribing information", year: 2019, url: dm("ee3c9555-60f2-4f82-a760-11983c86e97b") };
export const VALTREX: Source = { body: "GlaxoSmithKline", work: "VALTREX (valacyclovir) caplets, US prescribing information", year: 2026, url: dm("56a62c21-bead-4f3b-a24e-c3fd0b4a732f") };
