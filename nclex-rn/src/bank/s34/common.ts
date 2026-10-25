import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s34. Basic Care and Comfort and administration technique. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "need" | "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  canada: "",
  reviewed: true,
  version: 1,
  ...over,
});

export const POTTER: Source = {
  body: "Potter PA, Perry AG, Stockert PA, Hall AM",
  work: "Fundamentals of Nursing, 11th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0",
};
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const LEHNE: Source = { body: "Burchum JR, Rosenthal LD", work: "Lehne's Pharmacology for Nursing Care, 11th edition", year: 2022 };
export const HOCKENBERRY: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs KD",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2024,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const NPIAP: Source = {
  body: "European Pressure Ulcer Advisory Panel, National Pressure Injury Advisory Panel, Pan Pacific Pressure Injury Alliance",
  work: "Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline, The International Guideline, 3rd edition",
  year: 2019,
  url: "https://internationalguideline.com/2019",
};
export const GILLETTE_SOCKS: Source = {
  body: "Gillette Children's",
  work: "Patient Education: Prosthetic Socks",
  year: 2026,
  url: "https://www.gillettechildrens.org/your-visit/patient-education/prosthetic-socks",
};
export const ORTHOSES: Source = {
  body: "Island Health, Queen Alexandra Orthotics, Prosthetics and Seating",
  work: "Orthoses Guidelines: Break In Procedure and Care of Orthoses",
  year: 2019,
  url: "https://www.islandhealth.ca/sites/default/files/2019-11/orthoses-guidelines.pdf",
};
export const SPC_UHS: Source = {
  body: "University Hospital Southampton NHS Foundation Trust",
  work: "Caring for Your Suprapubic Urinary Catheter, Patient Information Factsheet, version 1",
  year: 2024,
  url: "https://uhs.nhs.uk/Media/UHS-website-2019/Patientinformation/Digestionandurinaryhealth/Caring-for-your-suprapubic-catheter-1619-PIL.pdf",
};
export const NEPHROSTOMY: Source = {
  body: "Kaiser Permanente Health Encyclopedia, WebMD Ignite Clinical Review Board",
  work: "Nephrostomy Tube Care: Care Instructions",
  year: 2026,
  url: "https://healthy.kaiserpermanente.org/health-wellness/health-encyclopedia/he.nephrostomy-tube-care-care-instructions.zc2006",
};
export const BLADDER_SCAN: Source = {
  body: "Davis C, Chrisman J, Walden P",
  work: "To Scan or Not to Scan? Detecting Urinary Retention. Nursing Made Incredibly Easy 10(4):53",
  year: 2012,
  url: "https://msskills2012.yolasite.com/resources/To_scan_or_not_to_scan__Detecting_urinary.13%5B1%5D.pdf",
};
export const AHS_IC: Source = {
  body: "Alberta Health Services, Neurosciences, Rehabilitation and Vision Strategic Clinical Network",
  work: "Intermittent Catheter Loop. Raising the Standard: Standardizing Bladder Management for SCI in Alberta",
  year: 2018,
  url: "https://albertahealthservices.ca/assets/about/scn/ahs-scn-nrv-spinal-cord-injury-intermittent-catheter-loop.pdf",
};
export const CAUTI: Source = {
  body: "Gould CV, Umscheid CA, Agarwal RK, Kuntz G, Pegues DA. Healthcare Infection Control Practices Advisory Committee",
  work: "Guideline for Prevention of Catheter-Associated Urinary Tract Infections 2009",
  year: 2009,
  url: "https://www.cdc.gov/infection-control/hcp/cauti/index.html",
};
export const MSK_IRRIGATION: Source = {
  body: "Memorial Sloan Kettering Cancer Center",
  work: "Colostomy Irrigation Instructions for a Sigmoid or Descending Colostomy",
  year: 2022,
  url: "https://www.mskcc.org/cancer-care/patient-education/colostomy-irrigation-instructions-sigmoid-descending-colostomy",
};
export const BURN_REHAB: Source = {
  body: "Chinese Burn Association, Chinese Association of Burn Surgeons",
  work: "Guidelines for Burn Rehabilitation in China. Burns and Trauma 3:20",
  year: 2015,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4964028/",
};
export const CPM_SFH: Source = {
  body: "Sherwood Forest Hospitals NHS Foundation Trust",
  work: "Information for Patients: Continuous Passive Motion (CPM)",
  year: 2025,
  url: "https://www.sfh-tr.nhs.uk/media/hknarjxv/pil202508-04-cpm-continuous-passive-motion.pdf",
};
export const SPLINT_UHS: Source = {
  body: "University Hospital Southampton NHS Foundation Trust",
  work: "Thermoplastic Splint Instructions, Patient Information Factsheet, version 3",
  year: 2026,
  url: "https://www.uhs.nhs.uk/Media/UHS-website-2019/Patientinformation/Medicinestherapiesandanaesthetics/Thermoplastic-splint-instructions-1822-PIL.pdf",
};
export const IDDSI: Source = {
  body: "International Dysphagia Diet Standardisation Initiative",
  work: "Complete IDDSI Framework Detailed Definitions 2.0",
  year: 2019,
  url: "https://iddsi.org/framework/",
};
export const KDOQI: Source = {
  body: "Ikizler TA, Burrowes JD, Byham-Gray LD, et al. National Kidney Foundation KDOQI",
  work: "KDOQI Clinical Practice Guideline for Nutrition in CKD: 2020 Update. American Journal of Kidney Diseases 76(3 Suppl 1):S1",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32829751/",
};
export const PHOS_SOURCES: Source = {
  body: "Kalantar-Zadeh K, Gutekunst L, Mehrotra R, et al.",
  work: "Understanding Sources of Dietary Phosphorus in the Treatment of Patients With Chronic Kidney Disease. Clinical Journal of the American Society of Nephrology 5(3):519",
  year: 2010,
  url: "https://pubmed.ncbi.nlm.nih.gov/20093346/",
};
export const ADA_NUTRITION: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "5. Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S89",
  year: 2026,
  url: "https://doi.org/10.2337/dc26-s005",
};
export const RCH_JEJUNAL: Source = {
  body: "The Royal Children's Hospital Melbourne",
  work: "Clinical Practice Guideline: Jejunal Feeding",
  year: 2021,
  url: "https://www.rch.org.au/rchcpg/hospital_clinical_guideline_index/jejunal_feeding_guideline/",
};
export const ASPEN_EN: Source = {
  body: "Boullata JI, Carrera AL, Harvey L, et al. American Society for Parenteral and Enteral Nutrition",
  work: "ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN Journal of Parenteral and Enteral Nutrition 41(1):15",
  year: 2017,
  url: "https://pubmed.ncbi.nlm.nih.gov/27815525/",
};
export const ODS_VITK: Source = {
  body: "National Institutes of Health, Office of Dietary Supplements",
  work: "Vitamin K Fact Sheet for Consumers",
  year: 2021,
  url: "https://ods.od.nih.gov/factsheets/vitaminK-Consumer/",
};
export const NIDDK_LACTOSE: Source = {
  body: "National Institute of Diabetes and Digestive and Kidney Diseases",
  work: "Eating, Diet, and Nutrition for Lactose Intolerance",
  year: 2018,
  url: "https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/eating-diet-nutrition",
};
export const HALAL_TPH: Source = {
  body: "Toronto Public Health",
  work: "Understanding Halal Foods",
  year: 2023,
  url: "https://www.toronto.ca/wp-content/uploads/2023/08/857f-HalalFactSheet20235.pdf",
};
export const AASM_RLS: Source = {
  body: "Winkelman JW, Berkowski JA, DelRosso LM, et al. American Academy of Sleep Medicine",
  work: "Treatment of Restless Legs Syndrome and Periodic Limb Movement Disorder: An American Academy of Sleep Medicine Clinical Practice Guideline. Journal of Clinical Sleep Medicine 21(1):137",
  year: 2025,
  url: "https://doi.org/10.5664/jcsm.11390",
};
export const SUCROSE_HEEL: Source = {
  body: "Yamada J, Bueno M, Santos L, Haliburton S, Campbell-Yeo M, Stevens B",
  work: "Sucrose Analgesia for Heel-Lance Procedures in Neonates. Cochrane Database of Systematic Reviews CD014806",
  year: 2023,
  url: "https://doi.org/10.1002/14651858.CD014806",
};
export const SSC_PAIN: Source = {
  body: "Johnston C, Campbell-Yeo M, Disher T, et al.",
  work: "Skin-to-Skin Care for Procedural Pain in Neonates. Cochrane Database of Systematic Reviews CD008435",
  year: 2017,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6464258/",
};
export const HICCUPS: Source = {
  body: "Moretto EN, Wee B, Wiffen PJ, Murchison AG",
  work: "Interventions for Treating Persistent and Intractable Hiccups in Adults. Cochrane Database of Systematic Reviews CD008768",
  year: 2013,
  url: "https://pubmed.ncbi.nlm.nih.gov/23440833/",
};
export const AAD_DRY: Source = {
  body: "American Academy of Dermatology",
  work: "Dermatologists' Top Tips for Relieving Dry Skin",
  year: 2026,
  url: "https://www.aad.org/public/everyday-care/skin-care-basics/dry/dermatologists-tips-relieve-dry-skin",
};
export const PDQ_ORAL: Source = {
  body: "PDQ Supportive and Palliative Care Editorial Board, National Cancer Institute",
  work: "Oral Complications of Cancer Therapies (PDQ), Health Professional Version",
  year: 2024,
  url: "https://www.cancer.gov/about-cancer/treatment/side-effects/mouth-throat/oral-complications-hp-pdq",
};
export const PDQ_GI: Source = {
  body: "PDQ Supportive and Palliative Care Editorial Board, National Cancer Institute",
  work: "Gastrointestinal Complications (PDQ), Health Professional Version",
  year: 2025,
  url: "https://www.cancer.gov/about-cancer/treatment/side-effects/constipation/gi-complications-hp-pdq",
};
export const COOLING: Source = {
  body: "Chen T, Malhotra P, Khameraj A, et al.",
  work: "Cooling Blankets in Hospitalized Patients: Time to Reevaluate. American Journal of the Medical Sciences 362(6):601",
  year: 2021,
  url: "https://scholars.mssm.edu/en/publications/cooling-blankets-in-hospitalized-patients-time-to-reevaluate-2/",
};
export const PARAPHIMOSIS: Source = {
  body: "Choe JM",
  work: "Paraphimosis: Current Treatment Options. American Family Physician 62(12):2623",
  year: 2000,
  url: "https://www.aafp.org/pubs/afp/issues/2000/1215/p2623.html",
};
export const AAP_FORESKIN: Source = {
  body: "American Academy of Pediatrics, HealthyChildren.org",
  work: "Care for an Uncircumcised Penis",
  year: 2024,
  url: "https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Care-for-an-Uncircumcised-Penis.aspx",
};
export const LANTUS: Source = {
  body: "sanofi-aventis U.S. LLC",
  work: "Lantus (insulin glargine) Prescribing Information and SoloStar Instructions for Use",
  year: 2025,
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d5e07a0c-7e14-4756-9152-9fea485d654a",
};
export const FDA_PENS: Source = {
  body: "US Food and Drug Administration",
  work: "FDA Drug Safety Communication: FDA Requires Label Warnings to Prohibit Sharing of Multi-Dose Diabetes Pen Devices Among Patients",
  year: 2015,
  url: "https://web.archive.org/web/20260312012224/https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-requires-label-warnings-prohibit-sharing-multi-dose-diabetes-pen",
};
export const LOVENOX: Source = {
  body: "sanofi-aventis U.S. LLC",
  work: "Lovenox (enoxaparin sodium injection) Prescribing Information, section 2.5",
  year: 2025,
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5017a927-2a24-4f27-89f9-27c805bf7d59",
};
export const ESTRADIOL_CREAM: Source = {
  body: "Prasco Laboratories",
  work: "Estradiol Vaginal Cream USP 0.01%, Patient Information and Instructions for Use",
  year: 2025,
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c895ac14-5dbd-4201-bf3e-ba7c38a4e994",
};
export const SPACER_GGC: Source = {
  body: "NHS Greater Glasgow and Clyde",
  work: "Information for Respiratory Patients: How to Use Your Aerochamber Spacer",
  year: 2014,
  url: "https://nhsggc.org.uk/media/223669/How%20to%20use%20your%20Aerochamber%20Spacer.pdf",
};
export const SPACER_DGT: Source = {
  body: "Dartford and Gravesham NHS Trust",
  work: "Wheeze Guides: Aerochamber",
  year: 2022,
  url: "https://wheeze.dgt.nhs.uk/guides/aerochamber",
};
export const GINA: Source = { body: "Global Initiative for Asthma", work: "Global Strategy for Asthma Management and Prevention, 2025 update", year: 2025 };
export const ALA_NEB: Source = {
  body: "American Lung Association",
  work: "How to Use a Nebulizer",
  year: 2024,
  url: "https://www.lung.org/lung-health-diseases/lung-disease-lookup/copd/patient-resources-and-videos/how-to-use-a-nebulizer",
};
export const EXELON: Source = {
  body: "Novartis Pharmaceuticals Corporation",
  work: "Exelon Patch (rivastigmine transdermal system) Prescribing Information",
  year: 2016,
  url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2016/022083s023lbl.pdf",
};
export const CDIFF: Source = {
  body: "McDonald LC, Gerding DN, Johnson S, et al. Infectious Diseases Society of America and Society for Healthcare Epidemiology of America",
  work: "Clinical Practice Guidelines for Clostridium difficile Infection in Adults and Children: 2017 Update. Clinical Infectious Diseases 66(7):e1",
  year: 2018,
  url: "https://academic.oup.com/cid/article/66/7/e1/4855916",
};
export const NASAL: Source = {
  body: "Benninger MS, Hadley JA, Osguthorpe JD, et al.",
  work: "Techniques of Intranasal Steroid Use. Otolaryngology Head and Neck Surgery 130(1):5",
  year: 2004,
  url: "https://doi.org/10.1016/j.otohns.2003.10.007",
};
export const SUCROSE_DOSE: Source = {
  body: "Stevens B, Yamada J, Campbell-Yeo M, et al.",
  work: "The Minimally Effective Dose of Sucrose for Procedural Pain Relief in Neonates: A Randomized Controlled Trial. BMC Pediatrics 18:85",
  year: 2018,
  url: "https://doi.org/10.1186/s12887-018-1026-x",
};
export const NICE_DELIRIUM: Source = {
  body: "National Institute for Health and Care Excellence",
  work: "Delirium: Prevention, Diagnosis and Management in Hospital and Long-Term Care (CG103)",
  year: 2023,
  url: "https://www.nice.org.uk/guidance/cg103",
};
export const OSSUR_LINER: Source = {
  body: "Ossur",
  work: "Caring for Your Limb, Liner and Prosthesis",
  year: 2026,
  url: "https://www.ossur.com/en-za/prosthetics/information/limb-liner-prosthesis-care",
};
export const AND_VEG: Source = {
  body: "Melina V, Craig W, Levin S. Academy of Nutrition and Dietetics",
  work: "Position of the Academy of Nutrition and Dietetics: Vegetarian Diets. Journal of the Academy of Nutrition and Dietetics 116(12):1970",
  year: 2016,
  url: "https://doi.org/10.1016/j.jand.2016.09.025",
};
export const HLBC_VITK: Source = {
  body: "HealthLinkBC, Dietitian Services",
  work: "Food Sources of Vitamin K",
  year: 2018,
  url: "https://www.healthlinkbc.ca/sites/default/files/healthyeating/pdf/food_sources_of_vitamin_k.pdf",
};
export const DC_CARB: Source = {
  body: "Diabetes Canada",
  work: "Basic Carbohydrate Counting",
  year: 2018,
};
