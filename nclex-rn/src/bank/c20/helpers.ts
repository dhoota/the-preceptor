import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c20 items. */
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
  hhs: {
    body: "Umpierrez GE, Davis GM, ElSayed NA, et al. American Diabetes Association and European Association for the Study of Diabetes",
    work: "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care 47(8):1257",
    year: 2024,
    url: "https://pubmed.ncbi.nlm.nih.gov/39052901/",
  },
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  ismp: {
    body: "Institute for Safe Medication Practices",
    work: "ISMP List of High-Alert Medications in Acute Care Settings",
    year: 2024,
    url: "https://www.ismp.org/recommendations/high-alert-medications-acute-list",
  },
  falls: {
    body: "Montero-Odasso M, van der Velde N, Martin FC, et al. Task Force on Global Guidelines for Falls in Older Adults",
    work: "World guidelines for falls prevention and management for older adults. Age and Ageing 51(9):afac205",
    year: 2022,
    url: "https://academic.oup.com/ageing/article/51/9/afac205/6730755",
  },
  cushing: {
    body: "Nieman LK, Biller BMK, Findling JW, et al. Endocrine Society",
    work: "Treatment of Cushing's Syndrome: An Endocrine Society Clinical Practice Guideline. Journal of Clinical Endocrinology and Metabolism 100(8):2807",
    year: 2015,
    url: "https://pubmed.ncbi.nlm.nih.gov/26222757/",
  },
  potassium: {
    body: "Irish Medication Safety Network",
    work: "Best Practice Guidelines for the Safe Use of Intravenous Potassium in Irish Hospitals",
    year: 2020,
    url: "https://imsn.ie/wp-content/uploads/2020/10/IMSN-Best-Practice-Guideline-on-IV-Potassium-Oct-2020-approved.pdf",
  },
  apap: {
    body: "Dart RC, Mullins ME, Matoushek T, et al. America's Poison Centers, AACT, ACMT and Canadian Association of Poison Control Centres",
    work: "Management of Acetaminophen Poisoning in the US and Canada: A Consensus Statement. JAMA Network Open 6(8):e2327739",
    year: 2023,
    url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2808062",
  },
  acetadote: {
    body: "US Food and Drug Administration",
    work: "Acetadote (acetylcysteine) injection prescribing information",
    year: 2024,
    url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/021539s019lbl.pdf",
  },
  teenSuicide: {
    body: "Hua LL, Lee J, Rahmandar MH, Sigel EJ. American Academy of Pediatrics Committee on Adolescence",
    work: "Suicide and Suicide Risk in Adolescents. Pediatrics 153(1):e2023064800",
    year: 2024,
    url: "https://pubmed.ncbi.nlm.nih.gov/38073403/",
  },
  jcSuicide: {
    body: "The Joint Commission",
    work: "R3 Report Issue 18: National Patient Safety Goal for Suicide Prevention",
    year: 2019,
    url: "https://www.jointcommission.org/en-us/standards/r3-report/r3-report-18",
  },
  ie: {
    body: "Baddour LM, Wilson WR, Bayer AS, et al. American Heart Association",
    work: "Infective Endocarditis in Adults: Diagnosis, Antimicrobial Therapy, and Management of Complications. Circulation 132(15):1435",
    year: 2015,
    url: "https://pubmed.ncbi.nlm.nih.gov/26373316/",
  },
  cows: {
    body: "Wesson DR, Ling W",
    work: "The Clinical Opiate Withdrawal Scale (COWS). Journal of Psychoactive Drugs 35(2):253",
    year: 2003,
    url: "https://pubmed.ncbi.nlm.nih.gov/12924748/",
  },
  asam: {
    body: "American Society of Addiction Medicine",
    work: "The ASAM National Practice Guideline for the Treatment of Opioid Use Disorder: 2020 Focused Update. Journal of Addiction Medicine 14(2S)",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/32511106/",
  },
  vanco: {
    body: "US Food and Drug Administration",
    work: "Vancomycin Injection prescribing information",
    year: 2024,
    url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/050671s032lbl.pdf",
  },
  samhsa: {
    body: "Substance Abuse and Mental Health Services Administration",
    work: "SAMHSA Overdose Prevention and Response Toolkit, PEP23-03-00-001",
    year: 2023,
    url: "https://library.samhsa.gov/product/overdose-prevention-response-toolkit/pep23-03-00-001",
  },
  zoster: {
    body: "Dworkin RH, Johnson RW, Breuer J, et al.",
    work: "Recommendations for the Management of Herpes Zoster. Clinical Infectious Diseases 44(Suppl 1):S1",
    year: 2007,
    url: "https://academic.oup.com/cid/article/44/Supplement_1/S1/334966",
  },
  cdcShingles: {
    body: "Centers for Disease Control and Prevention",
    work: "About Shingles (Herpes Zoster)",
    year: 2025,
    url: "https://www.cdc.gov/shingles/about/index.html",
  },
  cdcShinglesHcp: {
    body: "Centers for Disease Control and Prevention",
    work: "Clinical Overview of Shingles (Herpes Zoster)",
    year: 2024,
    url: "https://www.cdc.gov/shingles/hcp/clinical-overview/index.html",
  },
  rzv: {
    body: "Dooling KL, Guo A, Patel M, et al. Advisory Committee on Immunization Practices",
    work: "Recommendations of the Advisory Committee on Immunization Practices for Use of Herpes Zoster Vaccines. MMWR 67(3):103",
    year: 2018,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5812314/",
  },
  beers: {
    body: "American Geriatrics Society Beers Criteria Update Expert Panel",
    work: "American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society 71(7):2052",
    year: 2023,
    url: "https://pubmed.ncbi.nlm.nih.gov/37139824/",
  },
};
