import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c09 items. */
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
  nhsn: {
    body: "Centers for Disease Control and Prevention, National Healthcare Safety Network",
    work: "Biovigilance Component Hemovigilance Module Surveillance Protocol v3.0",
    year: 2026,
    url: "https://www.cdc.gov/nhsn/pdfs/biovigilance/bv-hv-protocol-current.pdf",
  },
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  tjc: {
    body: "The Joint Commission",
    work: "National Performance Goals Effective January 2026 for the Hospital Program, NPG.01.01.01",
    year: 2026,
    url: "https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82",
  },
  ash: {
    body: "Cuker A, Arepally GM, Chong BH, et al. American Society of Hematology",
    work: "American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Advances 2(22):3360",
    year: 2018,
    url: "https://ashpublications.org/bloodadvances/article/2/22/3360/16129/American-Society-of-Hematology-2018-guidelines-for",
  },
  argatroban: {
    body: "Hikma Pharmaceuticals USA. US Food and Drug Administration",
    work: "Argatroban Injection prescribing information",
    year: 2020,
    url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/203049s007lbl.pdf",
  },
  ada: {
    body: "American Diabetes Association Professional Practice Committee",
    work: "15. Management of Diabetes in Pregnancy: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S321",
    year: 2026,
    url: "https://diabetesjournals.org/care/article/49/Supplement_1/S321/163918/15-Management-of-Diabetes-in-Pregnancy-Standards",
  },
  acog190: {
    body: "American College of Obstetricians and Gynecologists",
    work: "ACOG Practice Bulletin No. 190: Gestational Diabetes Mellitus. Obstetrics and Gynecology 131(2):e49",
    year: 2018,
    url: "https://journals.lww.com/greenjournal/fulltext/2018/02000/acog_practice_bulletin_no__190__gestational.37.aspx",
  },
  lowdermilk: {
    body: "Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE",
    work: "Maternity and Women's Health Care, 13th edition",
    year: 2023,
  },
  oyelese: {
    body: "Oyelese Y, Ananth CV",
    work: "Placental abruption. Obstetrics and Gynecology 108(4):1005",
    year: 2006,
    url: "https://pubmed.ncbi.nlm.nih.gov/17012465/",
  },
  who: {
    body: "World Health Organization",
    work: "Global Guidelines for the Prevention of Surgical Site Infection",
    year: 2016,
    url: "https://www.ncbi.nlm.nih.gov/books/NBK536407/",
  },
  delegation: {
    body: "National Council of State Boards of Nursing and American Nurses Association",
    work: "National Guidelines for Nursing Delegation",
    year: 2019,
    url: "https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf",
  },
  acog171: {
    body: "American College of Obstetricians and Gynecologists",
    work: "Practice Bulletin No. 171: Management of Preterm Labor. Obstetrics and Gynecology 128(4):e155",
    year: 2016,
    url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2016/10/management-of-preterm-labor",
  },
  acog455: {
    body: "American College of Obstetricians and Gynecologists and Society for Maternal-Fetal Medicine",
    work: "Committee Opinion No. 455: Magnesium Sulfate Before Anticipated Preterm Birth for Neuroprotection. Obstetrics and Gynecology 115(3):669",
    year: 2010,
    url: "https://pubmed.ncbi.nlm.nih.gov/20177305/",
  },
  acog222: {
    body: "American College of Obstetricians and Gynecologists",
    work: "Gestational Hypertension and Preeclampsia: ACOG Practice Bulletin No. 222. Obstetrics and Gynecology 135(6):e237",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/32443079/",
  },
  aorn: {
    body: "Association of periOperative Registered Nurses",
    work: "Guideline for the Safe Use of Surgical Energy Devices. Guidelines for Perioperative Practice",
    year: 2026,
    url: "https://www.aorn.org/article/whats-new-in-aorns-guideline-for-the-safe-use-of-surgical-energy-devices-2026-update",
  },
  ismp: {
    body: "Institute for Safe Medication Practices",
    work: "ISMP List of High-Alert Medications in Acute Care Settings",
    year: 2024,
    url: "https://www.ismp.org/system/files/resources/2024-01/ISMP_HighAlert_AcuteCare_List_010924_MS5760.pdf",
  },
};
