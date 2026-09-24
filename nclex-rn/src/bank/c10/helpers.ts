import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c10 items. */
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
  bili: {
    body: "Kemper AR, Newman TB, Slaughter JL, et al. American Academy of Pediatrics",
    work: "Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation. Pediatrics 150(3):e2022058859",
    year: 2022,
    url: "https://www.aafp.org/afp/2023/0600/practice-guidelines-hyperbilirubinemia-newborns",
  },
  lowdermilk: {
    body: "Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE",
    work: "Maternity and Women's Health Care, 13th edition",
    year: 2023,
    url: "https://www.us.elsevierhealth.com/maternity-and-womens-health-care-9780323810180.html",
  },
  wong: {
    body: "Hockenberry MJ, Duffy EA, Gibbs KD",
    work: "Wong's Nursing Care of Infants and Children, 12th edition",
    year: 2023,
    url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
  },
  acog4: {
    body: "American College of Obstetricians and Gynecologists",
    work: "Screening and Diagnosis of Mental Health Conditions During Pregnancy and Postpartum. ACOG Clinical Practice Guideline No. 4. Obstetrics and Gynecology 141(6):1232",
    year: 2023,
    url: "https://pubmed.ncbi.nlm.nih.gov/37486660/",
  },
  acog5: {
    body: "American College of Obstetricians and Gynecologists",
    work: "Treatment and Management of Mental Health Conditions During Pregnancy and Postpartum. ACOG Clinical Practice Guideline No. 5. Obstetrics and Gynecology 141(6):1262",
    year: 2023,
    url: "https://projectteachny.org/app/uploads/2024/04/ACOG-clin-guidelines-treatment_and_management_of_mental_health.2023.pdf",
  },
  sleep: {
    body: "Moon RY, Carlin RF, Hand I. American Academy of Pediatrics Task Force on Sudden Infant Death Syndrome",
    work: "Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment. Pediatrics 150(1):e2022057990",
    year: 2022,
    url: "https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022",
  },
  kd: {
    body: "McCrindle BW, Rowley AH, Newburger JW, et al. American Heart Association",
    work: "Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease: A Scientific Statement for Health Professionals. Circulation 135(17):e927",
    year: 2017,
    url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000484",
  },
  kd2024: {
    body: "Jone PN, Tremoulet A, Choueiter N, et al. American Heart Association",
    work: "Update on Diagnosis and Management of Kawasaki Disease: A Scientific Statement. Circulation 150(23):e481",
    year: 2024,
    url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001295",
  },
  croup: {
    body: "Ortiz-Alvarez O. Canadian Paediatric Society, Acute Care Committee",
    work: "Acute management of croup in the emergency department. Paediatrics and Child Health 22(3):166",
    year: 2017,
    url: "https://cps.ca/en/documents/position/acute-management-of-croup",
  },
  isolation: {
    body: "Siegel JD, Rhinehart E, Jackson M, Chiarello L. Healthcare Infection Control Practices Advisory Committee",
    work: "2007 Guideline for Isolation Precautions, Appendix A",
    year: 2007,
    url: "https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html",
  },
  ispadDka: {
    body: "Glaser N, Fritsch M, Priyambada L, et al. International Society for Pediatric and Adolescent Diabetes",
    work: "ISPAD Clinical Practice Consensus Guidelines 2022: Diabetic ketoacidosis and hyperglycemic hyperosmolar state. Pediatric Diabetes 23(7):835",
    year: 2022,
    url: "https://onlinelibrary.wiley.com/doi/10.1111/pedi.13406",
  },
  adaKids: {
    body: "American Diabetes Association Professional Practice Committee",
    work: "14. Children and Adolescents: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S297",
    year: 2026,
    url: "https://diabetesjournals.org/care/article/49/Supplement_1/S297/163923/14-Children-and-Adolescents-Standards-of-Care-in",
  },
  school: {
    body: "Cogen F, Rodriguez H, March CA, et al. American Diabetes Association",
    work: "Diabetes Care in the School Setting: A Statement of the American Diabetes Association. Diabetes Care 47(12):2050",
    year: 2024,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11835602/",
  },
  pens: {
    body: "US Food and Drug Administration",
    work: "FDA Drug Safety Communication: FDA requires label warnings to prohibit sharing of multi-dose diabetes pen devices among patients",
    year: 2015,
    url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-requires-label-warnings-prohibit-sharing-multi-dose-diabetes-pen",
  },
  sharps: {
    body: "US Food and Drug Administration",
    work: "Safely Using Sharps (Needles and Syringes) at Home, at Work and on Travel",
    year: 2021,
    url: "https://www.fda.gov/medical-devices/consumer-products/safely-using-sharps-needles-and-syringes-home-work-and-travel",
  },
};
