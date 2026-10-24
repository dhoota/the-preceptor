import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s38. Physiological Adaptation, illness management. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "need" | "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const HOCKENBERRY: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs KD",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2024,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const LEONHARD_GBS: Source = {
  body: "Leonhard SE, Mandarakas MR, Gondim FAA, et al.",
  work: "Diagnosis and Management of Guillain-Barre Syndrome in Ten Steps. Nature Reviews Neurology 15(11):671",
  year: 2019,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6821638/",
};
export const WENDELL_MG: Source = {
  body: "Wendell LC, Levine JM",
  work: "Myasthenic Crisis. The Neurohospitalist 1(1):16",
  year: 2011,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3726100/",
};
export const MILLER_ALS: Source = {
  body: "Miller RG, Jackson CE, Kasarskis EJ, et al. Quality Standards Subcommittee of the American Academy of Neurology",
  work: "Practice Parameter Update: The Care of the Patient With Amyotrophic Lateral Sclerosis: Drug, Nutritional, and Respiratory Therapies. Neurology 73(15):1218",
  year: 2009,
  url: "https://pubmed.ncbi.nlm.nih.gov/19822872/",
};
export const LENDERS_PHEO: Source = {
  body: "Lenders JWM, Duh QY, Eisenhofer G, et al. Endocrine Society",
  work: "Pheochromocytoma and Paraganglioma: An Endocrine Society Clinical Practice Guideline. Journal of Clinical Endocrinology and Metabolism 99(6):1915",
  year: 2014,
  url: "https://academic.oup.com/jcem/article/99/6/1915/2537399",
};
export const VILSTRUP_HE: Source = {
  body: "Vilstrup H, Amodio P, Bajaj J, et al. American Association for the Study of Liver Diseases and European Association for the Study of the Liver",
  work: "Hepatic Encephalopathy in Chronic Liver Disease: 2014 Practice Guideline. Hepatology 60(2):715",
  year: 2014,
  url: "https://www.aasld.org/sites/default/files/2022-07/Hepatic%20Encephalopathy%20in%20Chronic%20Liver%20Disease%202014.pdf",
};
export const KAPLAN_VARICES: Source = {
  body: "Kaplan DE, Bosch J, Ripoll C, et al. American Association for the Study of Liver Diseases",
  work: "AASLD Practice Guidance on Risk Stratification and Management of Portal Hypertension and Varices in Cirrhosis. Hepatology 79(5):1180",
  year: 2024,
  url: "https://boris.unibe.ch/187395/",
};
export const UMPIERREZ_HHS: Source = {
  body: "Umpierrez GE, Davis GM, ElSayed NA, et al. American Diabetes Association, European Association for the Study of Diabetes, Joint British Diabetes Societies, American Association of Clinical Endocrinology, Diabetes Technology Society",
  work: "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care 47(8):1257",
  year: 2024,
  url: "https://consultqd.clevelandclinic.org/hyperglycemic-crises-in-adults-the-2024-consensus-report",
};
export const GOSAIN_HAEC: Source = {
  body: "Gosain A, Frykman PK, Cowles RA, et al. American Pediatric Surgical Association Hirschsprung Disease Interest Group",
  work: "Guidelines for the Diagnosis and Management of Hirschsprung-Associated Enterocolitis. Pediatric Surgery International 33(5):517",
  year: 2017,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5395325/",
};
export const NEMOURS_CF: Source = {
  body: "Nemours Foundation, KidsHealth",
  work: "How to Give Inhaled Medicines to Your Child With Cystic Fibrosis",
  year: 2026,
  url: "https://khpi.kidshealth.org/en/parent/1919.html",
};
export const WFH_HEMOPHILIA: Source = {
  body: "Srivastava A, Santagostino E, Dougall A, et al. World Federation of Hemophilia",
  work: "WFH Guidelines for the Management of Hemophilia, 3rd edition. Haemophilia 26(Suppl 6):1",
  year: 2020,
  url: "https://doi.org/10.1111/hae.14046",
};
export const NEUNERT_ITP: Source = {
  body: "Neunert C, Terrell DR, Arnold DM, et al. American Society of Hematology",
  work: "American Society of Hematology 2019 Guidelines for Immune Thrombocytopenia. Blood Advances 3(23):3829",
  year: 2019,
  url: "https://doi.org/10.1182/bloodadvances.2019000966",
};
export const LEVI_DIC: Source = {
  body: "Levi M, Scully M",
  work: "How I Treat Disseminated Intravascular Coagulation. Blood 131(8):845",
  year: 2018,
  url: "https://doi.org/10.1182/blood-2017-10-804096",
};
export const EPSTEIN_HEAT: Source = {
  body: "Epstein Y, Yanovich R",
  work: "Heatstroke. New England Journal of Medicine 380(25):2449",
  year: 2019,
  url: "https://doi.org/10.1056/NEJMra1810762",
};
export const ISSELBACHER_AORTA: Source = {
  body: "Isselbacher EM, Preventza O, Hamilton Black J, et al. American College of Cardiology and American Heart Association",
  work: "2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation 146(24):e334",
  year: 2022,
  url: "https://doi.org/10.1161/CIR.0000000000001106",
};
export const ADLER_PERICARDIUM: Source = {
  body: "Adler Y, Charron P, Imazio M, et al. European Society of Cardiology",
  work: "2015 ESC Guidelines for the Diagnosis and Management of Pericardial Diseases. European Heart Journal 36(42):2921",
  year: 2015,
  url: "https://academic.oup.com/eurheartj/article/36/42/2921/2293375",
};
export const BERLIN_ARDS: Source = {
  body: "ARDS Definition Task Force, Ranieri VM, Rubenfeld GD, et al.",
  work: "Acute Respiratory Distress Syndrome: The Berlin Definition. JAMA 307(23):2526",
  year: 2012,
  url: "https://doi.org/10.1001/jama.2012.5669",
};
export const ATLS: Source = {
  body: "American College of Surgeons Committee on Trauma",
  work: "Advanced Trauma Life Support (ATLS) Student Course Manual, 10th edition",
  year: 2018,
};
export const SIMON_FLAIL: Source = {
  body: "Simon B, Ebert J, Bokhari F, et al. Eastern Association for the Surgery of Trauma",
  work: "Management of Pulmonary Contusion and Flail Chest: An Eastern Association for the Surgery of Trauma Practice Management Guideline. Journal of Trauma and Acute Care Surgery 73(5 Suppl 4):S351",
  year: 2012,
  url: "https://doi.org/10.1097/TA.0b013e31827019fd",
};
export const DITUNNO_SHOCK: Source = {
  body: "Ditunno JF, Little JW, Tessler A, Burns AS",
  work: "Spinal Shock Revisited: A Four-Phase Model. Spinal Cord 42(7):383",
  year: 2004,
  url: "https://doi.org/10.1038/sj.sc.3101603",
};
export const CARNEY_TBI: Source = {
  body: "Carney N, Totten AM, O'Reilly C, et al. Brain Trauma Foundation",
  work: "Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery 80(1):6",
  year: 2017,
  url: "https://doi.org/10.1227/NEU.0000000000001432",
};
export const DOW_HYPOTHERMIA: Source = {
  body: "Dow J, Giesbrecht GG, Danzl DF, et al. Wilderness Medical Society",
  work: "Wilderness Medical Society Clinical Practice Guidelines for the Out-of-Hospital Evaluation and Treatment of Accidental Hypothermia: 2019 Update. Wilderness and Environmental Medicine 30(4 Suppl):S47",
  year: 2019,
  url: "https://doi.org/10.1016/j.wem.2019.10.002",
};
export const SZPILMAN_DROWNING: Source = {
  body: "Szpilman D, Bierens JJLM, Handley AJ, Orlowski JP",
  work: "Drowning. New England Journal of Medicine 366(22):2102",
  year: 2012,
  url: "https://doi.org/10.1056/NEJMra1013317",
};
export const LAVONAS_SNAKE: Source = {
  body: "Lavonas EJ, Ruha AM, Banner W, et al.",
  work: "Unified Treatment Algorithm for the Management of Crotaline Snakebite in the United States. BMC Emergency Medicine 11:2",
  year: 2011,
  url: "https://doi.org/10.1186/1471-227X-11-2",
};
export const BOSCH_RHABDO: Source = {
  body: "Bosch X, Poch E, Grau JM",
  work: "Rhabdomyolysis and Acute Kidney Injury. New England Journal of Medicine 361(1):62",
  year: 2009,
  url: "https://doi.org/10.1056/NEJMra0801327",
};
export const KWIATT_FES: Source = {
  body: "Kwiatt ME, Seamon MJ",
  work: "Fat Embolism Syndrome. International Journal of Critical Illness and Injury Science 3(1):64",
  year: 2013,
  url: "https://doi.org/10.4103/2229-5151.109426",
};
export const ACOG_PREECLAMPSIA: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Gestational Hypertension and Preeclampsia. ACOG Practice Bulletin No. 222. Obstetrics and Gynecology 135(6):e237",
  year: 2020,
  url: "https://doi.org/10.1097/AOG.0000000000003891",
};
export const ACOG_DYSTOCIA: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Shoulder Dystocia. ACOG Practice Bulletin No. 178. Obstetrics and Gynecology 129(5):e123",
  year: 2017,
  url: "https://doi.org/10.1097/AOG.0000000000002043",
};
export const PACHECO_AFE: Source = {
  body: "Pacheco LD, Saade G, Hankins GDV, Clark SL. Society for Maternal-Fetal Medicine",
  work: "Amniotic Fluid Embolism: Diagnosis and Management. American Journal of Obstetrics and Gynecology 215(2):B16",
  year: 2016,
  url: "https://doi.org/10.1016/j.ajog.2016.03.012",
};
export const SAYED_CORD: Source = {
  body: "Sayed Ahmed WA, Hamdy MA",
  work: "Optimal Management of Umbilical Cord Prolapse. International Journal of Women's Health 10:459",
  year: 2018,
  url: "https://www.dovepress.com/optimal-management-of-umbilical-cord-prolapse-peer-reviewed-article-IJWH",
};
export const SWEET_RDS: Source = {
  body: "Sweet DG, Carnielli VP, Greisen G, et al.",
  work: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome: 2022 Update. Neonatology 120(1):3",
  year: 2023,
  url: "https://doi.org/10.1159/000528914",
};
