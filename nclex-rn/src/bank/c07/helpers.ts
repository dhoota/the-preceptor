import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c07 items. */
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
  ata: {
    body: "Ross DS, Burch HB, Cooper DS, et al. American Thyroid Association",
    work: "2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid 26(10):1343",
    year: 2016,
    url: "https://journals.sagepub.com/doi/10.1089/thy.2016.0229",
  },
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  kdigoK: {
    body: "Clase CM, Carrero JJ, Ellison DH, et al. Kidney Disease: Improving Global Outcomes",
    work: "Potassium homeostasis and management of dyskalemia in kidney diseases: conclusions from a KDIGO Controversies Conference. Kidney International 97(1):42",
    year: 2020,
    url: "https://kdigo.org/wp-content/uploads/2018/04/KDIGO-Potassium-Management-Final-publication.pdf",
  },
  delegation: {
    body: "National Council of State Boards of Nursing and American Nurses Association",
    work: "National Guidelines for Nursing Delegation",
    year: 2019,
    url: "https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf",
  },
  uspstf: {
    body: "Barry MJ, Nicholson WK, Silverstein M, et al. US Preventive Services Task Force",
    work: "Screening for Depression and Suicide Risk in Adults: US Preventive Services Task Force Recommendation Statement. JAMA 329(23):2057",
    year: 2023,
    url: "https://jamanetwork.com/journals/jama/fullarticle/2806144",
  },
  tjc: {
    body: "The Joint Commission",
    work: "National Performance Goals Effective January 2026 for the Hospital Program. NPG.08.01.01: The hospital reduces the risk for suicide",
    year: 2025,
    url: "https://www.jointcommission.org/en-us/standards/national-performance-goals/reducing-the-risk-for-suicide",
  },
  abaReferral: {
    body: "American Burn Association",
    work: "Guidelines for Burn Patient Referral",
    year: 2022,
    url: "https://ameriburn.org/resources/burnreferral/",
  },
  abaFluid: {
    body: "Cartotto R, Johnson LS, Savetamal A, et al. American Burn Association",
    work: "American Burn Association Clinical Practice Guidelines on Burn Shock Resuscitation. Journal of Burn Care and Research 45(3):565",
    year: 2024,
    url: "https://academic.oup.com/jbcr/article/45/3/565/7458089",
  },
  isbi: {
    body: "ISBI Practice Guidelines Committee. International Society for Burn Injuries",
    work: "ISBI Practice Guidelines for Burn Care. Burns 42(5):953",
    year: 2016,
    url: "https://www.sciencedirect.com/science/article/pii/S0305417916301449",
  },
  tetanus: {
    body: "Havers FP, Moro PL, Hunter P, Hariri S, Bernstein H. Advisory Committee on Immunization Practices",
    work: "Use of Tetanus Toxoid, Reduced Diphtheria Toxoid, and Acellular Pertussis Vaccines: Updated Recommendations of the ACIP, United States, 2019. MMWR 69(3):77",
    year: 2020,
    url: "https://www.cdc.gov/mmwr/volumes/69/wr/mm6903a5.htm",
  },
  family: {
    body: "Davidson JE, Aslakson RA, Long AC, et al. Society of Critical Care Medicine",
    work: "Guidelines for Family-Centered Care in the Neonatal, Pediatric, and Adult ICU. Critical Care Medicine 45(1):103",
    year: 2017,
    url: "https://pubmed.ncbi.nlm.nih.gov/27984278/",
  },
  pedsTbi: {
    body: "Kochanek PM, Tasker RC, Carney N, et al. Brain Trauma Foundation",
    work: "Guidelines for the Management of Pediatric Severe Traumatic Brain Injury, Third Edition: Executive Summary. Neurosurgery 84(6):1169",
    year: 2019,
    url: "https://pubmed.ncbi.nlm.nih.gov/30822776/",
  },
  wong: {
    body: "Hockenberry MJ, Duffy EA, Gibbs KD",
    work: "Wong's Nursing Care of Infants and Children, 12th edition",
    year: 2023,
  },
  ad: {
    body: "Krassioukov A, Linsenmeyer TA, Beck LA, et al. Consortium for Spinal Cord Medicine",
    work: "Evaluation and Management of Autonomic Dysreflexia and Other Autonomic Dysfunctions: Preventing the Highs and Lows. Journal of Spinal Cord Medicine 44(4):631",
    year: 2021,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8288133/",
  },
  adAcute: {
    body: "Consortium for Spinal Cord Medicine. Paralyzed Veterans of America",
    work: "Acute Management of Autonomic Dysreflexia: Individuals with Spinal Cord Injury Presenting to Health-Care Facilities, 2nd edition",
    year: 2001,
    url: "https://pva.org/wp-content/uploads/2021/09/cpg_autonomic-dysreflexia.pdf",
  },
};
