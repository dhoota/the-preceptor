import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c05 items. */
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
  nms: {
    body: "Strawn JR, Keck PE Jr, Caroff SN",
    work: "Neuroleptic Malignant Syndrome. American Journal of Psychiatry 164(6):870",
    year: 2007,
    url: "https://psychiatryonline.org/doi/10.1176/ajp.2007.164.6.870",
  },
  tse: {
    body: "Tse L, Barr AM, Scarapicchia V, Vila-Rodriguez F",
    work: "Neuroleptic Malignant Syndrome: A Review from a Clinically Oriented Perspective. Current Neuropharmacology 13(3):395",
    year: 2015,
    url: "https://pubmed.ncbi.nlm.nih.gov/26411967/",
  },
  halter: {
    body: "Halter MJ",
    work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition",
    year: 2022,
    url: "https://shop.elsevier.com/books/varcarolis-foundations-of-psychiatric-mental-health-nursing/halter/978-0-323-69707-1",
  },
  delegation: {
    body: "National Council of State Boards of Nursing and American Nurses Association",
    work: "National Guidelines for Nursing Delegation",
    year: 2019,
    url: "https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf",
  },
  wong: {
    body: "Hockenberry MJ, Duffy EA, Gibbs KD",
    work: "Wong's Nursing Care of Infants and Children, 12th edition",
    year: 2023,
  },
  lowdermilk: {
    body: "Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE",
    work: "Maternity and Women's Health Care, 13th edition",
    year: 2023,
  },
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  adaFoot: {
    body: "American Diabetes Association Professional Practice Committee",
    work: "12. Retinopathy, Neuropathy, and Foot Care: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S261",
    year: 2026,
    url: "https://diabetesjournals.org/care/article/49/Supplement_1/S261/163919/12-Retinopathy-Neuropathy-and-Foot-Care-Standards",
  },
  idsa: {
    body: "Stevens DL, Bisno AL, Chambers HF, et al. Infectious Diseases Society of America",
    work: "Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014 Update. Clinical Infectious Diseases 59(2):e10",
    year: 2014,
    url: "https://academic.oup.com/cid/article/59/2/e10/2895845",
  },
  cdcMrsa: {
    body: "Centers for Disease Control and Prevention",
    work: "Preventing Methicillin-resistant Staphylococcus aureus (MRSA)",
    year: 2025,
    url: "https://www.cdc.gov/mrsa/prevention/index.html",
  },
  cdcAthletes: {
    body: "Centers for Disease Control and Prevention",
    work: "Athletes: MRSA Prevention and Control",
    year: 2025,
    url: "https://www.cdc.gov/mrsa/prevention/athletes.html",
  },
  isolation: {
    body: "Siegel JD, Rhinehart E, Jackson M, Chiarello L. Healthcare Infection Control Practices Advisory Committee",
    work: "2007 Guideline for Isolation Precautions: Preventing Transmission of Infectious Agents in Healthcare Settings",
    year: 2007,
    url: "https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html",
  },
  bag: {
    body: "McGoldrick M",
    work: "Bag Technique: Best Practices for Managing the Home Care Bag. Home Healthcare Now 43(1):9",
    year: 2025,
    url: "https://pubmed.ncbi.nlm.nih.gov/39763037/",
  },
  adamkin: {
    body: "Adamkin DH. American Academy of Pediatrics Committee on Fetus and Newborn",
    work: "Postnatal Glucose Homeostasis in Late-Preterm and Term Infants. Pediatrics 127(3):575",
    year: 2011,
    url: "https://pubmed.ncbi.nlm.nih.gov/21357346/",
  },
  abm: {
    body: "Wight NE. Academy of Breastfeeding Medicine",
    work: "ABM Clinical Protocol #1: Guidelines for Glucose Monitoring and Treatment of Hypoglycemia in Term and Late Preterm Neonates, Revised 2021. Breastfeeding Medicine 16(5):353",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/33835840/",
  },
  ivf: {
    body: "Feld LG, Neuspiel DR, Foster BA, et al. American Academy of Pediatrics Subcommittee on Fluid and Electrolyte Therapy",
    work: "Clinical Practice Guideline: Maintenance Intravenous Fluids in Children. Pediatrics 142(6):e20183083",
    year: 2018,
    url: "https://pubmed.ncbi.nlm.nih.gov/30478247/",
  },
};
