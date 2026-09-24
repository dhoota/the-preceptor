import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s09. Health Promotion and Maintenance. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "HPM",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const LOWDERMILK: Source = {
  body: "Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE",
  work: "Maternity and Women's Health Care, 13th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/maternity-and-womens-health-care/lowdermilk/978-0-323-81018-0",
};
export const PERRY: Source = {
  body: "Perry SE, Hockenberry MJ, Cashion K, Alden KR, Olshansky E, Lowdermilk DL",
  work: "Maternal Child Nursing Care, 7th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/maternal-child-nursing-care/perry/978-0-323-77671-4",
};
export const WONG: Source = { body: "Hockenberry MJ, Duffy EA, Gibbs K", work: "Wong's Nursing Care of Infants and Children, 12th edition", year: 2023 };
export const POTTER: Source = { body: "Potter PA, Perry AG, Stockert PA, Hall AM", work: "Fundamentals of Nursing, 11th edition", year: 2023 };
export const JARVIS: Source = {
  body: "Jarvis C, Eckhardt AL",
  work: "Physical Examination and Health Assessment, 9th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/physical-examination-and-health-assessment/jarvis/978-0-323-80984-9",
};
export const TOUHY: Source = {
  body: "Touhy TA, Jett KF",
  work: "Ebersole and Hess' Gerontological Nursing and Healthy Aging, 6th edition",
  year: 2021,
  url: "https://shop.elsevier.com/books/ebersole-and-hess-gerontological-nursing-and-healthy-aging/touhy/978-0-323-69803-0",
};
export const FOLIC: Source = {
  body: "US Preventive Services Task Force",
  work: "Folic Acid Supplementation to Prevent Neural Tube Defects: Reaffirmation Recommendation Statement. JAMA 330(5):454",
  year: 2023,
  url: "https://jamanetwork.com/journals/jama/fullarticle/2807739",
};
export const GDM: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening for Gestational Diabetes: Recommendation Statement. JAMA 326(6):531",
  year: 2021,
  url: "https://jamanetwork.com/journals/jama/fullarticle/2782858",
};
export const FETAL_SURV: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Antepartum Fetal Surveillance. ACOG Practice Bulletin No. 229. Obstetrics and Gynecology 137(6):e116",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/34011889/",
};
export const RHD: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Prevention of Rh D Alloimmunization. ACOG Practice Bulletin No. 181. Obstetrics and Gynecology 130(2):e57",
  year: 2017,
  url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/08/prevention-of-rh-d-alloimmunization",
};
export const EXERCISE: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Physical Activity and Exercise During Pregnancy and the Postpartum Period. ACOG Committee Opinion No. 804. Obstetrics and Gynecology 135(4):e178",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32217980/",
};
export const MILESTONES: Source = {
  body: "Zubler JM, Wiggins LD, Macias MM, et al.",
  work: "Evidence-Informed Milestones for Developmental Surveillance Tools. Pediatrics 149(3):e2021052138",
  year: 2022,
  url: "https://publications.aap.org/pediatrics/article/149/3/e2021052138/184748/Evidence-Informed-Milestones-for-Developmental",
};
export const BREASTFEEDING: Source = {
  body: "Meek JY, Noble L. American Academy of Pediatrics Section on Breastfeeding",
  work: "Policy Statement: Breastfeeding and the Use of Human Milk. Pediatrics 150(1):e2022057988",
  year: 2022,
  url: "https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Policy-Statement-Breastfeeding-and-the-Use-of",
};
export const CORD: Source = {
  body: "Stewart D, Benitz W. American Academy of Pediatrics Committee on Fetus and Newborn",
  work: "Umbilical Cord Care in the Newborn Infant. Pediatrics 138(3):e20162149",
  year: 2016,
  url: "https://publications.aap.org/pediatrics/article/138/3/e20162149/52610/Umbilical-Cord-Care-in-the-Newborn-Infant",
};
export const BILI: Source = {
  body: "Kemper AR, Newman TB, Slaughter JL, et al. American Academy of Pediatrics",
  work: "Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation. Pediatrics 150(3):e2022058859",
  year: 2022,
  url: "https://publications.aap.org/pediatrics/article/150/3/e2022058859/188726/Clinical-Practice-Guideline-Revision-Management-of",
};
export const WEIGHT_LOSS: Source = {
  body: "Flaherman VJ, Schaefer EW, Kuzniewicz MW, Li SX, Walsh EM, Paul IM",
  work: "Early Weight Loss Nomograms for Exclusively Breastfed Newborns. Pediatrics 135(1):e16",
  year: 2015,
  url: "https://pubmed.ncbi.nlm.nih.gov/25554815/",
};
export const APGAR: Source = {
  body: "American Academy of Pediatrics Committee on Fetus and Newborn and American College of Obstetricians and Gynecologists",
  work: "The Apgar Score. Pediatrics 136(4):819",
  year: 2015,
  url: "https://publications.aap.org/pediatrics/article/136/4/819/73821/The-Apgar-Score",
};
export const SAFE_SLEEP: Source = {
  body: "Moon RY, Carlin RF, Hand I. American Academy of Pediatrics Task Force on Sudden Infant Death Syndrome",
  work: "Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment. Pediatrics 150(1):e2022057990",
  year: 2022,
};
export const PERINATAL_MH: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Screening and Diagnosis of Mental Health Conditions During Pregnancy and Postpartum. ACOG Clinical Practice Guideline No. 4. Obstetrics and Gynecology 141(6):1232",
  year: 2023,
  url: "https://pubmed.ncbi.nlm.nih.gov/37486660/",
};
export const CAR_SEAT: Source = {
  body: "Durbin DR, Hoffman BD. American Academy of Pediatrics Council on Injury, Violence, and Poison Prevention",
  work: "Child Passenger Safety. Pediatrics 142(5):e20182460",
  year: 2018,
  url: "https://publications.aap.org/pediatrics/article/142/5/e20182460/38530/Child-Passenger-Safety",
};
export const IRON: Source = {
  body: "Baker RD, Greer FR. American Academy of Pediatrics Committee on Nutrition",
  work: "Diagnosis and Prevention of Iron Deficiency and Iron-Deficiency Anemia in Infants and Young Children (0 to 3 Years of Age). Pediatrics 126(5):1040",
  year: 2010,
  url: "https://publications.aap.org/pediatrics/article/126/5/1040/65343/Diagnosis-and-Prevention-of-Iron-Deficiency-and",
};
export const SLEEP: Source = {
  body: "Paruthi S, Brooks LJ, D'Ambrosio C, et al. American Academy of Sleep Medicine",
  work: "Recommended Amount of Sleep for Pediatric Populations: A Consensus Statement. Journal of Clinical Sleep Medicine 12(6):785",
  year: 2016,
  url: "https://jcsm.aasm.org/doi/10.5664/jcsm.5866",
};
export const BRIGHT: Source = {
  body: "Hagan JF, Shaw JS, Duncan PM. American Academy of Pediatrics",
  work: "Bright Futures: Guidelines for Health Supervision of Infants, Children, and Adolescents, 4th edition",
  year: 2017,
  url: "https://www.aap.org/Bright-Futures-Guidelines-for-Health-Supervision-of-Infants-Children-and-Adolescents-4th-Edition",
};
export const VAX_GENERAL: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Epidemiology and Prevention of Vaccine-Preventable Diseases (Pink Book), Chapter 2: General Best Practice Guidance for Immunization",
  year: 2024,
  url: "https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-2-general-best-practice-guidance.html",
};
export const VAX_PREG: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Guidelines for Vaccinating Pregnant Persons",
  year: 2024,
  url: "https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/index.html",
};
export const ZOSTER: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Shingles Vaccine Recommendations: Clinical Considerations for Shingrix",
  year: 2024,
  url: "https://www.cdc.gov/shingles/hcp/vaccine-considerations/index.html",
};
export const CRC: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening for Colorectal Cancer: Recommendation Statement. JAMA 325(19):1965",
  year: 2021,
  url: "https://jamanetwork.com/journals/jama/fullarticle/2779985",
};
export const BREAST: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening for Breast Cancer: Recommendation Statement. JAMA 331(22):1918",
  year: 2024,
  url: "https://jamanetwork.com/journals/jama/fullarticle/2818283",
};
export const LUNG: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening for Lung Cancer: Recommendation Statement. JAMA 325(10):962",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/33687470/",
};
export const OSTEO: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening for Osteoporosis to Prevent Fractures: Recommendation Statement. JAMA 333(6):498",
  year: 2025,
  url: "https://jamanetwork.com/journals/jama/fullarticle/2829238",
};
export const STI: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening for Chlamydia and Gonorrhea: Recommendation Statement. JAMA 326(10):949",
  year: 2021,
  url: "https://jamanetwork.com/journals/jama/fullarticle/2784136",
};
export const ALCOHOL: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening and Behavioral Counseling Interventions to Reduce Unhealthy Alcohol Use in Adolescents and Adults: Recommendation Statement. JAMA 320(18):1899",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/30422199/",
};
export const HTN: Source = {
  body: "Jones DW, Ferdinand KC, Taler SJ, et al. American Heart Association and American College of Cardiology",
  work: "2025 Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. Hypertension",
  year: 2025,
  url: "https://www.ahajournals.org/doi/10.1161/HYP.0000000000000249",
};
export const BP_MEASURE: Source = {
  body: "Muntner P, Shimbo D, Carey RM, et al. American Heart Association",
  work: "Measurement of Blood Pressure in Humans: A Scientific Statement. Hypertension 73(5):e35",
  year: 2019,
  url: "https://www.ahajournals.org/doi/10.1161/HYP.0000000000000087",
};
export const ORTHO: Source = {
  body: "Freeman R, Wieling W, Axelrod FB, et al.",
  work: "Consensus Statement on the Definition of Orthostatic Hypotension, Neurally Mediated Syncope and the Postural Tachycardia Syndrome. Clinical Autonomic Research 21(2):69",
  year: 2011,
};
export const STEADI: Source = {
  body: "Centers for Disease Control and Prevention, STEADI",
  work: "Check for Safety: A Home Fall Prevention Checklist for Older Adults",
  year: 2017,
  url: "https://www.cdc.gov/steadi/pdf/steadi-brochure-checkforsafety-508.pdf",
};
export const MEC: Source = {
  body: "Nguyen AT, Curtis KM, et al. Centers for Disease Control and Prevention",
  work: "U.S. Medical Eligibility Criteria for Contraceptive Use, 2024. MMWR Recommendations and Reports 73(4):1",
  year: 2024,
  url: "https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm",
};
export const TOBACCO: Source = {
  body: "Fiore MC, Jaen CR, Baker TB, et al. US Public Health Service",
  work: "Treating Tobacco Use and Dependence: 2008 Update. Clinical Practice Guideline",
  year: 2008,
  url: "https://www.ahrq.gov/prevention/guidelines/tobacco/index.html",
};
export const AAD_SKIN: Source = {
  body: "American Academy of Dermatology",
  work: "What to Look For: ABCDEs of Melanoma",
  year: 2024,
  url: "https://www.aad.org/public/diseases/skin-cancer/abcdes-melanoma",
};
export const PAG: Source = {
  body: "US Department of Health and Human Services",
  work: "Physical Activity Guidelines for Americans, 2nd edition",
  year: 2018,
  url: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines/top-10-things-know",
};
